import { ArrowRight, CheckCheck, Copy, Landmark, Mail, Send, ShieldCheck, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { ContentSection, ImpactBand, PageHero, SectionIntro } from "@/components/SiteComponents";
import BlogSection from "@/components/BlogSection";
import DonationModule from "@/components/DonationModule";
import FoundersCorner from "@/components/FoundersCorner";
import HaitiWorksSection from "@/components/HaitiWorks";
import { pageContent, routePaths, ui, type Language, type PageKey } from "@/lib/site-content";
import { teamMembers } from "@/lib/team-data";

export default function SitePage({ pageKey, language }: { pageKey: Exclude<PageKey, "home">; language: Language }) {
  const model = pageContent[language][pageKey];
  const copy = ui[language];
  const [selectedRecipient, setSelectedRecipient] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const p = new URLSearchParams(window.location.search);
      return p.get("to") || "all";
    }
    return "all";
  });

  const handleSelectRecipient = (id: string) => {
    setSelectedRecipient(id);
    const formElement = document.getElementById("contact-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {pageKey !== "leadership" && (
        <PageHero
          kicker={model.kicker}
          title={model.title}
          description={model.description}
          image={model.image}
          language={language}
        />
      )}

      {pageKey === "leadership" && (
        <>
          <FoundersCorner language={language} isHero={true} />
          <LeadershipTeamSection language={language} />
          <LeadershipGovernanceSection language={language} />
        </>
      )}

      {pageKey === "contact" && (
        <>
          <ContactDirectorySection
            language={language}
            onSelectRecipient={handleSelectRecipient}
          />
          <ContactPanel language={language} activeRecipient={selectedRecipient} />
        </>
      )}

      {pageKey === "news" && <BlogSection language={language} />}

      {pageKey !== "leadership" && pageKey !== "contact" && (
        <div className="page-sections">
          {model.sections.map((section, index) => <ContentSection key={`${section.title}-${index}`} section={section} index={index} language={language} />)}
        </div>
      )}

      {pageKey === "haiti" && <HaitiWorksSection language={language} />}
      {pageKey === "taxStatus" && <TaxStatusDirectorySection language={language} />}
      {pageKey === "news" && <NewsArchive language={language} />}
      {pageKey === "donate" && (
        <>
          <DonationModule language={language} />
          <BankingMethodsSection language={language} />
          <ReceiptConfirmationSection language={language} />
        </>
      )}
      {pageKey === "privacy" && (
        <ImpactBand
          eyebrow={language === "fr" ? "Transparence & Données" : "Transparency & Privacy"}
          title={language === "fr" ? "Une question relative à vos données personnelles ?" : "A question regarding your personal data?"}
          body={language === "fr" ? "Notre équipe administrative est disponible pour répondre à toute demande d’accès, de rectification ou de suppression." : "Our administrative team is available to address any request for record access, update, or removal."}
          ctaLabel={copy.contact}
          ctaHref={routePaths.contact}
        />
      )}
      {pageKey === "terms" && (
        <ImpactBand
          eyebrow={language === "fr" ? "Gouvernance & Statuts" : "Governance & Legal"}
          title={language === "fr" ? "Consulter notre statut fiscal officiel et nos coordonnées." : "Review our official tax status and corporate records."}
          body={language === "fr" ? "Retrouvez notre statut d'organisation sans but lucratif, nos mentions de reçus fiscaux et nos adresses officielles aux États-Unis et en Haïti." : "Access our verified non-profit records, tax receipt provisions, and registered addresses in the United States and Haiti."}
          ctaLabel={language === "fr" ? "Voir le statut fiscal" : "View tax status"}
          ctaHref={routePaths.taxStatus}
        />
      )}
      {pageKey === "partnerships" && <ImpactBand eyebrow={language === "fr" ? "Construire ensemble" : "Build together"} title={language === "fr" ? "Une bonne conversation peut devenir une action partagée." : "A good conversation can become shared action."} body={language === "fr" ? "Parlons de votre contexte, de vos ressources et de la manière dont ils peuvent servir les enfants et les communautés." : "Let’s talk about your context, your resources and how they can serve children and communities."} ctaLabel={copy.contact} ctaHref={routePaths.contact} />}
      {pageKey === "getInvolved" && <ImpactBand eyebrow={language === "fr" ? "Votre place" : "Your place"} title={language === "fr" ? "Le prochain pas peut être simple." : "The next step can be simple."} body={language === "fr" ? "Présentez-vous, dites-nous ce qui vous mobilise et nous vous répondrons avec une piste concrète." : "Introduce yourself, tell us what moves you and we’ll respond with a concrete next step."} ctaLabel={copy.contact} ctaHref={routePaths.contact} />}
    </>
  );
}

function LeadershipTeamSection({ language }: { language: Language }) {
  const boardMembers = teamMembers;

  return (
    <section className="leadership-team section-space">
      <div className="container">
        <div className="leadership-team__header">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            {language === "fr" ? "Conseil d'Administration" : "Board of Directors"}
          </p>
          <h2>
            {language === "fr"
              ? "Le Conseil d’Administration de BVF"
              : "BVF Board of Directors"}
          </h2>
          <p className="leadership-team__sub">
            {language === "fr"
              ? "Les membres du Conseil d’Administration de la Fondation Blessed Vally assurent la gouvernance fiduciaire, la conformité statutaire, la supervision financière, le discernement consultatif et le déploiement fidèle des missions sur le terrain."
              : "The members of the Board of Directors of Blessed Vally Foundation ensure fiduciary governance, statutory compliance, financial oversight, advisory counsel, and faithful field deployment."}
          </p>
        </div>

        <div className="leadership-team__grid">
          {boardMembers.map((member) => (
            <div key={member.id} className="contact-card">
              <div className="contact-card__image-wrap">
                <img src={member.image} alt={member.name} className="contact-card__image" />
                <span className="contact-card__badge">{member.badge[language]}</span>
              </div>
              <div className="contact-card__content">
                <h3 className="contact-card__name">{member.name}</h3>
                <p className="contact-card__role">{member.role[language]}</p>
                {member.haitiName && (
                  <p className="contact-card__note" style={{ fontStyle: "italic", fontWeight: 600, color: "var(--coral-dark)", marginBottom: "4px" }}>
                    {language === "fr" ? `En Haïti : ${member.haitiName}` : `In Haiti: ${member.haitiName}`}
                  </p>
                )}
                <p className="contact-card__note">{member.note[language]}</p>
                {member.bioHighlight && (
                  <div className="contact-card__highlight">
                    {member.bioHighlight[language]}
                  </div>
                )}
                <div className="contact-card__actions">
                  <a
                    href={`/contact?to=${member.id}`}
                    className="contact-card__cta"
                  >
                    <Mail size={13} />
                    {language === "fr" ? "Écrire au bureau" : "Contact Office"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipGovernanceSection({ language }: { language: Language }) {
  return (
    <section className="leadership-governance section-space">
      <div className="container">
        <div className="leadership-governance__grid">
          <div className="leadership-governance__lead">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {language === "fr" ? "Gouvernance & Intégrité" : "Governance & Accountability"}
            </p>
            <h2>
              {language === "fr"
                ? "Une gouvernance fidèle, transparente et bénévole."
                : "A faithful, transparent, and voluntary leadership."}
            </h2>
            <p>
              {language === "fr"
                ? "Enregistrée sous statut Florida Non-Profit Corporation (Sunbiz), la Fondation Blessed Vally s'engage à une gestion intègre où les dons financent directement les programmes éducatifs, les cantines, l'accès à l'eau et les infrastructures scolaires en Haïti."
                : "Officially registered as a Florida Non-Profit Corporation (Sunbiz), Blessed Vally Foundation commits to rigorous stewardship where gifts directly advance educational initiatives, school nutrition, clean water, and classroom infrastructure in Haiti."}
            </p>
            <div className="leadership-governance__actions">
              <a href={routePaths.contact} className="button button--coral">
                {language === "fr" ? "Contacter l’équipe dirigeante" : "Contact Leadership"}
                <ArrowRight size={15} />
              </a>
              <a href={routePaths.taxStatus} className="button button--paper">
                {language === "fr" ? "Consulter le statut fiscal & Sunbiz" : "View Legal Status & Sunbiz"}
              </a>
            </div>
          </div>
          <div className="leadership-governance__pillars">
            <div className="governance-pillar-card">
              <strong>01</strong>
              <div>
                <h4>{language === "fr" ? "Supervision exécutive directe" : "Direct Executive Oversight"}</h4>
                <p>
                  {language === "fr"
                    ? "Gouvernance assurée directement par la fondatrice Dre Vally et le conseil pour préserver la vision chrétienne et l'impact local."
                    : "Active oversight provided directly by Founder Dr. Vally and the board to preserve Christian integrity and local impact."}
                </p>
              </div>
            </div>
            <div className="governance-pillar-card">
              <strong>02</strong>
              <div>
                <h4>{language === "fr" ? "Stewardship financier & Reçus" : "Financial Stewardship & Receipts"}</h4>
                <p>
                  {language === "fr"
                    ? "Aucun frais de gestion disproportionné, traçabilité des fonds et délivrance d’attestations officielles pour chaque contribution."
                    : "Zero administrative inflation, strict fund tracking, and official acknowledgment receipts issued for every contribution."}
                </p>
              </div>
            </div>
            <div className="governance-pillar-card">
              <strong>03</strong>
              <div>
                <h4>{language === "fr" ? "Double ancrage USA et Haïti" : "Binational Roots in USA & Haiti"}</h4>
                <p>
                  {language === "fr"
                    ? "Présence administrative officielle à Miami (Floride) et coordination active sur le terrain en Haïti (Delmas et Dondon)."
                    : "Official administrative headquarters in Miami, Florida with active field coordination in Delmas and Dondon, Haiti."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsArchive({ language }: { language: Language }) {
  const archiveItems = language === "fr" ? ["Nouvelle image Brostage", "Une vision éducative qui s’élargit", "Initiatives en faveur des enfants"] : ["New Brostage image", "A broader educational vision", "Children-centered initiatives"];
  return (
    <section className="archive-section section-space section-space--sand">
      <div className="container">
        <SectionIntro eyebrow={language === "fr" ? "Archives" : "Archive"} title={language === "fr" ? "Les publications précédentes, replacées dans leur contexte." : "Earlier publications, held in context."} body={language === "fr" ? "Les archives restent accessibles sans brouiller les priorités actuelles de la Fondation." : "Archive items remain available without blurring the Foundation’s current priorities."} />
        <div className="archive-list">
          {archiveItems.map((item, index) => <div className="archive-item" key={item}><span>0{index + 1}</span><strong>{item}</strong><em>{language === "fr" ? "Archive" : "Archived"}</em><span>↗</span></div>)}
        </div>
      </div>
    </section>
  );
}


function ContactDirectorySection({
  language,
  onSelectRecipient,
}: {
  language: Language;
  onSelectRecipient: (id: string) => void;
}) {
  const contactDirectory = [
    {
      id: "vally",
      name: "Dr. Vally D. Jn.-Ls. Legouté",
      role: { fr: "Présidente du Conseil", en: "Board President" },
      badge: { fr: "Présidence", en: "Executive Office" },
      image: "/images/contact/contact-1.jpg",
      scope: {
        fr: "Orientation spirituelle, vision stratégique d'écoles chrétiennes et relations institutionnelles (Haïti : Dr. Vally Docteur Jean-Louis).",
        en: "Spiritual orientation, Christian school strategic vision, and institutional leadership (Haiti: Dr. Vally Docteur Jean-Louis).",
      },
      actionLabel: { fr: "Écrire à la Présidente", en: "Message President" },
    },
    {
      id: "jean-ronald",
      name: "Mr. Jean-Ronald Legouté",
      role: { fr: "Vice-président", en: "Vice President" },
      badge: { fr: "Vice-Présidence", en: "Vice Presidency" },
      image: "/images/contact/contact-3.jpg",
      scope: {
        fr: "Partenariats stratégiques, développement institutionnel et coordination humanitaire.",
        en: "Strategic partnerships, institutional development, and humanitarian coordination.",
      },
      actionLabel: { fr: "Écrire au Vice-Président", en: "Message Vice President" },
    },
    {
      id: "vanessa",
      name: "Mrs. Vanessa R. Bastien-Joseph",
      role: { fr: "Trésorière", en: "Treasurer" },
      badge: { fr: "Finance & Trésorerie", en: "Finance & Treasury" },
      image: "/images/contact/vanessa-bastien.jpg",
      scope: {
        fr: "Gestion financière, suivi budgétaire, reçus officiels et conformité des comptes.",
        en: "Financial management, budget tracking, official receipts, and account compliance.",
      },
      actionLabel: { fr: "Contacter la Trésorière", en: "Contact Treasurer" },
    },
    {
      id: "corie-henrie",
      name: "Ms. Corie-Henrie Bastien",
      role: { fr: "Secrétaire", en: "Secretary" },
      badge: { fr: "Secrétariat du Conseil", en: "Board Secretariat" },
      image: "/images/contact/contact-4.jpg",
      scope: {
        fr: "Tenue des registres statutaires, procès-verbaux des assemblées et correspondances officielles.",
        en: "Statutory records maintenance, meeting minutes, and official correspondence.",
      },
      actionLabel: { fr: "Écrire au Secrétariat", en: "Message Secretariat" },
    },
    {
      id: "sasha-vally",
      name: "Ms. Sasha-Vally Bastien",
      role: { fr: "Administratrice", en: "Board Trustee" },
      badge: { fr: "Conseil d’Administration", en: "Board Trustee" },
      image: "/images/contact/contact-5.jpg",
      scope: {
        fr: "Gouvernance générale, adéquation des programmes avec la mission statutaire et veille de terrain.",
        en: "General governance, programmatic alignment with the statutory mission, and field support.",
      },
      actionLabel: { fr: "Contacter l’Administratrice", en: "Contact Trustee" },
    },
    {
      id: "pierre",
      name: "Mr. Geraldyr Lourdy Pierre",
      role: { fr: "Conseiller", en: "Counselor" },
      badge: { fr: "Conseil & Orientation", en: "Advisory & Engineering" },
      image: "/images/contact/contact-2.jpg",
      scope: {
        fr: "Conseil stratégique, expertise d'ingénierie, chantiers d'eau potable et infrastructures en Haïti.",
        en: "Strategic counsel, engineering expertise, clean water works, and infrastructure in Haiti.",
      },
      actionLabel: { fr: "Contacter le Conseiller", en: "Contact Counselor" },
    },
  ];

  return (
    <section className="contact-directory section-space">
      <div className="container">
        <div className="contact-directory__header">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            {language === "fr" ? "Pôles & Interlocuteurs Directs" : "Departments & Direct Contacts"}
          </p>
          <h2>
            {language === "fr"
              ? "À qui souhaitez-vous vous adresser ?"
              : "Who would you like to connect with?"}
          </h2>
          <p className="contact-directory__sub">
            {language === "fr"
              ? "Cliquez sur un département ou un représentant pour lui adresser directement votre message dans le formulaire officiel ci-dessous."
              : "Click a department or leadership representative to pre-select your recipient in the official inquiry form below."}
          </p>
        </div>

        <div className="contact-directory__grid">
          {contactDirectory.map((dept) => (
            <div
              key={dept.id}
              className="contact-card contact-card--interactive"
              onClick={() => onSelectRecipient(dept.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectRecipient(dept.id);
                }
              }}
            >
              <div className="contact-card__image-wrap">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="contact-card__image"
                />
                <span className="contact-card__badge">{dept.badge[language]}</span>
              </div>
              <div className="contact-card__content">
                <h3 className="contact-card__name">{dept.name}</h3>
                <p className="contact-card__role">{dept.role[language]}</p>
                <p className="contact-card__note">{dept.scope[language]}</p>
                <div className="contact-card__actions" style={{ marginTop: "auto", paddingTop: "14px" }}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectRecipient(dept.id);
                    }}
                    className="contact-card__action-btn"
                  >
                    <Mail size={14} />
                    <span>{dept.actionLabel[language]}</span>
                    <span className="action-arrow">&darr;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Link to Leadership */}
        <div className="team-sync-banner">
          <div className="team-sync-banner__content">
            <span className="team-sync-banner__badge">
              {language === "fr" ? "Biographies & Gouvernance" : "Biographies & Governance"}
            </span>
            <h4>
              {language === "fr"
                ? "Découvrez l’histoire de notre fondatrice et la vision de nos dirigeants."
                : "Explore our founder’s story and leadership vision."}
            </h4>
            <p>
              {language === "fr"
                ? "Consultez le Coin de la Fondatrice Dr. Vally, ses 36 ans d’enseignement et les piliers statutaires qui animent la Fondation."
                : "Read Dr. Vally’s biographical journey, 36 years in education, and the legal foundations animating the Foundation."}
            </p>
          </div>
          <a href={routePaths.leadership} className="button button--paper">
            {language === "fr" ? "Voir notre équipe dirigeante" : "Explore Our Leadership"}
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactPanel({
  language,
  activeRecipient,
}: {
  language: Language;
  activeRecipient?: string;
}) {
  const [sent, setSent] = useState(false);
  const [recipient, setRecipient] = useState(activeRecipient || "all");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const copy = ui[language];

  useEffect(() => {
    if (activeRecipient) {
      setRecipient(activeRecipient);
    }
  }, [activeRecipient]);

  const recipientOptions = [
    { id: "all", fr: "Secrétariat général & Direction", en: "General Secretariat & Leadership" },
    { id: "vally", fr: "Dr. Vally D. Jn.-Ls. Legouté (Présidence)", en: "Dr. Vally D. Jn.-Ls. Legouté (President)" },
    { id: "jean-ronald", fr: "Mr. Jean-Ronald Legouté (Vice-Présidence)", en: "Mr. Jean-Ronald Legouté (Vice President)" },
    { id: "vanessa", fr: "Mrs. Vanessa R. Bastien-Joseph (Trésorerie)", en: "Mrs. Vanessa R. Bastien-Joseph (Treasurer)" },
    { id: "corie-henrie", fr: "Ms. Corie-Henrie Bastien (Secrétariat)", en: "Ms. Corie-Henrie Bastien (Secretary)" },
    { id: "sasha-vally", fr: "Ms. Sasha-Vally Bastien (Administration)", en: "Ms. Sasha-Vally Bastien (Trustee)" },
    { id: "pierre", fr: "Mr. Geraldyr Lourdy Pierre (Conseil & Orientation)", en: "Mr. Geraldyr Lourdy Pierre (Counselor)" },
  ];

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const chosen = recipientOptions.find((r) => r.id === recipient);
    const destLabel = chosen ? chosen[language] : "Direction";
    const subject = `${language === "fr" ? `Contact [${destLabel}] — Fondation Blessed Vally` : `Contact [${destLabel}] — Blessed Vally Foundation`}`;
    const body = `${copy.formName}: ${form.name}\n${copy.formEmail}: ${form.email}\n${language === "fr" ? "Destinataire" : "Recipient"}: ${destLabel}\n\n${copy.formMessage}:\n${form.message}`;
    window.location.href = `mailto:Blessedvallyfoundation@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="contact-panel section-space" id="contact-form-section">
      <div className="container contact-panel__grid">
        <div className="contact-panel__intro">
          <p className="eyebrow"><span className="eyebrow-dot" />{language === "fr" ? "Ouvrir le dialogue" : "Open the conversation"}</p>
          <h2>{language === "fr" ? "Une question, une idée, un partenariat ?" : "A question, an idea, a partnership?"}</h2>
          <p>{language === "fr" ? "Écrivez-nous ou joignez directement notre secrétariat officiel. Nous vous répondrons avec diligence." : "Write to us or reach our executive secretariat. We’ll respond with dedicated attention."}</p>
          
          <div className="contact-panel__details">
            <div className="contact-panel__item">
              <Mail size={16} />
              <div>
                <strong>{language === "fr" ? "Courriel officiel :" : "Official Email:"}</strong>{" "}
                <a className="contact-email-inline" href="mailto:Blessedvallyfoundation@gmail.com">Blessedvallyfoundation@gmail.com</a>
              </div>
            </div>
            <div className="contact-panel__item">
              <Smartphone size={16} />
              <div>
                <strong>{language === "fr" ? "Téléphones (USA) :" : "Phones (USA):"}</strong>{" "}
                <a href="tel:+17864430472">+1 (786) 443-0472</a> &bull; <a href="tel:+18456557399">+1 (845) 655-7399</a>
              </div>
            </div>
            <div className="contact-panel__item">
              <Smartphone size={16} />
              <div>
                <strong>{language === "fr" ? "Téléphones (Haïti) :" : "Phones (Haiti):"}</strong>{" "}
                <a href="tel:+50936184340">+509 3618-4340</a> &bull; <a href="tel:+50943108621">+509 4310-8621</a> &bull; <a href="tel:+50948342601">+509 48 34 2601</a>
              </div>
            </div>
            <div className="contact-panel__item">
              <Landmark size={16} />
              <div>
                <strong>{language === "fr" ? "Adresse Postale (Mailing) :" : "Postal Mailing Address:"}</strong>
                <div>12933 SW 129 Street, Miami, FL 33177</div>
              </div>
            </div>
            <div className="contact-panel__item">
              <Landmark size={16} />
              <div>
                <strong>{language === "fr" ? "Bureau Administratif (Office) :" : "Administrative Office:"}</strong>
                <div>609 NE 123rd Street, North-Miami, FL 33161</div>
              </div>
            </div>
            <div className="contact-panel__item">
              <Landmark size={16} />
              <div>
                <strong>{language === "fr" ? "Adresse en Haïti :" : "Haiti Address:"}</strong>
                <div>12, Pelerin 4A, Petionville-Haiti</div>
              </div>
            </div>
            <div className="contact-panel__item">
              <Landmark size={16} />
              <div>
                <strong>{language === "fr" ? "Centre de Mission Haïti :" : "Haiti Mission Center:"}</strong>
                <div>Brostage, Dondon, Département du Nord, Haïti</div>
              </div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>
            {language === "fr" ? "Destinataire souhaité" : "Preferred recipient"}
            <select value={recipient} onChange={(event) => setRecipient(event.target.value)}>
              {recipientOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>{opt[language]}</option>
              ))}
            </select>
          </label>
          <label>{copy.formName}<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder={language === "fr" ? "Votre nom" : "Your name"} /></label>
          <label>{copy.formEmail}<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="name@example.com" /></label>
          <label>{copy.formMessage}<textarea required rows={5} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder={language === "fr" ? "Parlez-nous de votre intérêt pour la mission..." : "Tell us what draws you to the mission..."} /></label>
          <button className="button button--ink" type="submit"><Send size={16} />{copy.send}</button>
          {sent && <p className="form-note">{language === "fr" ? "Votre messagerie devrait s’ouvrir avec un message prérempli." : "Your email app should open with a prepared message."}</p>}
        </form>
      </div>
    </section>
  );
}

function CopyField({
  label,
  value,
  language,
}: {
  label: string;
  value: string;
  language: Language;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="banking-field">
      <span className="banking-field__label">{label}</span>
      <div className="banking-field__row">
        <code className="banking-field__value">{value}</code>
        <button
          type="button"
          onClick={handleCopy}
          className={`banking-field__copy-btn ${copied ? "is-copied" : ""}`}
          title={language === "fr" ? "Copier" : "Copy"}
          aria-label={`Copier ${label}`}
        >
          {copied ? <CheckCheck size={13} /> : <Copy size={13} />}
          <span>{copied ? (language === "fr" ? "Copié !" : "Copied!") : (language === "fr" ? "Copier" : "Copy")}</span>
        </button>
      </div>
    </div>
  );
}

function BankingMethodsSection({ language }: { language: Language }) {
  return (
    <section className="banking-section section-space">
      <div className="container">
        <div className="banking-section__header">
          <p className="eyebrow"><span className="eyebrow-dot" />{language === "fr" ? "Virement, Zelle & Chèque" : "Wire, Zelle & Check"}</p>
          <h2>{language === "fr" ? "Coordonnées bancaires pour vos dons directs." : "Official banking details for direct donations."}</h2>
          <p className="banking-section__sub">
            {language === "fr"
              ? "Pour soutenir la Fondation sans utiliser de carte bancaire en ligne, vous pouvez effectuer un dépôt par chèque, un transfert Zelle ou un virement bancaire direct (Wire) aux États-Unis :"
              : "To support the Foundation directly without an online card, you can make a check deposit, send a Zelle payment, or initiate a bank wire transfer in the United States:"}
          </p>
        </div>

        <div className="banking-cards__grid">
          {/* Card 1: Bank of America - Dépôt par chèque aux États-Unis */}
          <div className="banking-card">
            <div className="banking-card__top">
              <span className="banking-card__num">01</span>
              <span className="banking-card__tag">{language === "fr" ? "Dépôt par chèque (USA)" : "Check Deposit (USA)"}</span>
            </div>
            <h3 className="banking-card__title">Bank of America</h3>
            <p className="banking-card__desc">
              {language === "fr"
                ? "Pour dépôt par chèque aux États-Unis"
                : "For check deposits in the United States"}
            </p>
            <div className="banking-card__fields">
              <CopyField
                label={language === "fr" ? "Banque" : "Bank"}
                value="Bank of America"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Ordre / Acct" : "Pay to / Account Name"}
                value="Blessed Vally Foundation Inc."
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Numéro de compte (Acct)" : "Account Number (Acct)"}
                value="8981-4024-0961"
                language={language}
              />
            </div>
          </div>

          {/* Card 2: Zelle */}
          <div className="banking-card">
            <div className="banking-card__top">
              <span className="banking-card__num">02</span>
              <span className="banking-card__tag">{language === "fr" ? "Transfert sans frais" : "Zero Fee Transfer"}</span>
            </div>
            <h3 className="banking-card__title">{language === "fr" ? "Pour Zelle" : "For Zelle"}</h3>
            <p className="banking-card__desc">
              {language === "fr"
                ? "Transfert instantané depuis votre application bancaire américaine"
                : "Instant transfer from your U.S. mobile banking application"}
            </p>
            <div className="banking-card__fields">
              <CopyField
                label={language === "fr" ? "Email associé" : "Registered Email"}
                value="blessedvallyfoundation@gmail.com"
                language={language}
              />
            </div>
          </div>

          {/* Card 3: Wire / SPIH */}
          <div className="banking-card">
            <div className="banking-card__top">
              <span className="banking-card__num">03</span>
              <span className="banking-card__tag">{language === "fr" ? "Virement bancaire" : "Bank Wire"}</span>
            </div>
            <h3 className="banking-card__title">{language === "fr" ? "Pour wire" : "For Wire Transfer"}</h3>
            <p className="banking-card__desc">
              {language === "fr"
                ? "Virement bancaire direct pour particuliers et organisations"
                : "Direct wire transfer for individuals and organizations"}
            </p>
            <div className="banking-card__fields">
              <CopyField
                label={language === "fr" ? "Mention / Bénéficiaire" : "Beneficiary / Memo"}
                value="/SPIH Blessed Vally Foundation Inc"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Banque" : "Bank"}
                value="Bank of America"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Numéro de compte (Acct)" : "Account Number (Acct)"}
                value="8981-4024-0961"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Routing" : "Routing Number"}
                value="026009593"
                language={language}
              />
            </div>
          </div>

          {/* Card 4: BUH (Banque de l'Union Haïtienne) - Haïti */}
          <div className="banking-card">
            <div className="banking-card__top">
              <span className="banking-card__num">04</span>
              <span className="banking-card__tag">{language === "fr" ? "Dépôt local (Haïti)" : "Local Deposit (Haiti)"}</span>
            </div>
            <h3 className="banking-card__title">BUH (Banque de l'Union Haïtienne)</h3>
            <p className="banking-card__desc">
              {language === "fr"
                ? "Pour dépôts et virements bancaires locaux en Haïti (Gourdes & Dollars US)"
                : "For local bank deposits and transfers in Haiti (Gourdes & US Dollars)"}
            </p>
            <div className="banking-card__fields">
              <CopyField
                label={language === "fr" ? "Banque" : "Bank"}
                value="Banque de l'Union Haïtienne (BUH)"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Titulaire du compte" : "Account Holder"}
                value="Dr. Vally Docteur Jean-Louis"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Compte Gourdes (HTG)" : "Gourdes Account (HTG)"}
                value="15000017423"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Compte Dollars US (USD)" : "US Dollars Account (USD)"}
                value="15000017431"
                language={language}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReceiptConfirmationSection({ language }: { language: Language }) {
  return (
    <section className="receipt-section section-space">
      <div className="container receipt-section__grid">
        <div className="receipt-section__intro">
          <p className="eyebrow"><span className="eyebrow-dot" />{language === "fr" ? "Reçu et confirmation de don" : "Tax Receipt & Confirmation"}</p>
          <h2>{language === "fr" ? "Une confirmation officielle pour chaque contribution." : "Official confirmation and receipt for every contribution."}</h2>
        </div>
        <div className="receipt-section__body">
          <p>
            {language === "fr"
              ? "La Fondation Blessed Vally Inc. veille à la transparence et à la reconnaissance de chaque don. Pour tout dépôt par chèque, transfert Zelle ou virement bancaire (Wire), un reçu officiel vous est délivré sur demande pour vos dossiers administratifs et fiscaux."
              : "Blessed Vally Foundation Inc. ensures full accountability and acknowledgment for every gift. For all check deposits, Zelle transfers, or bank wires, an official acknowledgment receipt is provided upon request for your administrative and tax records."}
          </p>
          <div className="receipt-section__box">
            <strong><ShieldCheck size={16} />{language === "fr" ? "Comment obtenir votre reçu :" : "How to receive your receipt:"}</strong>
            <p>
              {language === "fr"
                ? "Après l’envoi de votre virement ou dépôt, transmettez-nous la confirmation ou la référence de la transaction ainsi que vos coordonnées complètes à :"
                : "After completing your transfer or deposit, please send the confirmation reference along with your contact details to:"}
            </p>
            <a className="contact-email" href="mailto:blessedvallyfoundation@gmail.com">
              <Mail size={16} />
              blessedvallyfoundation@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TaxStatusDirectorySection({ language }: { language: Language }) {
  return (
    <section className="tax-directory section-space">
      <div className="container">
        <div className="tax-directory__header">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            {language === "fr" ? "Répertoire officiel & Vérifications" : "Official Directory & Records"}
          </p>
          <h2>
            {language === "fr"
              ? "Informations légales, fiscales et coordonnées officielles."
              : "Official Legal, Tax & Contact Information."}
          </h2>
          <p className="tax-directory__sub">
            {language === "fr"
              ? "Retrouvez les mentions officielles de la Fondation Blessed Vally Inc. telles qu’enregistrées auprès de l'État de Floride et publiées sur le site officiel blessedvallyfoundation.org. Ces coordonnées font foi pour vos courriers, chèques de dons et démarches administratives."
              : "Access the verified records of Blessed Vally Foundation Inc. as registered with the State of Florida and published on blessedvallyfoundation.org. These details serve for all official mail, check gifts, and administrative inquiries."}
          </p>
        </div>

        <div className="tax-directory__grid">
          {/* Card 1: Statut fiscal exact */}
          <div className="banking-card">
            <div className="banking-card__top">
              <span className="banking-card__num">01</span>
              <span className="banking-card__tag">
                {language === "fr" ? "Statut fiscal exact" : "Exact Tax Status"}
              </span>
            </div>
            <h3 className="banking-card__title">
              {language === "fr" ? "Entité & Statut juridique" : "Entity & Corporate Status"}
            </h3>
            <p className="banking-card__desc">
              {language === "fr"
                ? "Organisation sans but lucratif constituée dans l'État de Floride (Sunbiz)"
                : "Non-profit corporation registered in the State of Florida (Sunbiz)"}
            </p>
            <div className="banking-card__fields">
              <CopyField
                label={language === "fr" ? "Raison sociale officielle" : "Official Legal Name"}
                value="Blessed Vally Foundation Inc."
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Forme juridique" : "Legal Entity Type"}
                value="Florida Non-Profit Corporation"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Registre d'État" : "State Registry"}
                value="Florida Department of State (Sunbiz)"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Vocation statutaire" : "Corporate Purpose"}
                value={language === "fr" ? "Éducation, Foi, Humanitaire & Eau" : "Education, Faith, Relief & Clean Water"}
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Statut fiscal US" : "US Tax Status"}
                value={language === "fr" ? "Démarches administratives en cours" : "Administrative proceedings in progress"}
                language={language}
              />
            </div>
          </div>

          {/* Card 2: Adresse postale officielle */}
          <div className="banking-card">
            <div className="banking-card__top">
              <span className="banking-card__num">02</span>
              <span className="banking-card__tag">
                {language === "fr" ? "Adresses officielles" : "Official Addresses"}
              </span>
            </div>
            <h3 className="banking-card__title">
              {language === "fr" ? "Adresse postale & Bureaux" : "Postal Mailing & Offices"}
            </h3>
            <p className="banking-card__desc">
              {language === "fr"
                ? "Adresses officielles pour courriers administratifs, chèques et missions"
                : "Official addresses for administrative mail, check gifts, and field mission"}
            </p>
            <div className="banking-card__fields">
              <CopyField
                label={language === "fr" ? "Adresse Postale (Mailing)" : "Mailing Address (Postale)"}
                value="12933 SW 129 Street, Miami, FL 33177"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Bureau Administratif (Office)" : "Administrative Office"}
                value="609 NE 123rd Street, North-Miami, FL 33161"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Adresse en Haïti" : "Haiti Address"}
                value="12, Pelerin 4A, Petionville-Haiti"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Centre de Mission en Haïti" : "Haiti Mission Center"}
                value="Brostage, Dondon, Département du Nord, Haïti"
                language={language}
              />
            </div>
          </div>

          {/* Card 3: Numéros de téléphone officiels */}
          <div className="banking-card">
            <div className="banking-card__top">
              <span className="banking-card__num">03</span>
              <span className="banking-card__tag">
                {language === "fr" ? "Téléphones vérifiés" : "Verified Telephones"}
              </span>
            </div>
            <h3 className="banking-card__title">
              {language === "fr" ? "Numéros de téléphone officiels" : "Official Telephone Numbers"}
            </h3>
            <p className="banking-card__desc">
              {language === "fr"
                ? "Lignes directes pour joindre la présidence et les responsables de projets"
                : "Direct lines to reach executive leadership and program coordinators"}
            </p>
            <div className="banking-card__fields">
              <CopyField
                label={language === "fr" ? "Téléphone officiel (États-Unis - Ligne 1)" : "Official Phone (United States - Line 1)"}
                value="+1 (786) 443-0472"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Téléphone officiel (États-Unis - Ligne 2)" : "Official Phone (United States - Line 2)"}
                value="+1 (845) 655-7399"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Téléphone officiel (Haïti - Ligne 1)" : "Official Phone (Haiti - Line 1)"}
                value="+509 3618-4340"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Téléphone officiel (Haïti - Ligne 2)" : "Official Phone (Haiti - Line 2)"}
                value="+509 4310-8621"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Téléphone officiel (Haïti - Ligne 3)" : "Official Phone (Haiti - Line 3)"}
                value="+509 48 34 2601"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Courriel officiel" : "Official Email"}
                value="blessedvallyfoundation@gmail.com"
                language={language}
              />
            </div>
          </div>

          {/* Card 4: Mention sur les reçus fiscaux */}
          <div className="banking-card">
            <div className="banking-card__top">
              <span className="banking-card__num">04</span>
              <span className="banking-card__tag">
                {language === "fr" ? "Reçus & Déductibilité" : "Receipts & Deductions"}
              </span>
            </div>
            <h3 className="banking-card__title">
              {language === "fr" ? "Mention sur les reçus fiscaux" : "Tax Receipts & Statement"}
            </h3>
            <p className="banking-card__desc">
              {language === "fr"
                ? "Délivrance de confirmation officielle pour chaque contribution financière"
                : "Official acknowledgment statement issued for every charitable contribution"}
            </p>
            <div className="banking-card__fields">
              <CopyField
                label={language === "fr" ? "Modes de don éligibles" : "Eligible Payment Methods"}
                value="Stripe, Chèque Bank of America, Zelle, Wire"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Contrepartie reçue" : "Goods / Services Exchanged"}
                value={language === "fr" ? "Aucune (Don bénévole direct sans contrepartie)" : "None (Direct contribution, no goods exchanged)"}
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Demande de reçu officiel" : "Request Official Receipt"}
                value="blessedvallyfoundation@gmail.com"
                language={language}
              />
              <CopyField
                label={language === "fr" ? "Site officiel de référence" : "Official Reference Website"}
                value="blessedvallyfoundation.org"
                language={language}
              />
            </div>
          </div>
        </div>

        {/* Commitment Banner linking to Donate and Contact */}
        <div className="haiti-works__banner" style={{ marginTop: "40px" }}>
          <div className="haiti-works__banner-text">
            <div className="haiti-works__banner-heading">
              <ShieldCheck size={22} className="haiti-works__shield" />
              <h3>
                {language === "fr"
                  ? "Transparence & Intégrité financière"
                  : "Financial Integrity & Transparency"}
              </h3>
            </div>
            <p>
              {language === "fr"
                ? "Toutes les contributions perçues par la Fondation Blessed Vally Inc. sont gérées sous la supervision directe de la présidence et consacrées aux programmes éducatifs, à l’assistance humanitaire et aux chantiers en Haïti."
                : "All contributions received by Blessed Vally Foundation Inc. are stewarded under the direct oversight of executive leadership and dedicated strictly to educational programs, humanitarian aid, and active building projects in Haiti."}
            </p>
          </div>
          <div className="haiti-works__banner-actions">
            <a href={routePaths.donate} className="button button--coral">
              {language === "fr" ? "Faire un don officiel" : "Make an official donation"}
              <ArrowRight size={16} />
            </a>
            <a href={routePaths.contact} className="button button--paper">
              {language === "fr" ? "Contacter le bureau" : "Contact the office"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}




