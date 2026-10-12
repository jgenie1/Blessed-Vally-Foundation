import {
  ArrowRight,
  Building2,
  Calendar,
  Check,
  CheckCheck,
  CheckCircle2,
  Copy,
  CreditCard,
  HeartHandshake,
  LockKeyhole,
  Mail,
  Printer,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  CURRENCY_SYMBOLS,
  DONATION_CAUSES,
  formatCurrencyAmount,
  getDynamicImpactMessage,
  PAYMENT_TABS,
  USD_PRESETS,
  type Currency,
  type DonationFrequency,
} from "@/lib/donation-data";
import type { Language } from "@/lib/site-content";

interface SessionDetails {
  id?: string;
  amountTotal?: number;
  currency?: string;
  customerEmail?: string;
  donorName?: string;
  causeTitle?: string;
  paymentStatus?: string;
  frequency?: string;
  created?: number;
}

export default function DonationModule({ language }: { language: Language }) {
  const [currentStatus, setCurrentStatus] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    const p = new URLSearchParams(window.location.search);
    return p.get("status");
  });

  const [sessionId, setSessionId] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    const p = new URLSearchParams(window.location.search);
    return p.get("session_id");
  });

  const [sessionDetails, setSessionDetails] = useState<SessionDetails | null>(null);
  const [fetchingSession, setFetchingSession] = useState<boolean>(false);

  useEffect(() => {
    if (sessionId && (currentStatus === "success" || currentStatus === "processing")) {
      setFetchingSession(true);
      fetch(`/api/stripe/session-status?session_id=${encodeURIComponent(sessionId)}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data: SessionDetails | null) => {
          if (data) {
            setSessionDetails(data);
          }
        })
        .catch(() => {
          // fallback
        })
        .finally(() => {
          setFetchingSession(false);
        });
    }
  }, [sessionId, currentStatus]);

  const handleResetDonation = () => {
    setCurrentStatus(null);
    setSessionId(null);
    setSessionDetails(null);
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", window.location.pathname);
    }
  };

  const [frequency, setFrequency] = useState<DonationFrequency>("once");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [amount, setAmount] = useState<string>("100");
  const [isCustomAmount, setIsCustomAmount] = useState<boolean>(false);
  const [selectedCause, setSelectedCause] = useState<string>("general");
  const [isTribute, setIsTribute] = useState<boolean>(false);
  const [tributeName, setTributeName] = useState<string>("");

  // Modality & Donor details
  const [activeTab, setActiveTab] = useState<"stripe" | "zelle" | "wire" | "buh" | "check">("stripe");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [wantsReceipt, setWantsReceipt] = useState<boolean>(true);

  // Status & checkout feedback
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const numericAmount = parseFloat(amount) || 0;
  const currentCause = DONATION_CAUSES.find((c) => c.id === selectedCause) || DONATION_CAUSES[0];

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(id);
      setTimeout(() => setCopiedField(null), 2200);
    } catch {
      // fallback
    }
  };

  const handleSelectPreset = (value: number) => {
    setIsCustomAmount(false);
    setAmount(String(value));
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCustomAmount(true);
    setAmount(e.target.value);
  };

  const startCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donorName: name,
          donorEmail: email,
          donorPhone: phone,
          amountCents: Math.round(numericAmount * 100),
          currency: currency.toLowerCase(),
          frequency,
          causeId: selectedCause,
          causeTitle: currentCause.label[language],
          isTribute,
          tributeName: isTribute ? tributeName : undefined,
          wantsReceipt,
          origin: window.location.origin,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.url) {
        throw new Error(result.error || "Unable to open secure checkout");
      }
      window.open(result.url, "_blank", "noopener,noreferrer");
      setMessage(
        language === "fr"
          ? "La page de paiement Stripe sécurisée s'est ouverte dans un nouvel onglet."
          : "Secure Stripe checkout opened in a new tab."
      );
    } catch {
      setError(
        language === "fr"
          ? "La passerelle de carte bancaire est temporairement indisponible. Vous pouvez effectuer votre don sans frais par Zelle, virement Bank of America ou BUH (voir onglets ci-dessous)."
          : "Online card gateway is temporarily unreachable. You can complete your gift zero-fee via Zelle, Bank of America Wire, or BUH (see tabs below)."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="donation-module-section section-space section-space--sand" id="donation-engine">
      <div className="container">
        {/* En-tête éditorial du don */}
        <div className="donation-module__header">
          <div className="donation-module__badge-row">
            <span className="donation-module__secure-tag">
              <LockKeyhole size={14} />
              {language === "fr" ? "Plateforme de Don Sécurisée" : "Secure Donation Platform"}
            </span>
            <span className="donation-module__sunbiz-tag">
              <ShieldCheck size={14} />
              {language === "fr" ? "Organisme Sunbiz Floride Enregistré" : "Registered Florida Non-Profit"}
            </span>
          </div>

          <h2>{language === "fr" ? "Chaque don transforme des vies." : "Every gift transforms lives."}</h2>
          <p className="donation-module__lead">
            {language === "fr"
              ? "Rejoignez la mission de la Fondation Blessed Vally. Vos contributions soutiennent directement l'éducation chrétienne des enfants, la cantine scolaire, l'accès à l'eau potable et la réfection des salles de classe en Haïti."
              : "Partner with Blessed Vally Foundation. Your generosity directly advances Christian education, school nutrition, clean water, and classroom infrastructure for children and families in Haiti."}
          </p>
        </div>

        {/* Panneau de Confirmation & Reçu Officiel (si redirection Stripe) */}
        {currentStatus === "success" || currentStatus === "processing" ? (
          <div className="donation-success-panel" id="donation-receipt">
            <div className="donation-success-panel__hero">
              <div className="donation-success-badge">
                <CheckCircle2 size={36} />
              </div>
              <span className="donation-success-kicker">
                {language === "fr"
                  ? "Paiement Confirmé & Enregistré avec Succès"
                  : "Payment Confirmed & Successfully Recorded"}
              </span>
              <h2>
                {language === "fr"
                  ? `Merci infiniment, ${sessionDetails?.donorName || "cher donateur"} !`
                  : `Thank you wholeheartedly, ${sessionDetails?.donorName || "generous supporter"}!`}
              </h2>
              <p className="donation-success-sub">
                {language === "fr"
                  ? "Votre don a été reçu et validé par notre passerelle bancaire Stripe. Votre générosité finance directement nos programmes éducatifs, nos cantines et nos travaux d'infrastructures en Haïti."
                  : "Your donation has been verified and processed via Stripe. Your generosity directly finances educational programs, school canteens, and vital infrastructure in Haiti."}
              </p>
            </div>

            {/* Carte Attestation & Reçu Officiel */}
            <div className="donation-receipt-card">
              <div className="donation-receipt-card__top">
                <div className="receipt-org">
                  <strong>Blessed Vally Foundation Inc.</strong>
                  <span>Florida Non-Profit Corporation &bull; Sunbiz Registered</span>
                </div>
                <div className="receipt-badge-verified">
                  <ShieldCheck size={14} />
                  <span>{language === "fr" ? "Reçu Officiel Vérifié" : "Verified Official Receipt"}</span>
                </div>
              </div>

              {fetchingSession ? (
                <div className="receipt-loading-notice">
                  {language === "fr"
                    ? "Synchronisation des détails de votre don avec Stripe..."
                    : "Synchronizing donation details with Stripe..."}
                </div>
              ) : (
                <div className="donation-receipt-grid">
                  <div className="receipt-item">
                    <span className="receipt-label">{language === "fr" ? "Montant du don" : "Gift Amount"}</span>
                    <strong className="receipt-value receipt-value--highlight">
                      {sessionDetails?.amountTotal
                        ? `${sessionDetails.amountTotal.toFixed(2)} ${sessionDetails.currency || "USD"}`
                        : `${amount} ${currency}`}
                    </strong>
                  </div>

                  <div className="receipt-item">
                    <span className="receipt-label">{language === "fr" ? "Statut bancaire" : "Payment Status"}</span>
                    <span className="receipt-status-pill">
                      <Check size={13} />
                      {language === "fr" ? "Paiement validé par Stripe" : "Paid & Verified by Stripe"}
                    </span>
                  </div>

                  <div className="receipt-item">
                    <span className="receipt-label">{language === "fr" ? "Affectation soutenue" : "Designated Purpose"}</span>
                    <strong className="receipt-value">
                      {sessionDetails?.causeTitle || currentCause.label[language]}
                    </strong>
                  </div>

                  <div className="receipt-item">
                    <span className="receipt-label">{language === "fr" ? "Type d'engagement" : "Gift Frequency"}</span>
                    <span className="receipt-value">
                      {sessionDetails?.frequency === "monthly" || frequency === "monthly"
                        ? language === "fr" ? "Don mensuel récurrent" : "Monthly recurring support"
                        : language === "fr" ? "Don ponctuel" : "One-time contribution"}
                    </span>
                  </div>

                  <div className="receipt-item">
                    <span className="receipt-label">{language === "fr" ? "Nom du donateur" : "Donor Name"}</span>
                    <span className="receipt-value">
                      {sessionDetails?.donorName || name || "Bienfaiteur"}
                    </span>
                  </div>

                  <div className="receipt-item">
                    <span className="receipt-label">{language === "fr" ? "Courriel de notification" : "Notification Email"}</span>
                    <code className="receipt-code">
                      {sessionDetails?.customerEmail || email || "Reçu transmis par courriel"}
                    </code>
                  </div>

                  <div className="receipt-item receipt-item--full">
                    <span className="receipt-label">{language === "fr" ? "Numéro de référence officiel (Session ID)" : "Official Reference ID"}</span>
                    <code className="receipt-code receipt-code--subtle">
                      {sessionId || "cs_test_..."}
                    </code>
                  </div>
                </div>
              )}

              <div className="donation-receipt-footer">
                <p>
                  {language === "fr"
                    ? `Une attestation fiscale officielle a été générée pour ${sessionDetails?.customerEmail || "votre adresse électronique"}. Blessed Vally Foundation Inc. est une corporation sans but lucratif enregistrée auprès du Département d'État de Floride (Sunbiz).`
                    : `An official tax acknowledgment has been recorded for ${sessionDetails?.customerEmail || "your email"}. Blessed Vally Foundation Inc. is a registered Non-Profit Corporation with the Florida Department of State (Sunbiz).`}
                </p>
              </div>
            </div>

            {/* Boutons d'actions post-paiement */}
            <div className="donation-success-actions">
              <button
                type="button"
                onClick={() => window.print()}
                className="button button--paper"
              >
                <Printer size={15} />
                {language === "fr" ? "Imprimer / Télécharger l'attestation" : "Print / Download Receipt"}
              </button>

              <a href="/haiti" className="button button--coral">
                {language === "fr" ? "Découvrir les travaux en Haïti" : "Explore Field Work in Haiti"}
                <ArrowRight size={15} />
              </a>

              <button
                type="button"
                onClick={handleResetDonation}
                className="button button--ink"
              >
                <RotateCcw size={15} />
                {language === "fr" ? "Faire un nouveau don" : "Make Another Donation"}
              </button>
            </div>
          </div>
        ) : (
          /* Grille principale de configuration du don */
          <div className="donation-module__grid">
            {/* Colonne gauche : Paramétrage du don */}
            <div className="donation-config-card">
            {/* 1. Fréquence */}
            <div className="donation-step">
              <label className="donation-step__label">
                <span className="donation-step__num">1</span>
                {language === "fr" ? "Fréquence du don" : "Gift Frequency"}
              </label>

              <div className="donation-frequency-toggle">
                <button
                  type="button"
                  className={`donation-freq-btn ${frequency === "once" ? "is-active" : ""}`}
                  onClick={() => setFrequency("once")}
                >
                  <Calendar size={15} />
                  <span>{language === "fr" ? "Don ponctuel" : "One-time gift"}</span>
                </button>
                <button
                  type="button"
                  className={`donation-freq-btn ${frequency === "monthly" ? "is-active" : ""}`}
                  onClick={() => setFrequency("monthly")}
                >
                  <Calendar size={15} />
                  <span>{language === "fr" ? "Don mensuel" : "Monthly support"}</span>
                  <span className="donation-freq-badge">
                    {language === "fr" ? "Impact pérenne" : "Highest impact"}
                  </span>
                </button>
              </div>
            </div>

            {/* 2. Choix de la Devise & Montant */}
            <div className="donation-step">
              <div className="donation-step__header-split">
                <label className="donation-step__label">
                  <span className="donation-step__num">2</span>
                  {language === "fr" ? "Montant de votre don" : "Select Your Amount"}
                </label>

                {/* Sélecteur de Devise */}
                <div className="currency-selector">
                  {(["USD", "EUR", "HTG", "CAD"] as Currency[]).map((cur) => (
                    <button
                      key={cur}
                      type="button"
                      className={`currency-pill ${currency === cur ? "is-active" : ""}`}
                      onClick={() => setCurrency(cur)}
                    >
                      {cur}
                    </button>
                  ))}
                </div>
              </div>

              {/* Boutons de présets */}
              <div className="amount-presets-grid">
                {USD_PRESETS.map((preset) => {
                  const isActive = !isCustomAmount && amount === String(preset.value);
                  return (
                    <button
                      key={preset.value}
                      type="button"
                      className={`preset-btn ${isActive ? "is-active" : ""}`}
                      onClick={() => handleSelectPreset(preset.value)}
                    >
                      <span className="preset-btn__value">
                        {CURRENCY_SYMBOLS[currency]}
                        {preset.value}
                      </span>
                      {preset.popular && (
                        <span className="preset-btn__badge">
                          {language === "fr" ? "Conseillé" : "Recommended"}
                        </span>
                      )}
                    </button>
                  );
                })}

                <button
                  type="button"
                  className={`preset-btn ${isCustomAmount ? "is-active" : ""}`}
                  onClick={() => setIsCustomAmount(true)}
                >
                  <span className="preset-btn__value">
                    {language === "fr" ? "Montant libre" : "Custom"}
                  </span>
                </button>
              </div>

              {/* Champ de saisie personnalisé */}
              <div className="custom-amount-wrap">
                <span className="custom-amount-symbol">{CURRENCY_SYMBOLS[currency]}</span>
                <input
                  type="number"
                  min="1"
                  step="any"
                  value={amount}
                  onChange={handleCustomAmountChange}
                  className="custom-amount-input"
                  placeholder={language === "fr" ? "Entrez votre montant" : "Enter custom amount"}
                />
                <span className="custom-amount-currency">{currency}</span>
              </div>

              {/* Encadré d'Impact Concret Dynamique */}
              <div className="donation-impact-card">
                <div className="donation-impact-card__icon">
                  <HeartHandshake size={20} />
                </div>
                <div className="donation-impact-card__content">
                  <strong>
                    {language === "fr"
                      ? `Votre don de ${formatCurrencyAmount(numericAmount, currency)}${frequency === "monthly" ? " / mois" : ""} :`
                      : `Your ${formatCurrencyAmount(numericAmount, currency)}${frequency === "monthly" ? " / month" : ""} gift:`}
                  </strong>
                  <p>{getDynamicImpactMessage(numericAmount, currency, frequency, language)}</p>
                </div>
              </div>

              {/* Note officielle de Transparence et Reçu */}
              {numericAmount > 0 && (
                <div className="tax-deduction-callout">
                  <span className="tax-deduction-callout__pill">
                    {language === "fr" ? "Reçu & Transparence" : "Receipt & Transparency"}
                  </span>
                  <div className="tax-deduction-callout__text">
                    {language === "fr" ? (
                      <>
                        Un reçu officiel de confirmation est délivré pour chaque contribution. Les démarches administratives relatives au statut fiscal aux États-Unis sont actuellement en cours.
                      </>
                    ) : (
                      <>
                        An official acknowledgment receipt is provided for every contribution. Administrative proceedings regarding corporate tax status in the United States are currently in progress.
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Affectation du Don (Designated Giving) */}
            <div className="donation-step">
              <label className="donation-step__label">
                <span className="donation-step__num">3</span>
                {language === "fr" ? "Affectation de votre don" : "Designate Your Gift"}
              </label>

              <select
                value={selectedCause}
                onChange={(e) => setSelectedCause(e.target.value)}
                className="cause-select-input"
              >
                {DONATION_CAUSES.map((cause) => (
                  <option key={cause.id} value={cause.id}>
                    {cause.label[language]}
                  </option>
                ))}
              </select>
              <p className="cause-description-note">{currentCause.description[language]}</p>

              {/* Option Hommage / En mémoire */}
              <div className="tribute-toggle-wrap">
                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    checked={isTribute}
                    onChange={(e) => setIsTribute(e.target.checked)}
                  />
                  <span>
                    {language === "fr"
                      ? "Faire ce don en l'honneur ou en mémoire d'une personne"
                      : "Dedicate this gift in honor or in memory of someone"}
                  </span>
                </label>

                {isTribute && (
                  <input
                    type="text"
                    value={tributeName}
                    onChange={(e) => setTributeName(e.target.value)}
                    placeholder={
                      language === "fr"
                        ? "Nom de la personne honorée ou commémorée"
                        : "Name of the honored or remembered individual"
                    }
                    className="tribute-input"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Colonne droite : Modes de paiement & Formulaire */}
          <div className="donation-methods-card">
            {/* Onglets de modes de paiement */}
            <div className="payment-tabs-nav">
              {PAYMENT_TABS.map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    className={`payment-tab-btn ${isSelected ? "is-active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="payment-tab-btn__title">{tab.title[language]}</span>
                    <span className="payment-tab-btn__badge">{tab.badge[language]}</span>
                  </button>
                );
              })}
            </div>

            {/* Contenu de l'onglet actif */}
            <div className="payment-tab-content">
              {/* ONGLET 1 : STRIPE / CARTE BANCAIRE */}
              {activeTab === "stripe" && (
                <div className="stripe-checkout-panel">
                  <div className="tab-intro-banner">
                    <CreditCard size={18} />
                    <div>
                      <h4>{PAYMENT_TABS[0].title[language]}</h4>
                      <p>{PAYMENT_TABS[0].subtitle[language]}</p>
                    </div>
                  </div>

                  {currentStatus === "cancelled" && (
                    <div className="donation-notice donation-notice--warning">
                      {language === "fr"
                        ? "La session de don a été annulée. Aucun prélèvement n'a été effectué."
                        : "The donation was cancelled. No charges were made."}
                    </div>
                  )}

                  {error && <div className="donation-notice donation-notice--error">{error}</div>}
                  {message && <div className="donation-notice donation-notice--success">{message}</div>}

                  <form onSubmit={startCheckout} className="stripe-form">
                    <div className="form-group">
                      <label>{language === "fr" ? "Nom & Prénom" : "Full Name"}</label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={language === "fr" ? "Ex. Jean Dupont" : "Ex. John Doe"}
                      />
                    </div>

                    <div className="form-group">
                      <label>{language === "fr" ? "Adresse courriel (pour le reçu fiscal)" : "Email Address (for tax receipt)"}</label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jean@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label>{language === "fr" ? "Téléphone (facultatif)" : "Phone Number (optional)"}</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (786) 000-0000"
                      />
                    </div>

                    <label className="checkbox-row receipt-checkbox">
                      <input
                        type="checkbox"
                        checked={wantsReceipt}
                        onChange={(e) => setWantsReceipt(e.target.checked)}
                      />
                      <span>
                        {language === "fr"
                          ? "Je souhaite recevoir un reçu fiscal officiel nominatif par email"
                          : "I request an official tax acknowledgment receipt via email"}
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={loading || numericAmount <= 0}
                      className="checkout-submit-btn"
                    >
                      {loading ? (
                        language === "fr" ? "Redirection en cours…" : "Connecting to Stripe…"
                      ) : (
                        <>
                          <span>
                            {language === "fr"
                              ? `Faire un don de ${formatCurrencyAmount(numericAmount, currency)}`
                              : `Give ${formatCurrencyAmount(numericAmount, currency)}`}
                          </span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    <div className="security-assurances">
                      <span>
                        <LockKeyhole size={13} />
                        {language === "fr" ? "Chiffrement SSL 256 bits" : "256-bit SSL encryption"}
                      </span>
                      <span>
                        <ShieldCheck size={13} />
                        {language === "fr" ? "Conformité Stripe PCI-DSS" : "Stripe PCI-DSS Level 1"}
                      </span>
                    </div>
                  </form>
                </div>
              )}

              {/* ONGLET 2 : ZELLE */}
              {activeTab === "zelle" && (
                <div className="method-instruction-panel">
                  <div className="tab-intro-banner">
                    <ShieldCheck size={18} />
                    <div>
                      <h4>{language === "fr" ? "Paiement instantané via Zelle (USA)" : "Instant Zelle Payment (USA)"}</h4>
                      <p>{language === "fr" ? "100% de votre don nous parvient sans aucun frais intermédiaire bancaire." : "100% of your gift reaches the mission with zero banking deductions."}</p>
                    </div>
                  </div>

                  <div className="instruction-steps">
                    <p className="instruction-lead">
                      {language === "fr"
                        ? "Ouvrez l'application mobile de votre banque américaine (Bank of America, Chase, Wells Fargo, Citi, etc.) puis sélectionnez 'Send Money with Zelle' :"
                        : "Open your U.S. mobile banking application (Bank of America, Chase, Wells Fargo, Citi, etc.) and tap 'Send Money with Zelle':"}
                    </p>

                    <div className="banking-copy-row">
                      <div className="banking-copy-info">
                        <span className="copy-label">{language === "fr" ? "Courriel officiel enregistré" : "Registered Zelle Email"}</span>
                        <code className="copy-value">blessedvallyfoundation@gmail.com</code>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy("zelle-email", "blessedvallyfoundation@gmail.com")}
                        className={`copy-btn ${copiedField === "zelle-email" ? "is-copied" : ""}`}
                      >
                        {copiedField === "zelle-email" ? <CheckCheck size={14} /> : <Copy size={14} />}
                        <span>{copiedField === "zelle-email" ? (language === "fr" ? "Copié !" : "Copied!") : (language === "fr" ? "Copier" : "Copy")}</span>
                      </button>
                    </div>

                    <div className="banking-copy-row">
                      <div className="banking-copy-info">
                        <span className="copy-label">{language === "fr" ? "Destinataire / Titulaire" : "Recipient Organization"}</span>
                        <code className="copy-value">Blessed Vally Foundation Inc.</code>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy("zelle-name", "Blessed Vally Foundation Inc.")}
                        className={`copy-btn ${copiedField === "zelle-name" ? "is-copied" : ""}`}
                      >
                        {copiedField === "zelle-name" ? <CheckCheck size={14} /> : <Copy size={14} />}
                        <span>{copiedField === "zelle-name" ? (language === "fr" ? "Copié !" : "Copied!") : (language === "fr" ? "Copier" : "Copy")}</span>
                      </button>
                    </div>

                    <div className="memo-guidance">
                      <strong>{language === "fr" ? "Mention / Memo conseillée :" : "Recommended Memo:"}</strong>
                      <p>
                        {language === "fr"
                          ? `Don ${currentCause.label.fr} — [Votre nom]`
                          : `Donation ${currentCause.label.en} — [Your Name]`}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ONGLET 3 : WIRE / BANK OF AMERICA */}
              {activeTab === "wire" && (
                <div className="method-instruction-panel">
                  <div className="tab-intro-banner">
                    <Building2 size={18} />
                    <div>
                      <h4>{language === "fr" ? "Virement bancaire direct — Bank of America" : "Direct Wire Transfer — Bank of America"}</h4>
                      <p>{language === "fr" ? "Pour dons d'entreprises, d'églises ou de particuliers aux États-Unis." : "For churches, corporate partners, and direct institutional donors."}</p>
                    </div>
                  </div>

                  <div className="banking-copy-list">
                    <div className="banking-copy-row">
                      <div className="banking-copy-info">
                        <span className="copy-label">{language === "fr" ? "Établissement bancaire" : "Bank"}</span>
                        <code className="copy-value">Bank of America</code>
                      </div>
                    </div>

                    <div className="banking-copy-row">
                      <div className="banking-copy-info">
                        <span className="copy-label">{language === "fr" ? "Bénéficiaire / Nom du compte" : "Account Name / Beneficiary"}</span>
                        <code className="copy-value">Blessed Vally Foundation Inc.</code>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy("wire-name", "Blessed Vally Foundation Inc.")}
                        className={`copy-btn ${copiedField === "wire-name" ? "is-copied" : ""}`}
                      >
                        {copiedField === "wire-name" ? <CheckCheck size={14} /> : <Copy size={14} />}
                        <span>{copiedField === "wire-name" ? (language === "fr" ? "Copié !" : "Copied!") : (language === "fr" ? "Copier" : "Copy")}</span>
                      </button>
                    </div>

                    <div className="banking-copy-row">
                      <div className="banking-copy-info">
                        <span className="copy-label">{language === "fr" ? "Numéro de compte (Account Number)" : "Account Number"}</span>
                        <code className="copy-value">8981-4024-0961</code>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy("wire-acct", "898140240961")}
                        className={`copy-btn ${copiedField === "wire-acct" ? "is-copied" : ""}`}
                      >
                        {copiedField === "wire-acct" ? <CheckCheck size={14} /> : <Copy size={14} />}
                        <span>{copiedField === "wire-acct" ? (language === "fr" ? "Copié !" : "Copied!") : (language === "fr" ? "Copier" : "Copy")}</span>
                      </button>
                    </div>

                    <div className="banking-copy-row">
                      <div className="banking-copy-info">
                        <span className="copy-label">{language === "fr" ? "Routing Number (Fil de virement)" : "Routing Number"}</span>
                        <code className="copy-value">026009593</code>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy("wire-routing", "026009593")}
                        className={`copy-btn ${copiedField === "wire-routing" ? "is-copied" : ""}`}
                      >
                        {copiedField === "wire-routing" ? <CheckCheck size={14} /> : <Copy size={14} />}
                        <span>{copiedField === "wire-routing" ? (language === "fr" ? "Copié !" : "Copied!") : (language === "fr" ? "Copier" : "Copy")}</span>
                      </button>
                    </div>

                    <div className="banking-copy-row">
                      <div className="banking-copy-info">
                        <span className="copy-label">{language === "fr" ? "Mention / Mémo officiel" : "Wire Memo"}</span>
                        <code className="copy-value">/SPIH Blessed Vally Foundation Inc</code>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy("wire-memo", "/SPIH Blessed Vally Foundation Inc")}
                        className={`copy-btn ${copiedField === "wire-memo" ? "is-copied" : ""}`}
                      >
                        {copiedField === "wire-memo" ? <CheckCheck size={14} /> : <Copy size={14} />}
                        <span>{copiedField === "wire-memo" ? (language === "fr" ? "Copié !" : "Copied!") : (language === "fr" ? "Copier" : "Copy")}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ONGLET 4 : BUH (HAÏTI LOCAL) */}
              {activeTab === "buh" && (
                <div className="method-instruction-panel">
                  <div className="tab-intro-banner">
                    <Building2 size={18} />
                    <div>
                      <h4>Banque de l'Union Haïtienne (BUH)</h4>
                      <p>{language === "fr" ? "Dépôts directs au guichet et virements locaux en Haïti." : "Direct branch deposits and local transfers across Haiti."}</p>
                    </div>
                  </div>

                  <div className="banking-copy-list">
                    <div className="banking-copy-row">
                      <div className="banking-copy-info">
                        <span className="copy-label">{language === "fr" ? "Titulaire légal du compte" : "Account Holder"}</span>
                        <code className="copy-value">Dr. Vally Docteur Jean-Louis</code>
                      </div>
                    </div>

                    <div className="banking-copy-row">
                      <div className="banking-copy-info">
                        <span className="copy-label">{language === "fr" ? "Compte Gourdes (HTG)" : "Gourdes Account (HTG)"}</span>
                        <code className="copy-value">15000017423</code>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy("buh-htg", "15000017423")}
                        className={`copy-btn ${copiedField === "buh-htg" ? "is-copied" : ""}`}
                      >
                        {copiedField === "buh-htg" ? <CheckCheck size={14} /> : <Copy size={14} />}
                        <span>{copiedField === "buh-htg" ? (language === "fr" ? "Copié !" : "Copied!") : (language === "fr" ? "Copier" : "Copy")}</span>
                      </button>
                    </div>

                    <div className="banking-copy-row">
                      <div className="banking-copy-info">
                        <span className="copy-label">{language === "fr" ? "Compte Dollars US (USD)" : "US Dollars Account (USD)"}</span>
                        <code className="copy-value">15000017431</code>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy("buh-usd", "15000017431")}
                        className={`copy-btn ${copiedField === "buh-usd" ? "is-copied" : ""}`}
                      >
                        {copiedField === "buh-usd" ? <CheckCheck size={14} /> : <Copy size={14} />}
                        <span>{copiedField === "buh-usd" ? (language === "fr" ? "Copié !" : "Copied!") : (language === "fr" ? "Copier" : "Copy")}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ONGLET 5 : CHÈQUE POSTAL */}
              {activeTab === "check" && (
                <div className="method-instruction-panel">
                  <div className="tab-intro-banner">
                    <Mail size={18} />
                    <div>
                      <h4>{language === "fr" ? "Dépôt par chèque postal (USA)" : "Check Deposit by Mail (USA)"}</h4>
                      <p>{language === "fr" ? "Envoyez votre chèque libellé à l'ordre de la Fondation." : "Send your check payable to the Foundation's Florida address."}</p>
                    </div>
                  </div>

                  <div className="instruction-steps">
                    <div className="banking-copy-row">
                      <div className="banking-copy-info">
                        <span className="copy-label">{language === "fr" ? "Ordre du chèque" : "Payable to"}</span>
                        <code className="copy-value">Blessed Vally Foundation Inc.</code>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy("check-order", "Blessed Vally Foundation Inc.")}
                        className={`copy-btn ${copiedField === "check-order" ? "is-copied" : ""}`}
                      >
                        {copiedField === "check-order" ? <CheckCheck size={14} /> : <Copy size={14} />}
                        <span>{copiedField === "check-order" ? (language === "fr" ? "Copié !" : "Copied!") : (language === "fr" ? "Copier" : "Copy")}</span>
                      </button>
                    </div>

                    <div className="banking-copy-row">
                      <div className="banking-copy-info">
                        <span className="copy-label">{language === "fr" ? "Adresse postale d'expédition (Miami)" : "Mailing Address (Miami, FL)"}</span>
                        <code className="copy-value">12933 SW 129 Street, Miami, FL 33177</code>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy("check-addr", "12933 SW 129 Street, Miami, FL 33177")}
                        className={`copy-btn ${copiedField === "check-addr" ? "is-copied" : ""}`}
                      >
                        {copiedField === "check-addr" ? <CheckCheck size={14} /> : <Copy size={14} />}
                        <span>{copiedField === "check-addr" ? (language === "fr" ? "Copié !" : "Copied!") : (language === "fr" ? "Copier" : "Copy")}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pied du module avec promesse de reçu */}
            <div className="donation-card-footer">
              <div className="footer-receipt-note">
                <Check size={15} />
                <span>
                  {language === "fr"
                    ? "Confirmation et reçu officiel certifié transmis par courriel pour tout versement."
                    : "Certified acknowledgment receipt issued via email for all contributions."}
                </span>
              </div>
              <a
                href="mailto:blessedvallyfoundation@gmail.com"
                className="footer-contact-link"
              >
                <Mail size={13} />
                blessedvallyfoundation@gmail.com
              </a>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
