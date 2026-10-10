import { ArrowRight, ChevronDown, Globe2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import LogoMark from "@/components/LogoMark";
import type { Language, PageKey } from "@/lib/site-content";
import { pageLabels, primaryNav, routePaths, secondaryNav, ui } from "@/lib/site-content";
import { FooterLink } from "@/components/SiteComponents";

export default function SiteShell({ language, onLanguageChange, activePage, children }: { language: Language; onLanguageChange: (language: Language) => void; activePage: PageKey; children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const copy = ui[language];

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  const closeMenus = () => {
    setMobileOpen(false);
    setExploreOpen(false);
    scrollToTop();
  };

  return (
    <div className="site-shell">
      <div className="announcement-bar">
        <div className="container announcement-bar__inner">
          <span className="announcement-bar__mark" />
          <span>{language === "fr" ? "Une nouvelle phase pour la Fondation Blessed Vally" : "A new chapter for Blessed Vally Foundation"}</span>
          <Link href={routePaths.mission} onClick={scrollToTop}>{language === "fr" ? "Lire notre vision" : "Read our vision"}<span aria-hidden="true">↗</span></Link>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header__inner">
          <LogoMark />
          <nav className="desktop-nav" aria-label={language === "fr" ? "Navigation principale" : "Primary navigation"}>
            <Link href="/" onClick={scrollToTop} className={activePage === "home" ? "is-active" : ""}>{pageLabels.home[language]}</Link>
            {primaryNav.map((item) => <Link key={item.key} href={routePaths[item.key]} onClick={scrollToTop} className={activePage === item.key ? "is-active" : ""}>{item.label[language]}</Link>)}
            <div className="explore-menu">
              <button type="button" className={`explore-trigger ${secondaryNav.some((item) => item.key === activePage) ? "is-active" : ""}`} onClick={() => setExploreOpen((open) => !open)} aria-expanded={exploreOpen}>
                {copy.explore}<ChevronDown size={14} className={exploreOpen ? "rotate" : ""} />
              </button>
              {exploreOpen && (
                <div className="explore-panel">
                  <p>{copy.exploreLabel}</p>
                  {secondaryNav.map((item) => <Link key={item.key} href={routePaths[item.key]} onClick={closeMenus}>{item.label[language]}</Link>)}
                </div>
              )}
            </div>
          </nav>
          <div className="site-header__actions">
            <div className="language-switcher" aria-label={copy.language}>
              <Globe2 size={16} />
              <button type="button" className={language === "en" ? "is-active" : ""} onClick={() => onLanguageChange("en")}>EN</button>
              <span>/</span>
              <button type="button" className={language === "fr" ? "is-active" : ""} onClick={() => onLanguageChange("fr")}>FR</button>
            </div>
            <Link className="button button--small button--coral header-donate" href={routePaths.donate} onClick={scrollToTop}>{copy.donate}</Link>
            <button className="mobile-menu-button" type="button" onClick={() => setMobileOpen((open) => !open)} aria-label={mobileOpen ? copy.closeMenu : copy.openMenu} aria-expanded={mobileOpen}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
        {mobileOpen && (
          <div className="mobile-nav">
            <div className="container mobile-nav__inner">
              <Link href="/" onClick={closeMenus} className={activePage === "home" ? "is-active" : ""}>{pageLabels.home[language]}</Link>
              {[...primaryNav, ...secondaryNav].map((item) => <Link key={item.key} href={routePaths[item.key]} onClick={closeMenus} className={activePage === item.key ? "is-active" : ""}>{item.label[language]}</Link>)}
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container site-footer__top">
          <div className="site-footer__brand">
            <LogoMark variant="footer" />
            <p>{copy.footerNote}</p>
            <div className="footer-tagline">{copy.footerLine}</div>
          </div>
          <div className="site-footer__column">
            <p className="footer-label">{language === "fr" ? "Découvrir" : "Discover"}</p>
            <FooterLink page="about" language={language} />
            <FooterLink page="mission" language={language} />
            <FooterLink page="education" language={language} />
            <FooterLink page="haiti" language={language} />
            <FooterLink page="leadership" language={language} />
          </div>
          <div className="site-footer__column">
            <p className="footer-label">{language === "fr" ? "S’impliquer" : "Get involved"}</p>
            <FooterLink page="partnerships" language={language} />
            <FooterLink page="getInvolved" language={language} />
            <FooterLink page="donate" language={language} />
            <FooterLink page="news" language={language} />
            <FooterLink page="contact" language={language} />
          </div>
          <div className="site-footer__column">
            <p className="footer-label">{language === "fr" ? "Légal & Statut" : "Legal & Tax Status"}</p>
            <FooterLink page="taxStatus" language={language} />
            <FooterLink page="privacy" language={language} />
            <FooterLink page="terms" language={language} />
          </div>
          <div className="site-footer__column site-footer__contact">
            <p className="footer-label">{copy.contact}</p>
            <a href="mailto:Blessedvallyfoundation@gmail.com">Blessedvallyfoundation@gmail.com</a>
            <a href="tel:+17864430472" className="footer-contact-phone">+1 (786) 443-0472</a>
            <span className="footer-contact-address">12933 SW 129 St, Miami, FL 33177</span>
            <span className="footer-contact-address">12, Pelerin 4A, Petionville-Haiti</span>
            <span>{language === "fr" ? "États-Unis & Haïti" : "United States & Haiti"}</span>
            <Link className="footer-arrow-link" href={routePaths.contact} onClick={scrollToTop}>{language === "fr" ? "Parler avec nous" : "Talk with us"} <span>↗</span></Link>
          </div>
        </div>
        {/* INFUSA Client Acquisition Spotlight (Compact) */}
        <div className="container site-footer__infusa-section">
          <div className="footer-infusa-banner">
            <div className="footer-infusa-banner__info">
              <span className="footer-infusa-banner__pulse" />
              <span className="footer-infusa-banner__tag">
                {language === "fr" ? "Agence INFUSA" : "INFUSA Agency"}
              </span>
              <span className="footer-infusa-banner__sep">•</span>
              <span className="footer-infusa-banner__pitch">
                {language === "fr"
                  ? "Vous aimez la réalisation de ce site ? Confiez-nous votre projet web ou logiciel."
                  : "Admiring this website? Entrust your web or software project to us."}
              </span>
            </div>
            <a
              href="https://www.infusa.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-infusa-banner__btn"
            >
              <span>{language === "fr" ? "Créer votre site avec INFUSA" : "Start your project with INFUSA"}</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        <div className="container site-footer__bottom">
          <span>© {new Date().getFullYear()} Blessed Vally Foundation</span>
          <span className="site-footer__agency-credit">
            {language === "fr" ? "Conception & Développement :" : "Engineered & Designed by :"}{" "}
            <a
              href="https://www.infusa.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-infusa-credit-link"
            >
              <strong>INFUSA</strong> (www.infusa.pro) ↗
            </a>
          </span>
          <span>{language === "fr" ? "Foi. Éducation. Transformation." : "Faith. Education. Transformation."}</span>
        </div>
      </footer>
    </div>
  );
}
