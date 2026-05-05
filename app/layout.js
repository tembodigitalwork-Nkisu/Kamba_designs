import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL("https://kamba-fashion.example"),
  title: {
    default: "Kamba Fashion Designs — Bridal & occasion luxe, Lusaka",
    template: "%s — Kamba Fashion Designs",
  },
  description:
    "Kamba Fashion Designs is a Lusaka fashion house led by Chikondi M. — bridal & occasion luxe, hand-tailored in Woodlands. Custom gowns, kitenge formal pieces, event styling.",
  keywords: [
    "Kamba Fashion Designs",
    "bridal designer Lusaka",
    "bespoke wedding gown Zambia",
    "kitenge formal Lusaka",
    "fashion designer Woodlands",
    "occasion wear Lusaka",
  ],
  openGraph: {
    title: "Kamba Fashion Designs — Bridal & Occasion Luxe",
    description: "Hand-tailored bridal gowns and occasion looks, made in Lusaka. Led by Chikondi M.",
    type: "website",
    locale: "en_ZM",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamba Fashion Designs",
    description: "Hand-tailored bridal & occasion luxe — made in Lusaka.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbf7f0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <BusinessSchema />
      </body>
    </html>
  );
}

function BusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": "https://kamba-fashion.example",
    name: "Kamba Fashion Designs",
    description:
      "Lusaka fashion house — bridal gowns, bridal-shower outfits, kitenge formal pieces, and occasion luxe. Custom-tailored, by appointment.",
    url: "https://kamba-fashion.example",
    image: "https://kamba-fashion.example/og.jpg",
    telephone: "+260972035672",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lusaka",
      addressRegion: "Woodlands",
      addressCountry: "ZM",
    },
    founder: { "@type": "Person", name: "Chikondi M." },
    sameAs: [
      "https://instagram.com/kamba_bridal",
      "https://instagram.com/kamba_designs",
      "https://facebook.com/KambaDesigns",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
