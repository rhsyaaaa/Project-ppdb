"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";

// Import Chart.js dan React wrappernya
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Daftarkan elemen-elemen chart yang dibutuhkan    
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const adminData = [
  { title: "Total Pendaftar", value: 120 },
  { title: "Pendaftar Diverifikasi", value: 95 },
  { title: "Pendaftar Belum Verifikasi", value: 25 },
];

// Data chart untuk contoh progress pendaftar selama 4 minggu
const chartData = {
  labels: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"],
  datasets: [
    {
      label: "Jumlah Pendaftar",
      data: [30, 60, 90, 120], // contoh data jumlah pendaftar per minggu
      borderColor: "rgb(99, 102, 241)", // warna garis chart (indigo-600)
      backgroundColor: "rgba(99, 102, 241, 0.3)", // warna fill area transparan
      tension: 0.3, // membuat garis lebih smooth
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: "#4B5563", // text-gray-700
      },
    },
    title: {
      display: true,
      text: "Progress Pendaftar Bulanan",
      color: "#374151", // text-gray-800
      font: {
        size: 18,
        weight: "bold" as "bold",
      },
    },
    tooltip: {
      enabled: true,
      mode: "index" as const,
      intersect: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#4B5563", // text-gray-700
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        color: "#4B5563",
      },
      grid: {
        color: "#E5E7EB", // bg-gray-200
      },
      beginAtZero: true,
      max: 150,
    },
  },
};

const AdminPanitiaPage = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <main className="col-span-10 bg-[#f9f9f5] p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-black">Dashboard Admin</h1>
        </div>

        {/* Admin Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex justify-between items-center space-x-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                <p className="text-3xl font-bold text-black">{item.value}</p>
              </div>
              <div>
                <i className="fas fa-chart-line text-4xl text-indigo-600"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Charts / Graphs */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Pendaftar Progress Chart</h3>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanitiaPage;
// export default function VerifikasiWawancara() {