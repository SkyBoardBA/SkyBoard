import "./../styles/globals.css";
import Providers from "@/lib/query-provider";
import React from "react";

export const metadata = { title: "SkyBoard", description: "SkyBoard — Cloud portal za LED slotove" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bs">
      <body>
        <Providers>
          <div className="min-h-screen">
            <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
              <div className="mx-auto max-w-6xl flex items-center gap-4 px-4 py-3">
                <div className="h-8 w-8 rounded-full bg-brand"></div>
                <div className="font-semibold">SkyBoard</div>
                <nav className="ml-auto flex gap-4 text-sm">
                  <a href="/">Dashboard</a>
                  <a href="/requests">Requests</a>
                  <a href="/downloads">Downloads</a>
                  <a href="/pop-upload">PoP Upload</a>
                  <a href="/audit">Audit</a>
                  <a href="/providers">Providers</a>
                </nav>
              </div>
            </header>
            <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}