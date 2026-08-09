import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "INDUFLOW | Équipements industriels, détection des gaz et étalonnage au Maroc";
const description =
  "INDUFLOW fournit aux entreprises industrielles marocaines des détecteurs de gaz, des services d'étalonnage, des pompes, des vannes et des équipements de sécurité sur devis.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title,
    description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  other: {
    "geo.region": "MA-CAS",
    "geo.placename": siteConfig.city,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.tagline,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  areaServed: {
    "@type": "Country",
    name: "Maroc",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: siteConfig.city,
    postalCode: siteConfig.postalCode,
    addressRegion: siteConfig.region,
    addressCountry: "MA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
