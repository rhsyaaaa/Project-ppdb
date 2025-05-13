import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "./ui/Card";


const data = [
  { name: "1", jumlah: 60 },
  { name: "2", jumlah: 40 },
  { name: "3", jumlah: 20 },
];

export default function WaveChart() {
  return (
    <Card>
      <CardContent>
        <p className="text-gray-600 mb-2">Pendaftar per Gelombang</p>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="jumlah" fill="#165533" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
