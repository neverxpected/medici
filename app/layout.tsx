import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SchemaOrg from './components/SchemaOrg'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Your Business Name | Short Tagline',
  description: 'One clear sentence about what you do and who you serve.',
  metadataBase: new URL('https://yoursite.vercel.app'),
  openGraph: {
    title: 'Your Business Name | Short Tagline',
    description: 'One clear sentence about what you do and who you serve.',
    url: 'https://yoursite.vercel.app',
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}
