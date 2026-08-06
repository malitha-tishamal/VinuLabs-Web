"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "si" | "ta" | "ja";

interface Translations {
  navHome: string;
  navServices: string;
  navTechStack: string;
  navSolutions: string;
  navCaseStudies: string;
  navTeam: string;
  navContact: string;
  navAdmin: string;
  heroTagline: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroTitleLine3: string;
  heroDesc: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  techTitle: string;
  techSubtitle: string;
  techFrontend: string;
  techBackend: string;
  techDatabase: string;
  techCloud: string;
  techAI: string;
  adminTitle: string;
  messages: string;
  settings: string;
}

const dictionaries: Record<Language, Translations> = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navTechStack: "Tech Stack",
    navSolutions: "Solutions",
    navCaseStudies: "Case Studies",
    navTeam: "Team",
    navContact: "Contact",
    navAdmin: "Admin",
    heroTagline: "AI · Cloud · Architecture · Capability",
    heroTitleLine1: "Smart strategy.",
    heroTitleLine2: "Systems that scale.",
    heroTitleLine3: "Ideas that create impact.",
    heroDesc:
      "VinuLabs solves complex challenges through AI strategy, enterprise architecture, engineering leadership, and digital transformation.",
    heroCtaPrimary: "Get Started",
    heroCtaSecondary: "Explore Solutions",
    techTitle: "Technology Stack",
    techSubtitle:
      "Battle-tested engineering technologies powering our enterprise solutions, cloud architectures, and intelligent systems.",
    techFrontend: "Frontend",
    techBackend: "Backend",
    techDatabase: "Database",
    techCloud: "Cloud & DevOps",
    techAI: "AI & Data Science",
    adminTitle: "VinuLabs CMS Admin Dashboard",
    messages: "Messages",
    settings: "Settings",
  },
  si: {
    navHome: "මුල් පිටුව",
    navServices: "සේවාවන්",
    navTechStack: "තාක්ෂණික පද්ධතිය",
    navSolutions: "විසඳුම්",
    navCaseStudies: "අධ්‍යයන",
    navTeam: "කණ්ඩායම",
    navContact: "සම්බන්ධ වන්න",
    navAdmin: "පරිපාලක පුවරුව",
    heroTagline: "කෘතිම බුද්ධිය · ක්ලවුඩ් · ගෘහ නිර්මාණ ශිල්පය",
    heroTitleLine1: "බුද්ධිමත් උපාය මාර්ග.",
    heroTitleLine2: "පරිමාණ කළ හැකි පද්ධති.",
    heroTitleLine3: "බලපෑමක් ඇති කරන අදහස්.",
    heroDesc:
      "VinuLabs ආයතනය AI උපාය මාර්ග, එන්ටර්ප්‍රයිස් ගෘහ නිර්මාණ ශිල්පය සහ ඩිජිටල් පරිවර්තනය මගින් සංකීර්ණ තාක්ෂණික අභියෝග විසඳයි.",
    heroCtaPrimary: "ආරම්භ කරන්න",
    heroCtaSecondary: "විසඳුම් බලන්න",
    techTitle: "තාක්ෂණික මාලාව",
    techSubtitle:
      "අපගේ එන්ටර්ප්‍රයිස් විසඳුම් සහ බුද්ධිමත් පද්ධති සඳහා භාවිතා වන බලවත් තාක්ෂණයන්.",
    techFrontend: "පෙරමුණ (Frontend)",
    techBackend: "පසුපස (Backend)",
    techDatabase: "දත්ත සමුදාය (Database)",
    techCloud: "ක්ලවුඩ් (Cloud)",
    techAI: "කෘතිම බුද්ධිය (AI)",
    adminTitle: "VinuLabs පරිපාලක පුවරුව",
    messages: "පණිවිඩ",
    settings: "සැකසීම්",
  },
  ta: {
    navHome: "முகப்பு",
    navServices: "சேவைகள்",
    navTechStack: "தொழில்நுட்பம்",
    navSolutions: "தீர்வுகள்",
    navCaseStudies: "ஆய்வுகள்",
    navTeam: "குழு",
    navContact: "தொடர்பு கொள்ள",
    navAdmin: "நிர்வாகக் குழு",
    heroTagline: "AI · கிளவுட் · கட்டமைப்பு",
    heroTitleLine1: "புத்திசாலித்தனமான உத்தி.",
    heroTitleLine2: "அளவிடக்கூடிய அமைப்புகள்.",
    heroTitleLine3: "தாக்கத்தை ஏற்படுத்தும் யோசனைகள்.",
    heroDesc:
      "VinuLabs நிறுவனம் AI உத்தி, நிறுவன கட்டமைப்பு மற்றும் டிஜிட்டல் மாற்றத்தின் மூலம் சிக்கலான சவால்களைத் தீர்க்கிறது.",
    heroCtaPrimary: "தொடங்குங்கள்",
    heroCtaSecondary: "தீர்வுகளை ஆராயுங்கள்",
    techTitle: "தொழில்நுட்ப அடுக்கு",
    techSubtitle:
      "எங்கள் நிறுவன தீர்வுகள் மற்றும் புத்திசாலித்தனமான அமைப்புகளை இயக்கும் தொழில்நுட்பங்கள்.",
    techFrontend: "முன்முனை",
    techBackend: "பின்முனை",
    techDatabase: "தரவுத்தளம்",
    techCloud: "கிளவுட்",
    techAI: "செயற்கை நுண்ணறிவு",
    adminTitle: "VinuLabs நிர்வாக டாஷ்போர்டு",
    messages: "செய்திகள்",
    settings: "அமைப்புகள்",
  },
  ja: {
    navHome: "ホーム",
    navServices: "サービス",
    navTechStack: "技術スタック",
    navSolutions: "ソリューション",
    navCaseStudies: "事例研究",
    navTeam: "チーム",
    navContact: "お問い合わせ",
    navAdmin: "管理者CMS",
    heroTagline: "AI · クラウド · アーキテクチャ",
    heroTitleLine1: "スマートな戦略。",
    heroTitleLine2: "拡張可能なシステム。",
    heroTitleLine3: "インパクトを生むアイデア。",
    heroDesc:
      "VinuLabsは、AI戦略、エンタープライズアーキテクチャ、デジタル変革を通じて複雑な課題を解決します。",
    heroCtaPrimary: "始める",
    heroCtaSecondary: "ソリューションを見る",
    techTitle: "テクノロジースタック",
    techSubtitle:
      "エンタープライズソリューションとインテリジェントシステムを支える実践的な開発技術。",
    techFrontend: "フロントエンド",
    techBackend: "バックエンド",
    techDatabase: "データベース",
    techCloud: "クラウド & DevOps",
    techAI: "AI & データサイエンス",
    adminTitle: "VinuLabs 管理者ダッシュボード",
    messages: "メッセージ",
    settings: "設定",
  },
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("vinulabs_lang") as Language;
    if (saved && ["en", "si", "ta", "ja"].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("vinulabs_lang", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: dictionaries[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
