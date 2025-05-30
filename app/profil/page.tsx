/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Camera, Mail, User } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { axiosClient } from "@/lib/axiosClient";
import useAuthModule from "../auth/lib/interface";
import { useSession } from "next-auth/react";

export default function ProfilPage() {
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [previewImage, setPreviewImage] = useState(
    "/assets/default-avatar.png"
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const { useProfile } = useAuthModule();
  const { data: profile, isFetching } = useProfile();
  const { data: session, status } = useSession();

  // Fetch profile function moved to component scope
  const fetchProfile = async () => {
    if (!session?.user?.accessToken) {
      router.replace("/auth/Login");
      return;
    }
    try {
      const res = await axiosClient.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      });
      setNama(res.data.nama || "");
      setEmail(res.data.email || "");
      if (res.data.avatar) setPreviewImage(res.data.avatar);
    } catch (err) {
      // Optional: handle error
    } finally {
      setLoading(false);
    }
  };

  // Authorization check & fetch profile with accessToken
  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, session]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!session?.user?.accessToken) return;

  if (!nama && !email && !selectedFile) {
    alert("Tidak ada data yang diubah.");
    return;
  }

  const formData = new FormData();
  if (nama) formData.append("name", nama);
  if (email) formData.append("email", email);
  if (selectedFile) formData.append("avatar", selectedFile);

  try {
    await axiosClient.put("/auth/me", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    });
    alert("Perubahan berhasil disimpan!");
    // Refetch profil agar data terbaru langsung tampil
    fetchProfile();
    setSelectedFile(null); // reset file input jika perlu
  } catch (err) {
    alert("Gagal menyimpan perubahan!");
  }
};

  return (
    <div className="grid grid-cols-12 min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="col-span-12 md:col-span-3 lg:col-span-2">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="col-span-12 md:col-span-9 lg:col-span-10 p-6 text-black">
        <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-3xl p-10 border border-gray-200">
          {/* Ringkasan Akun */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Halo, {loading ? "..." : nama} 👋
            </h2>
            <p className="text-gray-500">
              Kelola informasi profil kamu dengan mudah di sini.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Foto Profil */}
            <div className="flex items-center justify-center gap-6">
              <div className="relative group">
                <div className="w-28 h-28 rounded-full border-4 border-green-600 shadow-lg overflow-hidden transition-transform transform group-hover:scale-105">
                  <Image
                    src={previewImage}
                    alt="Foto Profil"
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <label className="absolute bottom-0 right-0 bg-white border shadow-sm rounded-full p-1 cursor-pointer hover:bg-gray-100 transition">
                  <Camera size={18} className="text-black" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Nama Lengkap */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <div className="relative">
                <User
                  className="absolute top-2.5 left-3 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute top-2.5 left-3 text-gray-400"
                  size={18}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Tombol Simpan */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-900 text-white font-bold px-6 py-2 rounded-lg transition shadow-lg"
                disabled={loading}
              >
                💾 Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}


