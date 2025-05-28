import { notFound } from "next/navigation";
import { axiosClient } from "@/lib/axiosClient";
import Sidebar from "@/components/Sidebar";

interface PageProps {
  params: { id: string };
}

export default async function DetailPendaftarPage({ params }: PageProps) {
  const res = await axiosClient.get(`/pendaftar/detail-siswa/${params.id}`);

  if (res.status !== 200) {
    notFound();
  }

  const pendaftar = res.data;

  return (
    <div className="grid grid-cols-12 min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Sidebar />
      <main className="col-span-10 p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 text-center text-green-900 drop-shadow">
          Detail Pendaftar
        </h1>
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-green-100 p-8 flex flex-col items-center">
          {/* Avatar */}
          <div className="mb-6">
            {pendaftar.foto ? (
              <img
                src={pendaftar.foto}
                alt={pendaftar.nama}
                className="w-28 h-28 rounded-full object-cover border-4 border-green-200 shadow"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-green-200 flex items-center justify-center text-4xl font-bold text-white shadow">
                {pendaftar.nama?.split(" ").map((n: string) => n[0]).join("").toUpperCase()}
              </div>
            )}
          </div>
          {/* Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 w-full">
            <DetailItem label="Nama" value={pendaftar.nama} />
            <DetailItem label="NIS" value={pendaftar.nis} />
            <DetailItem label="NISN" value={pendaftar.nisn} />
            <DetailItem label="NIK" value={pendaftar.nik} />
            <DetailItem label="Tempat Lahir" value={pendaftar.tempatLahir} />
            <DetailItem label="Tanggal Lahir" value={pendaftar.tanggalLahir} />
            <DetailItem label="Jenis Kelamin" value={pendaftar.jenisKelamin} />
            <DetailItem label="Asal Sekolah" value={pendaftar.asalSekolah} />
            <DetailItem label="No. Telepon" value={pendaftar.noTelpSiswa} />
            <DetailItem label="Alamat" value={pendaftar.alamatSiswa} />
          </div>
          {/* Tombol Aksi */}
          <div className="flex gap-4 mt-8">
            <a
              href={`/pendaftar/edit/${pendaftar.id}`}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg shadow transition"
            >
              Edit Data
            </a>
            <a
              href="/pendaftar"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-lg shadow transition"
            >
              Kembali
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-green-700 font-semibold mb-1">{label}</span>
      <span className="text-base text-gray-900 bg-green-50 rounded px-2 py-1">{value || "-"}</span>
    </div>
  );
}
