"use client";

import { Card, CardContent } from "./ui/Card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface GenderChartProps {
  data: {
    lakiLaki: number;
    perempuan: number;
  };
}

const COLORS = ["#165533", "#fcd240"];

export default function GenderChart({ data }: GenderChartProps) {
  const chartData = [
    { name: "Laki-laki", value: data.lakiLaki },
    { name: "Perempuan", value: data.perempuan },
  ];

  return (
    <Card>
      <CardContent>
        <p className="text-gray-600 mb-2 text-lg font-semibold mb-4 text-center text-black">Jenis Kelamin Pendaftar</p>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {chartData.map((entry, index) => (
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
