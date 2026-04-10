import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SchemaOrg from './components/SchemaOrg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.medicisocial.com'),
  title: {
    template: '%s | Medici Social',
    default: 'Medici Social | Elite Short-Form Content Agency',
  },
  description:
    'We are a collective of strategists, editors, and creators turning attention into measurable growth for modern brands. Based in Houston, TX.',
  keywords: [
    'social media marketing agency',
    'short-form video agency',
    'content creation Houston',
    'social media management',
    'website design Houston',
    'SEO agency Houston',
    'AI marketing',
    'Medici Social',
    'Houston marketing agency',
    'brand strategy',
    'TikTok marketing',
    'Instagram marketing',
  ],
  authors: [{ name: 'Medici Social', url: 'https://www.medicisocial.com' }],
  creator: 'Medici Social',
  publisher: 'Medici Social',
  other: {
    'viewport': 'width=device-width, initial-scale=1, viewport-fit=cover',
  },
  openGraph: {
    title: 'Medici Social | Elite Short-Form Content Agency',
    description:
      'We are a collective of strategists, editors, and creators turning attention into measurable growth for modern brands. Based in Houston, TX.',
    url: 'https://www.medicisocial.com',
    siteName: 'Medici Social',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Medici Social - Elite Short-Form Content Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medici Social | Elite Short-Form Content Agency',
    description:
      'We are a collective of strategists, editors, and creators turning attention into measurable growth for modern brands.',
    images: ['/images/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.medicisocial.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Navbar />
        <SchemaOrg />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>

        {/* Film grain overlay */}
        <div
          className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
          }}
        />

        <Footer />
      </body>
    </html>
  );
}
