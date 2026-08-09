"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "si" | "ta" | "ja";

export interface Translations {
  navHome: string;
  navServices: string;
  navTechStack: string;
  navSolutions: string;
  navCaseStudies: string;
  navTeam: string;
  navContact: string;
  navAdmin: string;
  navAbout: string;
  navBlog: string;
  navProducts: string;
  navIndustries: string;
  navDocumentation: string;
  navTalentGrooming: string;
  navApproach: string;
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
  servicesTag: string;
  servicesTitle: string;
  servicesSubtitle: string;
  servicesDesc: string;
  workProgressTag: string;
  workProgressTitle: string;
  workProgressDesc: string;
  counterProjects: string;
  counterClients: string;
  counterExperience: string;
  counterExperts: string;
  teamTag: string;
  teamTitle: string;
  teamSubtitle: string;
  contactTitle: string;
  contactDesc: string;
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  contactSubmit: string;
  footerTagline: string;
  footerCompany: string;
  footerServices: string;
  footerResources: string;
  footerRights: string;
  aboutTitle: string;
  aboutDesc: string;
  servicesPageTitle: string;
  servicesPageDesc: string;
  contactPageTitle: string;
  contactPageDesc: string;
  blogTitle: string;
  blogDesc: string;
  productsTitle: string;
  productsDesc: string;
  industriesTitle: string;
  industriesDesc: string;
  talentTitle: string;
  talentDesc: string;
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
    navAbout: "About Us",
    navBlog: "Blog",
    navProducts: "Products",
    navIndustries: "Industries",
    navDocumentation: "Docs",
    navTalentGrooming: "Talent Grooming",
    navApproach: "Approach",
    heroTagline: "AI · Cloud · Architecture · Capability",
    heroTitleLine1: "Smart strategy.",
    heroTitleLine2: "Systems that scale.",
    heroTitleLine3: "Ideas that create impact.",
    heroDesc:
      "VinuLabs solves complex challenges through AI strategy, enterprise architecture, engineering leadership, and digital transformation.",
    heroCtaPrimary: "Explore Our Expertise ↓",
    heroCtaSecondary: "Start a Conversation ↗",
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
    servicesTag: "Our Capabilities",
    servicesTitle: "End-to-End Expertise.",
    servicesSubtitle: "Connected outcomes.",
    servicesDesc:
      "Focused capabilities designed to solve immediate technical barriers while laying the groundwork for long-term growth.",
    workProgressTag: "Our Approach",
    workProgressTitle: "How We Deliver Impact",
    workProgressDesc:
      "A structured, transparent engineering process focused on scalable architecture and business outcomes.",
    counterProjects: "Projects Completed",
    counterClients: "Satisfied Clients",
    counterExperience: "Years Experience",
    counterExperts: "Expert Members",
    teamTag: "Leadership & Advisory",
    teamTitle: "Meet Our Team",
    teamSubtitle:
      "Experienced practitioners bridging technology innovation, academic research, and business execution.",
    contactTitle: "Contact Us",
    contactDesc:
      "Let's Build the Future Together. Have a project idea? Need a partner for AI, IoT, or enterprise systems?",
    contactName: "Your Name",
    contactEmail: "Your Email",
    contactMessage: "Your Message",
    contactSubmit: "Send Message",
    footerTagline:
      "Smart strategy. Systems that scale. Ideas that create impact. VinuLabs solves complex technology challenges.",
    footerCompany: "Company",
    footerServices: "Services",
    footerResources: "Resources",
    footerRights: "All rights reserved.",
    aboutTitle: "About Us",
    aboutDesc:
      "VinuLabs is a technology innovation company built on passion, research, and software engineering excellence.",
    servicesPageTitle: "Services",
    servicesPageDesc:
      "Complete technology solutions designed to transform your business and drive innovation across industries.",
    contactPageTitle: "Contact Us",
    contactPageDesc:
      "Have a project idea? Need a partner for AI, IoT, or enterprise systems? Our team is ready to help.",
    blogTitle: "Blog & Insights",
    blogDesc:
      "Discover insightful materials on AI, cloud engineering, software architecture, and modern tech trends.",
    productsTitle: "Products & Portfolio",
    productsDesc:
      "Cutting-edge solutions built with AI, IoT, and cloud technologies to transform industries.",
    industriesTitle: "Industries We Serve",
    industriesDesc:
      "VinuLabs delivers intelligent technology solutions across diverse sectors, transforming operations.",
    talentTitle: "Talent Grooming Initiative",
    talentDesc:
      "VinuLabs invests heavily in grooming the next generation of tech innovators and engineering talents.",
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
    navAbout: "අප ගැන",
    navBlog: "බ්ලොග්",
    navProducts: "නිෂ්පාදන",
    navIndustries: "ක්ෂේත්‍ර",
    navDocumentation: "ලේඛන",
    navTalentGrooming: "කුසලතා සංවර්ධනය",
    navApproach: "ක්‍රමවේදය",
    heroTagline: "කෘතිම බුද්ධිය · ක්ලවුඩ් · පද්ධති නිර්මාණ ශිල්පය · කුසලතාව",
    heroTitleLine1: "බුද්ධිමත් උපාය මාර්ග.",
    heroTitleLine2: "පරිමාණ කළ හැකි පද්ධති.",
    heroTitleLine3: "බලපෑමක් ඇති කරන අදහස්.",
    heroDesc:
      "VinuLabs ආයතනය AI උපාය මාර්ග, එන්ටර්ප්‍රයිස් පද්ධති නිර්මාණ ශිල්පය (Enterprise Architecture), ඉංජිනේරු නායකත්වය සහ ඩිජිටල් පරිවර්තනය මගින් සංකීර්ණ තාක්ෂණික අභියෝග විසඳයි.",
    heroCtaPrimary: "අපගේ තාක්ෂණික හැකියාවන් බලන්න ↓",
    heroCtaSecondary: "අප හා සම්බන්ධ වන්න ↗",
    techTitle: "තාක්ෂණික පද්ධතිය",
    techSubtitle:
      "අපගේ එන්ටර්ප්‍රයිස් මෘදුකාංග විසඳුම්, ක්ලවුඩ් පද්ධති සහ බුද්ධිමත් මෘදුකාංග සඳහා භාවිතා වන බලවත් තාක්ෂණයන්.",
    techFrontend: "පෙරමුණ (Frontend)",
    techBackend: "පසුපස (Backend)",
    techDatabase: "දත්ත සමුදාය (Database)",
    techCloud: "ක්ලවුඩ් (Cloud & DevOps)",
    techAI: "කෘතිම බුද්ධිය (AI & Data)",
    adminTitle: "VinuLabs පරිපාලක පුවරුව",
    messages: "පණිවිඩ",
    settings: "සැකසීම්",
    servicesTag: "අපගේ තාක්ෂණික හැකියාවන්",
    servicesTitle: "සම්පූර්ණ මෘදුකාංග ඉංජිනේරු විශේෂඥතාව.",
    servicesSubtitle: "සම්බන්ධිත සාර්ථක ප්‍රතිඵල.",
    servicesDesc:
      "දිගුකාලීන වර්ධනය සඳහා ශක්තිමත් පදනමක් දමමින් ක්ෂණික තාක්ෂණික බාධක විසඳීමට සැලසුම් කර ඇති සේවාවන්.",
    workProgressTag: "අපගේ ක්‍රමවේදය",
    workProgressTitle: "අප වැඩ කරන ආකාරය",
    workProgressDesc:
      "පරිමාණ කළ හැකි පද්ධති නිර්මාණය සහ ව්‍යාපාරික ප්‍රතිඵල කෙරෙහි අවධානය යොමු කළ විනිවිදභාවයෙන් යුත් ඉංජිනේරු ක්‍රියාවලිය.",
    counterProjects: "සම්පූර්ණ කළ ව්‍යාපෘති",
    counterClients: "තෘප්තිමත් පාරිභෝගිකයින්",
    counterExperience: "වසර ගණනාවක පළපුරුද්ද",
    counterExperts: "විශේෂඥ ඉංජිනේරුවන්",
    teamTag: "නායකත්වය සහ උපදේශනය",
    teamTitle: "අපගේ කණ්ඩායම",
    teamSubtitle:
      "තාක්ෂණික නවෝත්පාදනය, පර්යේෂණ සහ ව්‍යාපාරික ක්‍රියාත්මක කිරීම සම්බන්ධ කරන පළපුරුදු නායකයින්.",
    contactTitle: "සම්බන්ධ වන්න",
    contactDesc:
      "අනාගතය එක්ව ගොඩනඟමු. AI, IoT හෝ එන්ටර්ප්‍රයිස් පද්ධති සඳහා සහකරුවෙකු අවශ්‍යද?",
    contactName: "ඔබගේ නම",
    contactEmail: "ඔබගේ විද්‍යුත් තැපෑල",
    contactMessage: "ඔබගේ පණිවිඩය",
    contactSubmit: "පණිවිඩය යවන්න",
    footerTagline:
      "බුද්ධිමත් උපාය මාර්ග. පරිමාණ කළ හැකි පද්ධති. VinuLabs සංකීර්ණ තාක්ෂණික අභියෝග විසඳයි.",
    footerCompany: "ආයතනය",
    footerServices: "සේවාවන්",
    footerResources: "සම්පත්",
    footerRights: "සියලුම හිමිකම් ඇවිරිණි.",
    aboutTitle: "අප ගැන",
    aboutDesc:
      "VinuLabs යනු මෘදුකාංග ඉංජිනේරු ශ්‍රේෂ්ඨත්වය සහ පර්යේෂණ මත පදනම් වූ ශ්‍රී ලාංකික තාක්ෂණික ආයතනයකි.",
    servicesPageTitle: "සේවාවන්",
    servicesPageDesc:
      "ඔබගේ ව්‍යාපාරය ඩිජිටල් ලෙස පරිවර්තනය කිරීමට සැලසුම් කර ඇති සම්පූර්ණ තාක්ෂණික විසඳුම්.",
    contactPageTitle: "සම්බන්ධ වන්න",
    contactPageDesc:
      "ව්‍යාපෘති අදහසක් තිබේද? AI, IoT හෝ එන්ටර්ප්‍රයිස් පද්ධති සඳහා අපගේ කණ්ඩායම සූදානම්.",
    blogTitle: "බ්ලොග් සහ පුවත්",
    blogDesc:
      "AI, ක්ලවුඩ් ඉංජිනේරු විද්‍යාව සහ නවීන තාක්ෂණික ප්‍රවණතා පිළිබඳ වටිනා තොරතුරු දැනගන්න.",
    productsTitle: "නිෂ්පාදන සහ විසඳුම්",
    productsDesc:
      "AI, IoT සහ ක්ලවුඩ් තාක්ෂණයෙන් යුත් නවීන මෘදුකාංග නිෂ්පාදන.",
    industriesTitle: "අප සේවය කරන ක්ෂේත්‍ර",
    industriesDesc:
      "VinuLabs විවිධ ක්ෂේත්‍ර පුරා බුද්ධිමත් තාක්ෂණික විසඳුම් ලබා දෙයි.",
    talentTitle: "කුසලතා සංවර්ධන වැඩසටහන",
    talentDesc:
      "ඊළඟ පරම්පරාවේ තාක්ෂණික නවෝත්පාදකයින් සහ ඉංජිනේරුවන් බිහිකිරීම සඳහා VinuLabs ආයෝජනය කරයි.",
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
    navAbout: "எங்களைப் பற்றி",
    navBlog: "வலைப்பதிவு",
    navProducts: "தயாரிப்புகள்",
    navIndustries: "தொழில்கள்",
    navDocumentation: "ஆவணங்கள்",
    navTalentGrooming: "திறன் மேம்பாடு",
    navApproach: "அணுகுமுறை",
    heroTagline: "AI · கிளவுட் · கணினி கட்டமைப்பு · திறன்",
    heroTitleLine1: "புத்திசாலித்தனமான உத்தி.",
    heroTitleLine2: "அளவிடக்கூடிய அமைப்புகள்.",
    heroTitleLine3: "தாக்கத்தை ஏற்படுத்தும் யோசனைகள்.",
    heroDesc:
      "VinuLabs நிறுவனம் AI உத்தி, எண்டர்பிரைஸ் மென்பொருள் கட்டமைப்பு (Enterprise Architecture), பொறியியல் தலைமை மற்றும் டிஜிட்டல் மாற்றத்தின் மூலம் சிக்கலான சவால்களைத் தீர்க்கிறது.",
    heroCtaPrimary: "எங்கள் திறன்களை ஆராயுங்கள் ↓",
    heroCtaSecondary: "எங்களைத் தொடர்பு கொள்ள ↗",
    techTitle: "தொழில்நுட்ப அடுக்கு",
    techSubtitle:
      "எங்கள் நிறுவன தீர்வுகள் மற்றும் புத்திசாலித்தனமான அமைப்புகளை இயக்கும் தொழில்நுட்பங்கள்.",
    techFrontend: "முன்முனை",
    techBackend: "பின்முனை",
    techDatabase: "தரவுத்தளம்",
    techCloud: "கிளவுட் & DevOps",
    techAI: "AI & தரவு அறிவியல்",
    adminTitle: "VinuLabs நிர்வாக டாஷ்போர்டு",
    messages: "செய்திகள்",
    settings: "அமைப்புகள்",
    servicesTag: "எங்கள் திறன்கள்",
    servicesTitle: "முடிவிலிருந்து முடிவுக்கான நிபுணத்துவம்.",
    servicesSubtitle: "இணைக்கப்பட்ட முடிவுகள்.",
    servicesDesc:
      "நீண்ட கால வளர்ச்சிக்கு வலுவான அடித்தளத்தை அமைக்கும் தொழில்நுட்ப தீர்வுகள்.",
    workProgressTag: "எங்கள் அணுகுமுறை",
    workProgressTitle: "நாங்கள் எவ்வாறு செயல்படுகிறோம்",
    workProgressDesc:
      "அளவிடக்கூடிய அமைப்புகள் மற்றும் வணிக முடிவுகளில் கவனம் செலுத்தும் பொறியியல் செயல்முறை.",
    counterProjects: "நிறைவு செய்யப்பட்ட திட்டங்கள்",
    counterClients: "திருப்திகரமான வாடிக்கையாளர்கள்",
    counterExperience: "ஆண்டுகள் அனுபவம்",
    counterExperts: "நிபுணர் பொறியாளர்கள்",
    teamTag: "தலைமை மற்றும் ஆலோசனை",
    teamTitle: "எங்கள் குழு",
    teamSubtitle:
      "தொழில்நுட்ப கண்டுபிடிப்பு மற்றும் வணிக செயல்பாட்டை இணைக்கும் அனுபவமிக்க தலைவர்கள்.",
    contactTitle: "தொடர்பு கொள்ள",
    contactDesc:
      "எதிர்காலத்தை ஒன்றாகக் கட்டுவோம். AI, IoT அல்லது மென்பொருள் அமைப்புகளுக்கு கூட்டாளர் தேவையா?",
    contactName: "உங்கள் பெயர்",
    contactEmail: "உங்கள் மின்னஞ்சல்",
    contactMessage: "உங்கள் செய்தி",
    contactSubmit: "செய்தியை அனுப்பவும்",
    footerTagline:
      "புத்திசாலித்தனமான உத்தி. அளவிடக்கூடிய அமைப்புகள். VinuLabs சிக்கலான தொழில்நுட்ப சவால்களைத் தீர்க்கிறது.",
    footerCompany: "நிறுவனம்",
    footerServices: "சேவைகள்",
    footerResources: "வளங்கள்",
    footerRights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    aboutTitle: "எங்களைப் பற்றி",
    aboutDesc:
      "VinuLabs என்பது மென்பொருள் பொறியியல் சிறப்பைக் கொண்ட ஒரு தொழில்நுட்ப கண்டுபிடிப்பு நிறுவனமாகும்.",
    servicesPageTitle: "சேவைகள்",
    servicesPageDesc:
      "உங்கள் வணிகத்தை மாற்றியமைக்க வடிவமைக்கப்பட்ட முழுமையான தொழில்நுட்ப தீர்வுகள்.",
    contactPageTitle: "தொடர்பு கொள்ள",
    contactPageDesc:
      "ஒரு திட்டம் உள்ளதா? AI, IoT அல்லது மென்பொருள் அமைப்புகளுக்கு எங்கள் குழு தயார்.",
    blogTitle: "வலைப்பதிவு",
    blogDesc:
      "AI, கிளவுட் பொறியியல் மற்றும் நவீன தொழில்நுட்பப் போக்குகள் பற்றிய தகவல்களைக் கண்டறியவும்.",
    productsTitle: "தயாரிப்புகள்",
    productsDesc:
      "AI, IoT மற்றும் கிளவுட் தொழில்நுட்பங்களுடன் உருவாக்கப்பட்ட தயாரிப்புகள்.",
    industriesTitle: "நாங்கள் சேவை செய்யும் தொழில்கள்",
    industriesDesc:
      "VinuLabs பல்வேறு துறைகளில் புத்திசாலித்தனமான தொழில்நுட்ப தீர்வுகளை வழங்குகிறது.",
    talentTitle: "திறன் மேம்பாட்டு முயற்சி",
    talentDesc:
      "அடுத்த தலைமுறை தொழில்நுட்ப கண்டுபிடிப்பாளர்களை உருவாக்குவதில் VinuLabs முதலீடு செய்கிறது.",
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
    navAbout: "会社概要",
    navBlog: "ブログ",
    navProducts: "プロダクト",
    navIndustries: "対象業界",
    navDocumentation: "ドキュメント",
    navTalentGrooming: "人材育成",
    navApproach: "アプローチ",
    heroTagline: "AI · クラウド · システムアーキテクチャ · 能力",
    heroTitleLine1: "スマートな戦略。",
    heroTitleLine2: "拡張可能なシステム。",
    heroTitleLine3: "インパクトを生むアイデア。",
    heroDesc:
      "VinuLabsは、AI戦略、エンタープライズシステムアーキテクチャ (Enterprise Architecture)、エンジニアリングリーダーシップ、デジタル変革を通じて複雑な課題を解決します。",
    heroCtaPrimary: "専門知識を見る ↓",
    heroCtaSecondary: "お問い合わせ ↗",
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
    servicesTag: "私たちの機能",
    servicesTitle: "エンドツーエンドの専門知識。",
    servicesSubtitle: "つながる成果。",
    servicesDesc:
      "長期的な成長の基盤を築きながら、技術的課題を解決するために設計された機能。",
    workProgressTag: "私達のアプローチ",
    workProgressTitle: "開発プロセスの流れ",
    workProgressDesc:
      "拡張可能なアーキテクチャとビジネスの成果に焦点を当てたエンジニアリングプロセス。",
    counterProjects: "完了したプロジェクト",
    counterClients: "満足されたクライアント",
    counterExperience: "年の実務経験",
    counterExperts: "専門エンジニア",
    teamTag: "リーダーシップ＆アドバイザリー",
    teamTitle: "チームの紹介",
    teamSubtitle:
      "技術革新、学術研究、ビジネス実行を結びつける経験豊富なリーダー陣。",
    contactTitle: "お問い合わせ",
    contactDesc:
      "共に未来を築きましょう。AI、IoT、またはエンタープライズシステムのご相談はこちら。",
    contactName: "お名前",
    contactEmail: "メールアドレス",
    contactMessage: "メッセージ",
    contactSubmit: "送信する",
    footerTagline:
      "スマートな戦略。拡張可能なシステム。VinuLabsは複雑な技術的課題を解決します。",
    footerCompany: "会社情報",
    footerServices: "サービス",
    footerResources: "リソース",
    footerRights: "All rights reserved.",
    aboutTitle: "会社概要",
    aboutDesc:
      "VinuLabsは、ソフトウェアエンジニアリングの卓越性と研究に基づいた技術革新企業です。",
    servicesPageTitle: "サービス",
    servicesPageDesc:
      "ビジネスをデジタル変革するために設計された完全なテクノロジーソリューション。",
    contactPageTitle: "お問い合わせ",
    contactPageDesc:
      "プロジェクトのアイデアをお持ちですか？AI、IoT、エンタープライズシステムのことならご相談ください。",
    blogTitle: "ブログ＆インサイト",
    blogDesc:
      "AI、クラウドエンジニアリング、最新技術の動向に関する専門的な情報を提供します。",
    productsTitle: "プロダクト＆ポートフォリオ",
    productsDesc:
      "AI、IoT、クラウド技術で構築された最先端のソリューション。",
    industriesTitle: "対象業界",
    industriesDesc:
      "VinuLabsは、多様な業界においてインテリジェントなテクノロジーソリューションを提供します。",
    talentTitle: "人材育成イニシアチブ",
    talentDesc:
      "次世代の技術革新者やエンジニアの育成に力を入れています。",
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

