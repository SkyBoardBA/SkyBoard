'use client';
import { Card } from "@/components/ui/Card";
import { axiosClient } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";

type ProviderItem = { id: string; name: string; devices: number };

export default function ProvidersPage() {
  const { data } = useQuery({
    queryKey: ['providers'],
    queryFn: async () => {
      const r = await axiosClient.get<{ items: ProviderItem[] }>('/api/providers');
      return r.data.items;
    },
  });

  const items = data ?? [];
  return (
    <Card title="Provajderi i uređaji (Demo)">
      <ul className="text-sm">
        {items.map((p) => (
          <li key={p.id} className="py-2 border-b">
            <div className="font-semibold">{p.name}</div>
            <div className="text-slate-600">Uređaji: {p.devices}</div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
