"use client";

import { Card, CardContent } from "./ui/Card";
    import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

    const data = [
    { name: "Laki-laki", value: 70 },
    { name: "Perempuan", value: 50 },
    ];
    const COLORS = ["#165533", "#fcd240"];

    export default function GenderChart() {
    return (
        <Card>
        <CardContent>
            <p className="text-gray-600 mb-2">Jenis Kelamin Pendaftar</p>
            <ResponsiveContainer width="100%" height={200}>
            <PieChart>
                <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={60}
                label
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
                <Tooltip />
            </PieChart>
            </ResponsiveContainer>
        </CardContent>
        </Card>
    );
    }