import { useEffect, useMemo } from "react";
import { SITE_CONFIG, getWhatsAppLink } from "./config/site";
import { useCopyProtection } from "./hooks/useCopyProtection";

const HERO_NOTES = [
  {
    title: "Bahasa netral",
    text: "Naskah diarahkan untuk kebutuhan informasi umum dengan nada yang lebih tenang.",
  },
  {
    title: "Edit praktis",
    text: "Nomor WhatsApp dan isi pesan otomatis dipusatkan di satu file konfigurasi.",
  },
  {
    title: "Struktur rapi",
    text: "Tampilan dibangun agar mudah dirawat tanpa mengubah inti konten terlalu sering.",
  },
];

const EDITORIAL_NOTES = [
  "Halaman diposisikan sebagai referensi independen, bukan kanal resmi atau representasi institusional.",
  "Penyebutan kata Adakami dipertahankan sebagai penanda tema agar konteks pencarian tetap mudah dikenali.",
  "Susunan visual dibuat lebih tenang agar halaman terasa dewasa, bersih, dan tidak berlebihan.",
];

const BUILD_NOTES = [
  "Nomor dan pesan WhatsApp ada di src/config/site.js",
  "Susunan halaman utama ada di src/App.jsx",
  "Seluruh gaya visual tersimpan di src/styles.css",
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
        <header className="masthead surface">
          <a className="brand" href="#atas" aria-label={SITE_CONFIG.siteName}>
            <span className="brand__mark">A</span>
            <div className="brand__text">
              <strong>{SITE_CONFIG.siteName}</strong>
              <span>Referensi independen bertema {SITE_CONFIG.brandTopic}</span>
            </div>
          </a>

          <nav className="masthead__nav" aria-label="Navigasi utama">
            <a href="#panduan">Panduan</a>
            <a href="#wawasan">Wawasan</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a
            className="button button--soft"
            href={waLink}
            target="_blank"
            rel="noreferrer"
          >
            {SITE_CONFIG.contactLabel}
          </a>
        </header>

        <section id="atas" className="hero surface">
          <div className="hero__main">
            <span className="eyebrow">{SITE_CONFIG.heroBadge}</span>
            <h1 className="hero__title">{SITE_CONFIG.siteName}</h1>
            <p className="hero__lead">{SITE_CONFIG.tagline}</p>

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

            <div className="hero__notes">
              {HERO_NOTES.map((item) => (
                <article className="hero-note" key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero__side">
            <article className="surface panel panel--feature">
              <span className="panel__label">Catatan Editorial</span>
              <h2 className="panel__title">Arah tampilan dibuat lebih tenang dan lebih berkelas</h2>
              <p className="panel__copy">{SITE_CONFIG.description}</p>
              <ul className="panel__list">
                {EDITORIAL_NOTES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="surface panel">
              <span className="panel__label">{SITE_CONFIG.contactLabel}</span>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                {SITE_CONFIG.whatsappNumber}
              </a>
              <p className="panel__copy">
                Nomor dan pesan otomatis dapat diperbarui cepat dari satu titik konfigurasi.
              </p>
            </article>
          </aside>
        </section>

        <section className="statement-grid">
          {SITE_CONFIG.highlights.map((item) => (
            <article className="surface statement" key={item}>
              <span className="statement__icon">•</span>
              <p>{item}</p>
            </article>
          ))}
        </section>

        <section id="panduan" className="section section--split">
          <div className="section__heading">
            <span className="eyebrow">Struktur Konten</span>
            <h2 className="section__title">Tampilan final diarahkan ke komposisi yang lebih lapang dan presisi</h2>
            <p className="section__lead">
              Fokus utamanya adalah keterbacaan, ritme visual yang rapi, dan nuansa yang
              tidak terasa seperti template generik.
            </p>
          </div>

          <aside className="surface side-card">
            <span className="panel__label">Pusat Edit</span>
            <h3 className="side-card__title">Bagian yang paling sering diubah</h3>
            <ul className="panel__list panel__list--compact">
              {BUILD_NOTES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="card-grid card-grid--features">
          {SITE_CONFIG.featureCards.map((card) => (
            <article className="surface content-card" key={card.title}>
              <span className="content-card__tag">{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <section id="wawasan" className="section">
          <div className="section__heading section__heading--narrow">
            <span className="eyebrow">Wawasan Ringkas</span>
            <h2 className="section__title">Materi pendukung disusun singkat agar tetap terasa ringan</h2>
            <p className="section__lead">
              Setiap blok isi dibuat padat, bersih, dan cukup informatif tanpa membuat
              halaman tampak terlalu penuh.
            </p>
          </div>

          <div className="card-grid card-grid--articles">
            {SITE_CONFIG.articleCards.map((article) => (
              <article className="surface article-card" key={article.title}>
                <h3>{article.title}</h3>
                <p>{article.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="section">
          <div className="section__heading section__heading--narrow">
            <span className="eyebrow">FAQ</span>
            <h2 className="section__title">Pertanyaan umum seputar halaman ini</h2>
            <p className="section__lead">
              Bagian ini memperjelas posisi halaman, fungsi isi, dan lokasi pengaturan
              yang paling sering disesuaikan.
            </p>
          </div>

          <div className="faq-list">
            {SITE_CONFIG.faqs.map((faq) => (
              <details className="surface faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing surface">
          <div className="closing__content">
            <span className="eyebrow">Kontak Cepat</span>
            <h2 className="section__title">Perlu menyesuaikan nomor atau pesan WhatsApp?</h2>
            <p className="section__lead">
              Edit <code>src/config/site.js</code>. Seluruh tombol WhatsApp di halaman ini
              akan menyesuaikan otomatis tanpa perlu diperbarui satu per satu.
            </p>
          </div>

          <div className="closing__actions">
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
        <p>© 2026 {SITE_CONFIG.siteName}. Seluruh isi disusun sebagai materi informasi umum.</p>
      </footer>

      {protectionNotice && <div className="protection-toast">{protectionNotice}</div>}
    </>
  );
}

export default App;
