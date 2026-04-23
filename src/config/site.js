export const SITE_CONFIG = {
  brandTopic: "Adakami",
  siteName: "Pusat Informasi Adakami",
  tagline:
    "Informasi umum, panduan digital, dan ringkasan pertanyaan yang disusun secara ringkas, profesional, dan mudah dipahami.",
  description:
    "Halaman informasi independen bertema Adakami yang menyajikan panduan umum, literasi digital, keamanan akses, dan referensi singkat secara rapi dan profesional.",
  domain: "https://bantuan-pelanggan-adakami.asia",
  whatsappNumber: "0812909787",
  whatsappMessage:
    "Halo admin, saya ingin bertanya mengenai informasi umum di situs ini.",
  contactLabel: "Hubungi Kami",
  floatingButtonLabel: "Konsultasi via WhatsApp",
  heroBadge: "Informasi Umum",
  primaryButtonText: "Hubungi via WhatsApp",
  secondaryButtonText: "Pelajari Selengkapnya",
  disclaimer:
    "Halaman ini disusun secara independen untuk kebutuhan informasi umum. Penyebutan kata “Adakami” digunakan sebagai penanda topik pencarian publik dan tidak dimaksudkan sebagai representasi resmi pihak mana pun.",
  highlights: [
    "Informasi disusun ringkas dan mudah dipahami",
    "Bahasa yang digunakan jelas, profesional, dan terstruktur",
    "Konten difokuskan pada referensi umum dan literasi digital",
  ],
  featureCards: [
    {
      title: "Panduan Keamanan Akses",
      text: "Penjelasan dasar untuk membantu menjaga keamanan akses, kata sandi, dan perangkat saat digunakan dalam aktivitas sehari-hari.",
      tag: "Keamanan",
    },
    {
      title: "Verifikasi Tautan dan Kontak",
      text: "Panduan singkat untuk mengenali tautan, domain, dan jalur komunikasi yang patut diperhatikan sebelum ditindaklanjuti.",
      tag: "Verifikasi",
    },
    {
      title: "Literasi Digital dan Kehati-hatian",
      text: "Ringkasan langkah sederhana untuk membantu pembaca lebih waspada terhadap pesan, tautan, atau ajakan yang meragukan.",
      tag: "Literasi",
    },
    {
      title: "Pertanyaan yang Sering Diajukan",
      text: "Kumpulan jawaban singkat untuk pertanyaan yang paling umum muncul saat mencari informasi bertema Adakami.",
      tag: "FAQ",
    },
  ],
  articleCards: [
    {
      title: "Menilai halaman yang layak dipercaya",
      text: "Perhatikan domain, konsistensi bahasa, struktur halaman, dan kejelasan identitas sebelum mengikuti informasi yang tersedia.",
    },
    {
      title: "Pentingnya menjaga data pribadi",
      text: "Kode OTP, PIN, dan tautan verifikasi sebaiknya tetap bersifat pribadi agar akses digital tidak mudah disalahgunakan.",
    },
    {
      title: "Memilih jalur komunikasi yang tepat",
      text: "Gunakan hanya kontak yang jelas dan hindari menindaklanjuti pesan mendesak dari sumber yang tidak konsisten.",
    },
  ],
  faqs: [
    {
      question: "Apakah halaman ini merupakan situs resmi?",
      answer:
        "Bukan. Halaman ini merupakan media informasi independen. Kata “Adakami” digunakan sebagai penanda topik agar konteks pencarian lebih mudah dikenali.",
    },
    {
      question: "Apa fokus utama isi halaman ini?",
      answer:
        "Isi halaman difokuskan pada informasi umum, panduan praktis, literasi digital, dan jawaban singkat atas pertanyaan yang sering diajukan.",
    },
    {
      question: "Bagaimana cara menghubungi pengelola situs?",
      answer:
        "Anda dapat menghubungi pengelola melalui tombol WhatsApp yang tersedia di halaman untuk memperoleh informasi lebih lanjut.",
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
