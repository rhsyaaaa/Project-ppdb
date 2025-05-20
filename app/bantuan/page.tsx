    // pages/bantuan.js

    "use client"; // This indicates this is a client-side component

    import React, { useState } from "react";
    import Sidebar from "@/components/Sidebar"; // Ensure the Sidebar component is correctly imported

    const BantuanPage = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const bantuanTopics = [
        {
        title: "Cara Melakukan Pendaftaran",
        content: "Untuk melakukan pendaftaran, buka halaman pendaftaran, masukkan data yang diperlukan, dan klik 'Daftar'.",
        },
        {
        title: "Cara Verifikasi Berkas",
        content: "Verifikasi berkas dilakukan oleh petugas admin. Pastikan berkas yang diunggah sesuai dengan ketentuan.",
        },
        {
        title: "Cara Mengikuti Tes Wawancara",
        content: "Tes wawancara akan dijadwalkan setelah berkas diverifikasi. Pastikan hadir tepat waktu.",
        },
        {
        title: "Bantuan Teknis",
        content: "Jika mengalami kesulitan teknis, pastikan perangkat anda terhubung dengan internet yang stabil.",
        },
    ];

    return (
        <div className="grid grid-cols-12 min-h-screen bg-gray-50">
        {/* Sidebar Component */}
        <Sidebar />

        {/* Main Content */}
        <main className="col-span-10 p-6 bg-white">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Halaman Bantuan</h1>

            {/* Search Bar */}
            <div className="mb-6">
            <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Cari Bantuan..."
            />
            </div>

            {/* Help Topics */}
            <div className="space-y-4">
            {bantuanTopics.map((topic, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-4 py-3 text-left bg-gray-100 rounded-t-lg text-gray-700 font-semibold focus:outline-none"
                >
                    {topic.title}
                </button>
                {activeAccordion === index && (
                    <div className="px-4 py-3 text-gray-600">
                    <p>{topic.content}</p>
                    </div>
                )}
                </div>
            ))}
            </div>
        </main>
        </div>
    );
    };

    export default BantuanPage;
