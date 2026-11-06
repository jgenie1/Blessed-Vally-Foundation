import {
  ArrowRight,
  Building2,
  Check,
  Clock,
  Copy,
  Droplets,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "wouter";
import { routePaths, type Language } from "@/lib/site-content";
import { teamMembers } from "@/lib/team-data";

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

export default function TaxStatusSection({ language }: { language: Language }) {
  const isFr = language === "fr";

  const missionPillars = [
    {
      icon: <GraduationCap size={22} />,
      title: isFr ? "Éducation chrétienne & Jeunesse" : "Christian Education & Youth",
      desc: isFr
        ? "L’éducation chrétienne, l'excellence académique et le développement intégral des enfants et des jeunes."
        : "Christian education, academic excellence, and the holistic development of children and youth.",
    },
    {
      icon: <Droplets size={22} />,
      title: isFr ? "Eau potable & Assainissement" : "Clean Water & Sanitation",
      desc: isFr
        ? "L’accès durable à l’eau potable et l’amélioration vitale des infrastructures sanitaires communautaires."
        : "Sustainable access to clean drinking water and vital improvements in community sanitation infrastructure.",
    },
    {
      icon: <UtensilsCrossed size={22} />,
      title: isFr ? "Sécurité alimentaire & Secours" : "Food Security & Humanitarian Aid",
      desc: isFr
        ? "La sécurité alimentaire, les distributions nutritionnelles d'urgence et l’assistance humanitaire directe."
        : "Food security initiatives, emergency nutritional distributions, and direct humanitarian relief.",
    },
    {
      icon: <HeartHandshake size={22} />,
      title: isFr ? "Soutien aux familles vulnérables" : "Support for Vulnerable Families",
      desc: isFr
        ? "L'accompagnement spirituel, matériel et social des familles et des personnes en situation de grande précarité."
        : "Spiritual, material, and social care for families and individuals facing acute vulnerability.",
    },
    {
      icon: <Building2 size={22} />,
      title: isFr ? "Développement communautaire" : "Sustainable Community Development",
      desc: isFr
        ? "Le développement communautaire durable, l'autonomie des populations locales et la résilience à long terme."
        : "Long-term community development, local self-reliance, and sustainable grassroots resilience.",
    },
  ];

  return (
    <div className="tax-status-page section-space">
      <div className="container">
        {/* 1. CERTIFICAT OFFICIEL D'IMMATRICULATION SUNBIZ */}
        <div className="tax-cert-card">
          <div className="tax-cert-card__top">
            <div className="tax-cert-card__issuer">
              <div className="tax-cert-card__issuer-icon">
                <Landmark size={22} />
              </div>
              <div className="tax-cert-card__issuer-text">
                <strong>{isFr ? "Registre officiel de l'État de Floride" : "Official State of Florida Registry"}</strong>
                <small>Florida Department of State • Division of Corporations (Sunbiz)</small>
              </div>
            </div>
            <div className="status-pill" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <ShieldCheck size={14} style={{ color: "var(--leaf)" }} />
              <span>{isFr ? "Organisation Non-Profit Enregistrée" : "Registered Non-Profit Corporation"}</span>
            </div>
          </div>

          <div className="tax-cert-card__title-row">
            <h2 className="tax-cert-card__name">BLESSED VALLY FOUNDATION, INC.</h2>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "15px" }}>
              {isFr
                ? "Organisation à but non lucratif constituée dans l’État de Floride, aux États-Unis, en 2012."
                : "Nonprofit corporation incorporated in the State of Florida, United States, in 2012."}
            </p>
          </div>

          <div className="tax-cert-card__meta-grid">
            <div>
              <span className="tax-cert-field__label">{isFr ? "Dénomination légale" : "Official Legal Name"}</span>
              <div className="tax-cert-field__value">BLESSED VALLY FOUNDATION, INC.</div>
            </div>

            <div>
              <span className="tax-cert-field__label">{isFr ? "N° d'enregistrement en Floride" : "Florida Document Number"}</span>
              <div className="tax-cert-field__value tax-cert-field__value-copy">
                <span>N12000006840</span>
                <CopyButton text="N12000006840" label={isFr ? "Copier" : "Copy"} />
              </div>
            </div>

            <div>
              <span className="tax-cert-field__label">{isFr ? "Année de constitution" : "Year of Incorporation"}</span>
              <div className="tax-cert-field__value">2012 (Florida Non-Profit Corporation)</div>
            </div>

            <div>
              <span className="tax-cert-field__label">{isFr ? "Dossier administratif Floride" : "Florida Administrative Record"}</span>
              <div className="tax-cert-field__value" style={{ color: "var(--ink-soft)" }}>
                {isFr ? "Régularisation & réactivation en cours" : "Regularization & reactivation in progress"}
              </div>
            </div>

            <div>
              <span className="tax-cert-field__label">{isFr ? "Statut fiscal fédéral 501(c)(3)" : "Federal 501(c)(3) Tax Status"}</span>
              <div className="tax-cert-field__value" style={{ color: "var(--ink-soft)" }}>
                {isFr ? "Démarches de rétablissement prévues (IRS)" : "Reinstatement planned (IRS)"}
              </div>
            </div>

            <div>
              <span className="tax-cert-field__label">{isFr ? "Attestation de don délivrée" : "Official Gift Acknowledgment"}</span>
              <div className="tax-cert-field__value" style={{ color: "var(--leaf)" }}>
                {isFr ? "Systématique pour chaque don" : "Systematic for every gift"}
              </div>
            </div>
          </div>

          <div className="tax-cert-card__footer">
            <span style={{ fontSize: "13px", color: "var(--muted)" }}>
              {isFr
                ? "Dossier public vérifiable sur le portail officiel de l'État de Floride :"
                : "Public record verifiable through the State of Florida's official portal:"}
            </span>
            <a
              href="https://search.sunbiz.org/Inquiry/CorporationSearch/ByName"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--paper"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <ExternalLink size={14} />
              <span>{isFr ? "Vérifier sur Florida Sunbiz (Doc #N12000006840)" : "Verify on Florida Sunbiz (Doc #N12000006840)"}</span>
            </a>
          </div>
        </div>

        {/* 2. NOTRE MISSION INSTITUTIONNELLE */}
        <div className="tax-section-block">
          <div className="tax-section-block__head">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {isFr ? "Vocation statutaire" : "Institutional Mission"}
            </p>
            <h3>{isFr ? "Notre mission institutionnelle" : "Our Institutional Mission"}</h3>
            <p>
              {isFr
                ? "La fondation œuvre à l’annonce de l’Évangile de Jésus-Christ par des actions concrètes au service des communautés, notamment dans les cinq domaines suivants :"
                : "The Foundation is dedicated to sharing the Gospel of Jesus Christ through meaningful, practical actions serving communities across five strategic areas:"}
            </p>
          </div>

          <div className="tax-pillars-grid">
            {missionPillars.map((pillar, idx) => (
              <div key={idx} className="tax-pillar-card">
                <div className="tax-pillar-card__icon">{pillar.icon}</div>
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="tax-pillar-location-note">
            <strong>{isFr ? "Lieux prioritaires d'intervention : " : "Primary Focus Areas: "}</strong>
            {isFr
              ? "Nos interventions se concentrent particulièrement en Haïti, notamment à Fragneauville–Delmas et à Brostage–Dondon, dans une perspective de transformation spirituelle, éducative et sociale durable."
              : "Our initiatives focus particularly on communities in Haiti, including Fragneauville–Delmas and Brostage–Dondon, fostering long-term spiritual, educational, and social transformation."}
          </div>
        </div>

        {/* 3. GOUVERNANCE DE LA FONDATION */}
        <div className="tax-section-block">
          <div className="tax-section-block__head">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {isFr ? "Direction & Conseil" : "Board of Directors"}
            </p>
            <h3>{isFr ? "Gouvernance de la fondation" : "Foundation Governance"}</h3>
            <p>
              {isFr
                ? "La direction de Blessed Vally Foundation est assurée par une équipe dévouée veillant à l'orientation stratégique, à l'administration et à la fidélité de la mission :"
                : "Blessed Vally Foundation is led by a dedicated Board of Directors guiding strategic direction, stewardship, and organizational delivery:"}
            </p>
          </div>

          <div className="tax-board-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="tax-board-card">
                <div className="tax-board-card__avatar">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <div className="tax-board-card__body">
                  <span className="tax-board-card__role">{isFr ? member.role.fr : member.role.en}</span>
                  <h4 className="tax-board-card__name">{member.name}</h4>
                  <p className="tax-board-card__desc">{isFr ? member.note.fr : member.note.en}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: "18px", fontSize: "13px", color: "var(--muted)", fontStyle: "italic" }}>
            {isFr
              ? "Cette équipe contribue à l’orientation stratégique, à l’administration et à la réalisation des objectifs de la fondation, sous réserve des responsabilités définies dans ses documents officiels."
              : "The leadership team supports the Foundation’s strategic direction, administration, and organizational objectives, subject to the responsibilities established in its official governing documents."}
          </p>
        </div>

        {/* 4. SITUATION ADMINISTRATIVE ET FISCALE 501(c)(3) */}
        <div className="tax-legal-notice-box">
          <div className="tax-legal-notice-box__header">
            <ShieldCheck size={26} style={{ color: "var(--coral)" }} />
            <h3>{isFr ? "Situation administrative et fiscale & Transparence" : "Administrative, Federal Tax Status & Transparency"}</h3>
          </div>

          <div className="tax-legal-notice-box__list">
            <div className="tax-legal-notice-item">
              <Check size={18} />
              <div>
                <strong>{isFr ? "Régularisation administrative en Floride : " : "Administrative Regularization in Florida: "}</strong>
                {isFr
                  ? "Blessed Vally Foundation entreprend actuellement les démarches nécessaires à la régularisation et à la réactivation de son dossier administratif auprès des autorités compétentes de Floride."
                  : "Blessed Vally Foundation is currently pursuing the administrative steps necessary to regularize and reactivate its corporate record with the appropriate Florida authorities."}
              </div>
            </div>

            <div className="tax-legal-notice-item">
              <Check size={18} />
              <div>
                <strong>{isFr ? "Démarches relatives au statut 501(c)(3) : " : "Proceedings Concerning Section 501(c)(3): "}</strong>
                {isFr
                  ? "Les démarches relatives au rétablissement de sa reconnaissance d’exonération fiscale fédérale au titre de la section 501(c)(3) de l’Internal Revenue Code sont également prévues."
                  : "The Foundation also intends to pursue reinstatement of its federal tax-exempt recognition under Section 501(c)(3) of the Internal Revenue Code."}
              </div>
            </div>

            <div className="tax-legal-notice-item">
              <Check size={18} />
              <div>
                <strong>{isFr ? "Mention expresse relative à l'IRS : " : "Explicit Clarification Regarding the IRS: "}</strong>
                {isFr
                  ? "À ce jour, la fondation ne présente pas son statut 501(c)(3) comme étant rétabli ou actuellement reconnu par l’IRS."
                  : "At this time, the Foundation does not represent its federal 501(c)(3) tax-exempt status as currently reinstated or recognized by the Internal Revenue Service (IRS)."}
              </div>
            </div>

            <div className="tax-legal-notice-item">
              <Check size={18} />
              <div>
                <strong>{isFr ? "Traitement fiscal des contributions : " : "Tax Treatment of Contributions: "}</strong>
                {isFr
                  ? "Les contributions financières ne doivent pas être considérées comme fiscalement déductibles sur la seule base de l’enregistrement de la fondation en Floride. Leur traitement fiscal dépend du statut officiellement reconnu et des lois applicables."
                  : "Financial contributions should not be assumed to be tax-deductible solely because the Foundation is incorporated in Florida. Tax treatment depends on the organization’s officially recognized status and applicable law."}
              </div>
            </div>
          </div>

          <div className="tax-legal-notice-box__disclaimer">
            <strong>{isFr ? "Engagement de transparence & de responsabilité : " : "Commitment to Transparency & Accountability: "}</strong>
            {isFr
              ? "Blessed Vally Foundation s’engage à promouvoir une gouvernance responsable, une gestion transparente des ressources et une communication fidèle concernant ses activités et son statut administratif. Les informations officielles seront actualisées au fur et à mesure de l’achèvement des démarches légales et fiscales."
              : "Blessed Vally Foundation is committed to responsible governance, transparent resource management, and accurate communication regarding its activities and administrative standing. Official information will be updated as the Foundation completes its legal and tax-related procedures."}
          </div>
        </div>

        {/* 5. RÉPERTOIRE OFFICIEL DES COORDONNÉES */}
        <div className="tax-directory-panel">
          {/* Carte 1 : Adresses officielles */}
          <div className="tax-dir-card">
            <div className="tax-dir-card__head">
              <MapPin size={22} style={{ color: "var(--coral)" }} />
              <h4>{isFr ? "Adresses postales & Sièges officiels" : "Registered Postal Addresses & Offices"}</h4>
            </div>

            <div className="tax-dir-item">
              <span className="tax-dir-item__label">{isFr ? "Adresse postale officielle (Mailing Address - USA)" : "Official Postal Mailing Address (USA)"}</span>
              <div className="tax-dir-item__value">
                <span>12933 SW 129 Street, Miami, FL 33177, {isFr ? "États-Unis" : "United States"}</span>
                <CopyButton text="12933 SW 129 Street, Miami, FL 33177" label={isFr ? "Copier" : "Copy"} />
              </div>
              <small style={{ color: "var(--muted)", fontSize: "11px", display: "block", marginTop: "2px" }}>
                {isFr ? "Adresse officielle pour chèques de dons, courriers administratifs et documents" : "Official address for check contributions, administrative mail, and legal correspondence"}
              </small>
            </div>

            <div className="tax-dir-item">
              <span className="tax-dir-item__label">{isFr ? "Bureau administratif (Office - USA)" : "Administrative Office (USA)"}</span>
              <div className="tax-dir-item__value">
                <span>609 NE 123rd Street, North-Miami, FL 33161, {isFr ? "États-Unis" : "United States"}</span>
                <CopyButton text="609 NE 123rd Street, North-Miami, FL 33161" label={isFr ? "Copier" : "Copy"} />
              </div>
            </div>

            <div className="tax-dir-item">
              <span className="tax-dir-item__label">{isFr ? "Adresse officielle en Haïti" : "Official Haiti Address"}</span>
              <div className="tax-dir-item__value">
                <span>12, Pelerin 4A, Petionville-Haiti, {isFr ? "Haïti" : "Haiti"}</span>
                <CopyButton text="12, Pelerin 4A, Petionville-Haiti" label={isFr ? "Copier" : "Copy"} />
              </div>
            </div>

            <div className="tax-dir-item">
              <span className="tax-dir-item__label">{isFr ? "Centre de Mission & Campus éducatif en Haïti" : "Field Mission Grounds & Campus in Haiti"}</span>
              <div className="tax-dir-item__value">
                <span>Brostage, Dondon, {isFr ? "Département du Nord, Haïti" : "Northern Department, Haiti"}</span>
              </div>
            </div>
          </div>

          {/* Carte 2 : Téléphones, Courriel & Horaires */}
          <div className="tax-dir-card">
            <div className="tax-dir-card__head">
              <Phone size={22} style={{ color: "var(--coral)" }} />
              <h4>{isFr ? "Téléphones vérifiés, Courriel & Permanence" : "Verified Telephones, Email & Hours"}</h4>
            </div>

            <div className="tax-dir-item">
              <span className="tax-dir-item__label">{isFr ? "Téléphones officiels (États-Unis)" : "Official Telephones (United States)"}</span>
              <div className="tax-dir-item__value">
                <div>
                  <a href="tel:+17864430472" style={{ color: "var(--ink)", display: "block" }}>+1 (786) 443-0472</a>
                  <a href="tel:+18456557399" style={{ color: "var(--ink)", display: "block" }}>+1 (845) 655-7399</a>
                </div>
                <CopyButton text="+1 (786) 443-0472" label={isFr ? "Copier" : "Copy"} />
              </div>
            </div>

            <div className="tax-dir-item">
              <span className="tax-dir-item__label">{isFr ? "Téléphones officiels (Haïti)" : "Official Telephones (Haiti)"}</span>
              <div className="tax-dir-item__value">
                <div>
                  <a href="tel:+50936184340" style={{ color: "var(--ink)", display: "block" }}>+509 3618-4340</a>
                  <a href="tel:+50943108621" style={{ color: "var(--ink)", display: "block" }}>+509 4310-8621</a>
                  <a href="tel:+50948342601" style={{ color: "var(--ink)", display: "block" }}>+509 48 34 2601</a>
                </div>
              </div>
            </div>

            <div className="tax-dir-item">
              <span className="tax-dir-item__label">{isFr ? "Courriel officiel" : "Official Email Address"}</span>
              <div className="tax-dir-item__value">
                <a href="mailto:blessedvallyfoundation@gmail.com" style={{ color: "var(--coral-dark)", wordBreak: "break-all" }}>
                  blessedvallyfoundation@gmail.com
                </a>
                <CopyButton text="blessedvallyfoundation@gmail.com" label={isFr ? "Copier" : "Copy"} />
              </div>
            </div>

            <div className="tax-dir-item">
              <span className="tax-dir-item__label">{isFr ? "Horaires de permanence (Heure de l'Est / EST)" : "Operating Hours (Eastern Standard Time / EST)"}</span>
              <div className="tax-dir-item__value" style={{ fontSize: "13px", color: "var(--ink-soft)" }}>
                <div>
                  <div>{isFr ? "Lundi – Vendredi : 09h00 – 23h00" : "Monday – Friday: 9:00 AM – 11:00 PM"}</div>
                  <div>{isFr ? "Dimanche : 09h00 – 16h00" : "Sunday: 9:00 AM – 4:00 PM"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. NOTRE ENGAGEMENT & DEVISE FINALE */}
        <div className="tax-motto-banner">
          <Quote size={28} style={{ color: "var(--coral)", margin: "0 auto 12px" }} />
          <p className="tax-motto-banner__quote">
            {isFr
              ? "« Servir Dieu en servant notre prochain, annoncer l’Évangile par des actions concrètes et contribuer à bâtir des communautés plus fortes, plus dignes et porteuses d’espérance. »"
              : "“To serve God by serving others, proclaim the Gospel through concrete action, and help build stronger, more dignified, and hope-filled communities.”"}
          </p>
          <div className="tax-motto-banner__sign">
            Blessed Vally Foundation — {isFr ? "La foi en action au service de l’humanité" : "Faith in Action, Serving Humanity"}
          </div>

          <div className="tax-motto-banner__actions">
            <Link href={routePaths.donate} className="button button--coral">
              <span>{isFr ? "Soutenir nos actions de terrain" : "Support our field initiatives"}</span>
              <ArrowRight size={16} />
            </Link>
            <Link href={routePaths.contact} className="button button--paper">
              <span>{isFr ? "Contacter le secrétariat" : "Contact the secretariat"}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
