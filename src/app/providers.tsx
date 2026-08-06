"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LanguageProvider>
        <Toaster position="bottom-right" reverseOrder={false} />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
