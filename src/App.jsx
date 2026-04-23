import { useEffect, useMemo } from "react";
import { SITE_CONFIG, getWhatsAppLink } from "./config/site";
import { useCopyProtection } from "./hooks/useCopyProtection";

const QUICK_POINTS = [
  {
    value: "Netral",
    label: "Bahasa halaman diarahkan untuk informasi umum, bukan layanan khusus.",
  },
  {
    value: "Mudah Edit",
    label: "Nomor WhatsApp dan pesan otomatis cukup diubah dari satu file config.",
  },
  {
    value: "Ringan",
    label: "Struktur Vite + React dibuat agar pengembangan dan deploy tetap sederhana.",
  },
];

const EDITORIAL_POINTS = [
  {
    title: "Bahasa dibuat aman",
    text: "Konten dihindarkan dari istilah yang mudah menimbulkan kesan halaman resmi, transaksi, atau layanan finansial.",
  },
  {
    title: "Topik tetap jelas",
    text: "Kata Adakami tetap dipertahankan sebagai penanda topik publik agar pengunjung memahami konteks halaman.",
  },
  {
    title: "Pengelolaan lebih cepat",
    text: "Data utama dipisahkan dari tampilan sehingga perubahan nomor, pesan, dan copy bisa dilakukan tanpa bongkar komponen lain.",
  },
];

const BUILD_NOTES = [
  "Edit nomor dan pesan di src/config/site.js",
  "Tampilan utama ada di src/App.jsx",
  "Seluruh gaya visual ada di src/styles.css",
];

function App() {
  const waLink = useMemo(
    () => getWhatsAppLink(SITE_CONFIG.whatsappNumber, SITE_CONFIG.whatsappMessage),
    []
  );

  const protectionNotice = useCopyProtection();

  useEffect(() => {
    document.title = SITE_CONFIG.siteName;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", SITE_CONFIG.description);
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute("content", SITE_CONFIG.siteName);
    }

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag) {
      ogDescriptionTag.setAttribute("content", SITE_CONFIG.description);
    }

    const ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) {
      ogUrlTag.setAttribute("content", SITE_CONFIG.domain);
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute("href", SITE_CONFIG.domain);
    }
  }, []);

  return (
    <>
      <main className="shell">
        <header className="topbar card">
          <a className="brand" href="#atas" aria-label={SITE_CONFIG.siteName}>
            <span className="brand__mark">A</span>
            <div>
              <strong>{SITE_CONFIG.siteName}</strong>
              <span>Portal independen bertema {SITE_CONFIG.brandTopic}</span>
            </div>
          </a>

          <nav className="topbar__nav" aria-label="Navigasi utama">
            <a href="#panduan">Panduan</a>
            <a href="#edukasi">Edukasi</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a
            className="button button--ghost topbar__cta"
            href={waLink}
            target="_blank"
            rel="noreferrer"
          >
            {SITE_CONFIG.contactLabel}
          </a>
        </header>

        <section id="atas" className="hero card">
          <div className="hero__content">
            <span className="pill">{SITE_CONFIG.heroBadge}</span>
            <h1>{SITE_CONFIG.siteName}</h1>
            <p className="hero__text">{SITE_CONFIG.tagline}</p>

            <div className="hero__actions">
              <a
                className="button button--primary"
                href={waLink}
                target="_blank"
                rel="noreferrer"
              >
                {SITE_CONFIG.primaryButtonText}
              </a>

              <a className="button button--ghost" href="#panduan">
                {SITE_CONFIG.secondaryButtonText}
              </a>
            </div>

            <div className="hero__quickpoints">
              {QUICK_POINTS.map((item) => (
                <article className="quickpoint" key={item.value}>
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero__side">
            <div className="mini-card mini-card--featured">
              <span className="mini-card__label">Tentang Halaman</span>
              <h2>{SITE_CONFIG.brandTopic}</h2>
              <p>{SITE_CONFIG.description}</p>
              <ul className="mini-list">
                {SITE_CONFIG.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mini-card">
              <span className="mini-card__label">{SITE_CONFIG.contactLabel}</span>
              <a href={waLink} target="_blank" rel="noreferrer" className="contact-link">
                {SITE_CONFIG.whatsappNumber}
              </a>
              <p>Nomor dan pesan otomatis dapat diubah cepat dari satu file konfigurasi.</p>
            </div>

            <div className="mini-card mini-card--note">
              <span className="mini-card__label">Disclaimer</span>
              <p>{SITE_CONFIG.disclaimer}</p>
            </div>
          </aside>
        </section>

        <section className="grid grid--highlights">
          {SITE_CONFIG.highlights.map((item) => (
            <article className="card highlight" key={item}>
              <span className="highlight__icon">✓</span>
              <p>{item}</p>
            </article>
          ))}
        </section>

        <section id="panduan" className="section section--split">
          <div className="section__head">
            <span className="section__eyebrow">Panduan Utama</span>
            <h2>Tampilan dibuat lebih rapi tanpa menghilangkan fleksibilitas edit</h2>
            <p>
              Struktur halaman dipisah menjadi blok-blok yang jelas supaya lebih enak
              dibaca, lebih modern, dan lebih aman secara positioning konten.
            </p>
          </div>

          <div className="section__side card build-panel">
            <span className="section__eyebrow">Pusat Edit</span>
            <h3>Bagian yang paling sering Anda ubah</h3>
            <ul className="build-list">
              {BUILD_NOTES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid grid--cards">
          {SITE_CONFIG.featureCards.map((card) => (
            <article className="card feature-card" key={card.title}>
              <span className="tag">{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section id="edukasi" className="section">
          <div className="section__head">
            <span className="section__eyebrow">Arah Editorial</span>
            <h2>Fondasi konten dibuat lebih matang dan lebih meyakinkan</h2>
            <p>
              Bagian ini memperjelas bahwa situs mengarah ke informasi umum,
              edukasi, dan pengalaman baca yang bersih.
            </p>
          </div>

          <div className="grid grid--editorial">
            {EDITORIAL_POINTS.map((item, index) => (
              <article className="card editorial-card" key={item.title}>
                <span className="editorial-card__number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section__head">
            <span className="section__eyebrow">Artikel Ringkas</span>
            <h2>Materi pendukung untuk memperkaya nilai informasi halaman</h2>
          </div>

          <div className="grid grid--articles">
            {SITE_CONFIG.articleCards.map((article) => (
              <article className="card article-card" key={article.title}>
                <h3>{article.title}</h3>
                <p>{article.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="section section--faq">
          <div className="section__head">
            <span className="section__eyebrow">FAQ</span>
            <h2>Pertanyaan yang paling sering muncul</h2>
          </div>

          <div className="faq-list">
            {SITE_CONFIG.faqs.map((faq) => (
              <details className="card faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="card closing-card">
          <div>
            <span className="section__eyebrow">Kontak Cepat</span>
            <h2>Butuh ganti nomor atau isi pesan WhatsApp?</h2>
            <p>
              Cukup edit <code>src/config/site.js</code>. Semua tombol WhatsApp di
              halaman ini akan ikut menyesuaikan secara otomatis.
            </p>
          </div>

          <div className="closing-card__actions">
            <a
              className="button button--primary"
              href={waLink}
              target="_blank"
              rel="noreferrer"
            >
              {SITE_CONFIG.floatingButtonLabel}
            </a>
            <a className="button button--ghost" href="#atas">
              Kembali ke Atas
            </a>
          </div>
        </section>
      </main>

      <a
        className="floating-wa"
        href={waLink}
        target="_blank"
        rel="noreferrer"
        aria-label={SITE_CONFIG.floatingButtonLabel}
      >
        WA
      </a>

      <footer className="footer">
        <p>{SITE_CONFIG.disclaimer}</p>
        <p>© 2026 {SITE_CONFIG.siteName}. Semua materi disusun untuk tujuan informasi umum.</p>
      </footer>

      {protectionNotice && <div className="protection-toast">{protectionNotice}</div>}
    </>
  );
}

export default App;
