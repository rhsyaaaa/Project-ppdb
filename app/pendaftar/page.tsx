"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";

type Siswa = {
  nama: string;
  nis: string;
  nik: string;
  foto: string;
};

export default function PendaftarPage() {
  const [data, setData] = useState<Siswa[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPendaftar = async () => {
      try {
        const res = await fetch("/pendaftar/list-siswa");
        if (!res.ok) throw new Error("Gagal mengambil data");
        const hasil = await res.json();
        setData(hasil);
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPendaftar();
  }, []);

  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="col-span-10 p-6 bg-[#f9f9f5]">
        <div className="overflow-auto bg-white rounded-2xl border border-gray-300 shadow">
          <table className="min-w-full text-left">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Foto</th>
                <th className="px-4 py-2">Nama Siswa</th>
                <th className="px-4 py-2">NIS Siswa</th>
                <th className="px-4 py-2">NIK Siswa</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-8 text-gray-500 italic"
                  >
                    Memuat data...
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-8 text-gray-400 italic"
                  >
                    Tidak ada data pendaftar.
                  </td>
                </tr>
              ) : (
                data.map((siswa, index) => (
                  <tr
                    key={siswa.nis}
                    className="hover:bg-gray-100 transition-all"
                  >
                    <td className="px-4 py-2 border-t">{index + 1}</td>
                    <td className="px-4 py-2 border-t">
                      <img
                        src={siswa.foto}
                        alt={`Foto ${siswa.nama}`}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-4 py-2 border-t">{siswa.nama}</td>
                    <td className="px-4 py-2 border-t">{siswa.nis}</td>
                    <td className="px-4 py-2 border-t">{siswa.nik}</td>
                    <td className="px-4 py-2 border-t">
                      <div className="flex gap-2 flex-wrap">
                        <Button color="blue" href={`/pendaftar/${siswa.nis}`}>
                          Detail
                        </Button>
                        <Button
                          color="yellow"
                          href={`/pendaftar/${siswa.nis}/edit`}
                        >
                          Edit
                        </Button>
                        <Button
                          color="red"
                          onClick={() => {
                            if (
                              confirm(`Yakin ingin menghapus ${siswa.nama}?`)
                            ) {
                              alert(`Data ${siswa.nama} dihapus`);
                              // TODO: Panggil API delete di sini
                            }
                          }}
                          title={""}
                          colorSchema={"blue"}
                        >
                          Hapus
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
