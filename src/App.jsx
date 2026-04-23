import { useEffect, useMemo } from "react";
import logoAdakami from "../adakamiR.png";
import { SITE_CONFIG, getWhatsAppLink } from "./config/site";
import { useCopyProtection } from "./hooks/useCopyProtection";

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.11 17.19c-.27-.14-1.6-.79-1.84-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.33-1.57-1.48-1.84-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.48-.84-2.03-.22-.52-.45-.45-.61-.46l-.52-.01c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26 0 1.33.97 2.61 1.11 2.79.14.18 1.91 2.92 4.63 4.09.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.27.23-.61.23-1.14.16-1.26-.07-.11-.25-.18-.52-.31Z" />
      <path d="M27.18 4.8A15.87 15.87 0 0 0 16 0C7.16 0 0 7.16 0 16c0 2.82.74 5.57 2.13 7.99L0 32l8.23-2.1A15.93 15.93 0 0 0 16 32c8.84 0 16-7.16 16-16 0-4.27-1.66-8.29-4.82-11.2ZM16 29.3a13.2 13.2 0 0 1-6.72-1.84l-.48-.28-4.88 1.24 1.3-4.76-.31-.49A13.23 13.23 0 0 1 2.7 16C2.7 8.67 8.67 2.7 16 2.7c3.53 0 6.84 1.37 9.34 3.87A13.1 13.1 0 0 1 29.3 16c0 7.33-5.97 13.3-13.3 13.3Z" />
    </svg>
  );
}

function CardIcon({ type }) {
  if (type === "Keamanan") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4Z" />
      </svg>
    );
  }

  if (type === "Verifikasi") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    );
  }

  if (type === "Literasi") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 11H7a2 2 0 0 0-2 2v6" />
      <path d="M13 3h6v6" />
      <path d="m21 3-7 7" />
      <path d="M3 7h6" />
      <path d="M3 11h6" />
      <path d="M3 15h4" />
    </svg>
  );
}

function OperatorIllustration() {
  return (
    <div className="operator-figure" aria-hidden="true">
      <div className="operator-figure__badge">Customer Care</div>
      <svg viewBox="0 0 420 340" className="operator-figure__svg">
        <defs>
          <linearGradient id="opBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dff8e8" />
            <stop offset="100%" stopColor="#a4e3bb" />
          </linearGradient>
          <linearGradient id="opShirt" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#58c884" />
            <stop offset="100%" stopColor="#2ea966" />
          </linearGradient>
        </defs>
        <circle cx="310" cy="78" r="36" fill="rgba(255,255,255,0.34)" />
        <circle cx="102" cy="62" r="24" fill="rgba(255,255,255,0.28)" />
        <rect x="80" y="50" width="260" height="240" rx="42" fill="url(#opBg)" />
        <circle cx="210" cy="122" r="54" fill="#ffd7c2" />
        <path d="M160 112c10-34 80-44 110 0v24h-8c-12-10-20-18-52-18-28 0-40 8-50 18h-10Z" fill="#295743" />
        <rect x="158" y="170" width="104" height="26" rx="12" fill="#ffd1ba" />
        <path d="M126 302c6-58 36-92 84-92s78 34 84 92Z" fill="url(#opShirt)" />
        <rect x="122" y="210" width="28" height="70" rx="14" fill="url(#opShirt)" />
        <rect x="270" y="210" width="28" height="70" rx="14" fill="url(#opShirt)" />
        <rect x="130" y="110" width="26" height="70" rx="13" fill="none" stroke="#23503c" strokeWidth="10" />
        <rect x="264" y="110" width="26" height="70" rx="13" fill="none" stroke="#23503c" strokeWidth="10" />
        <path d="M154 114c18-24 94-24 112 0" fill="none" stroke="#23503c" strokeWidth="10" strokeLinecap="round" />
        <rect x="258" y="150" width="18" height="30" rx="9" fill="#23503c" />
        <rect x="108" y="250" width="204" height="18" rx="9" fill="rgba(255,255,255,0.52)" />
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
            <img className="brand__logo" src={logoAdakami} alt="Logo Adakami" />
            <div className="brand__text">
              <strong>{SITE_CONFIG.siteName}</strong>
              <span>Informasi umum dan panduan digital</span>
            </div>
          </a>

          <nav className="masthead__nav" aria-label="Navigasi utama">
            <a href="#layanan">Layanan</a>
            <a href="#informasi">Informasi</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a className="button button--soft masthead__cta" href={waLink} target="_blank" rel="noreferrer">
            {SITE_CONFIG.contactLabel}
          </a>
        </header>

        <section id="atas" className="hero-banner surface">
          <div className="hero-banner__overlay">
            <span className="hero-banner__eyebrow">{SITE_CONFIG.heroBadge}</span>
            <h1>{SITE_CONFIG.siteName}</h1>
            <p>{SITE_CONFIG.tagline}</p>
          </div>
          <div className="hero-banner__art">
            <OperatorIllustration />
          </div>
        </section>

        <section className="content-layout">
          <div className="content-main">
            <article className="welcome-card surface">
              <div className="welcome-card__head">
                <div className="welcome-card__logo-box">
                  <img src={logoAdakami} alt="Logo Adakami" className="welcome-card__logo" />
                </div>
                <div className="welcome-card__copy">
                  <h2>Selamat datang di {SITE_CONFIG.siteName}</h2>
                  <p>
                    Halaman ini menyajikan informasi umum, panduan praktis, dan referensi singkat
                    dengan susunan yang lebih rapi, bahasa yang jelas, serta tampilan yang nyaman dibaca.
                  </p>
                </div>
              </div>

              <div className="welcome-card__actions">
                <a className="button button--primary" href={waLink} target="_blank" rel="noreferrer">
                  {SITE_CONFIG.primaryButtonText}
                </a>
                <a className="button button--ghost" href="#faq">
                  Lihat FAQ
                </a>
              </div>
            </article>

            <section id="layanan" className="service-list">
              {SITE_CONFIG.featureCards.map((card) => (
                <a
                  key={card.title}
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="service-item surface"
                >
                  <span className="service-item__icon">
                    <CardIcon type={card.tag} />
                  </span>
                  <div className="service-item__body">
                    <strong>{card.title}</strong>
                    <p>{card.text}</p>
                  </div>
                </a>
              ))}
            </section>
          </div>

          <aside id="informasi" className="content-side">
            <article className="info-card surface">
              <span className="info-card__label">Ringkasan</span>
              <h3>Informasi disusun lebih jelas dan mudah dipahami</h3>
              <p>{SITE_CONFIG.description}</p>
            </article>

            <article className="info-card surface">
              <span className="info-card__label">Tentang Halaman</span>
              <ul className="info-card__list">
                {SITE_CONFIG.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="contact-card surface">
              <span className="info-card__label">Kontak</span>
              <div className="contact-card__row">
                <div className="contact-card__identity">
                  <img src={logoAdakami} alt="Logo Adakami" className="contact-card__logo" />
                  <div>
                    <strong>{SITE_CONFIG.contactLabel}</strong>
                    <span>WhatsApp aktif</span>
                  </div>
                </div>

                <a href={waLink} target="_blank" rel="noreferrer" className="contact-card__number">
                  {SITE_CONFIG.whatsappNumber}
                </a>
              </div>
              <p>
                Hubungi pengelola melalui WhatsApp untuk memperoleh penjelasan tambahan
                mengenai informasi yang tersedia pada halaman ini.
              </p>
            </article>

            <article id="faq" className="info-card surface">
              <span className="info-card__label">FAQ</span>
              <div className="faq-stack">
                {SITE_CONFIG.faqs.map((faq) => (
                  <details key={faq.question} className="faq-item">
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </article>
          </aside>
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
