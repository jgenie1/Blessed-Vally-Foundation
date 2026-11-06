import {
  ArrowRight,
  Camera,
  Check,
  Copy,
  ExternalLink,
  FileCheck2,
  FileText,
  HeartHandshake,
  Landmark,
  Lock,
  Mail,
  MapPin,
  Phone,
  Quote,
  Receipt,
  Scale,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "wouter";
import { pageContent, routePaths, type Language } from "@/lib/site-content";

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <button
      type="button"
      className="tax-cert-field__copy-btn"
      onClick={handleCopy}
      title={label}
      aria-label={label}
    >
      {copied ? <Check size={12} style={{ color: "var(--leaf)" }} /> : <Copy size={12} />}
      <span>{copied ? (label.startsWith("Copier") ? "Copié !" : "Copied!") : label}</span>
    </button>
  );
}

interface LegalDocSectionProps {
  pageKey: "privacy" | "terms";
  language: Language;
}

export default function LegalDocSection({ pageKey, language }: LegalDocSectionProps) {
  const isFr = language === "fr";
  const model = pageContent[language][pageKey];

  const privacyTrustCards = [
    {
      icon: <ShieldCheck size={24} style={{ color: "var(--leaf)" }} />,
      title: isFr ? "Zéro Revente de Données" : "Zero Data Resale",
      desc: isFr
        ? "Vos coordonnées et données personnelles ne sont jamais vendues, louées, cédées ni commercialisées à des tiers ou annonceurs."
        : "Your personal details and contact records are never sold, rented, leased, or traded to any third-party marketers or aggregators.",
    },
    {
      icon: <Lock size={24} style={{ color: "var(--coral-dark)" }} />,
      title: isFr ? "Paiements Sécurisés TLS (Stripe)" : "PCI-DSS Encrypted Payments",
      desc: isFr
        ? "Transactions bancaires chiffrées TLS de bout en bout via Stripe. Aucun numéro complet de carte n'est stocké sur nos serveurs."
        : "End-to-end TLS encryption via Stripe. No credit or debit card numbers are ever stored on or accessible to our servers.",
    },
    {
      icon: <Receipt size={24} style={{ color: "var(--navy, #102a43)" }} />,
      title: isFr ? "Finalité Limitée & Reçus" : "Purpose-Bound Collection",
      desc: isFr
        ? "Données recueillies uniquement pour l'émission des reçus officiels de don et le suivi direct de notre mission en Haïti."
        : "Information collected exclusively for issuing official donor receipts and direct communication regarding our programs in Haiti.",
    },
    {
      icon: <UserCheck size={24} style={{ color: "var(--leaf)" }} />,
      title: isFr ? "Droits Complets des Donateurs" : "Full Donor Rights",
      desc: isFr
        ? "Droit d'accès, de rectification et d'effacement de vos données garanti sur simple demande écrite à notre secrétariat."
        : "Full rights of access, correction, and removal of your records guaranteed upon simple written request to our administration.",
    },
  ];

  const termsTrustCards = [
    {
      icon: <FileCheck2 size={24} style={{ color: "var(--leaf)" }} />,
      title: isFr ? "Acceptation des Conditions" : "Acceptance of Terms",
      desc: isFr
        ? "L'accès au site web et l'usage de ses services impliquent l'adhésion pleine et entière aux présentes conditions générales."
        : "Accessing this website and utilizing its services constitutes full and unconditional acceptance of these terms and conditions.",
    },
    {
      icon: <Camera size={24} style={{ color: "var(--coral-dark)" }} />,
      title: isFr ? "Propriété Intellectuelle Protégée" : "Intellectual Property",
      desc: isFr
        ? "Photographies originales du terrain en Haïti, textes, marques et logos BVF sont protégés au titre du droit d'auteur."
        : "Original field photography of our Haiti campuses, texts, trademarks, and BVF branding emblems are strictly protected.",
    },
    {
      icon: <HeartHandshake size={24} style={{ color: "var(--coral)" }} />,
      title: isFr ? "Dons Volontaires & Irrévocables" : "Voluntary & Irrevocable Gifts",
      desc: isFr
        ? "Toute contribution financière constitue un don volontaire et irrévocable affecté à notre objet social et humanitaire."
        : "All financial contributions represent voluntary, irrevocable charitable donations serving our educational mission.",
    },
    {
      icon: <Scale size={24} style={{ color: "var(--navy, #102a43)" }} />,
      title: isFr ? "Lois de Floride & Juridiction" : "Florida Governing Law",
      desc: isFr
        ? "Conditions régies et interprétées conformément aux lois de l'État de Floride et aux lois fédérales des États-Unis d'Amérique."
        : "Terms governed by and construed in accordance with the laws of the State of Florida and the United States of America.",
    },
  ];

  const trustCards = pageKey === "privacy" ? privacyTrustCards : termsTrustCards;

  return (
    <div className="legal-doc-page section-space">
      <div className="container">
        {/* 1. BARRE DE NAVIGATION LÉGALE INTERACTIVE */}
        <div className="legal-nav-switcher">
          <Link
            href={routePaths.privacy}
            className={`legal-nav-pill ${pageKey === "privacy" ? "legal-nav-pill--active" : ""}`}
          >
            <ShieldCheck size={16} />
            <span>{isFr ? "Politique de Confidentialité" : "Privacy Policy"}</span>
          </Link>
          <Link
            href={routePaths.terms}
            className={`legal-nav-pill ${pageKey === "terms" ? "legal-nav-pill--active" : ""}`}
          >
            <FileText size={16} />
            <span>{isFr ? "Conditions d'Utilisation" : "Terms of Use"}</span>
          </Link>
          <Link
            href={routePaths.taxStatus}
            className="legal-nav-pill"
          >
            <Landmark size={16} />
            <span>{isFr ? "Statut Juridique & Fiscal (Sunbiz)" : "Tax Status & Registry (Sunbiz)"}</span>
          </Link>
        </div>

        {/* 2. EN-TÊTE D'AUTHENTIFICATION LÉGALE & MÉTADONNÉES SUNBIZ */}
        <div className="legal-cert-banner">
          <div className="legal-cert-banner__inner">
            <div className="legal-cert-banner__left">
              <div className="legal-cert-banner__badge">
                {pageKey === "privacy" ? <ShieldCheck size={20} /> : <FileText size={20} />}
                <span>
                  {pageKey === "privacy"
                    ? (isFr ? "Protection des Données & Donateurs" : "Data Protection & Donor Care")
                    : (isFr ? "Conditions & Règles d'Utilisation" : "Terms & Conditions of Use")}
                </span>
              </div>
              <h2 className="legal-cert-banner__title">
                {pageKey === "privacy"
                  ? (isFr ? "Politique de Confidentialité Officielle" : "Official Privacy Policy")
                  : (isFr ? "Conditions Générales d’Utilisation" : "General Terms of Use")}
              </h2>
              <p className="legal-cert-banner__sub">
                {pageKey === "privacy"
                  ? (isFr
                      ? "Ce document définit les engagements éthiques et légaux de Blessed Vally Foundation, Inc. quant à la protection de votre vie privée, de vos dons et de vos données personnelles."
                      : "This document sets forth Blessed Vally Foundation, Inc.'s ethical and legal commitments regarding the protection of your privacy, donor records, and personal data.")
                  : (isFr
                      ? "Ce document régit l'accès, la consultation et l'usage du site officiel de Blessed Vally Foundation, Inc., ainsi que les règles applicables aux dons et à la propriété intellectuelle."
                      : "This document governs access, browsing, and use of Blessed Vally Foundation, Inc.'s official website, as well as rules applicable to gifts and intellectual property.")}
              </p>
            </div>

            <div className="legal-cert-banner__meta">
              <div className="legal-meta-item">
                <span className="legal-meta-item__label">{isFr ? "Entité morale émettrice" : "Issuing Legal Entity"}</span>
                <span className="legal-meta-item__value">BLESSED VALLY FOUNDATION, INC.</span>
              </div>
              <div className="legal-meta-item">
                <span className="legal-meta-item__label">{isFr ? "N° d'enregistrement Sunbiz (Floride)" : "Florida Document Number"}</span>
                <div className="legal-meta-item__value legal-meta-item__value-copy">
                  <span>N12000006840</span>
                  <CopyButton text="N12000006840" label={isFr ? "Copier" : "Copy"} />
                </div>
              </div>
              <div className="legal-meta-item">
                <span className="legal-meta-item__label">{isFr ? "Juridiction & Siège" : "Governing Jurisdiction"}</span>
                <span className="legal-meta-item__value">State of Florida, United States</span>
              </div>
              <div className="legal-meta-item">
                <span className="legal-meta-item__label">{isFr ? "Dernière révision" : "Last Updated"}</span>
                <span className="legal-meta-item__value" style={{ color: "var(--leaf)" }}>
                  {isFr ? "Novembre 2026 (Version en vigueur)" : "November 2026 (Current Version)"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. GRILLE DES 4 PRINCIPES DIRECTEURS / TRUST CARDS */}
        <div className="legal-trust-grid">
          {trustCards.map((card, idx) => (
            <div key={idx} className="legal-trust-card">
              <div className="legal-trust-card__icon">{card.icon}</div>
              <h3 className="legal-trust-card__title">{card.title}</h3>
              <p className="legal-trust-card__desc">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* 4. ARTICLES LÉGAUX DÉTAILLÉS & NUMÉROTÉS */}
        <div className="legal-articles-container">
          {model.sections.map((section, index) => {
            const articleNum = `ARTICLE 0${index + 1}`;
            const isStripeSection =
              section.body.includes("Stripe") ||
              section.body.includes("PCI") ||
              section.body.includes("TLS");
            const isDonationSection =
              section.title.toLowerCase().includes("don") ||
              section.title.toLowerCase().includes("gift");

            return (
              <article key={`${section.title}-${index}`} className="legal-article-card">
                <div className="legal-article-header">
                  <div className="legal-article-meta-row">
                    <span className="legal-article-badge">{articleNum}</span>
                    <span className="legal-article-eyebrow">{section.eyebrow}</span>
                  </div>
                  <h3 className="legal-article-title">{section.title}</h3>
                </div>

                <div className="legal-article-body">
                  {section.body.split("\n\n").map((para, pIdx) => {
                    const isBullet = para.startsWith("•") || para.startsWith("-");
                    const isImportant =
                      para.startsWith("IMPORTANT :") || para.startsWith("IMPORTANT:");

                    if (isImportant) {
                      return (
                        <div key={pIdx} className="legal-callout-box legal-callout-box--security">
                          <div className="legal-callout-box__icon">
                            <Lock size={20} style={{ color: "var(--coral-dark)" }} />
                          </div>
                          <div className="legal-callout-box__content">
                            <strong>{isFr ? "Sécurité des Transactions Bancaires :" : "Payment Transaction Security:"}</strong>
                            <p>{para.replace(/^IMPORTANT\s*:\s*/, "")}</p>
                          </div>
                        </div>
                      );
                    }

                    if (isBullet) {
                      const bulletLines = para.split("\n");
                      return (
                        <ul key={pIdx} className="legal-bullet-list">
                          {bulletLines.map((line, lIdx) => (
                            <li key={lIdx} className="legal-bullet-item">
                              <span className="legal-bullet-dot" />
                              <span>{line.replace(/^[•\-]\s*/, "")}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    return <p key={pIdx}>{para}</p>;
                  })}

                  {/* Bullets additionnels */}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="legal-bullet-list">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="legal-bullet-item">
                          <Check size={16} className="legal-bullet-check" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Alerte Stripe si applicable */}
                  {isStripeSection && pageKey === "privacy" && (
                    <div className="legal-stripe-badge">
                      <Lock size={16} style={{ color: "var(--leaf)" }} />
                      <span>
                        {isFr
                          ? "Conformité stricte PCI-DSS Niveau 1 : Le chiffrement TLS protège vos coordonnées de paiement à chaque étape."
                          : "Strict PCI-DSS Level 1 Compliance: TLS encryption protects your payment information at every stage."}
                      </span>
                    </div>
                  )}

                  {/* Alerte Don si applicable */}
                  {isDonationSection && pageKey === "terms" && (
                    <div className="legal-stripe-badge">
                      <Receipt size={16} style={{ color: "var(--coral-dark)" }} />
                      <span>
                        {isFr
                          ? "Attestation officielle de don : Un reçu officiel nominatif est délivré pour chaque contribution."
                          : "Official gift acknowledgment: An official acknowledgment receipt is provided for every contribution."}
                      </span>
                    </div>
                  )}

                  {/* Citation / Quote */}
                  {section.quote && (
                    <div className="legal-quote-box">
                      <Quote size={20} className="legal-quote-icon" />
                      <blockquote className="legal-quote-text">« {section.quote} »</blockquote>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* 5. SECRÉTARIAT OFFICIEL & EXERCICE DES DROITS */}
        <div className="legal-contact-panel">
          <div className="legal-contact-panel__head">
            <div>
              <div className="status-pill" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                <ShieldCheck size={14} style={{ color: "var(--leaf)" }} />
                <span>{isFr ? "Secrétariat Administratif & Juridique" : "Administrative & Legal Secretariat"}</span>
              </div>
              <h3 style={{ margin: "4px 0 6px", font: "500 clamp(20px, 2.5vw, 26px)/1.2 'Fraunces', serif", color: "var(--ink)" }}>
                {isFr ? "Exercer vos droits ou poser une question légale" : "Exercise your rights or submit a legal inquiry"}
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "14px", maxWidth: "680px" }}>
                {isFr
                  ? "Pour toute demande de consultation, de rectification ou de suppression de vos données personnelles, ou pour toute question concernant les présentes conditions, notre équipe administrative se tient à votre entière disposition."
                  : "To request access, correction, or deletion of your personal records, or for any questions regarding these terms, our administrative team is available to assist you."}
              </p>
            </div>
          </div>

          <div className="legal-contact-grid">
            {/* Colonne 1: Courriel & Téléphones */}
            <div className="legal-contact-card">
              <div className="legal-contact-card__icon">
                <Mail size={20} />
              </div>
              <div className="legal-contact-card__content">
                <span className="legal-contact-card__label">{isFr ? "Courriels officiels" : "Official Emails"}</span>
                <div className="legal-contact-card__row">
                  <a href="mailto:contact@blessedvallyfoundation.org" className="legal-contact-link">
                    contact@blessedvallyfoundation.org
                  </a>
                  <CopyButton text="contact@blessedvallyfoundation.org" label={isFr ? "Copier" : "Copy"} />
                </div>
                <div className="legal-contact-card__row" style={{ marginTop: "4px" }}>
                  <a href="mailto:blessedvallyfoundation@gmail.com" className="legal-contact-link" style={{ fontSize: "13px" }}>
                    blessedvallyfoundation@gmail.com
                  </a>
                  <CopyButton text="blessedvallyfoundation@gmail.com" label={isFr ? "Copier" : "Copy"} />
                </div>

                <span className="legal-contact-card__label" style={{ marginTop: "16px" }}>
                  {isFr ? "Téléphones officiels (États-Unis)" : "Official Telephones (USA)"}
                </span>
                <div className="legal-contact-card__row">
                  <a href="tel:+19548605690" className="legal-contact-link">+1 (954) 860-5690</a>
                  <CopyButton text="+1 (954) 860-5690" label={isFr ? "Copier" : "Copy"} />
                </div>
                <div className="legal-contact-card__row" style={{ marginTop: "2px" }}>
                  <a href="tel:+17864430472" className="legal-contact-link" style={{ fontSize: "13px" }}>+1 (786) 443-0472</a>
                  <CopyButton text="+1 (786) 443-0472" label={isFr ? "Copier" : "Copy"} />
                </div>
              </div>
            </div>

            {/* Colonne 2: Adresses Officielles */}
            <div className="legal-contact-card">
              <div className="legal-contact-card__icon">
                <MapPin size={20} />
              </div>
              <div className="legal-contact-card__content">
                <span className="legal-contact-card__label">
                  {isFr ? "Adresse postale officielle (Mailing Address - USA)" : "Official Postal Mailing Address (USA)"}
                </span>
                <div className="legal-contact-card__row">
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink)" }}>
                    12933 SW 129 Street, Miami, FL 33177, {isFr ? "États-Unis" : "United States"}
                  </span>
                  <CopyButton text="12933 SW 129 Street, Miami, FL 33177" label={isFr ? "Copier" : "Copy"} />
                </div>
                <small style={{ color: "var(--muted)", fontSize: "11px", display: "block", marginTop: "2px" }}>
                  {isFr ? "Adresse officielle pour chèques de dons et correspondances légales" : "Official address for check gifts and legal correspondence"}
                </small>

                <span className="legal-contact-card__label" style={{ marginTop: "14px" }}>
                  {isFr ? "Bureau administratif officiel" : "Administrative Office"}
                </span>
                <div className="legal-contact-card__row">
                  <span style={{ fontSize: "13px", color: "var(--ink-soft)" }}>
                    609 NE 123rd Street, North-Miami, FL 33161
                  </span>
                  <CopyButton text="609 NE 123rd Street, North-Miami, FL 33161" label={isFr ? "Copier" : "Copy"} />
                </div>

                <span className="legal-contact-card__label" style={{ marginTop: "14px" }}>
                  {isFr ? "Téléphone officiel en Haïti" : "Official Haiti Telephone"}
                </span>
                <div className="legal-contact-card__row">
                  <a href="tel:+50936184340" className="legal-contact-link">+509 3618-4340</a>
                  <CopyButton text="+509 3618-4340" label={isFr ? "Copier" : "Copy"} />
                </div>
              </div>
            </div>
          </div>

          <div className="legal-contact-panel__actions">
            <Link href={routePaths.contact} className="button button--coral">
              <span>{isFr ? "Envoyer un message au secrétariat" : "Send message to secretariat"}</span>
              <ArrowRight size={16} />
            </Link>
            <Link href={routePaths.taxStatus} className="button button--paper">
              <Landmark size={16} />
              <span>{isFr ? "Consulter le statut Sunbiz & fiscal" : "Review Sunbiz tax status"}</span>
            </Link>
            <a
              href="https://search.sunbiz.org/Inquiry/CorporationSearch/ByName"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--paper"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <span>{isFr ? "Registre officiel Sunbiz" : "Sunbiz Official Registry"}</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
