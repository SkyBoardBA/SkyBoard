'use client';
import { Card } from "@/components/ui/Card";
import { axiosClient } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";

type DownloadItem = { id: string; name: string; size_mb: number };

export default function DownloadsPage() {
  const { data } = useQuery({
    queryKey: ['downloads'],
    queryFn: async () => {
      const r = await axiosClient.get<{ items: DownloadItem[] }>('/api/downloads');
      return r.data.items;
    },
  });

  const items = data ?? [];
  return (
    <Card title="Paketi za preuzimanje (Demo)">
      <ul className="text-sm">
        {items.map((p) => (
          <li key={p.id} className="py-2 border-b flex items-center justify-between">
            <span>{p.name} — {p.size_mb} MB</span>
            <a className="text-brand" href="#">Preuzmi</a>
          </li>
        ))}
      </ul>
    </Card>
  );
}
