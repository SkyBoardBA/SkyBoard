import { Card } from "@/components/ui/Card";

export default function Page() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card title="Status agenata">
        <div className="text-sm text-slate-600">Online: 3 • Offline: 2 • Token expiring: 1</div>
      </Card>
      <Card title="Brzi linkovi">
        <ul className="list-disc pl-6 text-sm">
          <li><a href="/requests">Pregled slot zahtjeva</a></li>
          <li><a href="/downloads">Paketi za preuzimanje</a></li>
          <li><a href="/pop-upload">PoP upload</a></li>
        </ul>
      </Card>
    </div>
  );
}