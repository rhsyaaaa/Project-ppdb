    // components/ui/card.tsx
    import React from "react";

    export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`rounded-xl bg-white shadow-md p-4 ${className}`}>
        {children}
        </div>
    );
    }

    export function CardContent({ children }: { children: React.ReactNode }) {
    return <div className="mt-2">{children}</div>;
    }
