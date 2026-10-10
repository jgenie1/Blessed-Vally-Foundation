import { ArrowUpRight, BookOpen, HeartHandshake, Landmark, Sprout, UsersRound } from "lucide-react";
import { Link } from "wouter";
import type { Language, PageKey, PageSection, Pillar } from "@/lib/site-content";
import { pageLabels, routePaths } from "@/lib/site-content";

const icons = [HeartHandshake, BookOpen, UsersRound, Sprout, Landmark];

export function SectionIntro({ eyebrow, title, body, align = "left" }: { eyebrow: string; title: string; body?: string; align?: "left" | "center" }) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p className="section-intro__body">{body}</p>}
    </div>
  );
}

export function PillarCard({ pillar, language, index }: { pillar: Pillar; language: Language; index: number }) {
  const Icon = icons[index % icons.length];
  return (
    <Link href={routePaths[pillar.page]} className={`pillar-card pillar-card--${pillar.accent}`}>
      <div className="pillar-card__top">
        <span className="pillar-card__number">{pillar.number}</span>
        <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div>
        <p className="pillar-card__short">{pillar.short}</p>
        <h3>{pillar.title}</h3>
        <p className="pillar-card__body">{pillar.body}</p>
      </div>
      <span className="pillar-card__link">{language === "fr" ? "Explorer" : "Explore"}<ArrowUpRight size={15} /></span>
    </Link>
  );
}

export function PageHero({ kicker, title, description, image, language }: { kicker: string; title: string; description: string; image: string; language: Language }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <div className="page-hero__copy">
          <p className="eyebrow"><span className="eyebrow-dot" />{kicker}</p>
          <h1>{title}</h1>
          <p className="page-hero__description">{description}</p>
          <div className="page-hero__meta">
            <span>{language === "fr" ? "États-Unis" : "United States"}</span>
            <span className="meta-rule" />
            <span>{language === "fr" ? "Haïti" : "Haiti"}</span>
          </div>
        </div>
        <div className="page-hero__media image-frame image-frame--portrait">
          <img src={image} alt="" />
          <div className="image-frame__caption">{language === "fr" ? "Servir aujourd’hui. Construire demain." : "Serving today. Building tomorrow."}</div>
        </div>
      </div>
    </section>
  );
}

export function ContentSection({ section, index, language }: { section: PageSection; index: number; language: Language }) {
  return (
    <section className={`content-section ${index % 2 === 1 ? "content-section--tinted" : ""}`}>
      <div className="container content-section__grid">
        <div className="content-section__rail">
          <span className="content-section__index">0{index + 1}</span>
          <span className="content-section__line" />
          <span className="content-section__rail-label">{language === "fr" ? "BVF" : "BVF"}</span>
        </div>
        <div className="content-section__body">
          <p className="eyebrow"><span className="eyebrow-dot" />{section.eyebrow}</p>
          <h2>{section.title}</h2>
          {section.body.split("\n").map((line) => <p key={line}>{line}</p>)}
          {section.bullets && (
            <ul className="check-list">
              {section.bullets.map((bullet) => <li key={bullet}><span className="check-list__dot" />{bullet}</li>)}
            </ul>
          )}
          {section.quote && <blockquote>{section.quote}</blockquote>}
        </div>
      </div>
    </section>
  );
}

export function ImpactBand({ eyebrow, title, body, ctaLabel, ctaHref }: { eyebrow: string; title: string; body: string; ctaLabel: string; ctaHref: string }) {
  return (
    <section className="impact-band">
      <div className="container impact-band__inner">
        <div>
          <p className="eyebrow eyebrow--light"><span className="eyebrow-dot" />{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div className="impact-band__aside">
          <p>{body}</p>
          <Link className="button button--light" href={ctaHref}>{ctaLabel}<ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </section>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return <div className="stat"><strong>{value}</strong><span>{label}</span></div>;
}

export function FooterLink({ page, language }: { page: PageKey; language: Language }) {
  return <Link href={routePaths[page]}>{pageLabels[page][language]}</Link>;
}
