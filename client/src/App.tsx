import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { pageContent, pathToPage, type Language, type PageKey } from "@/lib/site-content";
import SiteShell from "@/components/SiteShell";
import Home from "@/pages/Home";
import SitePage from "@/pages/SitePage";
import NotFound from "@/pages/NotFound";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("bvally-language");
  if (stored === "fr" || stored === "en") return stored;
  return window.navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

function setMeta(language: Language, pageKey: PageKey) {
  const isHome = pageKey === "home";
  const title = isHome
    ? language === "fr" ? "Foi. Éducation. Transformation. | Fondation Blessed Vally" : "Faith. Education. Transformation. | Blessed Vally Foundation"
    : pageContent[language][pageKey as Exclude<PageKey, "home">].metaTitle;
  document.title = title;
  document.documentElement.lang = language;
  const description = isHome
    ? language === "fr" ? "La Fondation Blessed Vally sert les enfants, les familles et les communautés aux États-Unis et en Haïti par la foi, l’éducation et la transformation durable." : "Blessed Vally Foundation serves children, families and communities in the United States and Haiti through faith, education and sustainable transformation."
    : pageContent[language][pageKey as Exclude<PageKey, "home">].metaDescription;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
}

function SiteRouter({ language }: { language: Language }) {
  const [location] = useLocation();
  const normalized = location.replace(/\/$/, "") || "/";
  const pageKey = pathToPage[normalized];
  if (!pageKey) return <NotFound />;
  if (pageKey === "home") return <Home language={language} />;
  return <SitePage pageKey={pageKey as Exclude<PageKey, "home">} language={language} />;
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [location] = useLocation();
  const normalized = location.replace(/\/$/, "") || "/";
  const activePage = pathToPage[normalized] ?? "home";

  useEffect(() => {
    window.localStorage.setItem("bvally-language", language);
    setMeta(language, activePage);
  }, [language, activePage]);

  return (
    <ErrorBoundary>
      <SiteShell language={language} onLanguageChange={setLanguage} activePage={activePage}>
        <SiteRouter language={language} />
      </SiteShell>
    </ErrorBoundary>
  );
}
