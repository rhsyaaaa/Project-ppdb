"use client";
import { useEffect, useState } from 'react';
import { axiosClient } from '@/lib/axiosClient';
import Sidebar from '@/components/Sidebar';
import Link from "next/link";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  mapel: string;
}

const PAGE_SIZE = 5;

export default function QuestionPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<{ [mapel: string]: number }>({});

  useEffect(() => {
    axiosClient.get('/question/list-soal')
      .then((res) => setQuestions(res.data))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id: number) => {
    if (confirm('Yakin ingin menghapus soal ini?')) {
      axiosClient.delete(`/question/${id}`)
        .then(() => setQuestions(prev => prev.filter(q => q.id !== id)));
    }
  };

  // Kelompokkan soal berdasarkan mapel
  const groupedByMapel: { [mapel: string]: Question[] } = {};
  questions.forEach((q) => {
    if (!groupedByMapel[q.mapel]) groupedByMapel[q.mapel] = [];
    groupedByMapel[q.mapel].push(q);
  });

  // Handler untuk ganti halaman per mapel
  const handlePageChange = (mapel: string, page: number) => {
    setCurrentPage((prev) => ({ ...prev, [mapel]: page }));
  };

  return (
    <div className="grid grid-cols-12 min-h-screen bg-gradient-to-b from-green-100 to-white">
      <Sidebar />
      <main className="col-span-10 p-10 bg-white text-gray-800 rounded-lg shadow-md mx-6 my-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Daftar Soal Ujian</h2>
          <Link
            href="/question/tambah"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition"
          >
            + Tambah Pertanyaan
          </Link>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          Object.keys(groupedByMapel).map((mapel) => {
            const page = currentPage[mapel] || 1;
            const totalPages = Math.ceil(groupedByMapel[mapel].length / PAGE_SIZE);
            const paginatedQuestions = groupedByMapel[mapel].slice(
              (page - 1) * PAGE_SIZE,
              page * PAGE_SIZE
            );
            return (
              <div key={mapel} className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-green-700">{mapel}</h3>
                <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden mb-4">
                  <thead className="bg-green-600 text-white">
                    <tr>
                      <th className="p-3">No</th>
                      <th className="p-3">Pertanyaan</th>
                      <th className="p-3">Opsi</th>
                      <th className="p-3">Jawaban</th>
                      <th className="p-3">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedQuestions.map((q, i) => (
                      <tr key={q.id} className="odd:bg-white even:bg-green-50">
                        <td className="p-3 text-center">{(page - 1) * PAGE_SIZE + i + 1}</td>
                        <td className="p-3">{q.question}</td>
                        <td className="p-3">
                          <ul className="list-disc list-inside text-sm">
                            {q.options.map((opt, idx) => <li key={idx}>{opt}</li>)}
                          </ul>
                        </td>
                        <td className="p-3 font-semibold">{q.answer}</td>
                        <td className="p-3 space-x-2 text-center">
                          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Detail</button>
                          <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Edit</button>
                          <button onClick={() => handleDelete(q.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Hapus</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Pagination per mapel */}
                {totalPages > 1 && (
                  <div className="flex gap-2 mb-6">
                    {Array.from({ length: totalPages }, (_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handlePageChange(mapel, idx + 1)}
                        className={`px-3 py-1 rounded ${
                          page === idx + 1
                            ? "bg-green-600 text-white font-bold"
                            : "bg-green-100 text-green-800 hover:bg-green-200"
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </main>
    </div>
  );
}
