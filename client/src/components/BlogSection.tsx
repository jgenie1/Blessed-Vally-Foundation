import { ArrowRight, BookOpen, Calendar, ChevronLeft, ChevronRight, Heart, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { blogPosts } from "@/lib/blog-data";
import { routePaths, type Language } from "@/lib/site-content";

export default function BlogSection({ language }: { language: Language }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [readingPostId, setReadingPostId] = useState<string | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setReadingPostId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "water") return post.id.includes("eau-potable");
    if (selectedCategory === "vision") return post.id.includes("vision-piliers");
    if (selectedCategory === "pastoral") return post.id.includes("responsabilite");
    return true;
  });

  const featuredPost = filteredPosts[0] || blogPosts[0];
  const secondaryPosts = filteredPosts.slice(1);

  const readingPost = blogPosts.find((p) => p.id === readingPostId) || null;

  // Navigate between articles in modal
  const handleNextArticle = () => {
    if (!readingPost) return;
    const currentIndex = blogPosts.findIndex((p) => p.id === readingPost.id);
    const nextIndex = (currentIndex + 1) % blogPosts.length;
    setReadingPostId(blogPosts[nextIndex].id);
  };

  const handlePrevArticle = () => {
    if (!readingPost) return;
    const currentIndex = blogPosts.findIndex((p) => p.id === readingPost.id);
    const prevIndex = (currentIndex - 1 + blogPosts.length) % blogPosts.length;
    setReadingPostId(blogPosts[prevIndex].id);
  };

  const categories = [
    { id: "all", label: { fr: "Tous les articles", en: "All articles" } },
    { id: "water", label: { fr: "Eau potable & Santé", en: "Clean Water & Health" } },
    { id: "vision", label: { fr: "Mission & Piliers", en: "Mission & Pillars" } },
    { id: "pastoral", label: { fr: "Message de la Fondatrice", en: "Founder's Message" } },
  ];

  return (
    <section className="blog-section section-space">
      <div className="container">
        {/* Category Filter Pills */}
        <div
          className="blog-filters"
          role="tablist"
          aria-label={language === "fr" ? "Catégories du blog" : "Blog categories"}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`blog-filter-btn ${selectedCategory === cat.id ? "is-active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
              role="tab"
              aria-selected={selectedCategory === cat.id}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Featured Article Hero Card */}
        {featuredPost && (
          <article className="blog-featured-card">
            <div className="blog-featured-card__media image-frame image-frame--landscape">
              <img src={featuredPost.image} alt={featuredPost.title[language]} />
              <div className="image-frame__badge">{featuredPost.readTime[language]}</div>
            </div>

            <div className="blog-featured-card__content">
              <div className="blog-meta">
                <span>{featuredPost.category[language]}</span>
                <span className="blog-meta__dot" />
                <span>{featuredPost.date[language]}</span>
              </div>

              <h2>{featuredPost.title[language]}</h2>

              <div className="blog-author">
                <User size={13} style={{ display: "inline", marginRight: 6, verticalAlign: "-2px" }} />
                {featuredPost.author[language]}
              </div>

              <p className="blog-excerpt">{featuredPost.excerpt[language]}</p>

              {featuredPost.quote && (
                <div className="blog-quote-callout">{featuredPost.quote[language]}</div>
              )}

              <button
                type="button"
                className="button button--coral"
                onClick={() => setReadingPostId(featuredPost.id)}
                style={{ alignSelf: "flex-start", marginTop: 8 }}
              >
                <BookOpen size={16} />
                {language === "fr" ? "Lire l’article complet" : "Read full article"}
                <ArrowRight size={16} />
              </button>
            </div>
          </article>
        )}

        {/* Grid for other articles */}
        {secondaryPosts.length > 0 && (
          <div className="blog-grid">
            {secondaryPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card__media">
                  <img src={post.image} alt={post.title[language]} />
                </div>
                <div className="blog-card__body">
                  <div className="blog-meta">
                    <span>{post.category[language]}</span>
                    <span className="blog-meta__dot" />
                    <span>{post.date[language]}</span>
                  </div>

                  <h3 className="blog-card__title">{post.title[language]}</h3>

                  <div className="blog-card__author">
                    Par {post.author[language]}
                  </div>

                  <p className="blog-card__excerpt">{post.excerpt[language]}</p>

                  <button
                    type="button"
                    className="blog-card__action"
                    onClick={() => setReadingPostId(post.id)}
                  >
                    <span>{language === "fr" ? "Lire la publication" : "Read article"}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Full Article Reading Modal */}
      {readingPost && (
        <div
          className="blog-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reading-title"
          onClick={() => setReadingPostId(null)}
        >
          <div className="blog-modal__dialog" onClick={(e) => e.stopPropagation()}>
            <div className="blog-modal__header">
              <div className="blog-meta" style={{ margin: 0 }}>
                <span>{readingPost.category[language]}</span>
                <span className="blog-meta__dot" />
                <span>{readingPost.readTime[language]}</span>
              </div>
              <button
                type="button"
                className="blog-modal__close"
                onClick={() => setReadingPostId(null)}
                aria-label={language === "fr" ? "Fermer l'article" : "Close article"}
              >
                <X size={18} />
              </button>
            </div>

            <div className="blog-modal__content">
              <article className="blog-modal__article">
                <h1 id="reading-title">{readingPost.title[language]}</h1>

                <div className="blog-modal__author-row">
                  <span className="blog-modal__author-name">
                    {readingPost.author[language]}
                  </span>
                  <span className="blog-modal__date">
                    <Calendar size={13} style={{ display: "inline", marginRight: 5, verticalAlign: "-2px" }} />
                    {readingPost.date[language]}
                  </span>
                </div>

                <div className="blog-modal__image-wrap image-frame image-frame--landscape">
                  <img src={readingPost.image} alt={readingPost.title[language]} />
                  <div className="image-frame__caption">{readingPost.category[language]}</div>
                </div>

                {readingPost.quote && (
                  <div className="blog-modal__quote">{readingPost.quote[language]}</div>
                )}

                <div className="blog-modal__paragraphs">
                  {readingPost.content[language].map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Footer with Prev/Next and Support actions */}
                <div className="blog-modal__footer-actions">
                  <div style={{ display: "flex", gap: 10 }}>
                    <button
                      type="button"
                      className="button button--small button--paper"
                      onClick={handlePrevArticle}
                    >
                      <ChevronLeft size={16} />
                      {language === "fr" ? "Précédent" : "Previous"}
                    </button>
                    <button
                      type="button"
                      className="button button--small button--paper"
                      onClick={handleNextArticle}
                    >
                      {language === "fr" ? "Suivant" : "Next"}
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <div style={{ display: "flex", gap: 10 }}>
                    <Link
                      className="button button--small button--coral"
                      href={routePaths.donate}
                      onClick={() => setReadingPostId(null)}
                    >
                      <Heart size={14} />
                      {language === "fr" ? "Soutenir ce projet" : "Support this project"}
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
