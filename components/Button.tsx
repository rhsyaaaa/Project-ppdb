    import React from "react";
    import clsx from "clsx";

    interface ButtonProps {
    children: React.ReactNode;
    color?: "green" | "blue" | "yellow" | "red";
    onClick?: () => void;
    href?: string;
    }

    export default function Button({ children, color = "blue", onClick, href }: ButtonProps) {
    const baseClass =
        "px-4 py-2 rounded text-sm font-semibold transition duration-200 cursor-pointer shadow";

    const colorClass = {
        green: "bg-green-600 text-white hover:bg-green-700",
        blue: "bg-blue-600 text-white hover:bg-blue-700",
        yellow: "bg-yellow-500 text-white hover:bg-yellow-600",
        red: "bg-red-600 text-white hover:bg-red-700",
    };

    const className = clsx(baseClass, colorClass[color]);

    if (href) {
        return (
        <a href={href} className={className}>
            {children}
        </a>
        );
    }

    return (
        <button onClick={onClick} className={className}>
        {children}
        </button>
    );
    }
