import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VinuLabs | Strategy · Technology · Capability",
  description:
    "Smart strategy. Systems that scale. Ideas that create impact. VinuLabs solves complex challenges through AI strategy, enterprise architecture, engineering leadership, digital transformation, and professional capability development.",
  keywords: [
    "AI Strategy",
    "Enterprise Architecture",
    "Cloud Architecture",
    "Digital Transformation",
    "Professional Capability Training",
    "Applied AI",
    "VinuLabs",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "VinuLabs | Strategy · Technology · Capability",
    description:
      "Smart strategy. Systems that scale. Ideas that create impact. Expert AI Strategy, Cloud Systems, and Capability Development.",
    type: "website",
    url: "https://vinulabs.com",
    siteName: "VinuLabs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#07090e] text-[#e2e8f0] antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}


