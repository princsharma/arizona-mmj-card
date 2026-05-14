import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Script from "next/script";
import HashScroller from "./components/HashScroller";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = "https://arizonamedicalmarijuanacard.com";
const GTM_ID = "GTM-TKJC3CXL";

const META_TITLE = "Apply Your Medical Marijuana Card in Arizona";
const META_DESCRIPTION =
  "Get approved for an Arizona medical marijuana card online with trusted doctors, simple evaluations, and secure patient care.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: META_TITLE,
    template: "%s | Arizona MMJ",
  },
  description: META_DESCRIPTION,
  keywords: [
    "Medical Marijuana Card Arizona",
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
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
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
  icons: {
    icon: { url: "/arizona-favicon.webp", type: "image/webp" },
  },
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
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <HashScroller />
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
