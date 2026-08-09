import { Hero } from "@/components/home/hero";
import { QuickCategories } from "@/components/home/quick-categories";
import { CategoryGrid } from "@/components/home/category-grid";
import { CatalogueSection } from "@/components/home/catalogue-section";
import { ServicesSection } from "@/components/home/services-section";
import { SectorsSection } from "@/components/home/sectors-section";
import { ProcessSection } from "@/components/home/process-section";
import { BrandsStrip } from "@/components/home/brands-strip";
import { StatsSection } from "@/components/home/stats-section";
import { QuoteFormSection } from "@/components/home/quote-form-section";
import { FaqSection } from "@/components/home/faq-section";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickCategories />
      <CategoryGrid />
      <CatalogueSection />
      <ServicesSection />
      <SectorsSection />
      <ProcessSection />
      <BrandsStrip />
      <StatsSection />
      <QuoteFormSection />
      <FaqSection />
    </>
  );
}
