import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kamba Fashion Designs | Bridal & occasion luxe in Lusaka",
    template: "%s | Kamba Fashion Designs",
  },
  description:
    "Kamba Fashion Designs is a Lusaka fashion house led by Chikondi Mwanza. Bridal & occasion luxe, hand-tailored in Woodlands. Custom gowns, kitenge formal pieces, event styling.",
  keywords: [
    "Kamba Fashion Designs",
    "bridal designer Lusaka",
    "bespoke wedding gown Zambia",
    "kitenge formal Lusaka",
    "fashion designer Woodlands",
    "occasion wear Lusaka",
  ],
  openGraph: {
    title: "Kamba Fashion Designs | Bridal & Occasion Luxe",
    description: "Hand-tailored bridal gowns and occasion looks, made in Lusaka. Led by Chikondi Mwanza.",
    type: "website",
    locale: "en_ZM",
    url: SITE_URL,
    siteName: "Kamba Fashion Designs",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Kamba Fashion Designs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamba Fashion Designs",
    description: "Hand-tailored bridal & occasion luxe, made in Lusaka.",
    images: ["/og.jpg"],
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
    "@id": SITE_URL,
    name: "Kamba Fashion Designs",
    description:
      "Lusaka fashion house. Bridal gowns, bridal-shower outfits, kitenge formal pieces, and occasion luxe. Custom-tailored, by appointment.",
    url: SITE_URL,
    image: `${SITE_URL}/og.jpg`,
    telephone: "+260972035672",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Njase Close #4, Woodlands ext.",
      addressLocality: "Lusaka",
      addressRegion: "Lusaka Province",
      addressCountry: "ZM",
    },
    founder: { "@type": "Person", name: "Chikondi Mwanza" },
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
