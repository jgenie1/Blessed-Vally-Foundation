import { Link } from "wouter";

interface LogoMarkProps {
  compact?: boolean;
  variant?: "header" | "footer";
}

export default function LogoMark({ compact = false, variant = "header" }: LogoMarkProps) {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      className={`brand-lockup ${compact ? "brand-lockup--compact" : ""} ${variant === "footer" ? "brand-lockup--footer" : ""}`}
      aria-label="Blessed Vally Foundation"
    >
      <img
        src="/images/logo.png"
        alt="Blessed Vally Foundation"
        className="brand-logo-img"
      />
    </Link>
  );
}
