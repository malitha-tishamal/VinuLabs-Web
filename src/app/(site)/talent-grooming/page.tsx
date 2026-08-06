import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import TalentContent from "@/components/TalentGrooming/TalentContent";
export const metadata: Metadata = {
    title: "Talent Grooming | VinuLabs",
};

const TalentGroomingPage = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/talent-grooming", text: "Talent Grooming" },
    ];
    return (
        <>
            <HeroSub
                title="Talent Grooming Initiative"
                description="VinuLabs invests heavily in grooming the next generation of tech innovators. Join our programs and become part of the future of technology."
                breadcrumbLinks={breadcrumbLinks}
            />
            <TalentContent />
        </>
    );
};

export default TalentGroomingPage;


