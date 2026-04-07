import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SchemaOrg from './components/SchemaOrg'
import Navbar from './components/Navbar'

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
  title: 'Medici Social | Social Media Marketing Agency',
  description: 'A social media marketing agency blending storytelling, aesthetics, and data-driven strategy to elevate brands.',
  metadataBase: new URL('https://medici-zeta.vercel.app'),
  other: {
    'viewport': 'width=device-width, initial-scale=1, viewport-fit=cover',
  },
  openGraph: {
    title: 'Medici Social | Social Media Marketing Agency',
    description: 'A social media marketing agency blending storytelling, aesthetics, and data-driven strategy to elevate brands.',
    url: 'https://medici-zeta.vercel.app',
    siteName: 'Medici Social',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
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
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
