import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/providers";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://vinulabs.com';
const siteName = 'VinuLabs';
const defaultTitle = 'VinuLabs - Where Intelligence Meets Innovation';
const defaultDescription = 'We design and build intelligent digital systems powered by AI, IoT, Cloud Computing, and Data Science to accelerate business transformation, enhance sustainability, and create global-scale impact.';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    'AI',
    'Artificial Intelligence',
    'IoT',
    'Internet of Things',
    'Cloud Computing',
    'Data Science',
    'Digital Transformation',
    'Business Solutions',
    'Technology Consulting',
    'Innovation',
    'VinuLabs',
  ],
  authors: [{ name: 'VinuLabs' }],
  creator: 'VinuLabs',
  publisher: 'VinuLabs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${baseUrl}/images/logo/logo.svg`,
        width: 1200,
        height: 630,
        alt: 'VinuLabs Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [`${baseUrl}/images/logo/logo.svg`],
    creator: '@vinulabs',
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
    canonical: baseUrl,
  },
  icons: {
    icon: '/images/logo/icon.svg',
    shortcut: '/images/logo/icon.svg',
    apple: '/images/logo/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={baseUrl} />
        <link rel="icon" href="/images/logo/icon.svg" type="image/svg+xml" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Skip to main content
        </a>
        <NextTopLoader />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
