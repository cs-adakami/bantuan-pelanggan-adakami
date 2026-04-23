import { useEffect, useMemo } from "react";
import { SITE_CONFIG, getWhatsAppLink } from "./config/site";
import { useCopyProtection } from "./hooks/useCopyProtection";

const HERO_NOTES = [
  {
    title: "Ringkas",
    text: "Informasi utama dirangkum secara padat agar lebih cepat dipahami.",
  },
  {
    title: "Profesional",
    text: "Bahasa yang digunakan jelas, terstruktur, dan tetap nyaman dibaca.",
  },
  {
    title: "Mudah Diakses",
    text: "Bagian penting disusun rapi agar pembaca menemukan informasi dengan lebih efisien.",
  },
];

const EDITORIAL_NOTES = [
  "Konten difokuskan pada informasi umum, panduan praktis, dan referensi singkat yang relevan.",
  "Susunan halaman dirancang agar tetap bersih, profesional, dan mudah dipahami di berbagai ukuran layar.",
  "Jalur komunikasi dibuat sederhana melalui WhatsApp agar pengunjung dapat menghubungi pengelola dengan cepat.",
];

const KEY_POINTS = [
  "Informasi umum yang disajikan secara ringkas dan terstruktur.",
  "Pendekatan bahasa profesional untuk membantu keterbacaan.",
  "Referensi singkat yang relevan untuk kebutuhan pembaca.",
];

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.11 17.19c-.27-.14-1.6-.79-1.84-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.33-1.57-1.48-1.84-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.48-.84-2.03-.22-.52-.45-.45-.61-.46l-.52-.01c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.61 1.11 2.79.14.18 1.91 2.92 4.63 4.09.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.27.23-.61.23-1.14.16-1.26-.07-.11-.25-.18-.52-.31Z" />
      <path d="M27.18 4.8A15.87 15.87 0 0 0 16 0C7.16 0 0 7.16 0 16c0 2.82.74 5.57 2.13 7.99L0 32l8.23-2.1A15.93 15.93 0 0 0 16 32c8.84 0 16-7.16 16-16 0-4.27-1.66-8.29-4.82-11.2ZM16 29.3a13.2 13.2 0 0 1-6.72-1.84l-.48-.28-4.88 1.24 1.3-4.76-.31-.49A13.23 13.23 0 0 1 2.7 16C2.7 8.67 8.67 2.7 16 2.7c3.53 0 6.84 1.37 9.34 3.87A13.1 13.1 0 0 1 29.3 16c0 7.33-5.97 13.3-13.3 13.3Z" />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="hero-media" aria-hidden="true">
      <div className="hero-media__glow" />
      <svg viewBox="0 0 640 420" className="hero-media__svg">
        <defs>
          <linearGradient id="heroGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#eef5f0" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#9bc7b0" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d9efe1" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#d9efe1" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <rect x="44" y="40" width="552" height="340" rx="28" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" />
        <rect x="82" y="82" width="220" height="24" rx="12" fill="url(#heroGlow)" opacity="0.9" />
        <rect x="82" y="126" width="340" height="12" rx="6" fill="url(#heroLine)" />
        <rect x="82" y="150" width="300" height="12" rx="6" fill="url(#heroLine)" />
        <rect x="82" y="174" width="250" height="12" rx="6" fill="url(#heroLine)" />
        <rect x="82" y="232" width="156" height="44" rx="22" fill="url(#heroGlow)" />
        <rect x="252" y="232" width="130" height="44" rx="22" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
        <rect x="424" y="86" width="122" height="122" rx="28" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)" />
        <circle cx="485" cy="147" r="34" fill="url(#heroGlow)" opacity="0.88" />
        <circle cx="485" cy="147" r="16" fill="rgba(9,17,14,0.82)" />
        <rect x="82" y="308" width="154" height="30" rx="15" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
        <rect x="252" y="308" width="154" height="30" rx="15" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
        <rect x="422" y="308" width="124" height="30" rx="15" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
      </svg>
    </div>
  );
}

function App() {
  const waLink = useMemo(
    () => getWhatsAppLink(SITE_CONFIG.whatsappNumber, SITE_CONFIG.whatsappMessage),
    []
  );
  const protectionNotice = useCopyProtection();

  useEffect(() => {
    document.title = SITE_CONFIG.siteName;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute("content", SITE_CONFIG.description);

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) ogTitleTag.setAttribute("content", SITE_CONFIG.siteName);

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag) ogDescriptionTag.setAttribute("content", SITE_CONFIG.description);

    const ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) ogUrlTag.setAttribute("content", SITE_CONFIG.domain);

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) canonicalTag.setAttribute("href", SITE_CONFIG.domain);
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

          <a className="button button--soft" href={waLink} target="_blank" rel="noreferrer">
            {SITE_CONFIG.contactLabel}
          </a>
        </header>

        <section id="atas" className="hero surface">
          <div className="hero__main">
            <span className="eyebrow">{SITE_CONFIG.heroBadge}</span>
            <h1 className="hero__title">{SITE_CONFIG.siteName}</h1>
            <p className="hero__lead">{SITE_CONFIG.tagline}</p>

            <div className="hero__actions">
              <a className="button button--primary" href={waLink} target="_blank" rel="noreferrer">
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
            <HeroVisual />

            <article className="surface panel panel--feature">
              <span className="panel__label">Tentang Halaman</span>
              <h2 className="panel__title">Informasi disusun secara profesional, ringkas, dan mudah dipahami</h2>
              <p className="panel__copy">{SITE_CONFIG.description}</p>
              <ul className="panel__list">
                {EDITORIAL_NOTES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="surface panel">
              <span className="panel__label">Layanan Informasi</span>
              <a href={waLink} target="_blank" rel="noreferrer" className="contact-link">
                {SITE_CONFIG.whatsappNumber}
              </a>
              <p className="panel__copy">
                Hubungi pengelola melalui WhatsApp untuk memperoleh informasi tambahan secara langsung.
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
            <span className="eyebrow">Keunggulan Halaman</span>
            <h2 className="section__title">Informasi penting disusun rapi untuk memudahkan pembaca</h2>
            <p className="section__lead">
              Setiap bagian dirancang agar lebih mudah dibaca, lebih terarah, dan tetap relevan
              untuk kebutuhan informasi umum.
            </p>
          </div>

          <aside className="surface side-card">
            <span className="panel__label">Nilai Utama</span>
            <h3 className="side-card__title">Pendekatan isi yang lebih jelas dan profesional</h3>
            <ul className="panel__list panel__list--compact">
              {KEY_POINTS.map((item) => (
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
            <h2 className="section__title">Materi pendukung yang relevan untuk kebutuhan pembaca</h2>
            <p className="section__lead">
              Konten tambahan disusun secara singkat agar tetap informatif, ringan, dan mudah ditelaah.
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
              Bagian ini membantu pembaca memahami fokus halaman dan cara memperoleh informasi lanjutan.
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
            <span className="eyebrow">Hubungi Kami</span>
            <h2 className="section__title">Butuh informasi tambahan?</h2>
            <p className="section__lead">
              Silakan hubungi pengelola melalui WhatsApp untuk memperoleh penjelasan lebih lanjut.
            </p>
          </div>

          <div className="closing__actions">
            <a className="button button--primary" href={waLink} target="_blank" rel="noreferrer">
              {SITE_CONFIG.floatingButtonLabel}
            </a>
            <a className="button button--ghost" href="#atas">
              Kembali ke Atas
            </a>
          </div>
        </section>
      </main>

      <a className="floating-wa" href={waLink} target="_blank" rel="noreferrer" aria-label={SITE_CONFIG.floatingButtonLabel}>
        <WhatsAppIcon className="floating-wa__icon" />
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
