/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import dynamic from "next/dynamic";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import { useEffect, useState } from "react";
import { axiosClient } from "@/lib/axiosClient";

const GenderChart = dynamic(() => import("@/components/GenderChart"), {
  ssr: false,
});
const WaveChart = dynamic(() => import("@/components/WaveChart"), {
  ssr: false,
});
const ResultChart = dynamic(() => import("@/components/ResultChart"), {
  ssr: false,
}) as React.ComponentType<{ data: { lulus: number; tidakLulus: number } }>;

interface GenderChartProps {
  data: {
    lakiLaki: number;
    perempuan: number;
  };
}

interface Summary {
  totalPendaftar: number;
  totalVerifikasi: number;
  totalWawancaraHariIni: number;
  totalBelumUpload: number;
  totalJenisKelamin: {
    lakiLaki: number;
    perempuan: number;
  };
  totalKelulusan: {
    lulus: number;
    ditunda: number;
    tidakLulus: number;
  };
}

export default function DashboardAdmin() {
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
  axiosClient.get("/dashboard/summary").then((res) => {
    const data = res.data;
    console.log("Dashboard Summary Data:", data);

    const jenisKelaminArray = Array.isArray(data.totalJenisKelamin) ? data.totalJenisKelamin : [];

    const jenisKelamin = {
      lakiLaki: parseInt(
        jenisKelaminArray.find((item: any) => item.jenisKelamin === "Laki-Laki")?.total || "0"
      ),
      perempuan: parseInt(
        jenisKelaminArray.find((item: any) => item.jenisKelamin === "Perempuan")?.total || "0"
      ),
    };
console.log(jenisKelamin,'jn');
    setSummary({ 
      totalPendaftar: data.totalPendaftar,
      totalVerifikasi: data.totalVerifikasi,
      totalWawancaraHariIni: data.totalWawancaraHariIni,
      totalBelumUpload: data.totalBelumUpload,
      totalJenisKelamin: jenisKelamin,
      totalKelulusan: {
        lulus: data.statusKelulusan?.lulus ?? 0,
        tidakLulus: data.statusKelulusan?.tidakLulus ?? 0,
        ditunda: data.statusKelulusan?.ditunda ?? 0,
      },
    });
  });
}, []);

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <Sidebar />

      <main className="col-span-10 bg-[#f9f9f5] p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-semibold text-black">
              Assalamu'alaikum, Admin PPDB!
            </h1>
            <p className="text-sm text-gray-600">
              Berikut ringkasan aktivitas PPDB Madinatul Qur'an.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6 text-black mx-5">
          <StatCard
            label="Total Pendaftar"
            value={summary?.totalPendaftar ?? 0}
          />
          <StatCard
            label="Sudah Verifikasi"
            value={summary?.totalVerifikasi ?? 0}
          />
          <StatCard
            label="Wawancara Hari Ini"
            value={`${summary?.totalWawancaraHariIni ?? 0} siswa`}
          />
          <StatCard
            label="Belum Upload Berkas"
            value={`${summary?.totalBelumUpload ?? 0} siswa`}
          />
        </div>

        <div className="grid grid-cols-3 gap-6">
          {summary && <GenderChart data={summary.totalJenisKelamin} />}
          <WaveChart />
          {summary && <ResultChart data={summary.totalKelulusan} />}
        </div>
      </main>
    </div>
  );
}
