"use client";

import Sidebar from "@/components/Sidebar";
import { Megaphone, Info, CalendarDays, FileText } from "lucide-react";

export default function PengumumanPage() {
  const pengumumanData = [
    {
      judul: "Pendaftaran Gelombang 1 Ditutup",
      kategori: "Pendaftaran",
      tanggal: "2025-06-10",
      isi: "Pendaftaran untuk gelombang 1 telah ditutup. Pastikan untuk mendaftar pada gelombang berikutnya.",
    },
    {
      judul: "Wawancara Gelombang 1 Dimulai",
      kategori: "Wawancara",
      tanggal: "2025-05-30",
      isi: "Wawancara untuk gelombang 1 akan dimulai pada tanggal 30 Mei 2025. Silakan cek jadwal wawancara Anda.",
    },
    {
      judul: "Verifikasi Berkas Gelombang 1",
      kategori: "Verifikasi",
      tanggal: "2025-06-03",
      isi: "Verifikasi berkas gelombang 1 telah selesai. Silakan cek status verifikasi Anda di halaman pendaftar.",
    },
    {
      judul: "Pengumuman Hasil Seleksi Gelombang 1",
      kategori: "Pengumuman",
      tanggal: "2025-06-07",
      isi: "Hasil seleksi gelombang 1 telah diumumkan. Silakan login untuk melihat status kelulusan Anda.",
    },
    {
      judul: "Jadwal Daftar Ulang",
      kategori: "Daftar Ulang",
      tanggal: "2025-06-08",
      isi: "Daftar ulang untuk peserta yang lulus seleksi gelombang 1 dibuka mulai 8 Juni 2025.",
    },
    {
      judul: "PPDB SMK Madinatul Quran 2025 Resmi Dibuka!",
      kategori: "Info Umum",
      tanggal: "2025-05-28",
      isi: "PPDB SMK Madinatul Quran tahun 2025 telah resmi dibuka. Segera persiapkan berkas dan daftar melalui website resmi kami.",
    },
  ];

  return (
    <div className="grid grid-cols-12 min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      <Sidebar />

      <main className="col-span-10 p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-blue-800 flex items-center gap-2 drop-shadow">
              <Megaphone className="text-blue-500" /> Pengumuman PPDB SMK Madinatul Quran
            </h1>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Temukan info terbaru seputar proses Penerimaan Peserta Didik Baru (PPDB) SMK Madinatul Quran. Pastikan Anda selalu update agar tidak ketinggalan informasi penting!
            </p>
          </div>
          <div className="flex items-center gap-3 bg-blue-100 px-4 py-2 rounded-xl shadow">
            <CalendarDays className="text-blue-700" />
            <span className="font-semibold text-blue-800">
              {new Date().toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>
        </div>

        {/* Info PPDB */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 border-l-4 border-blue-500">
            <Info size={32} className="text-blue-500" />
            <div>
              <h2 className="text-lg font-bold text-blue-700 mb-1">Tentang PPDB SMK MQ</h2>
              <p className="text-gray-700 text-sm">
                SMK Madinatul Quran membuka kesempatan bagi calon siswa/i terbaik untuk bergabung dan berkembang bersama kami. Proses seleksi meliputi pendaftaran online, verifikasi berkas, wawancara, dan pengumuman hasil seleksi.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 border-l-4 border-green-500">
            <FileText size={32} className="text-green-500" />
            <div>
              <h2 className="text-lg font-bold text-green-700 mb-1">Tahapan & Jadwal Penting</h2>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Pendaftaran Online: <b>28 Mei 2025</b> - <b>10 Juni 2025</b></li>
                <li>Wawancara: <b>30 Mei 2025</b> - <b>2 Juni 2025</b></li>
                <li>Verifikasi Berkas: <b>3 Juni 2025</b> - <b>6 Juni 2025</b></li>
                <li>Pengumuman Hasil: <b>7 Juni 2025</b></li>
                <li>Daftar Ulang: <b>8 Juni 2025</b> - <b>10 Juni 2025</b></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pengumuman Card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pengumumanData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-blue-400 hover:scale-105 transition">
              <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-blue-600">{item.judul}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">{item.kategori}</span>
                  <span className="text-xs text-gray-400">{new Date(item.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                </div>
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

        {/* Footer Info */}
        <div className="mt-12 bg-blue-100 rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-blue-500">
          <div>
            <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center gap-2">
              <Megaphone size={20} /> Kontak & Bantuan PPDB
            </h3>
            <ul className="text-blue-900 text-sm space-y-1">
              <li>Website: <a href="https://smkmadinatulquran.sch.id/" className="underline text-blue-700" target="_blank">smkmadinatulquran.sch.id</a></li>
              <li>Email: <a href="mailto:idris.trembesix" className="underline text-blue-700">idris.trembesix</a></li>
              <li>WhatsApp Panitia: <a href="https://wa.me/6281234567890" className="underline text-blue-700" target="_blank">0812-3456-7890</a></li>
              <li>Alamat: Kp.Kebon Kelapa, RT.02/RW.011, Singasari, Kec. Jonggol, Kabupaten Bogor, Jawa Barat 16830</li>
            </ul>
          </div>
          <img src="/assets/ppdb-info.svg" alt="Info PPDB" className="w-40 h-40 object-contain" />
        </div>
      </main>
    </div>
  );
}