"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { UserCheck, UserX, UserPlus, Award, CalendarDays, Users } from "lucide-react";
import { axiosClient } from "@/lib/axiosClient";

const AdminPanitiaPage = () => {
  const [adminData, setAdminData] = useState([
    { title: "Total Pendaftar", value: 0, icon: <Users size={32} className="text-blue-600" /> },
    { title: "Pendaftar Diverifikasi", value: 0, icon: <UserCheck size={32} className="text-green-600" /> },
    { title: "Pendaftar Belum upload", value: 0, icon: <UserX size={32} className="text-red-600" /> },
  ]);
  const [loading, setLoading] = useState(true);
  const [recent, setRecent] = useState<any[]>([]);
  const [best, setBest] = useState<any[]>([]);
  const [today, setToday] = useState(0);

  useEffect(() => {
    // Fetch summary data
    const fetchSummary = async () => {
      try {
        const res = await axiosClient.get("/dashboard/summary");
        setAdminData([
          { title: "Total Pendaftar", value: res.data.totalPendaftar, icon: <Users size={32} className="text-blue-600" /> },
          { title: "Pendaftar Diverifikasi", value: res.data.totalVerifikasi, icon: <UserCheck size={32} className="text-green-600" /> },
          { title: "Pendaftar Belum Upload Berkas", value: res.data.totalBelumUpload, icon: <UserX size={32} className="text-red-600" /> },
        ]);
      } catch (err) {
        // Optional: handle error
      }
    };

    // Fetch recent pendaftar
    const fetchRecent = async () => {
      try {
        const res = await axiosClient.get("/pendaftar/list-siswa");
        // 5 pendaftar terbaru
        setRecent(
          res.data
            .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 5)
        );
        // 5 pendaftar nilai tertinggi
        setBest(
          res.data
            .filter((d: any) => d.nilai !== undefined && d.nilai !== null)
            .sort((a: any, b: any) => b.nilai - a.nilai)
            .slice(0, 5)
        );
        // Pendaftar hari ini
        const todayStr = new Date().toISOString().slice(0, 10);
        setToday(res.data.filter((d: any) => d.createdAt?.slice(0, 10) === todayStr).length);
      } catch (err) {
        // Optional: handle error
      }
    };

    setLoading(true);
    Promise.all([fetchSummary(), fetchRecent()]).finally(() => setLoading(false));
  }, []);

  return (
    <div className="grid grid-cols-12 min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <main className="col-span-10 p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-green-900 drop-shadow">Dashboard Admin Panitia</h1>
            <p className="text-gray-600 mt-1">Selamat datang di panel panitia PPDB SMK MQ!</p>
          </div>
          <div className="flex items-center gap-4 bg-green-100 px-4 py-2 rounded-xl shadow">
            <CalendarDays className="text-green-700" />
            <span className="font-semibold text-green-800">
              {new Date().toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>
        </div>

        {/* Statistik Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {adminData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 border-l-4 border-green-500 hover:scale-105 transition"
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                <p className="text-3xl font-bold text-black">{loading ? "..." : item.value}</p>
              </div>
            </div>
          ))}
          {/* Hari ini */}
          <div className="bg-green-800 rounded-xl shadow-lg p-6 flex items-center space-x-4 border-l-4 border-green-700 hover:scale-105 transition">
            <UserPlus size={32} className="text-white" />
            <div>
              <h3 className="text-lg font-semibold  text-white">Pendaftar Hari Ini</h3>
              <p className="text-3xl font-bold text-white">{loading ? "..." : today}</p>
            </div>
          </div>
        </div>

        {/* 5 Pendaftar Terbaru */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
            <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
              <UserPlus size={20} /> 5 Pendaftar Terbaru
            </h3>
            <ol className="space-y-2">
              {recent.length === 0 && <li className="text-gray-400">Belum ada data</li>}
              {recent.map((item, idx) => (
                <li key={item.id || idx} className="flex justify-between items-center border-b pb-1">
                  <span className="font-semibold text-gray-700">{item.nama}</span>
                  <span className="text-xs text-gray-500">{new Date(item.createdAt).toLocaleString("id-ID")}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* 5 Nilai Tertinggi */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <h3 className="text-lg font-bold text-yellow-700 mb-4 flex items-center gap-2">
              <Award size={20} /> 5 Nilai Tertinggi
            </h3>
            <ol className="space-y-2">
              {best.length === 0 && <li className="text-gray-400">Belum ada data</li>}
              {best.map((item, idx) => (
                <li key={item.id || idx} className="flex justify-between items-center border-b pb-1">
                  <span className="font-semibold text-gray-700">{item.nama}</span>
                  <span className="text-xs text-yellow-700 font-bold">{item.nilai}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Info Admin Panitia */}
        <div className=" rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-green-200">
          <div>
            <h3 className="text-xl font-bold text-green-900 mb-2 flex items-center gap-2">
              <UserCheck size={24} /> Info Panitia
            </h3>
            <ul className="list-disc pl-6 text-green-900 space-y-1">
              <li>Verifikasi data pendaftar secara berkala.</li>
              <li>Pastikan data nilai dan dokumen sudah lengkap.</li>
              <li>Hubungi siswa jika ada kekurangan data.</li>
              <li>Gunakan fitur dashboard untuk monitoring real-time.</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/iblis.jpg" alt="Panitia" className="w-32 h-32 object-contain" />
            <span className="text-green-800 font-semibold mt-2">Panitia PPDB SMK MQ</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanitiaPage;
