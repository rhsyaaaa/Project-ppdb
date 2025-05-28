"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { axiosClient } from "@/lib/axiosClient";
import Sidebar from "@/components/Sidebar";

export default function TambahPertanyaanPage() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");
  const [mapel, setMapel] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleOptionChange = (idx: number, value: string) => {
    setOptions((prev) => prev.map((opt, i) => (i === idx ? value : opt)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await axiosClient.post("/question/tambah-soal", {
        question,
        options,
        answer,
        mapel,
      });
      router.push("/question");
    } catch (err: any) {
      setError("Gagal menambah pertanyaan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-12 min-h-screen bg-gradient-to-b from-green-100 to-white">
      <Sidebar />
      <main className="col-span-10 p-10 bg-white text-gray-800 rounded-lg shadow-md mx-6 my-6">
        <h2 className="text-2xl font-bold mb-6">Tambah Pertanyaan</h2>
        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
          <div>
            <label className="block font-semibold mb-1">Pertanyaan</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Opsi Jawaban</label>
            <div className="grid grid-cols-1 gap-2">
              {options.map((opt, idx) => (
                <input
                  key={idx}
                  type="text"
                  className="border rounded px-3 py-2"
                  placeholder={`Opsi ${idx + 1}`}
                  value={opt}
                  onChange={(e) => handleOptionChange(idx, e.target.value)}
                  required
                />
              ))}
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">Jawaban Benar</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Mata Pelajaran</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={mapel}
              onChange={(e) => setMapel(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow"
            disabled={loading}
          >
            {loading ? "Menyimpan..." : "Simpan Pertanyaan"}
          </button>
        </form>
      </main>
    </div>
  );
}