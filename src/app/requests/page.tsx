'use client';
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import useSWR from 'swr';
import { axiosClient } from "@/lib/client";

const fetcher = (url: string) => axiosClient.get(url).then(r=>r.data);

export default function RequestsPage() {
  const { data } = useSWR('/api/requests', fetcher);
  const items = data?.items || [];
  return (
    <Card title="Slot zahtjevi (Demo)">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-600">
              <th className="py-2">ID</th>
              <th>Uređaj</th>
              <th>Slot</th>
              <th>Vrijedi do</th>
              <th>Status</th>
              <th className="text-right">Akcije</th>
            </tr>
          </thead>
          <tbody>
            {items.map((r:any) => (
              <tr key={r.id} className="border-t">
                <td className="py-2">{r.id}</td>
                <td>{r.device_id}</td>
                <td>{r.slot.start_offset_seconds}s / {r.slot.duration_seconds}s (C={r.cycle_length_seconds})</td>
                <td>{new Date(r.validity_until).toLocaleString()}</td>
                <td className="capitalize">{r.status}</td>
                <td className="text-right">
                  <Button className="mr-2" variant="outline">Edit</Button>
                  <Button className="mr-2" onClick={()=>alert("Approved!")}>Approve</Button>
                  <Button variant="ghost" onClick={()=>alert("Rejected!")}>Reject</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}