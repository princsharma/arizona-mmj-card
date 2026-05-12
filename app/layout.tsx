import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = "https://arizonamedicalmarijuanacard.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arizona MMJ — Licensed Medical Evaluations",
    template: "%s | Arizona MMJ",
  },
  description:
    "100% online medical marijuana evaluations with licensed Arizona physicians. Same-day approval, 98% success rate, HIPAA compliant. Get your AZ MMJ card today.",
  keywords: [
    "Arizona medical marijuana card",
    "AZ MMJ card",
    "medical cannabis Arizona",
    "online MMJ evaluation",
    "licensed Arizona physician",
  ],
  authors: [{ name: "Arizona MMJ" }],
  creator: "Arizona MMJ",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Arizona MMJ",
    title: "Get Your Arizona Medical Marijuana Card Online",
    description:
      "Same-day online medical marijuana evaluations with licensed Arizona physicians. 98% approval rate, HIPAA compliant.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arizona MMJ — Medical Marijuana Card Online",
    description:
      "Same-day online MMJ evaluations with licensed Arizona physicians.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  verification: {
    google: "PsYPAbrrlLobhmhq9n2ewMKgsKRMTvFp3JIspFrNa5o",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}#business`,
      name: "Arizona MMJ",
      description:
        "Licensed online medical marijuana evaluations for Arizona residents.",
      url: SITE_URL,
      areaServed: { "@type": "State", name: "Arizona" },
      medicalSpecialty: "MedicalCannabisEvaluation",
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "5000",
      },
    },
    {
      "@type": "Service",
      name: "Arizona Medical Marijuana Card Evaluation",
      provider: { "@id": `${SITE_URL}#business` },
      offers: [
        { "@type": "Offer", name: "New MMJ Card", price: "149", priceCurrency: "USD" },
        { "@type": "Offer", name: "Card Renewal", price: "129", priceCurrency: "USD" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an Arizona medical marijuana card?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A state-issued credential allowing qualified patients with a debilitating medical condition to legally purchase, possess, and use medical cannabis from licensed Arizona dispensaries.",
          },
        },
        {
          "@type": "Question",
          name: "Can I apply for an Arizona Medical Marijuana Card Online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — the entire evaluation can be completed online via secure video consultation with an Arizona-licensed physician.",
          },
        },
        {
          "@type": "Question",
          name: "How long is the AZ medical card valid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Two years from the issue date. You can begin renewal up to 90 days before expiration.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I use my card?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At any state-licensed dispensary across Arizona. Some states also offer reciprocity for AZ MMJ cardholders.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={mulish.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        {children}
        <Script
          id="ld-json-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
