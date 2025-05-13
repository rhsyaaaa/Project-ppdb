import { Card } from "./ui/Card";

   ;

    type StatCardProps = {
    label: string;
    value: string | number;
    };

    export default function StatCard({ label, value }: StatCardProps) {
    return (
        <Card>
        <div className="p-4">
            <p className="text-gray-600">{label}</p>
            <h2 className="text-2xl font-bold">{value}</h2>
        </div>
        </Card>
    );
    }
