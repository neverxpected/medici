import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SchemaOrg from './components/SchemaOrg'
import Navbar from './components/Navbar'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Your Business Name | Short Tagline',
  description: 'One clear sentence about what you do and who you serve.',
  metadataBase: new URL('https://medici-zeta.vercel.app'),
  openGraph: {
    title: 'Your Business Name | Short Tagline',
    description: 'One clear sentence about what you do and who you serve.',
    url: 'https://medici-zeta.vercel.app',
    siteName: 'Your Business Name',
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <SchemaOrg />
        <main className="flex-1 pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
