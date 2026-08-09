"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-2xl font-bold text-industrial sm:text-3xl">Questions fréquentes</h2>
      </div>

      <div className="flex flex-col divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;
          return (
            <div key={item.question}>
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-industrial hover:bg-light"
                >
                  {item.question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-technical transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              {isOpen && (
                <div id={panelId} role="region" aria-labelledby={buttonId} className="px-5 pb-4 text-sm text-textGray">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
