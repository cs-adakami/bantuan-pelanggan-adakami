# bantuan-pelanggan-adakami

Versi ini sudah diubah menjadi struktur **Vite + React** agar lebih mudah dirawat dan diedit.

## Lokasi edit paling penting

Buka file berikut:

```js
src/config/site.js
```

Di file itu Anda bisa langsung mengubah:

- `whatsappNumber`
- `whatsappMessage`
- `siteName`
- `tagline`
- teks disclaimer dan konten kartu

## Menjalankan project

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

## Catatan struktur

- `src/config/site.js` → pusat konfigurasi teks dan WhatsApp
- `src/hooks/useCopyProtection.js` → proteksi copy ringan di browser
- `src/App.jsx` → tampilan utama
- `src/styles.css` → styling utama
- `public/robots.txt` → diset `Disallow: /` agar tidak mudah diindeks

## Catatan penting

Halaman ini sudah diarahkan menjadi **portal informasi independen** agar tidak tampil seperti halaman resmi atau layanan khusus. Kata **Adakami** tetap dipertahankan sebagai penanda topik.
