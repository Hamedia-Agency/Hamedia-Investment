import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

// Configure Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// Configure Local Cooper Font (heritage serif)
const cooper = localFont({
  src: [
    {
      path: "../public/fonts/Cooper/otf/Cooper-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Cooper/otf/Cooper-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Cooper/otf/Cooper-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Cooper/otf/Cooper-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-cooper",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hamediainvestment.com"),
  title: {
    default: "Hamedia Investments | Asset-Backed Opportunities in Afghanistan",
    template: "%s | Hamedia Investments",
  },
  description:
    "Hamedia Investments is a pioneering investment arm in Afghanistan. We structure passive economic participation opportunities in local, productive ventures, starting with the Arghandab Dairy Farm.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hamedia Investments | Building Afghanistan's Future",
    description: "Asset-backed growth and passive livestock participation in Afghanistan.",
    url: "https://hamediainvestment.com",
    siteName: "Hamedia Investments",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamedia Investments",
    description: "Asset-backed growth and passive livestock participation in Afghanistan.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hamedia Investments",
  "url": "https://hamediainvestment.com",
  "logo": "https://hamediainvestment.com/logo-preview.png",
  "description": "Hamedia Investments is an agricultural and livestock investment arm in Kandahar, Afghanistan.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Kandahar",
    "addressCountry": "Afghanistan"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-949-299-6263",
    "contactType": "investor relations"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${cooper.variable} bg-brand-cream text-brand-charcoal antialiased font-sans`}
        suppressHydrationWarning
      >
        <Providers>
          <div className="flex flex-col min-h-screen overflow-x-clip">
            <Header />
            <main className="flex-grow pt-[72px] md:pt-[88px]">
              {children}
            </main>
            <Footer />
            <Toaster richColors position="bottom-right" />
          </div>
        </Providers>
      </body>
    </html>
  );
}
