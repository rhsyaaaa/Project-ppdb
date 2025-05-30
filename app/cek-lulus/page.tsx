/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { axiosClient } from '@/lib/axiosClient';

export default function CekKelulusanPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axiosClient.get('/cek-kelulusan/list-lulus');
      setData(res.data);
    } catch (error) {
      console.error('Gagal memuat data kelulusan', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getStatusBadge = (status: string) => {
    if (status === 'Lulus')
      return <span className="bg-green-700 text-green-700 px-3 py-1 rounded-full font-semibold text-xs shadow">Lulus</span>;
    if (status === 'Tidak Lulus')
      return <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold text-xs shadow">Tidak Lulus</span>;
    return <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold text-xs shadow">Ditunda</span>;
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-100 via-yellow-50 to-green-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-green-900 drop-shadow">Daftar Kelulusan</h1>
        <div className="flex gap-4 mb-6">
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded bg-green-500"></span>
            <span className="text-sm text-gray-700">Lulus</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded bg-yellow-200"></span>
            <span className="text-sm text-gray-700">Ditunda</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded bg-red-500"></span>
            <span className="text-sm text-gray-700">Tidak Lulus</span>
          </span>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-600"></div>
            <span className="ml-4 text-green-700 font-semibold">Memuat data...</span>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-t-2xl rounded-b-2xl shadow-xl p-6 border border-green-100">
            <table className="min-w-full table-auto">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="px-4 py-3 border-b text-left text-white font-semibold">Nama</th>
                  <th className="px-4 py-3 border-b text-left text-white font-semibold">NIS</th>
                  <th className="px-4 py-3 border-b text-left text-white font-semibold">NISN</th>
                  <th className="px-4 py-3 border-b text-center text-white font-semibold">Nilai</th>
                  <th className="px-4 py-3 border-b text-center text-white font-semibold">Status Kelulusan</th>
                  <th className="px-4 py-3 border-b text-left text-white font-semibold">Pesan</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr
                    key={idx}
                    className={
                      idx % 2 === 0
                        ? "bg-green-50/100 hover:bg-green-100/80 transition"
                        : "bg-yellow-50/60 hover:bg-yellow-100/80 transition"
                    }
                  >
                    <td className="px-4 py-2 font-semibold text-gray-800">{item.nama}</td>
                    <td className="px-4 py-2 font-semibold text-gray-800">{item.nis}</td>
                    <td className="px-4 py-2 font-semibold text-gray-800">{item.nisn}</td>
                    <td className="px-4 py-2 text-center font-bold text-green-700">{item.nilai ?? '0'}</td>
                    <td className="px-4 py-2 text-center">{getStatusBadge(item.statusKelulusan)}</td>
                    <td className="px-4 py-2 text-gray-700 font-semibold">{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data.length === 0 && (
              <p className="text-center mt-6 text-gray-500">Tidak ada data</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
