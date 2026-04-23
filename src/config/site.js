export const SITE_CONFIG = {
  brandTopic: "Adakami",
  siteName: "Panduan Informasi Adakami",
  tagline:
    "Kumpulan panduan ringkas, wawasan digital, dan FAQ bertema Adakami dalam format yang ringan, jelas, dan mudah dibaca.",
  description:
    "Halaman informasi independen bertema Adakami yang memuat panduan umum, literasi digital, keamanan akses, dan FAQ untuk kebutuhan referensi singkat.",
  domain: "https://bantuan-pelanggan-adakami.asia",
  whatsappNumber: "0812909787",
  whatsappMessage:
    "Halo admin, saya ingin bertanya tentang informasi umum di situs ini.",
  contactLabel: "Kontak Pengelola",
  floatingButtonLabel: "WhatsApp Pengelola",
  heroBadge: "Panduan Independen",
  primaryButtonText: "Hubungi via WhatsApp",
  secondaryButtonText: "Lihat Isi Halaman",
  disclaimer:
    "Halaman ini disusun secara independen untuk kebutuhan informasi umum. Penyebutan kata “Adakami” digunakan sebagai penanda topik pencarian publik dan tidak dimaksudkan sebagai representasi resmi pihak mana pun.",
  highlights: [
    "Konten informatif dengan bahasa yang netral",
    "Tidak mewakili institusi, brand, atau layanan resmi",
    "Dikelola secara independen untuk kebutuhan referensi umum",
  ],
  featureCards: [
    {
      title: "Panduan Keamanan Akses",
      text: "Ringkasan langkah dasar untuk menjaga akses, kata sandi, dan perangkat tetap aman saat digunakan sehari-hari.",
      tag: "Keamanan",
    },
    {
      title: "Validasi Tautan dan Kontak",
      text: "Panduan singkat untuk menilai tautan, domain, dan jalur komunikasi agar lebih mudah dibedakan mana yang patut dipercaya.",
      tag: "Validasi",
    },
    {
      title: "Literasi Pesan dan Modus Palsu",
      text: "Catatan dasar untuk membantu pembaca lebih waspada terhadap pola pesan mendesak, tautan aneh, dan ajakan yang meragukan.",
      tag: "Literasi",
    },
    {
      title: "Ringkasan Pertanyaan Umum",
      text: "Kumpulan jawaban ringkas untuk pertanyaan yang paling sering muncul saat seseorang mencari informasi bertema Adakami.",
      tag: "FAQ",
    },
  ],
  articleCards: [
    {
      title: "Cara menilai halaman yang layak dipercaya",
      text: "Perhatikan domain, konsistensi bahasa, struktur halaman, dan kejelasan identitas sebelum mengikuti instruksi yang ada di dalamnya.",
    },
    {
      title: "Mengapa kode rahasia tidak boleh dibagikan",
      text: "Kode OTP, PIN, dan tautan verifikasi sebaiknya tetap bersifat pribadi agar akses digital tidak mudah disalahgunakan.",
    },
    {
      title: "Pilih jalur komunikasi yang lebih jelas",
      text: "Simpan hanya kontak yang benar-benar Anda kenal, dan hindari merespons pesan mendesak dari sumber yang tidak konsisten.",
    },
  ],
  faqs: [
    {
      question: "Apakah halaman ini merupakan situs resmi?",
      answer:
        "Bukan. Halaman ini adalah media informasi independen. Kata “Adakami” digunakan sebagai penanda topik agar konteks pencarian lebih mudah dikenali.",
    },
    {
      question: "Apakah situs ini menyediakan transaksi atau layanan khusus?",
      answer:
        "Tidak. Isi halaman difokuskan pada panduan umum, materi edukatif, dan kanal kontak pengelola situs.",
    },
    {
      question: "Di mana nomor WhatsApp bisa diubah?",
      answer:
        "Nomor WhatsApp dan isi pesan otomatis dipusatkan di file src/config/site.js agar mudah diperbarui tanpa menyunting banyak komponen.",
    },
  ],
};

export function normalizeWhatsAppNumber(input) {
  const digits = String(input ?? "").replace(/\D/g, "");

  if (!digits) return "";
  if (digits.startsWith("62")) return digits;
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;

  return digits;
}

export function getWhatsAppLink(number, message) {
  const normalized = normalizeWhatsAppNumber(number);

  if (!normalized) return "#";

  return `https://wa.me/${normalized}?text=${encodeURIComponent(message ?? "")}`;
}
