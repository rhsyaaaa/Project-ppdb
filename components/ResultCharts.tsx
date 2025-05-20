    "use client";

    import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

    const data = [
    { name: "Lulus", value: 75 },
    { name: "Tidak Lulus", value: 25 },
    ];

    const COLORS = ["#16a34a", "#dc2626"]; // Hijau untuk Lulus, Merah untuk Tidak Lulus

    export default function ResultChart() {
    return (
        <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Status Kelulusan</h2>
        <div className="flex justify-center">
            <PieChart width={300} height={200}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
                }
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
            </PieChart>
        </div>
        </div>
    );
    }
