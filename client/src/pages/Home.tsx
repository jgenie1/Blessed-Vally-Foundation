import { ArrowRight, MapPin, Quote } from "lucide-react";
import { Link } from "wouter";
import { ContentSection, ImpactBand, PillarCard, SectionIntro, Stat } from "@/components/SiteComponents";
import HomePhotoCarousel from "@/components/HomePhotoCarousel";
import { homeContent, pillars, newsCards, routePaths, type Language } from "@/lib/site-content";

export default function Home({ language }: { language: Language }) {
  const t = homeContent[language];
  const pillarList = pillars[language];
  const stories = newsCards[language];

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__image" aria-hidden="true" />
        <div className="home-hero__veil" aria-hidden="true" />
        <div className="container home-hero__content">
          <div className="home-hero__copy">
            <p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="home-hero__description">{t.description}</p>
            <div className="hero-actions">
              <Link className="button button--coral" href={routePaths.mission}>{language === "fr" ? "Découvrir notre mission" : "Discover our mission"}<ArrowRight size={17} /></Link>
              <Link className="text-link text-link--light" href={routePaths.getInvolved}>{language === "fr" ? "Participer" : "Get involved"}<span>↗</span></Link>
            </div>
          </div>
        </div>
        <div className="container home-hero__bottom">
          <span className="scroll-note">{language === "fr" ? "Défiler pour découvrir" : "Scroll to discover"}</span>
          <span className="hero-line" />
          <span className="hero-location"><MapPin size={14} /> US / HT</span>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-strip__inner">
          <span>{language === "fr" ? "Fondation fondée sur la foi" : "Faith-driven foundation"}</span>
          <span className="trust-strip__dot" />
          <span>{language === "fr" ? "États-Unis & Haïti" : "United States & Haiti"}</span>
          <span className="trust-strip__dot" />
          <span>{language === "fr" ? "Une vision éducative à long terme" : "A long-term educational vision"}</span>
        </div>
      </section>

      <section className="home-intro section-space">
        <div className="container home-intro__grid">
          <div className="home-intro__media image-frame image-frame--landscape">
            <img src="/images/children-school.jpg" alt={language === "fr" ? "Enfants réunis dans un espace éducatif" : "Children gathered in an educational space"} />
            <div className="image-frame__badge">BVF / 01</div>
          </div>
          <div className="home-intro__copy">
            <SectionIntro eyebrow={t.visionLabel} title={t.visionTitle} body={t.visionBody} />
            <div className="home-intro__signature"><span className="signature-line" /><span>{language === "fr" ? "Une mission qui commence par les enfants" : "A mission that begins with children"}</span></div>
            <Link className="text-link" href={routePaths.about}>{language === "fr" ? "Qui nous sommes" : "Who we are"}<ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="pillars-section section-space section-space--topless">
        <div className="container">
          <SectionIntro eyebrow={t.pillarLabel} title={t.pillarTitle} body={t.pillarBody} />
          <div className="pillars-grid">
            {pillarList.map((pillar, index) => <PillarCard key={pillar.number} pillar={pillar} language={language} index={index} />)}
          </div>
        </div>
      </section>

      <ImpactBand eyebrow={t.impactEyebrow} title={t.impactTitle} body={t.impactBody} ctaLabel={t.impactCta} ctaHref={routePaths.mission} />

      <section className="haiti-feature section-space">
        <div className="container haiti-feature__grid">
          <div className="haiti-feature__copy">
            <p className="eyebrow"><span className="eyebrow-dot" />{t.haitiLabel}</p>
            <h2>{t.haitiTitle}</h2>
            <p>{t.haitiBody}</p>
            <div className="stat-row">
              <Stat value="02" label={language === "fr" ? "pays au cœur de la mission" : "countries at the heart of the mission"} />
              <Stat value="05" label={language === "fr" ? "piliers qui avancent ensemble" : "pillars moving together"} />
            </div>
            <Link className="button button--outline" href={routePaths.haiti}>{t.haitiCta}<ArrowRight size={17} /></Link>
          </div>
          <div className="haiti-feature__media image-frame image-frame--landscape">
            <img src="/images/children-uniforms.jpg" alt={language === "fr" ? "Enfants souriants en uniforme" : "Smiling children in school uniforms"} />
            <div className="image-frame__badge">BVF / 02</div>
          </div>
        </div>
      </section>

      {/* Interactive Photo Carousel */}
      <HomePhotoCarousel language={language} />

      <section className="stories-section section-space section-space--sand">
        <div className="container">
          <div className="stories-section__heading">
            <SectionIntro eyebrow={t.storiesLabel} title={t.storiesTitle} body={t.storiesBody} />
            <Link className="text-link" href={routePaths.news}>{language === "fr" ? "Tous les articles du blog" : "All blog articles"}<ArrowRight size={16} /></Link>
          </div>
          <div className="stories-grid">
            {stories.map((story) => <Link key={story.title} href={routePaths[story.page]} className="story-card">
              <div className="story-card__meta"><span>{story.date}</span><span className="story-card__dot" /><span>{story.label}</span></div>
              <h3>{story.title}</h3>
              <p>{story.body}</p>
              <span className="story-card__arrow">↗</span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="quote-section section-space">
        <div className="container quote-section__inner">
          <Quote size={32} strokeWidth={1.2} />
          <p>{language === "fr" ? "Servir aujourd’hui. Éduquer demain. Transformer les générations." : "Serving today. Educating tomorrow. Transforming generations."}</p>
          <span>— Blessed Vally Foundation</span>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta__inner">
          <div>
            <p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />{language === "fr" ? "Un prochain pas" : "A next step"}</p>
            <h2>{t.finalTitle}</h2>
            <p>{t.finalBody}</p>
          </div>
          <div className="final-cta__actions">
            <Link className="button button--light" href={routePaths.getInvolved}>{language === "fr" ? "Participer" : "Get involved"}<ArrowRight size={17} /></Link>
            <Link className="text-link text-link--light" href={routePaths.contact}>{language === "fr" ? "Nous contacter" : "Contact us"}<span>↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
