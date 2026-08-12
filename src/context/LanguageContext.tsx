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
  expertiseTitle: string;
  expertiseSubtitle: string;
  service1Title: string;
  service1Desc: string;
  service1List: string;
  service2Title: string;
  service2Desc: string;
  service2List: string;
  service3Title: string;
  service3Desc: string;
  service3List: string;
  service4Title: string;
  service4Desc: string;
  service4List: string;
  service5Title: string;
  service5Desc: string;
  service5List: string;
  service6Title: string;
  service6Desc: string;
  service6List: string;
  quoteText: string;
  process1Title: string;
  process1Desc: string;
  process2Title: string;
  process2Desc: string;
  process3Title: string;
  process3Desc: string;
  process4Title: string;
  process4Desc: string;
  process5Title: string;
  process5Desc: string;
  modernTooling: string;
  teamMember1Name: string;
  teamMember1Role: string;
  teamMember1Desc: string;
  teamMember2Name: string;
  teamMember2Role: string;
  teamMember2Desc: string;
  teamMember3Name: string;
  teamMember3Role: string;
  teamMember3Desc: string;
  teamMember1Bio: string;
  teamMember2Bio: string;
  teamMember3Bio: string;
  contactFormTitle: string;
  contactFormFullName: string;
  contactFormCompany: string;
  contactFormEmail: string;
  contactFormPhone: string;
  contactFormSubject: string;
  contactFormMessage: string;
  contactFormSubmit: string;
  footerEmail: string;
  footerLocation: string;
  footerConnect: string;
  footerPrivacy: string;
  footerTerms: string;
  linkedinProfile: string;
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
    navAdmin: "Administrator",
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
    linkedinProfile: "LinkedIn Profile ↗",
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
    expertiseTitle: "Strategy · Technology · Capability • 3 Complementary Experts",
    expertiseSubtitle: "",
    service1Title: "AI Strategy & Adoption",
    service1Desc: "Turn AI ambition into measurable business value—prioritised use cases, responsible adoption, and practical roadmaps.",
    service1List: "AI readiness, Roadmaps, Governance, Automation, Responsible AI",
    service2Title: "Architecture & Engineering",
    service2Desc: "Design scalable, secure and cloud-ready systems with clear technical direction from concept through delivery.",
    service2List: "Cloud architecture, Platform engineering, Technical reviews, Security, DevOps",
    service3Title: "Business Transformation",
    service3Desc: "Connect customer needs, process improvement and technology choices to create solutions that work in the real world.",
    service3List: "Discovery, Process optimization, Innovation, Customer experience",
    service4Title: "Professional Training",
    service4Desc: "Build confident, capable teams through tailored programmes in AI, software engineering, cybersecurity and digital skills.",
    service4List: "AI literacy, Cybersecurity, Software engineering, Leadership, Upskilling",
    service5Title: "Applied AI & Research",
    service5Desc: "Bridge research and industry with intelligent prototypes, data-driven models and evidence-led technical experimentation.",
    service5List: "Machine learning, Deep learning, Data science, Research, Prototyping",
    service6Title: "Delivery Leadership",
    service6Desc: "Strengthen execution with technical oversight, project governance and hands-on guidance for engineering teams.",
    service6List: "Project governance, Team mentoring, Technical oversight, Quality assurance",
    quoteText: "Technology creates impact when strategy, systems and people move together.",
    process1Title: "Understand",
    process1Desc: "We listen to your goals, customers, and constraints.",
    process2Title: "Shape",
    process2Desc: "We transform complexity into a practical strategy.",
    process3Title: "Deliver",
    process3Desc: "We work alongside your team to create outcomes.",
    process4Title: "Enable",
    process4Desc: "We transfer knowledge and build capability.",
    process5Title: "Scale",
    process5Desc: "We support long-term growth and evolution.",
    modernTooling: "Modern Tooling & Frameworks",
    teamMember1Name: "Chamil Jeewantha",
    teamMember1Role: "Co-Founder & Director",
    teamMember1Desc: "Technology Strategy · Architecture · Product Delivery",
    teamMember1Bio: "Software and technology leader focused on technical excellence, scalable platforms, product innovation, and long-term customer partnerships.",
    teamMember2Name: "Thamara Rangana Waidyarathne",
    teamMember2Role: "Co-Founder & Director · Academic & AI Strategy Lead",
    teamMember2Desc: "AI Education · Training · Business Development",
    teamMember2Bio: "Academic leader, consultant, and AI researcher bringing together workforce development, responsible AI adoption, and industry–education collaboration.",
    teamMember3Name: "Dr. Sugandima Vidanagamachchi",
    teamMember3Role: "Applied AI & Research Lead",
    teamMember3Desc: "AI/ML · Cybersecurity · Research & Innovation",
    teamMember3Bio: "Computer science researcher and senior academic specialising in machine learning, deep learning, cybersecurity, bioinformatics, and accelerated computing.",
    contactFormTitle: "Project Discussion & Consultation",
    contactFormFullName: "Full Name *",
    contactFormCompany: "Company Name *",
    contactFormEmail: "Email Address *",
    contactFormPhone: "Phone Number",
    contactFormSubject: "General Inquiry",
    contactFormMessage: "Tell us about your goals, technical constraints, or training requirements...",
    contactFormSubmit: "Submit Inquiry ↗",
    footerEmail: "Email Us",
    footerLocation: "Location\nSri Lanka",
    footerConnect: "Connect",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms & Conditions",
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
    expertiseTitle: "උපාය මාර්ග · තාක්ෂණය · කුසලතාව • 3 අනුපූරක විශේෂඥයින්",
    expertiseSubtitle: "",
    service1Title: "AI උපාය මාර්ග සහ ස්වීකරණය",
    service1Desc: "AI අභිලාෂය මැනිය හැකි ව්‍යාපාර වටිනාකමක් බවට පත් කරන්න - ප්‍රමුඛතා දීමේ භාවිත අවස්ථා, වගකීම් සහිත ස්වීකරණය, සහ ප්‍රායෝගික මාර්ගසිතුම්.",
    service1List: "AI සූදානම, මාර්ගසිතුම්, පාලනය, ස්වයංක්‍රීයකරණය, වගකීම් සහිත AI",
    service2Title: "පද්ධති නිර්මාණ ශිල්පය සහ ඉංජිනේරු විද්‍යාව",
    service2Desc: "සංකල්පයේ සිට ඉදිරිපත් කිරීම දක්වා පැහැදිලි තාක්ෂණික දිශාවක් සමඟ පරිමාණ කළ හැකි, ආරක්ෂිත සහ ක්ලවුඩ්-සූදානම් පද්ධති නිර්මාණය කරන්න.",
    service2List: "ක්ලවුඩ් පද්ධති නිර්මාණ ශිල්පය, ප්ලැට්ෆෝම් ඉංජිනේරු විද්‍යාව, තාක්ෂණික සමාලෝචන, ආරක්ෂාව, DevOps",
    service3Title: "ව්‍යාපාර පරිවර්තනය",
    service3Desc: "පාරිභෝගික අවශ්‍යතා, ක්‍රියාවලි වැඩිදියුණු කිරීම සහ තාක්ෂණික තේරීම් සම්බන්ධ කිරීමෙන් තථ්‍ය ලෝකයේ ක්‍රියාත්මක වන විසඳුම් සාදන්න.",
    service3List: "සොයාගැනීම, ක්‍රියාවලි ප්‍රශස්තකරණය, නවෝත්පාදන, පාරිභෝගික අත්දැකීම්",
    service4Title: "වෘත්තීය පුහුණුව",
    service4Desc: "AI, මෘදුකාංග ඉංජිනේරු විද්‍යාව, සයිබර් ආරක්ෂාව සහ ඩිජිටල් කුසලතා වලට අනුවාදිත වැඩසටහන් හරහා විශ්වාසවන්ත, සමත් කණ්ඩායම් ගොඩනඟන්න.",
    service4List: "AI සාක්ෂරතාව, සයිබර් ආරක්ෂාව, මෘදුකාංග ඉංජිනේරු විද්‍යාව, නායකත්වය, කුසලතා වැඩිදියුණු කිරීම",
    service5Title: "යෙදවුම් AI සහ පර්යේෂණ",
    service5Desc: "බුද්ධිමත් මාදිලි, දත්ත-ධජ ආකෘති සහ සාක්ෂි-මූලික තාක්ෂණික පරීක්ෂණ හරහා පර්යේෂණ සහ කර්මාන්තය සම්බන්ධ කරන්න.",
    service5List: "යන්ත්‍ර ඉගෙනුම, ගැඹුරු ඉගෙනුම, දත්ත විද්‍යාව, පර්යේෂණ, මාදිලි නිර්මාණය",
    service6Title: "ඉදිරිපත් කිරීමේ නායකත්වය",
    service6Desc: "තාක්ෂණික අධීක්ෂණය, ව්‍යාපෘති පාලනය සහ ඉංජිනේරු කණ්ඩායම් සඳහා ප්‍රායෝගික මඟපෙන්වීම හරහා ක්‍රියාත්මක කිරීම ශක්තිමත් කරන්න.",
    service6List: "ව්‍යාපෘති පාලනය, කණ්ඩායම් මඟපෙන්වීම, තාක්ෂණික අධීක්ෂණය, ගුණාත්මක භාවය සහතික කිරීම",
    quoteText: "තාක්ෂණය මගින් බලපෑමක් ඇති වන්නේ උපාය මාර්ග, පද්ධති සහ මිනිසුන් එකතුව කටයුතු කරන විට.",
    process1Title: "අවබෝධ කරගැනීම",
    process1Desc: "අපි ඔබගේ ඉලක්ක, පාරිභෝගිකයින් සහ සීමාවන් අසමින් සිටිමු.",
    process2Title: "හැඩගැස්වීම",
    process2Desc: "අපි සංකීර්ණත්වය ප්‍රායෝගික උපාය මාර්ගයකට පරිවර්තනය කරමු.",
    process3Title: "ඉදිරිපත් කිරීම",
    process3Desc: "ප්‍රතිඵල සාදා ගැනීමට අපි ඔබගේ කණ්ඩායම සමඟ වැඩ කරමු.",
    process4Title: "සකස් කිරීම",
    process4Desc: "අපි දැනුම මාරු කරගෙන කුසලතා ගොඩනඟමු.",
    process5Title: "පරිමාණ කිරීම",
    process5Desc: "අපි දීර්ඝකාලීන වර්ධනය සහ පරිණාමයට සහාය වෙමු.",
    modernTooling: "නවීන මෙවලම් සහ රාමු",
    teamMember1Name: "චමිල් ජීවන්ත",
    teamMember1Role: "සහ-ආරම්භක සහ අධ්‍යක්ෂ",
    teamMember1Desc: "තාක්ෂණික උපාය මාර්ග · පද්ධති නිර්මාණ ශිල්පය · නිෂ්පාදන ඉදිරිපත් කිරීම",
    teamMember1Bio: "තාක්ෂණික උත්කෘෂ්ටිය, පරිමාණ කළ හැකි ප්ලැට්ෆෝම්, නිෂ්පාදන නවෝත්පාදන සහ දීර්ඝකාලීන පාරිභෝගික හවුල්කාරිත්වය කෙරෙහි අවධානය යොමු කරන මෘදුකාංග සහ තාක්ෂණ නායකයෙකි.",
    teamMember2Name: "තමර රංගන වෛද්‍යරත්න",
    teamMember2Role: "සහ-ආරම්භක සහ අධ්‍යක්ෂ · අධ්‍යාපනික සහ AI උපාය මාර්ග ප්‍රධානි",
    teamMember2Desc: "AI අධ්‍යාපනය · පුහුණුව · ව්‍යාපාර සංවර්ධනය",
    teamMember2Bio: "ශ්‍රම බලකාය සංවර්ධනය, වගකීම් සහිත AI ස්වීකරණය සහ කර්මාන්ත-අධ්‍යාපන සහයෝගය එකතු කරන අධ්‍යාපනික නායකයෙකි, උපදේශකයෙකි සහ AI පර්යේෂකයෙකි.",
    teamMember3Name: "ආචාර්ය සුගන්දිමා විදානගමච්චි",
    teamMember3Role: "යෙදවුම් AI සහ පර්යේෂණ ප්‍රධානි",
    teamMember3Desc: "AI/ML · සයිබර් ආරක්ෂාව · පර්යේෂණ සහ නවෝත්පාදන",
    teamMember3Bio: "යන්ත්‍ර ඉගෙනුම, ගැඹුරු ඉගෙනුම, සයිබර් ආරක්ෂාව, ජෛව තොරතුරු විද්‍යාව සහ වේගවත් පරිගණනය විශේෂඥව පරිගණක විද්‍යා පර්යේෂකයෙකි සහ ජ්‍යෙෂ්ඨ අධ්‍යාපනිකයෙකි.",
    contactFormTitle: "ව්‍යාපෘති සාකච්ඡා සහ උපදේශන",
    contactFormFullName: "සම්පූර්ණ නම *",
    contactFormCompany: "ආයතනයේ නම *",
    contactFormEmail: "විද්‍යුත් තැපෑල *",
    contactFormPhone: "දුරකථන අංකය",
    contactFormSubject: "පොදු විමසීම",
    contactFormMessage: "ඔබගේ ඉලක්ක, තාක්ෂණික සීමාවන් හෝ පුහුණු අවශ්‍යතා පිළිබඳව අපට කියන්න...",
    contactFormSubmit: "විමසීම යවන්න ↗",
    footerEmail: "විද්‍යුත් තැපෑල යවන්න",
    footerLocation: "පිහිටීම\nශ්‍රී ලංකාව",
    footerConnect: "සම්බන්ධ වන්න",
    footerPrivacy: "පෞද්ගලිකත්ව ප්‍රතිපත්තිය",
    footerTerms: "කොන්දේසි සහ නියම",
    linkedinProfile: "LinkedIn Profile ↗",
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
    expertiseTitle: "உத்தி · தொழில்நுட்பம் · திறன் • 3 நிபுணர்கள்",
    expertiseSubtitle: "",
    service1Title: "AI உத்தி மற்றும் ஏற்றுக்கொள்ளுதல்",
    service1Desc: "AI அறிவாற்றலை அளவிடக்கூடிய வணிக மதிப்பாக மாற்றுங்கள் - முன்னுரிமை வழங்கப்பட்ட பயன்பாடுகள், பொறுப்பான ஏற்றுக்கொள்ளுதல், மற்றும் நடைமுறை வரைபடங்கள்.",
    service1List: "AI தயார்நிலை, வரைபடங்கள், நிர்வாகம், தானியக்கம், பொறுப்பான AI",
    service2Title: "கணினி கட்டமைப்பு மற்றும் பொறியியல்",
    service2Desc: "கருத்து முதல் வழங்குதல் வரை தெளிவான தொழில்நுட்ப திசையுடன் அளவிடக்கூடிய, பாதுகாப்பான மற்றும் கிளவுட்-தயார் அமைப்புகளை வடிவமைக்கவும்.",
    service2List: "கிளவுட் கட்டமைப்பு, தள பொறியியல், தொழில்நுட்ப மதிப்பாய்வுகள், பாதுகாப்பு, DevOps",
    service3Title: "வணிக மாற்றம்",
    service3Desc: "வாடிக்கையாளர் தேவைகள், செயல்முறை மேம்பாடு மற்றும் தொழில்நுட்ப தேர்வுகளை இணைப்பதன் மூலம் உண்மை உலகில் செயல்படும் தீர்வுகளை உருவாக்கவும்.",
    service3List: "கண்டுபிடிப்பு, செயல்முறை மேம்பாடு, புதுமை, வாடிக்கையாளர் அனுபவம்",
    service4Title: "தொழில்முறை பயிற்சி",
    service4Desc: "AI, மென்பொருள் பொறியியல், சைபர் பாதுகாப்பு மற்றும் டிஜிட்டல் திறன்களில் தனிப்பயனாக்கப்பட்ட திட்டங்கள் மூலம் நம்பிக்கையுள்ள, திறன் வாய்ந்த குழுக்களை உருவாக்கவும்.",
    service4List: "AI எழுத்தறிவு, சைபர் பாதுகாப்பு, மென்பொருள் பொறியியல், தலைமை, திறன் மேம்பாடு",
    service5Title: "பயன்பாட்டு AI மற்றும் ஆராய்ச்சி",
    service5Desc: "புத்திசாலித்தனமான மாதிரிகள், தரவு-சார்ந்த மாதிரிகள் மற்றும் ஆதாரம்-அடிப்படையிலான தொழில்நுட்ப பரிசோதனைகள் மூலம் ஆராய்ச்சி மற்றும் தொழில்துறையை இணைக்கவும்.",
    service5List: "இயந்திர கற்றல், ஆழமான கற்றல், தரவு அறிவியல், ஆராய்ச்சி, மாதிரி உருவாக்கம்",
    service6Title: "வழங்குதல் தலைமை",
    service6Desc: "தொழில்நுட்ப மேற்பார்வை, திட்ட நிர்வாகம் மற்றும் பொறியியல் குழுக்களுக்கு நடைமுறை வழிகாட்டுதல் மூலம் செயல்படுத்தலை வலுப்படுத்தவும்.",
    service6List: "திட்ட நிர்வாகம், குழு வழிகாட்டுதல், தொழில்நுட்ப மேற்பார்வை, தர உத்தரவாதம்",
    quoteText: "உத்தி, அமைப்புகள் மற்றும் மக்கள் ஒன்றாக நகரும்போது தொழில்நுட்பம் தாக்கத்தை ஏற்படுத்துகிறது.",
    process1Title: "புரிந்துகொள்ளுங்கள்",
    process1Desc: "உங்கள் இலக்குகள், வாடிக்கையாளர்கள் மற்றும் கட்டுப்பாடுகளைக் கேட்கிறோம்.",
    process2Title: "வடிவமைக்கவும்",
    process2Desc: "சிக்கலானதை நடைமுறை உத்தியாக மாற்றுகிறோம்.",
    process3Title: "வழங்குங்கள்",
    process3Desc: "முடிவுகளை உருவாக்க உங்கள் குழுவுடன் பணிபுரிகிறோம்.",
    process4Title: "செயல்படுத்துங்கள்",
    process4Desc: "அறிவை மாற்றி திறன்களை உருவாக்குகிறோம்.",
    process5Title: "அளவிடுங்கள்",
    process5Desc: "நீண்டகால வளர்ச்சி மற்றும் பரிணாமத்திற்கு ஆதரவு வழங்குகிறோம்.",
    modernTooling: "நவீன கருவிகள் மற்றும் கட்டமைப்புகள்",
    teamMember1Name: "Chamil Jeewantha",
    teamMember1Role: "இணை-நிறுவனர் மற்றும் இயக்குனர்",
    teamMember1Desc: "தொழில்நுட்ப உத்தி · கணினி கட்டமைப்பு · தயாரிப்பு வழங்குதல்",
    teamMember1Bio: "தொழில்நுட்ப சிறப்பு, அளவிடக்கூடிய தளங்கள், தயாரிப்பு புதுமை மற்றும் நீண்டகால வாடிக்கையாளர் கூட்டாண்மையில் கவனம் செலுத்தும் மென்பொருள் மற்றும் தொழில்நுட்ப தலைவர்.",
    teamMember2Name: "Thamara Rangana Waidyarathne",
    teamMember2Role: "இணை-நிறுவனர் மற்றும் இயக்குனர் · கல்வி மற்றும் AI உத்தி தலைவர்",
    teamMember2Desc: "AI கல்வி · பயிற்சி · வணிக மேம்பாடு",
    teamMember2Bio: "தொழிலாளர் மேம்பாடு, பொறுப்பான AI ஏற்றுக்கொள்ளுதல் மற்றும் தொழில்-கல்வி ஒத்துழைப்பை இணைக்கும் கல்வி தலைவர், ஆலோசகர் மற்றும் AI ஆராய்ச்சியாளர்.",
    teamMember3Name: "Dr. Sugandima Vidanagamachchi",
    teamMember3Role: "பயன்பாட்டு AI மற்றும் ஆராய்ச்சி தலைவர்",
    teamMember3Desc: "AI/ML · சைபர் பாதுகாப்பு · ஆராய்ச்சி மற்றும் புதுமை",
    teamMember3Bio: "இயந்திர கற்றல், ஆழமான கற்றல், சைபர் பாதுகாப்பு, உயிரியல் தகவலியல் மற்றும் வேகமான கணினி கணக்கீட்டில் நிபுணத்துவம் வாய்ந்த கணினி அறிவியல் ஆராய்ச்சியாளர் மற்றும் மூத்த கல்வியாளர்.",
    contactFormTitle: "திட்ட விவாதம் மற்றும் ஆலோசனை",
    contactFormFullName: "முழு பெயர் *",
    contactFormCompany: "நிறுவனத்தின் பெயர் *",
    contactFormEmail: "மின்னஞ்சல் முகவரி *",
    contactFormPhone: "தொலைபேசி எண்",
    contactFormSubject: "பொது விசாரணை",
    contactFormMessage: "உங்கள் இலக்குகள், தொழில்நுட்ப கட்டுப்பாடுகள் அல்லது பயிற்சி தேவைகள் பற்றி எங்களிடம் சொல்லவும்...",
    contactFormSubmit: "விசாரணையை சமர்ப்பிக்கவும் ↗",
    footerEmail: "மின்னஞ்சல் அனுப்பவும்",
    footerLocation: "இடம்\nஇலங்கை",
    footerConnect: "இணைக்கவும்",
    footerPrivacy: "தனியுரிமைக் கொள்கை",
    footerTerms: "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
    linkedinProfile: "LinkedIn Profile ↗",
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
    expertiseTitle: "戦略 · テクノロジー · 能力 • 3つの相補的な専門家",
    expertiseSubtitle: "",
    service1Title: "AI戦略と導入",
    service1Desc: "AIの野心を測定可能なビジネス価値に変えるー優先順位の高いユースケース、責任ある導入、実用的なロードマップ。",
    service1List: "AI準備状況, ロードマップ, ガバナンス, 自動化, 責任あるAI",
    service2Title: "アーキテクチャとエンジニアリング",
    service2Desc: "概念から提供まで明確な技術的方向性でスケーラブル、安全、クラウディ対応のシステムを設計。",
    service2List: "クラウドアーキテクチャ, プラットフォームエンジニアリング, 技術レビュー, セキュリティ, DevOps",
    service3Title: "ビジネス変革",
    service3Desc: "顧客のニーズ、プロセス改善、技術の選択を結びつけて、実世界で機能するソリューションを作成。",
    service3List: "発見, プロセス最適化, イノベーション, 顧客体験",
    service4Title: "プロフェッショナルトレーニング",
    service4Desc: "AI、ソフトウェアエンジニアリング、サイバーセキュリティ、デジタルスキルのカスタマイズされたプログラムを通じて、自信があり、能力のあるチームを構築。",
    service4List: "AIリテラシー, サイバーセキュリティ, ソフトウェアエンジニアリング, リーダーシップ, スキルアップ",
    service5Title: "応用AIと研究",
    service5Desc: "インテリジェントなプロトタイプ、データ駆動モデル、証拠に基づく技術実験を通じて研究と業界を結びつける。",
    service5List: "機械学習, ディープラーニング, データサイエンス, 研究, プロトタイピング",
    service6Title: "提供リーダーシップ",
    service6Desc: "技術的監視、プロジェクトガバナンス、エンジニアリングチームへの実践的ガイダンスを通じて実行を強化。",
    service6List: "プロジェクトガバナンス, チームメンタリング, 技術的監視, 品質保証",
    quoteText: "戦略、システム、人々が一緒に動くとき、テクノロジーは影響を生み出す。",
    process1Title: "理解",
    process1Desc: "私たちはあなたの目標、顧客、制約を聞きます。",
    process2Title: "形成",
    process2Desc: "複雑さを実用的な戦略に変換します。",
    process3Title: "提供",
    process3Desc: "結果を作成するためにあなたのチームと一緒に働きます。",
    process4Title: "有効化",
    process4Desc: "知識を移転し、能力を構築します。",
    process5Title: "拡張",
    process5Desc: "長期的な成長と進化をサポートします。",
    modernTooling: "最新のツールとフレームワーク",
    teamMember1Name: "Chamil Jeewantha",
    teamMember1Role: "共同創設者・ディレクター",
    teamMember1Desc: "技術戦略 · アーキテクチャ · 製品提供",
    teamMember1Bio: "技術的卓越性、スケーラブルなプラットフォーム、製品革新、長期的な顧客パートナーシップに焦点を当てたソフトウェアおよびテクノロジーリーダー。",
    teamMember2Name: "Thamara Rangana Waidyarathne",
    teamMember2Role: "共同創設者・ディレクター · 学術・AI戦略リード",
    teamMember2Desc: "AI教育 · トレーニング · ビジネス開発",
    teamMember2Bio: "労働力開発、責任あるAI導入、産業教育協力を結びつける学術リーダー、コンサルタント、AI研究者。",
    teamMember3Name: "Dr. Sugandima Vidanagamachchi",
    teamMember3Role: "応用AI・研究リード",
    teamMember3Desc: "AI/ML · サイバーセキュリティ · 研究と革新",
    teamMember3Bio: "機械学習、ディープラーニング、サイバーセキュリティ、バイオインフォマティクス、加速コンピューティングを専門とするコンピュータサイエンス研究者および上級学術者。",
    contactFormTitle: "プロジェクト相談とコンサルテーション",
    contactFormFullName: "氏名 *",
    contactFormCompany: "会社名 *",
    contactFormEmail: "メールアドレス *",
    contactFormPhone: "電話番号",
    contactFormSubject: "一般お問い合わせ",
    contactFormMessage: "目標、技術的制約、トレーニング要件について教えてください...",
    contactFormSubmit: "お問い合わせを送信 ↗",
    footerEmail: "メール送信",
    footerLocation: "場所\nスリランカ",
    footerConnect: "接続",
    footerPrivacy: "プライバシーポリシー",
    footerTerms: "利用規約",
    linkedinProfile: "LinkedIn Profile ↗",
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

