            import Button from '@/components/Button';
import Image from 'next/image';

            export default function Home() {
            return (
            <section className="min-h-screen bg-gradient-to-b from-green-900 to-green-800 bg-cover bg-no-repeat bg-center">
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <Image src="/assets/mq.png" alt="Logo MQ" width={50} height={50} />
                    <div className="text-sm">
                    <div>Sekolah Menengah Kejuruan</div>
                    <div className="font-bold">MADINATUL QURAN</div>
                    </div>
                </div>

                {/* Tombol Login Admin */}
                            <div className="absolute top-4 right-4">
                                <a
                  href="/auth/Login"
                  className="bg-green-200 text-green-900 font-semibold py-1 px-3 rounded-full text-sm shadow-md inline-block"
                >
                  Login Admin
                    </a>

                </div>

                {/* Hero Section */}
                <div className="text-center max-w-2xl px-4 mx-auto flex flex-col justify-center items-center min-h-screen">
                    <button className="bg-green-800 text-white text-xs px-4 py-1 rounded-full border border-green-500 mb-4">
                    Let You Know About <span className="font-bold">SMK MADINATUL QURAN</span>
                    </button>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    SMK MADINATULQURAN<br />Boarding School
                    </h1>
                    <p className="text-sm md:text-base text-gray-200 mb-6">
                    Sekolah Menengah Kejuruan MADINATULQURAN atau SMK MQ adalah salah satu sekolah di Kecamatan Jonggol Kabupaten Bogor, Jawa Barat yang beroperasi mulai tahun 2015 dan sudah terakreditasi dari BANS/M Kemendikbud.
                    </p>
                    <button className="bg-green-200 text-green-900 px-6 py-2 rounded-full font-semibold shadow-md">
                    Download Brosur
                    </button>
                </div>

                {/* Dekorasi Bulan */}
                <div className="absolute left-10 bottom-10 animate-spin-slow">
                    <Image src="/assets/Group 13.png" alt="Left Moon" width={40} height={40} />
                </div>
                <div className="absolute right-10 bottom-10 animate-spin-slow">
                    <Image src="/assets/Group 14.png" alt="Right Moon" width={40} height={40} />
                </div>

                {/* SECTION: Program Unggulan */}
                <section className="bg-white text-black py-20 px-6 md:px-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm font-semibold text-green-700 mb-12">
                    <div className="flex flex-col items-center">
                        <Image src="/assets/diniyah.png" alt="Diniyyah & Umum" width={40} height={40} />
                        <p className="mt-2">Diniyyah & Umum</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/assets/code 1.png" alt="Software Engineer" width={40} height={40} />
                        <p className="mt-2">Software Engineer</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/assets/diagram 1.png" alt="Network Engineer" width={40} height={40} />
                        <p className="mt-2">Network Engineer</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/assets/trophy 1.png" alt="Program Unggulan" width={40} height={40} />
                        <p className="mt-2">Program Unggulan</p>
                    </div>
                    </div>

                    {/* Diniyyah & Umum */}
                    <div className="grid md:grid-cols-2 gap-10 mb-16">
                    <div>
                        <h2 className="text-green-700 font-bold text-lg mb-2">Diniyyah & Umum</h2>
                        <p className="text-sm mb-4">
                        Sebagai acuan dasar dalam penyelenggaraan Lembaga Pendidikan Sekolah, para santri juga dibekali pelajaran:
                        </p>
                        <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Tahfidz Alqur’an (Target Hafalan 3 Juz)</li>
                        <li>Aqidah</li>
                        <li>Adab</li>
                        <li>Sirah Nabi</li>
                        <li>Hadist</li>
                        <li>Fiqih Islam</li>
                        <li>Kurikulum Diknas</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <Image src="/assets/halaqoh.png" alt="Kegiatan Halaqoh" width={400} height={300} className="rounded-xl shadow-lg" />
                    </div>
                    </div>

                    {/* Network Engineer */}
                    <div className="grid md:grid-cols-2 gap-10">
                    <div className="flex justify-center">
                        <Image src="/assets/kelas.png" alt="Kelas TKJ" width={400} height={300} className="rounded-xl shadow-lg" />
                    </div>
                    <div>
                        <h2 className="text-green-700 font-bold text-lg mb-2">Network Engineer (TKJ)</h2>
                        <p className="text-sm mb-4">
                        Santri yang masuk dalam jurusan TKJ (Teknik Komputer dan Jaringan) akan berfokus mempelajari infrastruktur Jaringan Komputer dan Server. Materi yang akan dipelajari:
                        </p>
                        <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Network Engineer (Cisco dan Mikrotik)</li>
                        <li>System Engineer (Linux System Administration, Docker Container, Ansible, CI/CD Jenkins, Monitoring)</li>
                        </ul>
                    </div>
                    </div>

                    {/* Software Engineer */}
                    <div className="grid md:grid-cols-2 gap-10 my-10 mx-5">
                    <div className="mt-20">
                        <h2 className="text-green-700 font-bold text-lg mb-2">Software Engineer (RPL)</h2>
                        <p className="text-sm mb-4">
                        Santri RPL (Rekayasa Perangkat Lunak) berfokus mempelajari bagaimana mengembangkan software yang berbasis Web dan Mobile. Materi yang akan dipelajari:
                        </p>
                        <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>UI/UX Design (Figma)</li>
                        <li>Front End Development (ReactJS, NextJS, Tailwindcss)</li>
                        <li>Back End Development (ExpressJS, NestJS)</li>
                        <li>Mobile Development (Flutter)</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <Image src="/assets/rpl 1.png" alt="RPL Class" width={400} height={300} className="rounded-xl shadow-lg" />
                    </div>
                    </div>
                </section>

                {/* SECTION: Academy Partner & Fasilitas */}
                <section className="bg-gray-50 py-20 px-6 md:px-20 text-center">
                    <h2 className="text-green-700 font-bold text-lg mb-8">Academy Partner</h2>
                    <div className="flex flex-wrap justify-center items-center gap-6 mb-16">
                    <Image src="/assets/microtik.png" alt="Mikrotik Academy" width={200} height={100} />
                    <Image src="/assets/cisco.png" alt="Cisco Academy" width={200} height={100} />
                    <Image src="/assets/red-hat.png" alt="RedHat Academy" width={200} height={100} />
                    <Image src="/assets/itc.png" alt="ITC" width={250} height={100} />
                    <Image src="/assets/logolsp 1.png" alt="LSP Telematika" width={250} height={100} />
                    <Image src="/assets/pens.png" alt="PENS" width={250} height={100} />
                    <Image src="/assets/Anabuki-College-1 1.png" alt="Anabuki College" width={300} height={100} />
                    </div>

                    <h2 className="text-green-700 font-bold text-lg mb-8">Fasilitas SMK MADINATULQURAN</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-green-700 text-sm font-semibold">
  {/* Item */}
  <div className="flex flex-col items-center">
    <div className="bg-white rounded-xl p-6 shadow-md w-28 h-28 flex items-center justify-center">
      <Image src="/assets/school 1.png" alt="Smart School" width={70} height={70} />
    </div>
    <p className="mt-4 text-center">Smart School</p>
  </div>

  {/* Salin untuk item lainnya */}
  <div className="flex flex-col items-center">
    <div className="bg-white rounded-xl p-6 shadow-md w-28 h-28 flex items-center justify-center">
      <Image src="/assets/home-run 1.png" alt="Asrama" width={70} height={70} />
    </div>
    <p className="mt-4 text-center">Asrama</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="bg-white rounded-xl p-6 shadow-md w-28 h-28 flex items-center justify-center">
      <Image src="/assets/air-conditioner 1.png" alt="Kelas AC" width={70} height={70} />
    </div>
    <p className="mt-4 text-center">Kelas AC</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="bg-white rounded-xl p-6 shadow-md w-28 h-28 flex items-center justify-center">
      <Image src="/assets/elearning 1.png" alt="Multimedia" width={70} height={70} />
    </div>
    <p className="mt-4 text-center">Multimedia</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="bg-white rounded-xl p-6 shadow-md w-28 h-28 flex items-center justify-center">
      <Image src="/assets/wireless-router 1.png" alt="Wifi / Internet" width={70} height={70} />
    </div>
    <p className="mt-4 text-center">Wifi / Internet</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="bg-white rounded-xl p-6 shadow-md w-28 h-28 flex items-center justify-center">
      <Image src="/assets/mosque 1.png" alt="Masjid" width={70} height={70} />
    </div>
    <p className="mt-4 text-center">Masjid</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="bg-white rounded-xl p-6 shadow-md w-28 h-28 flex items-center justify-center">
      <Image src="/assets/gazebo 1.png" alt="Saung Belajar" width={70} height={70} />
    </div>
    <p className="mt-4 text-center">Saung Belajar</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="bg-white rounded-xl p-6 shadow-md w-28 h-28 flex items-center justify-center">
      <Image src="/assets/Vector.png" alt="Lapangan" width={70} height={70} />
    </div>
    <p className="mt-4 text-center">Lapangan</p>
  </div>
</div>

                    
                </section>
                <section className="bg-white py-16 px-4 md:px-16" id="biaya">
                <h2 className="text-3xl font-bold text-center text-emerald-600 mb-10">
                    Biaya Pendidikan
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border rounded-lg">
                    <thead className="text-white bg-emerald-700">
                        <tr>
                        <th className="px-6 py-3">Gelombang</th>
                        <th className="px-6 py-3">Pendaftaran</th>
                        <th className="px-6 py-3">Uang Masuk</th>
                        <th className="px-6 py-3">Daftar Ulang</th>
                        <th className="px-6 py-3">SPP Bulanan</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white border text-gray-700">
                        <tr className="bg-green-50">
                        <td className="px-6 py-3">Agustus – Desember 2024</td>
                        <td className="px-6 py-3">Rp 450.000</td>
                        <td className="px-6 py-3">Rp 14.500.000</td>
                        <td className="px-6 py-3">Rp 3.500.000</td>
                        <td className="px-6 py-3">Rp 2.500.000</td>
                        </tr>
                        <tr>
                        <td className="px-6 py-3">Januari – Maret 2025</td>
                        <td className="px-6 py-3">Rp 450.000</td>
                        <td className="px-6 py-3">Rp 16.500.000</td>
                        <td className="px-6 py-3">Rp 3.500.000</td>
                        <td className="px-6 py-3">Rp 2.500.000</td>
                        </tr>
                        <tr className="bg-green-50">
                        <td className="px-6 py-3">April – Juni 2025</td>
                        <td className="px-6 py-3">Rp 450.000</td>
                        <td className="px-6 py-3">Rp 18.500.000</td>
                        <td className="px-6 py-3">Rp 3.500.000</td>
                        <td className="px-6 py-3">Rp 2.500.000</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <p className="text-red-600 mt-4 font-semibold">
                    * Apabila Mengundurkan Diri, Uang Tidak Dapat Dikembalikan
                </p>
                <div className="mt-8 text-gray-700">
                    <h3 className="font-bold text-lg text-emerald-700 mb-2">
                    Keterangan :
                    </h3>
                    <ol className="list-decimal ml-6 space-y-2">
                    <li>
                        Uang Pendaftaran Digunakan Untuk Tes Potensi (Minat Dan Bakat) Siswa,
                        Serta Potensi Akademis Dan Non-Akademis.
                    </li>
                    <li>
                        Uang Masuk = Rp. 18.500.000,- (Tidak Termasuk SPP Bulan Juli)
                        <ul className="list-disc ml-6">
                        <li>Perlengkapan Tidur, Ranjang, Kasur, Sprei, Bantal Dan Tempat Baju</li>
                        <li>Seragam Olahraga Dan Baju Praktek</li>
                        <li>E-Modul Pelajaran</li>
                        <li>Uang Masuk Tahap 1 = Rp. 10.000.000,- (Dibayar Ketika Santri Dinyatakan Lulus Test)</li>
                        <li>Uang Masuk Tahap 2 = Rp. 8.500.000,- (Dibayar Sebulan Sebelum Santri Masuk Pondok)</li>
                        </ul>
                    </li>
                    <li>
                        SPP Bulanan = Rp. 2.500.000,-
                        <ul className="list-disc ml-6">
                        <li>Makan</li>
                        <li>Laundry</li>
                        <li>Biaya Pendidikan</li>
                        </ul>
                    </li>
                    <li>
                        Daftar Ulang = Rp. 3.500.000,- (Dibayar Ketika Santri Naik Ke Kelas XI Dan XII)
                        <ul className="list-disc ml-6">
                        <li>Pemeliharaan Dan Perbaikan Sarpras.</li>
                        </ul>
                    </li>
                    </ol>
                </div>
                </section>
                <footer className="bg-green-900 text-white py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kontak */}
            <div>
            <h3 className="text-lg font-semibold mb-2">Kontak :</h3>
            <p>📞 0858 8822 2457 (PSB)</p>
            <p>📱 0812 6900 4547 (Hotline)</p>
            <p>📧 info@smkmadinatulquran.sch.id</p>
            </div>

            {/* Media Sosial */}
            <div>
            <h3 className="text-lg font-semibold mb-2">Media Sosial :</h3>
            <p>📘 Facebook</p>
            <p>📸 Instagram</p>
            <p>📺 Youtube</p>
            </div>

            {/* Alamat */}
            <div>
            <h3 className="text-lg font-semibold mb-2">Alamat :</h3>
            <p>📍 Kp. Kebon Kelapa, RT 02/RW 011, Singsari,</p>
            <p>Kec. Jonggol, Bogor, Jawa Barat 16830</p>
            <p>NPSN : 69944176</p>
            </div>
        </div>

        <div className="text-center text-sm text-gray-300 mt-6">
            © 2025 Yonro. PPDB 2025
        </div>
        </footer>
                </section>
                
            );
            }
