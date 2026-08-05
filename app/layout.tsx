import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VinuLabs | Strategy, Technology & Capability",
  description:
    "AI strategy, solution architecture, applied research and professional training that turn complex technology challenges into practical outcomes.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "VinuLabs | Strategy, Technology & Capability",
    description:
      "Practical AI strategy, solution architecture, applied research and professional training.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
