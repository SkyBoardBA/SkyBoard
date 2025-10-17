# SkyBoard – Next.js 14 UI (Demo)

Stack: React + Next.js 14 (App Router) + TypeScript + Tailwind + Axios + SWR.

## Brzi start (dev)
```bash
npm i
npm run dev
```

## Production build (self-hosting)
```bash
npm run build
npm start
```
Servirajte preko Nginx reverse proxy-ja (primjer u `deploy/nginx.conf`) ili koristite Docker (`Dockerfile`).

## Mock API (za demo)
- `/api/requests` – demo lista slot zahtjeva
- `/api/downloads` – demo paketi
- `/api/providers` – demo provajderi

Zamijeni mock rute pozivima prema stvarnom backend-u kad bude spreman.
