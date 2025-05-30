/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";
import { axiosClient } from "@/lib/axiosClient";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { getSession } from "next-auth/react";

type Siswa = {
  id: string;
  nama: string;
  nis: string;
  nisn: string;
  nik: string;
};

const session = await getSession();
const PAGE_SIZE = 10;

export default function PendaftarPage() {
  const [data, setData] = useState<Siswa[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // Tambahkan state search
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fetchPendaftar = async () => {
      try {
        const res = await axiosClient.get("/pendaftar/list-siswa");
        setData(res.data);
      } catch (error) {
        console.error("Terjadi kesalahan saat fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPendaftar();
  }, []);

  // Filter data sesuai search
  const filteredData = data.filter((siswa) => {
    const q = search.toLowerCase();
    return (
      siswa.nama.toLowerCase().includes(q) ||
      siswa.nis.toLowerCase().includes(q) ||
      siswa.nisn.toLowerCase().includes(q)
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // Reset ke halaman 1 jika search berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <div className="grid grid-cols-12 min-h-screen bg-gradient-to-br from-green-50 to-yellow-100">
      <Sidebar />

      <main className="col-span-10 p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-green-900 drop-shadow mb-1">
              Daftar Siswa Pendaftar
            </h1>
            <p className="text-gray-500 text-base font-medium">
              Data seluruh siswa yang telah mendaftar pada sistem PPDB.
            </p>
          </div>
          <input
            type="text"
            placeholder="Cari nama, NIS, atau NISN..."
            className="px-5 py-2 border border-green-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-black bg-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex">
          <div className="flex-1 overflow-auto bg-white rounded-3xl border-2 border-green-200 shadow-2xl">
            <table className="min-w-full text-left">
              <thead className="bg-gradient-to-r from-green-800 to-green-400 text-white">
                <tr>
                  <th className="px-6 py-4 rounded-tl-3xl text-lg font-bold">
                    No
                  </th>
                  <th className="px-6 py-4 text-lg font-bold">Nama Siswa</th>
                  <th className="px-6 py-4 text-lg font-bold">NIS</th>
                  <th className="px-6 py-4 text-lg font-bold">NISN</th>
                  <th className="px-6 py-4 text-lg font-bold">NIK</th>
                  <th className="px-8 py-4 rounded-tr-3xl text-lg font-bold">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-10 text-gray-500 italic text-lg"
                    >
                      Memuat data...
                    </td>
                  </tr>
                ) : paginatedData.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-10 text-gray-400 italic text-lg"
                    >
                      Tidak ada data pendaftar.
                    </td>
                  </tr>
                ) : (
                  paginatedData.map((siswa, index) => (
                    <tr
                      key={siswa.id}
                      className={
                        index % 2 === 0
                          ? "bg-green-50 hover:bg-yellow-50 transition"
                          : "bg-white hover:bg-yellow-50 transition"
                      }
                    >
                      <td className="px-6 py-4 font-bold text-green-800">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 font-semibold text-black flex items-center gap-3">
                        {/* Avatar inisial */}
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-yellow-300 text-white font-bold text-lg shadow">
                          {siswa.nama
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()
                            .slice(0, 2)}
                        </span>
                        <span>{siswa.nama}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-lg text-sm shadow">
                          {siswa.nis}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-green-100 text-green-700 font-bold px-3 py-1 rounded-lg text-sm shadow">
                          {siswa.nisn}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-lg text-sm shadow">
                          {siswa.nik}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2 flex-wrap">
                          <button
                            onClick={() =>
                              router.push(`/pendaftar/detail/${siswa.id}`)
                            }
                            type="button"
                            className="flex items-center gap-1 px-4 py-2 font-semibold rounded-lg shadow hover:scale-105 transition bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                            title="Detail"
                          >
                            <i className="fa fa-eye" /> Detail
                          </button>
                          <button
                            onClick={() =>
                              router.push(`/pendaftar/edit/${siswa.id}`)
                            }
                            type="button"
                            className="flex items-center gap-1 px-4 py-2 font-semibold rounded-lg shadow hover:scale-105 transition bg-green-500 hover:bg-green-600 text-white focus:outline-none focus:ring-2 focus:ring-green-300"
                            title="Edit"
                          >
                            <i className="fa fa-edit" /> Edit
                          </button>
                          <button
                            onClick={() => {
                              Swal.fire({
                                title: "Apakah Anda yakin?",
                                text: `Data ${siswa.nama} akan dihapus!`,
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Ya, hapus!",
                              }).then(async (result) => {
                                if (result.isConfirmed) {
                                  try {
                                    await axiosClient.delete(
                                      `/pendaftar/delete-siswa/${siswa.id}`,
                                      {
                                        headers: {
                                          Authorization: `Bearer ${session?.user?.accessToken}`,
                                        },
                                      }
                                    );
                                    Swal.fire(
                                      "Terhapus!",
                                      `Data ${siswa.nama} telah dihapus.`,
                                      "success"
                                    );
                                    setData((prevData) =>
                                      prevData.filter(
                                        (item) => item.id !== siswa.id
                                      )
                                    );
                                  } catch (error) {
                                    Swal.fire(
                                      "Error!",
                                      "Terjadi kesalahan saat menghapus data.",
                                      "error"
                                    );
                                  }
                                }
                              });
                            }}
                            type="button"
                            className="flex items-center gap-1 px-4 py-2 font-semibold rounded-lg shadow hover:scale-105 transition bg-red-500 hover:bg-red-600 text-white focus:outline-none focus:ring-2 focus:ring-red-300"
                            title="Hapus"
                          >
                            <i className="fa fa-trash" /> Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination di samping kanan */}
          <div className="flex flex-col items-center justify-center ml-4">
            <div className="bg-white rounded-2xl shadow-lg border border-green-200 px-4 py-6 flex flex-col gap-2">
              <span className="text-gray-700 font-semibold mb-2 text-center">
                Halaman
              </span>
              <div className="flex flex-col gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-full font-bold transition
                      ${
                        currentPage === i + 1
                          ? "bg-yellow-400 text-green-900 shadow-lg scale-110"
                          : "bg-green-100 text-green-700 hover:bg-yellow-200"
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
