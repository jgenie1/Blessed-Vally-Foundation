import { ArrowRight, Compass, Home } from "lucide-react";
import { Link } from "wouter";
import { routePaths } from "@/lib/site-content";

export default function NotFound() {
  return (
    <section className="section-space" style={{ minHeight: "80vh", display: "flex", alignItems: "center", background: "var(--sand)" }}>
      <div className="container" style={{ maxWidth: 680 }}>
        <div
          style={{
            background: "var(--paper)",
            border: "1px solid var(--line)",
            padding: "clamp(36px, 6vw, 64px)",
            textAlign: "center",
            boxShadow: "0 16px 40px -12px rgba(16,42,67,.12)",
            borderRadius: 6,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              margin: "0 auto 20px",
              display: "grid",
              placeItems: "center",
              borderRadius: "50%",
              border: "1px solid rgba(217,123,93,.3)",
              color: "var(--coral)",
              background: "rgba(217,123,93,.08)",
            }}
          >
            <Compass size={28} />
          </div>

          <p className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="eyebrow-dot" />
            Erreur 404 · Page introuvable
          </p>

          <h1
            style={{
              margin: "12px 0 16px",
              font: "500 clamp(36px, 5vw, 56px)/1.05 'Fraunces', serif",
              letterSpacing: "-.04em",
              color: "var(--ink)",
            }}
          >
            Cette page n’existe pas ou a été déplacée.
          </h1>

          <p
            style={{
              margin: "0 auto 32px",
              maxWidth: 480,
              color: "var(--muted)",
              fontSize: 16,
              lineHeight: 1.6,
            }}
          >
            Le lien que vous avez suivi est peut-être incorrect ou la page a fait l’objet d’une mise à jour éditoriale.
            <br />
            <span style={{ fontSize: 14, opacity: 0.85, marginTop: 4, display: "inline-block" }}>
              The page you are looking for does not exist or has been moved.
            </span>
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="button button--coral" href={routePaths.home}>
              <Home size={16} />
              Retour à l’accueil
            </Link>
            <Link className="button button--paper" href={routePaths.haiti}>
              Découvrir nos projets
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
