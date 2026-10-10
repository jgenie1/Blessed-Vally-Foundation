import { Link } from "wouter";

export default function LogoMark({ compact = false }: { compact?: boolean }) {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  return (
    <Link href="/" onClick={handleClick} className={`brand-lockup ${compact ? "brand-lockup--compact" : ""}`} aria-label="Blessed Vally Foundation">
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
