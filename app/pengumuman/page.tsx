    "use client";

    import Sidebar from "@/components/Sidebar";

    export default function PengumumanPage() {
    const pengumumanData = [
        {
        judul: "Pendaftaran Gelombang 1 Ditutup",
        kategori: "Pendaftaran",
        tanggal: "2025-05-10",
        isi: "Pendaftaran untuk gelombang 1 telah ditutup. Pastikan untuk mendaftar pada gelombang berikutnya.",
        },
        {
        judul: "Wawancara Gelombang 2 Dimulai",
        kategori: "Wawancara",
        tanggal: "2025-05-12",
        isi: "Wawancara untuk gelombang 2 akan dimulai pada tanggal 15 Mei 2025. Silakan cek jadwal wawancara Anda.",
        },
        {
        judul: "Verifikasi Berkas Gelombang 1",
        kategori: "Verifikasi",
        tanggal: "2025-05-14",
        isi: "Verifikasi berkas gelombang 1 telah selesai. Silakan cek status verifikasi Anda di halaman pendaftar.",
        },
    ];

    return (
        <div className="grid grid-cols-12 min-h-screen">
        <Sidebar />

        <main className="col-span-10 bg-[#f9f9f5] p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold text-black">Pengumuman</h1>
            <p className="text-sm text-gray-500">Terbaru dan Terkini</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pengumumanData.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-4">
                    <h3 className="text-lg font-semibold text-blue-600">{item.judul}</h3>
                    <p className="text-sm text-gray-500 mt-2">{item.kategori}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.tanggal}</p>
                    <p className="text-sm text-gray-700 mt-4">{item.isi}</p>
                </div>
                <div className="px-6 pb-6">
                    <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                    Baca Selengkapnya
                    </button>
                </div>
                </div>
            ))}
            </div>
        </main>
        </div>
    );
    }
    //     </div>