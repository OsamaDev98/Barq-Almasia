import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "sonner";
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barqalmasia.org"),

  title: {
    default: "برق الماسية لأجهزة الأمن والسلامة | Barq Almasia",
    template: "%s | برق الماسية",
  },
  description:
    "شركة برق الماسية رائدة في توريد وتركيب وصيانة أنظمة مكافحة الحريق والإنذار المبكر وكاميرات المراقبة الأمنية في المملكة العربية السعودية منذ 2015.",
  keywords: [
    "برق الماسية",
    "أجهزة السلامة",
    "مكافحة الحريق",
    "إنذار الحريق",
    "كاميرات المراقبة",
    "أنظمة الأمن",
    "الرياض",
    "المملكة العربية السعودية",
    "Barq Almasia",
    "fire alarm",
    "CCTV",
    "safety systems Saudi Arabia",
  ],
  authors: [{ name: "شركة برق الماسية", url: "https://barqalmasia.com" }],
  creator: "برق الماسية",
  publisher: "برق الماسية",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://barqalmasia.com",
    languages: { "ar-SA": "https://barqalmasia.com" },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://barqalmasia.com",
    siteName: "برق الماسية لأجهزة الأمن والسلامة",
    title: "برق الماسية لأجهزة الأمن والسلامة",
    description:
      "رواد في أنظمة مكافحة الحريق والأمن والسلامة في المملكة العربية السعودية. خبرة منذ 2015.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "برق الماسية لأجهزة الأمن والسلامة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "برق الماسية لأجهزة الأمن والسلامة",
    description:
      "رواد في أنظمة مكافحة الحريق والأمن في المملكة العربية السعودية.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} scroll-smooth dark`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#a93818" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              name: "شركة برق الماسية لأجهزة الأمن والسلامة",
              alternateName: "Barq Almasia",
              url: "https://barqalmasia.org",
              logo: "https://barqalmasia.org/og-image.png",
              image: "https://barqalmasia.org/og-image.png",
              description:
                "شركة متخصصة في توريد وتركيب وصيانة أنظمة مكافحة الحريق والإنذار المبكر وكاميرات المراقبة الأمنية في المملكة العربية السعودية منذ 2015.",
              foundingDate: "2015",
              areaServed: {
                "@type": "Country",
                name: "Saudi Arabia",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "الرياض",
                addressCountry: "SA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["العربية"],
                email: "info@barqalmasia.net",
              },
              sameAs: ["https://maps.app.goo.gl/VS8hztGGCPpbDrBz8"],
              hasMap: "https://maps.app.goo.gl/VS8hztGGCPpbDrBz8",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="bg-surface text-on-surface antialiased min-h-screen flex flex-col font-body">
        {children}
        <WhatsAppButton />
        <Toaster position="bottom-center" dir="rtl" />
      </body>
    </html>
  );
}
