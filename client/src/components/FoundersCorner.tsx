import { ArrowRight, Award, BookOpen, GraduationCap, Heart, Quote, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { routePaths, type Language } from "@/lib/site-content";

export default function FoundersCorner({
  language,
  isHero = false,
}: {
  language: Language;
  isHero?: boolean;
}) {
  return (
    <section
      className={`founders-corner section-space ${isHero ? "founders-corner--hero" : ""}`}
      id="coin-fondatrice"
      aria-label={language === "fr" ? "Le Coin de la Fondatrice" : "Founder's Corner"}
    >
      <div className="container">
        <div className="founders-corner__grid">
          {/* Left Media & Quotes Column */}
          <div className="founders-corner__media">
            <div className="image-frame image-frame--portrait">
              <img
                src="/images/contact/contact-1.jpg"
                alt={language === "fr" ? "Dr. Vally Jean-Louis Legouté, Fondatrice et Présidente" : "Dr. Vally Jean-Louis Legouté, Founder & President"}
              />
              <div className="image-frame__badge">
                {language === "fr" ? "Fondatrice & Présidente" : "Founder & President"}
              </div>
              <div className="image-frame__caption">
                {language === "fr" ? "Dr. Vally Jean-Louis Legouté" : "Dr. Vally Jean-Louis Legouté"}
              </div>
            </div>

            <div className="founders-corner__quote">
              <Quote size={20} style={{ color: "var(--coral)", marginBottom: 8 }} />
              <p>
                {language === "fr"
                  ? "« Si Dieu a fait de moi cette femme bénie, Il le fera pour les enfants de Brostage aussi. »"
                  : "“If God made me this blessed woman, He will do the exact same for the children of Brostage too.”"}
              </p>
              <span>{language === "fr" ? "Devise de Dre Vally" : "Founder's Motto"}</span>
            </div>

            <div className="founders-corner__quote" style={{ borderLeftColor: "var(--gold)" }}>
              <p>
                {language === "fr"
                  ? "« Tu crois que tu peux aider tout le monde, tu n’es pas Jésus-Christ. »"
                  : "“You think you can help everyone, you are not Jesus Christ.”"}
              </p>
              <span>
                {language === "fr"
                  ? "Paroles souvent répétées avec tendresse par son époux"
                  : "Words tenderly repeated by her husband"}
              </span>
            </div>
          </div>

          {/* Right Story Column */}
          <div className="founders-corner__story">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {language === "fr" ? "Le Coin de la Fondatrice" : "Founder's Corner"}
            </p>
            <h2>
              {language === "fr"
                ? "Une vie de foi, d'éducation et de dévouement pour les enfants."
                : "A life of faith, education and devotion to children."}
            </h2>

            <div className="founders-corner__text">
              <p>
                {language === "fr" ? (
                  <>
                    <strong className="founders-corner__highlight">Née à Ranquitte</strong>, dans l’arrière-pays au nord d’Haïti en 1961, Dr. Vally s’est passionnée dès son enfance pour les plus défavorisés. Son ambition a toujours été de soutenir ceux qui ne peuvent trouver de quoi manger et boire, et d'ouvrir aux jeunes les portes de l'école et de l’université.
                  </>
                ) : (
                  <>
                    <strong className="founders-corner__highlight">Born in Ranquitte</strong>, in the northern countryside of Haiti in 1961, Dr. Vally was moved from early childhood with deep compassion for underserved families. Her lifelong ambition has been to stand beside those in acute need and open educational doors for children.
                  </>
                )}
              </p>

              <p>
                {language === "fr" ? (
                  <>
                    Après ses études classiques au <em>Lycée du Cent-Cinquantenaire</em> (lycée des jeunes filles) à Port-au-Prince, elle étudie le secrétariat de direction à l’EFCTEC, d'où elle sort diplômée avec mention avant d’y enseigner l’anglais des affaires. Elle poursuit ensuite son cursus en Administration à l’INAGHEI.
                  </>
                ) : (
                  <>
                    Following classical schooling at <em>Lycée du Cent-Cinquantenaire</em> in Port-au-Prince, she graduated with honors from EFCTEC, taught business English, and pursued administrative leadership at INAGHEI.
                  </>
                )}
              </p>

              <p>
                {language === "fr" ? (
                  <>
                    Pendant plus de dix années, elle exerce avec rigueur dans les institutions bancaires en Haïti tout en enseignant dans la formation professionnelle. C’est à l’âge de 38 ans que la clarté de son appel se manifeste pleinement : <strong>consacrer sa vie entière à l’éducation</strong>.
                  </>
                ) : (
                  <>
                    For over a decade, she served with distinction in Haitian banking while teaching vocational courses. At age 38, her true life calling crystallized: <strong>dedicating her life to education</strong>.
                  </>
                )}
              </p>

              <p>
                {language === "fr" ? (
                  <>
                    Établie à Miami en Floride, elle rejoint le corps professoral et obtient un <strong>Doctorat en éducation</strong> ainsi qu'une <strong>Maîtrise en théologie</strong>. Après plus de 36 ans d'expérience pédagogique auprès d’écoliers et d'adultes, elle fonde en 2005 la <strong>Blessed Vally Foundation</strong>. Elle choisit de s’implanter à Brostage, section rurale de Dondon, pour bâtir une école moderne, un puits artésien et un centre de santé.
                  </>
                ) : (
                  <>
                    Moving to Miami, Florida, she joined the state’s educator ranks, earning a <strong>Doctorate in Education</strong> and a <strong>Master’s in Theology</strong>. After more than 36 years shaping students, she founded <strong>Blessed Vally Foundation</strong> in 2005, dedicating its mission to Brostage, Dondon, to build school classrooms, artesian water, and clinic care.
                  </>
                )}
              </p>
            </div>

            {/* Milestones bar */}
            <div className="founders-corner__milestones">
              <div className="milestone-item">
                <strong>1961</strong>
                <span>{language === "fr" ? "Naissance à Ranquitte, Haïti" : "Born in Ranquitte, Haiti"}</span>
              </div>
              <div className="milestone-item">
                <strong>10+</strong>
                <span>{language === "fr" ? "Ans en milieu bancaire" : "Years in banking career"}</span>
              </div>
              <div className="milestone-item">
                <strong>36+</strong>
                <span>{language === "fr" ? "Ans d'enseignement & Doctorat" : "Years teaching & Doctorate"}</span>
              </div>
              <div className="milestone-item">
                <strong>2005</strong>
                <span>{language === "fr" ? "Création de la BVF à Miami" : "Founded BVF in Miami"}</span>
              </div>
            </div>

            <div style={{ marginTop: 28, display: "flex", gap: 16, alignItems: "center" }}>
              <Link className="button button--coral" href={routePaths.mission}>
                {language === "fr" ? "Découvrir la vision complète" : "Discover our full vision"}
                <ArrowRight size={16} />
              </Link>
              <Link className="text-link" href={routePaths.donate}>
                {language === "fr" ? "Soutenir la mission" : "Support the mission"}
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
