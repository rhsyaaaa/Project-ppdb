    export default function Sidebar() {
    return (
        <aside className="col-span-2 bg-[#165533] text-white p-4 flex flex-col justify-between">
        <div>
            <div className="mb-6 text-center">
            <img src="assets/img/mq.png" alt="Logo" className="mx-auto w-16 h-16 rounded-full" />
            <h2 className="text-lg font-semibold mt-2">Madinatul Qur'an</h2>
            </div>
            <nav className="space-y-3">
            <a href="#" className="bg-[#0f3e26] block px-3 py-2 rounded">Dashboard</a>
            <a href="#" className="block px-3 py-2">Data Pendaftar</a>
            <a href="#" className="block px-3 py-2">Verifikasi Tes & Wawancara</a>
            <a href="#" className="block px-3 py-2">Pengumuman</a>
            <a href="#" className="block px-3 py-2">Admin & Panitia</a>
            </nav>
        </div>
        <a href="#" className="text-sm text-center mt-6">Bantuan</a>
        </aside>
    );
    }
