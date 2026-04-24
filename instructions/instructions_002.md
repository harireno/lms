Bagus — dan ya, **supaya saya tidak berasumsi, saya memang perlu file aktif dari kamu.**

Karena untuk “menghidupkan frontend home page”, saya perlu tahu kondisi aktual project kamu sekarang:

### Tolong upload file berikut dulu (minimal ini):

## Wajib (minimum)

Upload isi file ini:

```bash
frontend/package.json
frontend/tsconfig.json
frontend/next.config.js
frontend/src/app/layout.tsx
frontend/src/app/page.tsx
frontend/src/app/globals.css
frontend/src/components/layout/Header.tsx
frontend/src/components/layout/Footer.tsx
frontend/src/components/home/HeroSection.tsx
```

---

## Kalau ada, sekalian upload ini juga (lebih bagus)

```bash
frontend/.env.local.example
frontend/src/app/about/page.tsx
frontend/src/app/contact/page.tsx
```

---

## Kalau kamu belum yakin semua file sudah benar, upload juga hasil tree folder:

Kalau di root `frontend`, jalankan (Windows PowerShell):

```powershell
tree /F
```

atau kalau di dalam folder frontend saja:

```powershell
cd frontend
tree /F
```

Copy-paste hasilnya ke sini juga boleh.

Itu membantu saya cek:

* apakah `[slug]` benar sudah jadi folder
* apakah path sesuai
* apakah ada file yang hilang
* apakah import path akan error
* apakah starter home page bisa langsung dijalankan

---

## Setelah kamu upload, saya akan bantu cek 3 hal:

### 1. Structural Check

Apakah folder dan file sudah sesuai instruksi.

### 2. Compile Check

Apakah home page bisa jalan:

```bash
npm run dev
```

tanpa error.

### 3. Patch Jika Ada Salah

Kalau ada yang kurang, saya bantu patch file yang perlu diperbaiki.

---

## Target kita sederhana dulu:

Bikin ini hidup dulu:

```text
http://localhost:3000
```

muncul:

* Header
* Hero Section
* Featured Courses placeholder
* Footer

Kalau itu hidup, milestone pertama selesai.

---

Upload file aktif itu dulu, jangan saya berasumsi.

Begitu kamu kirim, kita debug step-by-step.
