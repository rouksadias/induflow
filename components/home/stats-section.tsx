import { stats } from "@/lib/config";

export function StatsSection() {
  return (
    <section className="bg-deep py-14 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold text-safety sm:text-4xl">{stat.value}</p>
            <p className="mt-2 text-xs text-slate-300 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
