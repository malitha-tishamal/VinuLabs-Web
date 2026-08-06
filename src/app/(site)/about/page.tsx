
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import AboutContent from "@/components/About/AboutContent";
export const metadata: Metadata = {
    title: "About Us | VinuLabs",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <>
      <HeroSub
        title="About Us"
        description="VinuLabs is a Sri Lankan technology innovation company built on passion, research, and engineering excellence."
        breadcrumbLinks={breadcrumbLinks}
      />
       <Counter isColorMode={true} />
       <AboutContent />
    </>
  );
};

export default page;
