import type { Metadata, Viewport } from "next";
import { DotField } from "@/components/dot-field";
import "./globals.css";

const description =
  "Ashad Khuman is a second-year Data Science student exploring data analysis, machine learning, and practical technology solutions.";

export const metadata: Metadata = {
  title: "Ashad Khuman — Data Science Student",
  description,
  authors: [{ name: "Ashad Khuman" }],
  keywords: [
    "Ashad Khuman",
    "Data Science student",
    "portfolio",
    "data analysis",
    "Nalasopara",
  ],
  openGraph: {
    title: "Ashad Khuman — Data Science Student",
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Ashad Khuman",
  },
  twitter: {
    card: "summary",
    title: "Ashad Khuman — Data Science Student",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f0f10",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ashad Khuman",
  jobTitle: "Data Science Student",
  email: "ashadkhuman@gmail.com",
  sameAs: ["https://www.linkedin.com/in/ashad-khuman-384693367"],
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nalasopara",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="js">
      <body>
        <DotField />
        <div className="scroll-fade scroll-fade-top" />
        <div className="scroll-fade scroll-fade-bottom" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
