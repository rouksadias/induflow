import Link from "next/link";
import { categories } from "@/lib/data";

export function QuickCategories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.slug}
              href={category.href}
              className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-technical hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-light text-industrial group-hover:bg-technical group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-textGray">{category.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
