// app/pendaftar/update-siswa/[id]/page.tsx

import { EditPendaftarForm } from "@/components/EditPendaftarForm";

interface EditPageProps {
  params: { id: string };
}

export default function EditPendaftarPage({ params }: EditPageProps) {
  return <EditPendaftarForm id={params.id} />;
}