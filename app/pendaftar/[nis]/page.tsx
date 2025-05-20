"use client";

import React, { useState, use } from "react";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar";

const data = [
  {
    nama: "Ahmad Fathir",
    nis: "123456",
    nisn: "9876543210",
    nik: "3275010101010001",
    ttl: "Bandung, 12 Januari 2010",
    jenisKelamin: "Laki-laki",
    asalSekolah: "SD Negeri 1 Bandung",
    noTelp: "081234567890",
    alamat: "Jl. Merdeka No. 10, Bandung",
  },
  {
    nama: "Azka Shidqi",
    nis: "123457",
    nisn: "9876543211",
    nik: "3275010101010002",
    ttl: "Jakarta, 5 Februari 2011",
    jenisKelamin: "Perempuan",
    asalSekolah: "SD Al-Azhar 7",
    noTelp: "081234567891",
    alamat: "Jl. Kenanga No. 12, Jakarta",
  },
];

interface PageProps {
  params: Promise<{ nis: string }>;
}

export default function DetailPendaftarPage({ params }: PageProps) {
  // Unwrap Promise params with React.use()
  const actualParams = use(params);

  const pendaftar = data.find((d) => d.nis === actualParams.nis);

  if (!pendaftar) {
    notFound();
  }

  const [form, setForm] = useState({
    nama: pendaftar.nama,
    nis: pendaftar.nis,
    nisn: pendaftar.nisn,
    nik: pendaftar.nik,
    ttl: pendaftar.ttl,
    jenisKelamin: pendaftar.jenisKelamin,
    asalSekolah: pendaftar.asalSekolah,
    noTelp: pendaftar.noTelp,
    alamat: pendaftar.alamat,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Data disimpan:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="grid grid-cols-12 min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="col-span-10 p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-black">
            Edit Detail Pendaftar
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nama */}
            <div>
              <label htmlFor="nama" className="block mb-2 font-semibold text-black">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
              />
            </div>

            {/* NIS */}
            <div>
              <label htmlFor="nis" className="block mb-2 font-semibold text-black">
                NIS
              </label>
              <input
                type="text"
                id="nis"
                name="nis"
                value={form.nis}
                disabled
                className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 cursor-not-allowed text-gray-500"
              />
            </div>

            {/* NISN */}
            <div>
              <label htmlFor="nisn" className="block mb-2 font-semibold text-black">
                NISN
              </label>
              <input
                type="text"
                id="nisn"
                name="nisn"
                value={form.nisn}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
              />
            </div>

            {/* NIK */}
            <div>
              <label htmlFor="nik" className="block mb-2 font-semibold text-black">
                NIK
              </label>
              <input
                type="text"
                id="nik"
                name="nik"
                value={form.nik}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
              />
            </div>

            {/* Tempat & Tanggal Lahir */}
            <div>
              <label htmlFor="ttl" className="block mb-2 font-semibold text-black">
                Tempat & Tanggal Lahir
              </label>
              <input
                type="text"
                id="ttl"
                name="ttl"
                value={form.ttl}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
              />
            </div>

            {/* Jenis Kelamin */}
            <div>
              <label htmlFor="jenisKelamin" className="block mb-2 font-semibold text-black">
                Jenis Kelamin
              </label>
              <select
                id="jenisKelamin"
                name="jenisKelamin"
                value={form.jenisKelamin}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
              >
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            {/* Asal Sekolah */}
            <div>
              <label htmlFor="asalSekolah" className="block mb-2 font-semibold text-black">
                Asal Sekolah
              </label>
              <input
                type="text"
                id="asalSekolah"
                name="asalSekolah"
                value={form.asalSekolah}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
              />
            </div>

            {/* No HP */}
            <div>
              <label htmlFor="noTelp" className="block mb-2 font-semibold text-black">
                No HP
              </label>
              <input
                type="text"
                id="noTelp"
                name="noTelp"
                value={form.noTelp}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
              />
            </div>

            {/* Alamat */}
            <div>
              <label htmlFor="alamat" className="block mb-2 font-semibold text-black">
                Alamat
              </label>
              <textarea
                id="alamat"
                name="alamat"
                value={form.alamat}
                onChange={handleChange}
                rows={4}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold rounded-md py-3 hover:bg-yellow-500 transition-shadow shadow-md"
            >
              Simpan Perubahan
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

