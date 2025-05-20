    "use client";

    import React from "react";
    import Sidebar from "@/components/Sidebar";

    const VerifikasiWawancaraPage = () => {
    const berkasData = [
        {
        nama: "Ahmad Fathir",
        status: "Belum Diverifikasi",
        berkas: ["Kartu Keluarga", "Akta Lahir", "Ijazah SD"],
        },
        {
        nama: "Azka shidqi",
        status: "Sudah Diverifikasi",
        berkas: ["Kartu Keluarga", "Akta Lahir", "Ijazah SD"],
        },
    ];

    const wawancaraData = [
        {
        nama: "Ahmad Fathir",
        jadwal: "2025-06-01 09:00",
        status: "Belum Tes",
        nilai: null,
        },
        {
        nama: "Azka shidqi",
        jadwal: "2025-06-01 10:00",
        status: "Sudah Tes",
        nilai: 85,
        },
    ];

    return (
        <div className="grid grid-cols-12 min-h-screen bg-gray-100">
        <Sidebar />
        <main className="col-span-10 p-8 bg-white text-gray-800 rounded-lg shadow-md mx-6 my-6">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Verifikasi & Tes Wawancara</h1>

            {/* Verifikasi Berkas - Card Style */}
            <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2 text-gray-900">Verifikasi Berkas</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {berkasData.map(({ nama, status, berkas }, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-300"
                >
                    <h3 className="text-xl font-semibold mb-2">{nama}</h3>
                    <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                        status === "Belum Diverifikasi" ? "bg-yellow-400 text-gray-900" : "bg-green-500 text-white"
                    }`}
                    >
                    {status}
                    </span>
                    <div>
                    <h4 className="font-semibold mb-1">Berkas:</h4>
                    <ul className="list-disc list-inside text-sm space-y-0.5">
                        {berkas.map((b, i) => (
                        <li key={i}>{b}</li>
                        ))}
                    </ul>
                    </div>
                </div>
                ))}
            </div>
            </section>

            {/* Tes Wawancara - Card Style */}
            <section>
            <h2 className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-2 text-gray-900">Hasil Tes Siswa</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {wawancaraData.map(({ nama, jadwal, status, nilai }, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-300"
                >
                    <h3 className="text-xl font-semibold mb-2">{nama}</h3>
                    <p className="mb-1">
                    <span className="font-semibold">Jadwal:</span> {jadwal}
                    </p>
                    <p className="mb-2">
                    <span className="font-semibold">Status:</span>{" "}
                    <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        status === "Belum Tes" ? "bg-red-500 text-white" : "bg-green-500 text-white"
                        }`}
                    >
                        {status}
                    </span>
                    </p>
                    <p>
                    <span className="font-semibold">Nilai:</span> {nilai !== null ? nilai : "-"}
                    </p>
                </div>
                ))}
            </div>
            </section>
        </main>
        </div>
    );
    };

    export default VerifikasiWawancaraPage;
