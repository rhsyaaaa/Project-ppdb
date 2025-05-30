/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { axiosClient } from "@/lib/axiosClient";

type SiswaItem = {
  nama: string;
  sudahVerifikasi: boolean;
  sudahWawancara: boolean;
  uploadBerkas: boolean;
  nilai: number | null;
  statusKelulusan: "Lulus" | "Tidak Lulus" | "Ditunda" | null;
};

const PAGE_SIZE = 4;

const VerifikasiWawancaraPage = () => {
  const [siswaData, setSiswaData] = useState<SiswaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const res = await axiosClient.get("/dashboard/daftar-siswa");
        setSiswaData(Array.isArray(res.data) ? res.data : res.data.data || []);
      } catch (err) {
        // Optional: tampilkan pesan error
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(siswaData.length / PAGE_SIZE);
  const paginatedData = siswaData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className="grid grid-cols-12 min-h-screen bg-gray-100">
      <Sidebar />
      <main className="col-span-10 p-8 bg-white text-gray-800 rounded-lg shadow-md mx-6 my-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Info Siswa
        </h1>

        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2 text-gray-900">
            Data Siswa & Status
          </h2>
          {loading ? (
            <div className="text-center py-10 text-gray-500">Memuat data...</div>
          ) : (
            <div className="flex">
              <div className="flex-1 grid md:grid-cols-2 gap-6">
                {paginatedData.map(
                  (
                    {
                      nama,
                      sudahVerifikasi,
                      sudahWawancara,
                      uploadBerkas,
                      nilai,
                      statusKelulusan,
                    },
                    idx
                  ) => {
                    const isAllDone = sudahVerifikasi && sudahWawancara && uploadBerkas;
                    // Jika nilai < 75 maka status otomatis Tidak Lulus
                    let finalStatus = statusKelulusan || "-";
                    if (nilai !== null && nilai < 75) {
                      finalStatus = "Tidak Lulus";
                    } else if (statusKelulusan === "Lulus" && !isAllDone) {
                      finalStatus = "Ditunda";
                    }

                    const nomor = (currentPage - 1) * PAGE_SIZE + idx + 1;

                    return (
                      <div
                        key={nomor}
                        className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="text-lg font-bold mb-2 text-gray-500">#{nomor}</div>
                        <h3 className="text-xl font-semibold mb-4">{nama}</h3>
                        <div className="flex flex-col gap-2 text-sm mb-4">
                          <div>
                            Upload Berkas:{" "}
                            <span
                              className={
                                uploadBerkas
                                  ? "text-green-600 font-bold"
                                  : "text-red-500 font-bold"
                              }
                            >
                              {uploadBerkas ? "Sudah" : "Belum"}
                            </span>
                          </div>
                          <div>
                            Sudah Verifikasi:{" "}
                            <span
                              className={
                                sudahVerifikasi
                                  ? "text-green-600 font-bold"
                                  : "text-red-500 font-bold"
                              }
                            >
                              {sudahVerifikasi ? "Sudah" : "Belum"}
                            </span>
                          </div>
                          <div>
                            Sudah Wawancara:{" "}
                            <span
                              className={
                                sudahWawancara
                                  ? "text-green-600 font-bold"
                                  : "text-red-500 font-bold"
                              }
                            >
                              {sudahWawancara ? "Sudah" : "Belum"}
                            </span>
                          </div>
                          <div>
                            Nilai Tes:{" "}
                            <span className="font-bold">
                              {nilai !== null && nilai !== undefined ? nilai : "-"}
                            </span>
                          </div>
                          <div>
                            Status Kelulusan:{" "}
                            <span
                              className={`font-bold px-2 py-1 rounded ${
                                finalStatus === "Lulus"
                                  ? "bg-green-500 text-white"
                                  : finalStatus === "Ditunda"
                                  ? "bg-yellow-400 text-gray-900"
                                  : finalStatus === "Tidak Lulus"
                                  ? "bg-red-500 text-white"
                                  : "bg-gray-300 text-gray-700"
                              }`}
                            >
                              {finalStatus}
                            </span>
                          </div>
                        </div>
                        {finalStatus === "Lulus" && isAllDone ? (
                          <span
                            className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-500 text-white"
                            title="Semua Selesai"
                          >
                            <i className="fa fa-check" />
                          </span>
                        ) : (
                          <span
                            className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-400 text-white"
                            title="Belum Lengkap"
                          >
                            <i className="fa fa-times" />
                          </span>
                        )}
                      </div>
                    );
                  }
                )}
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
          )}
        </section>

        {/* Keterangan Status */}
        <div className="flex items-center gap-4 mt-10 mb-6">
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded bg-green-500"></span>
            <span className="text-sm text-gray-700">Lulus</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded bg-yellow-400"></span>
            <span className="text-sm text-gray-700">Ditunda</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded bg-red-500"></span>
            <span className="text-sm text-gray-700">Tidak Lulus</span>
          </span>
        </div>
      </main>
    </div>
  );
};

export default VerifikasiWawancaraPage;
