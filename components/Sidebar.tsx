    "use client";

    import React from "react";
    import Image from "next/image";
    import Link from "next/link";
    import { usePathname } from "next/navigation";
    import {
    LayoutDashboard,
    Users,
    CheckCircle,
    Megaphone,
    ShieldCheck,
    UserCircle,
    LogOut,
    } from "lucide-react";

    export default function Sidebar() {
    const pathname = usePathname();

    const navItems = [
        { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={18} /> },
        { label: "Data Pendaftar", href: "/pendaftar", icon: <Users size={18} /> },
        { label: "Verifikasi Hasil Test", href: "/Verifikasi-wawancara", icon: <CheckCircle size={18} /> },
        { label: "Pengumuman", href: "/pengumuman", icon: <Megaphone size={18} /> },
        { label: "Admin Panitia", href: "/admin-panitia", icon: <ShieldCheck size={18} /> },
        { label: "Profil", href: "/profil", icon: <UserCircle size={18} /> },
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <aside className="col-span-2 bg-[#165533] text-white p-5 flex flex-col justify-between min-h-screen shadow-lg">
        {/* Logo & Heading */}
        <div>
            <div className="mb-8 text-center">
            <Image
                src="/assets/mq.png"
                alt="Logo SMK MQ"
                width={70}
                height={70}
                className="mx-auto rounded-full border-2 border-white"
            />
            <h2 className="text-lg font-semibold mt-2 leading-tight">
                SMK <br /> Madinatul Qur'an
            </h2>
            </div>

            {/* Navigasi */}
            <nav className="space-y-2">
            {navItems.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                        ? "bg-[#0f3e26] text-white"
                        : "hover:bg-[#166534] hover:text-white text-gray-200"
                    }`}
                >
                    {item.icon}
                    {item.label}
                </Link>
                );
            })}
            </nav>
        </div>

        {/* Tombol Logout */}
        <button
            onClick={handleLogout}
            className="mt-8 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition"
        >
            <LogOut size={18} />
            Keluar
        </button>
        </aside>
    );
    }