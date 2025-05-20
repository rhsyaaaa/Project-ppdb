    // app/dashboard/page.tsx
    "use client";

    import dynamic from "next/dynamic";
    import Sidebar from "@/components/Sidebar";
    import StatCard from "@/components/StatCard";

    // Dynamic imports for charts
    const GenderChart = dynamic(() => import("@/components/GenderChart"), {
    ssr: false,
    });
    const WaveChart = dynamic(() => import("@/components/WaveChart"), {
    ssr: false,
    });
    const ResultChart = dynamic(() => import("@/components/ResultCharts"), {
    ssr: false,
    });

    export default function DashboardAdmin() {
    return (
        <div className="grid grid-cols-12 min-h-screen">
        <Sidebar />

        <main className="col-span-10 bg-[#f9f9f5] p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
            <div>
                <h1 className="text-xl font-semibold text-black">
                Assalamu'alaikum, Admin PPDB!
                </h1>
                <p className="text-sm text-gray-600">
                Berikut ringkasan aktivitas PPDB Madinatul Qur'an.
                </p>
            </div>
            <div className="text-right text-sm text-gray-500">
                Tahun Ajaran 2025/2026
                <button className="ml-4 px-4 py-1 bg-gray-200 rounded">Logout</button>
            </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
            <StatCard label="Total Pendaftar" value="120" />
            <StatCard label="Sudah Diverifikasi" value="85" />
            <StatCard label="Wawancara Hari Ini" value="5 siswa" />
            <StatCard label="Belum Upload Berkas" value="12 siswa" />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-3 gap-6">
            <GenderChart />
            <WaveChart />
            <ResultChart />
            </div>
        </main>
        </div>
    );
    }