import { Waves } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 font-bold text-industrial ${className ?? ""}`}
      aria-label="INDUFLOW - Accueil"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-industrial text-white">
        <Waves className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="text-xl tracking-tight">
        INDU<span className="text-technical">FLOW</span>
      </span>
    </Link>
  );
}
