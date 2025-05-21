    "use client";

    import React, { useState } from "react";

    interface EditPageProps {
    params: { nis: string };
    }

    const dummyData = [
    {
        nis: "123456",
        nama: "Ahmad Fathir",
        nisn: "9876543210",
        nik: "3275010101010001",
        ttl: "Bandung, 12 Januari 2010",
        jenisKelamin: "Laki-laki",
        asalSekolah: "SD Negeri 1 Bandung",
        noTelp: "081234567890",
        alamat: "Jl. Merdeka No. 10, Bandung",
    },
    {
        nis: "123457",
        nama: "Azka Shidqi",
        nisn: "9876543211",
        nik: "3275010101010002",
        ttl: "Jakarta, 5 Februari 2011",
        jenisKelamin: "Perempuan",
        asalSekolah: "SD Al-Azhar 7",
        noTelp: "081234567891",
        alamat: "Jl. Kenanga No. 12, Jakarta",
    },
    ];

    export default function EditPendaftarPage({ params }: EditPageProps) {
    // Cari data sesuai nis
    const pendaftar = dummyData.find((d) => d.nis === params.nis);

    if (!pendaftar) {
        return <div className="p-10 text-center text-red-600">Data tidak ditemukan.</div>;
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
        alert("Data berhasil disimpan:\n" + JSON.stringify(form, null, 2));
        // TODO: Kirim data ke backend atau simpan state global
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-10">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Detail Pendaftar</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama */}
            <div>
            <label htmlFor="nama" className="block mb-1 font-semibold">
                Nama
            </label>
            <input
                type="text"
                id="nama"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            </div>

            {/* NIS (disabled) */}
            <div>
            <label htmlFor="nis" className="block mb-1 font-semibold">
                NIS
            </label>
            <input
                type="text"
                id="nis"
                name="nis"
                value={form.nis}
                disabled
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-500"
            />
            </div>

            {/* NISN */}
            <div>
            <label htmlFor="nisn" className="block mb-1 font-semibold">
                NISN
            </label>
            <input
                type="text"
                id="nisn"
                name="nisn"
                value={form.nisn}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            </div>

            {/* NIK */}
            <div>
            <label htmlFor="nik" className="block mb-1 font-semibold">
                NIK
            </label>
            <input
                type="text"
                id="nik"
                name="nik"
                value={form.nik}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            </div>

            {/* Tempat & Tanggal Lahir */}
            <div>
            <label htmlFor="ttl" className="block mb-1 font-semibold">
                Tempat & Tanggal Lahir
            </label>
            <input
                type="text"
                id="ttl"
                name="ttl"
                value={form.ttl}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            </div>

            {/* Jenis Kelamin */}
            <div>
            <label htmlFor="jenisKelamin" className="block mb-1 font-semibold">
                Jenis Kelamin
            </label>
            <select
                id="jenisKelamin"
                name="jenisKelamin"
                value={form.jenisKelamin}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
            </select>
            </div>

            {/* Asal Sekolah */}
            <div>
            <label htmlFor="asalSekolah" className="block mb-1 font-semibold">
                Asal Sekolah
            </label>
            <input
                type="text"
                id="asalSekolah"
                name="asalSekolah"
                value={form.asalSekolah}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            </div>

            {/* No HP */}
            <div>
            <label htmlFor="noTelp" className="block mb-1 font-semibold">
                No HP
            </label>
            <input
                type="text"
                id="noTelp"
                name="noTelp"
                value={form.noTelp}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            </div>

            {/* Alamat */}
            <div>
            <label htmlFor="alamat" className="block mb-1 font-semibold">
                Alamat
            </label>
            <textarea
                id="alamat"
                name="alamat"
                value={form.alamat}
                onChange={handleChange}
                rows={4}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            </div>

            {/* Submit */}
            <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded transition"
            >
            Simpan Perubahan
            </button>
        </form>
        </div>
    );
    }
    // import React from "react";