        "use client";

        import React from "react";
        import Sidebar from "@/components/Sidebar";
        import Button from "@/components/Button";
    ``
        const data = [
        {
            nama: "Ahmad Fathir",
            nis: "123456",
            nik: "3275010101010001",
        },
        {
            nama: "Azka Shidqi",
            nis: "123457",
            nik: "3275010101010002",
        },
        {
            nama: "idris jr",
            nis: "23245",
            nik: "2902834484",
        },
        {
            nama: "Nawfal fawwaaz",
            nis: "353875343",
            nik: "43830583827",
        },
        {
            nama: "Rafa kurniawan",
            nis: "343894734",
            nik: "44279428472942",
        },
        {
            nama: "Ahmad abroqy",
            nis: "437643",
            nik: "4726823198713187",
        },
        ];

        export default function PendaftarPage() {
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
                        <th className="px-4 py-2">Nama Siswa</th>
                        <th className="px-4 py-2">NIS Siswa</th>
                        <th className="px-4 py-2">NIK Siswa</th>
                        <th className="px-4 py-2">Aksi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.length === 0 ? (
                        <tr>
                        <td
                            colSpan={5}
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
                            <td className="px-4 py-2 border-t">{siswa.nama}</td>
                            <td className="px-4 py-2 border-t">{siswa.nis}</td>
                            <td className="px-4 py-2 border-t">{siswa.nik}</td>
                            <td className="px-4 py-2 border-t">
                            <div className="flex gap-2 flex-wrap">
                                <Button color="blue" href={`/pendaftar/${siswa.nis}`}>
                                Detail
                                </Button>
                            <Button color="yellow" href={`/pendaftar/${siswa.nis}`}>
                                Edit
                                </Button>
                                <Button
                                color="red"
                                onClick={() => alert(`Hapus data ${siswa.nama}`)}
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
