import { ArrowRight, Award, BookOpen, GraduationCap, Heart, Quote } from "lucide-react";
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
                alt={language === "fr" ? "Dr. Vally D. Jn.-Ls. Legouté, Fondatrice et Présidente" : "Dr. Vally D. Jn.-Ls. Legouté, Founder & President"}
              />
              <div className="image-frame__badge">
                {language === "fr" ? "Fondatrice & Présidente" : "Founder & President"}
              </div>
              <div className="image-frame__caption">
                {language === "fr" ? "Dr. Vally D. Jn.-Ls. Legouté" : "Dr. Vally D. Jn.-Ls. Legouté"}
              </div>
            </div>

            {/* Context Name Note */}
            <div className="founder-name-context" style={{ fontSize: "12px", color: "var(--muted)", padding: "4px 8px", background: "rgba(16,42,67,0.03)", borderRadius: "4px", border: "1px solid var(--line)" }}>
              <span>{language === "fr" ? "Nom officiel USA : " : "Official U.S. Name: "}<strong>Dr. Vally D. Jn.-Ls. Legouté</strong></span>
              <br />
              <span>{language === "fr" ? "Nom officiel Haïti : " : "Official Haiti Name: "}<strong>Dr. Vally Docteur Jean-Louis</strong></span>
            </div>

            {/* Official Mission Quote */}
            <div className="founders-corner__quote">
              <Quote size={20} style={{ color: "var(--coral)", marginBottom: 8 }} />
              <p>
                {language === "fr"
                  ? "« Gagner des âmes pour Christ à travers des activités concrètes prouvant que Jésus est le seul Homme en Qui nous devons nous confier. »"
                  : "“Winning souls for Christ through concrete activities demonstrating that Jesus is the only One in Whom we must place our trust.”"}
              </p>
              <span>{language === "fr" ? "Mission officielle de la Fondation" : "Official Foundation Mission"}</span>
            </div>

            {/* Core Spiritual Conviction Quote */}
            <div className="founders-corner__quote" style={{ borderLeftColor: "var(--teal)" }}>
              <p>
                {language === "fr"
                  ? "« Notre communauté est notre responsabilité, mais notre mission ultime est de gagner des âmes pour Christ à travers des actions concrètes d’amour et de service. »"
                  : "“Our community is our responsibility, but our ultimate mission is to win souls for Christ through concrete actions of love and service.”"}
              </p>
              <span>{language === "fr" ? "Conviction spirituelle fondamentale" : "Core Spiritual Conviction"}</span>
            </div>

            {/* Founder's Motto */}
            <div className="founders-corner__quote" style={{ borderLeftColor: "var(--gold)" }}>
              <p>
                {language === "fr"
                  ? "« Si Dieu a fait de moi cette femme bénie, Il le fera pour les enfants de Brostage aussi. »"
                  : "“If God made me this blessed woman, He will do the exact same for the children of Brostage too.”"}
              </p>
              <span>{language === "fr" ? "Devise de la Fondatrice" : "Founder's Motto"}</span>
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

            {/* Official Message from the Founder */}
            <div className="founder-official-message" style={{ background: "rgba(224, 86, 36, 0.05)", borderLeft: "4px solid var(--coral)", padding: "18px 22px", borderRadius: "2px", marginBottom: "22px" }}>
              <h4 style={{ margin: "0 0 8px", font: "600 13px 'Fraunces', serif", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--coral-dark)" }}>
                {language === "fr" ? "Message officiel de la Fondatrice" : "Official Message from the Founder"}
              </h4>
              <p style={{ margin: 0, font: "italic 15px/1.6 'Fraunces', serif", color: "var(--ink)" }}>
                {language === "fr"
                  ? "« Notre communauté est notre responsabilité, mais notre mission ultime est de gagner des âmes pour Christ à travers des actions concrètes d’amour et de service. L'Évangile nous appelle à joindre la foi vivante à des œuvres concrètes qui transforment les vies. Nous nous engageons résolument pour l'évangélisation, l'éducation chrétienne d'excellence et l'implantation d'établissements scolaires chrétiens aux États-Unis et en Haïti, afin d'ouvrir un avenir d'espérance à chaque enfant. »"
                  : "“Our community is our responsibility, but our ultimate mission is to win souls for Christ through concrete actions of love and service. The Gospel calls us to unite living faith with tangible deeds that transform lives. We are steadfastly committed to evangelism, Christian educational excellence, and the establishment of Christian schools in the United States and Haiti, opening a future of hope for every child.”"}
              </p>
            </div>

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
                    Pendant plus de dix années, elle exerce avec rigueur dans les institutions bancaires en Haïti tout en enseignant dans la formation professionnelle. C’est à l’âge de 38 ans que la clarté de son appel se manifeste pleinement : <strong>consacrer sa vie entière à l’éducation et au ministère chrétien</strong>.
                  </>
                ) : (
                  <>
                    For over a decade, she served with distinction in Haitian banking while teaching vocational courses. At age 38, her true life calling crystallized: <strong>dedicating her life to education and Christian ministry</strong>.
                  </>
                )}
              </p>

              <p>
                {language === "fr" ? (
                  <>
                    Établie à Miami en Floride, elle rejoint le corps professoral et obtient un <strong>Doctorat en éducation</strong> ainsi qu'une <strong>Maîtrise en théologie</strong>. Après plus de 36 ans d'expérience pédagogique auprès d’écoliers et d'adultes, elle fonde en 2005 la <strong>Blessed Vally Foundation</strong>. Elle porte une vision claire et déterminée : l’évangélisation par l’action concrète, le développement communautaire et <strong>l’implantation d’établissements scolaires chrétiens aux États-Unis et en Haïti</strong>.
                  </>
                ) : (
                  <>
                    Moving to Miami, Florida, she joined the state’s educator ranks, earning a <strong>Doctorate in Education</strong> and a <strong>Master’s in Theology</strong>. After more than 36 years shaping students, she founded <strong>Blessed Vally Foundation</strong> in 2005. She carries an unwavering vision: evangelism through concrete action, community development, and <strong>the establishment of accredited Christian schools in the United States and Haiti</strong>.
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

            <div className="founders-corner__actions">
              <Link className="button button--coral" href={routePaths.mission}>
                {language === "fr" ? "Découvrir la mission officielle" : "Discover our official mission"}
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
