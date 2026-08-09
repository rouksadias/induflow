import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section className="bg-bgGray py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-bold text-industrial sm:text-3xl">Services techniques</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-light text-industrial">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-industrial">{service.name}</h3>
                <p className="mt-2 text-sm text-textGray">{service.description}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-8 rounded-lg border border-safety/40 bg-safety/10 px-5 py-4 text-sm text-deep">
          Les prestations, moyens techniques et documents disponibles sont confirmés après analyse
          du besoin.
        </p>
      </div>
    </section>
  );
}
