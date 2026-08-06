import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import IndustriesList from "@/components/Industries/IndustriesList";
export const metadata: Metadata = {
    title: "Industries | VinuLabs",
};

const IndustriesPage = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/industries", text: "Industries" },
    ];
    return (
        <>
            <HeroSub
                title="Industries We Serve"
                description="VinuLabs delivers intelligent technology solutions across diverse industries, transforming operations and driving digital innovation."
                breadcrumbLinks={breadcrumbLinks}
            />
            <IndustriesList />
        </>
    );
};

export default IndustriesPage;


