import Link from "next/link";
import { Clock, MapPin, Wrench } from "lucide-react";

const gasBadges = ["NH₃", "H₂S", "O₂", "CO", "CO₂"];

const heroArguments = [
  { icon: Clock, text: "Réponse rapide" },
  { icon: Wrench, text: "Solutions adaptées aux spécifications" },
  { icon: MapPin, text: "Livraison et intervention au Maroc selon disponibilité" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-industrial via-deep to-deep text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Des équipements fiables pour vos installations industrielles
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-200 sm:text-lg">
            Détection des gaz, étalonnage, pompes, vannes, conteneurs et équipements de
            sécurité pour les professionnels au Maroc.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#quote-form"
              className="rounded-md bg-safety px-6 py-3 text-sm font-semibold text-deep hover:bg-white"
            >
              Demander un devis
            </Link>
            <Link
              href="/produits"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Explorer les produits
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {heroArguments.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-2 text-sm text-slate-200">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-safety" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:h-96 sm:w-96">
            <div className="absolute inset-6 rounded-full border border-dashed border-technical/50" />
            <div className="absolute inset-16 rounded-full border border-technical/30" />
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-technical text-white shadow-lg shadow-technical/40 sm:h-28 sm:w-28">
              <Wrench className="h-10 w-10" aria-hidden="true" />
            </div>
            {gasBadges.map((gas, index) => {
              const angle = (index / gasBadges.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 42;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              return (
                <span
                  key={gas}
                  className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs font-bold text-industrial shadow-md"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {gas}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
