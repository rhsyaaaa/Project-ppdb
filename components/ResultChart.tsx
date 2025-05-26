"use client";

import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

interface ResultChartProps {
  data: {
    lulus: number;
    tidakLulus: number;
    ditunda: number;
  };
}

const COLORS = ["#00C49F", "#FF8042", "#FFBB28"];

export default function ResultChart({ data }: ResultChartProps) {
  // fallback jika ada field 'pending' di data
  const lulus = data.lulus ?? 0;
  const tidakLulus = data.tidakLulus ?? 0;
  const ditunda = (data.ditunda ?? (data as any).pending) ?? 0;

  const chartData = [
    { name: "Lulus", value: lulus },
    { name: "Tidak Lulus", value: tidakLulus },
    { name: "Ditunda", value: ditunda },
  ];
  console.log("Result Chart Data:", chartData);
  const total = chartData.reduce((acc, item) => acc + item.value, 0);

  if (total === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-4 text-center">
        <h2 className="text-gray-600 text-lg font-semibold mb-4 text-black">
          Status Kelulusan
        </h2>
        <p className="text-gray-500">Belum ada data kelulusan.</p>
      </div>
    );
  }
  

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-gray-600 text-lg font-semibold mb-4 text-center text-black">
        Status Kelulusan
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#00C49F"
            dataKey="value"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
