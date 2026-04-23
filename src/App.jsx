import { useEffect, useMemo } from "react";
import { SITE_CONFIG, getWhatsAppLink } from "./config/site";
import { useCopyProtection } from "./hooks/useCopyProtection";

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
        <section className="hero card">
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

            <div className="disclaimer-box">
              <strong>Catatan penting</strong>
              <p>{SITE_CONFIG.disclaimer}</p>
            </div>
          </div>

          <aside className="hero__side">
            <div className="mini-card">
              <span className="mini-card__label">Topik</span>
              <h2>{SITE_CONFIG.brandTopic}</h2>
              <p>{SITE_CONFIG.description}</p>
            </div>

            <div className="mini-card">
              <span className="mini-card__label">{SITE_CONFIG.contactLabel}</span>
              <a href={waLink} target="_blank" rel="noreferrer" className="contact-link">
                {SITE_CONFIG.whatsappNumber}
              </a>
              <p>Ubah nomor dan pesan otomatis di satu tempat melalui file konfigurasi.</p>
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

        <section id="panduan" className="section">
          <div className="section__head">
            <span className="section__eyebrow">Panduan Utama</span>
            <h2>Konten dibuat netral, rapi, dan mudah disunting</h2>
            <p>
              Struktur React memisahkan data, tampilan, dan proteksi ringan agar
              pemeliharaan lebih cepat dilakukan.
            </p>
          </div>

          <div className="grid grid--cards">
            {SITE_CONFIG.featureCards.map((card) => (
              <article className="card feature-card" key={card.title}>
                <span className="tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section__head">
            <span className="section__eyebrow">Artikel Ringkas</span>
            <h2>Materi edukatif yang relevan untuk halaman informasi</h2>
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

        <section className="section section--faq">
          <div className="section__head">
            <span className="section__eyebrow">FAQ</span>
            <h2>Pertanyaan yang sering muncul</h2>
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
            <span className="section__eyebrow">Kontak</span>
            <h2>Butuh mengubah nomor atau isi pesan WhatsApp?</h2>
            <p>
              Edit file <code>src/config/site.js</code>. Komponen lain akan ikut
              memperbarui tautan WhatsApp secara otomatis.
            </p>
          </div>

          <a
            className="button button--primary"
            href={waLink}
            target="_blank"
            rel="noreferrer"
          >
            {SITE_CONFIG.floatingButtonLabel}
          </a>
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
