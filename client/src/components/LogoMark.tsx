import { Link } from "wouter";

export default function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className={`brand-lockup ${compact ? "brand-lockup--compact" : ""}`} aria-label="Blessed Vally Foundation">
      <span className="brand-mark" aria-hidden="true">
        <img
          src="/favicon.png"
          alt="Blessed Vally Foundation"
          style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "6px" }}
        />
      </span>
      {!compact && (
        <span className="brand-type">
          <strong>Blessed Vally</strong>
          <small>Foundation</small>
        </span>
      )}
    </Link>
  );
}
