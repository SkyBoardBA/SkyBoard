'use client';
import { Card } from "@/components/ui/Card";
import { useState } from "react";

export default function PopUploadPage() {
  const [file, setFile] = useState<File| null>(null);
  return (
    <Card title="PoP Upload (CSV/JSON) – Demo">
      <input type="file" onChange={(e)=>setFile(e.target.files?.[0]||null)} />
      {file && <div className="text-sm mt-2">Odabran: {file.name}</div>}
    </Card>
  );
}
