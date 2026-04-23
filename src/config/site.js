export const SITE_CONFIG = {
  brandTopic: "Adakami",
  siteName: "Pusat Informasi Adakami",
  tagline: "Panduan umum, literasi digital, dan keamanan online dalam satu tempat.",
  description:
    "Portal informasi independen bertema Adakami yang berfokus pada panduan umum, keamanan digital, FAQ, dan kontak pengelola situs.",
  domain: "https://bantuan-pelanggan-adakami.asia",
  whatsappNumber: "0812909787",
  whatsappMessage:
    "Halo admin, saya ingin bertanya tentang panduan umum di situs ini.",
  contactLabel: "Hubungi Pengelola",
  floatingButtonLabel: "Chat WhatsApp",
  heroBadge: "Portal Informasi Independen",
  primaryButtonText: "Buka WhatsApp",
  secondaryButtonText: "Jelajahi Panduan",
  disclaimer:
    "Situs ini bersifat independen dan hanya untuk informasi umum. Kata “Adakami” digunakan sebagai penanda topik pencarian publik dan bukan representasi resmi pihak mana pun.",
  highlights: [
    "Fokus pada edukasi dan keamanan digital",
    "Bukan halaman resmi, bukan representasi perusahaan",
    "Kontak dikelola oleh pengelola situs secara independen",
  ],
  featureCards: [
    {
      title: "Panduan Keamanan Akun",
      text: "Langkah dasar untuk menjaga akses, sandi, dan perangkat tetap aman saat digunakan sehari-hari.",
      tag: "Keamanan",
    },
    {
      title: "Cek Tautan & Kontak",
      text: "Tips sederhana untuk membedakan tautan yang aman, domain yang sesuai, dan kontak yang layak dipercaya.",
      tag: "Verifikasi",
    },
    {
      title: "Edukasi Anti Penipuan",
      text: "Daftar kebiasaan yang membantu Anda mengurangi risiko salah klik, salah kirim, atau tertipu pesan palsu.",
      tag: "Edukasi",
    },
    {
      title: "FAQ Umum",
      text: "Jawaban cepat untuk pertanyaan yang paling sering muncul saat mengakses informasi bertema Adakami.",
      tag: "FAQ",
    },
  ],
  articleCards: [
    {
      title: "Cara mengenali halaman yang aman",
      text: "Periksa domain, bahasa halaman, pola formulir, dan konsistensi identitas visual sebelum berinteraksi lebih jauh.",
    },
    {
      title: "Jangan mudah membagikan kode rahasia",
      text: "Kode OTP, PIN, dan tautan verifikasi sebaiknya tidak dibagikan kepada siapa pun, termasuk yang mengaku membantu.",
    },
    {
      title: "Gunakan jalur komunikasi yang jelas",
      text: "Simpan hanya kontak yang memang Anda percayai dan hindari menindaklanjuti pesan mendesak yang tidak jelas asalnya.",
    },
  ],
  faqs: [
    {
      question: "Apakah situs ini halaman resmi?",
      answer:
        "Tidak. Situs ini adalah portal informasi independen. Kata “Adakami” dipakai sebagai penanda topik agar halaman mudah dikenali.",
    },
    {
      question: "Apakah situs ini menyediakan transaksi atau layanan khusus?",
      answer:
        "Tidak. Halaman ini hanya memuat panduan umum, materi edukasi, dan kanal kontak pengelola situs.",
    },
    {
      question: "Di mana saya mengubah nomor WhatsApp?",
      answer:
        "Nomor WhatsApp dan isi pesan otomatis dipusatkan di file src/config/site.js agar mudah diedit tanpa mengubah komponen lain.",
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
