import { getImgPath } from "@/utils/image";

export const menuItems = [
    { nameKey: "navHome", href: "#home" },
    { nameKey: "navServices", href: "#services" },
    { nameKey: "navApproach", href: "#approach" },
    { nameKey: "navTeam", href: "#team" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "50+",
        description: "Projects Delivered",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "20+",
        description: "Industry Partners",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "5000+",
        description: "Professionals Trained",
    },
];

export const Progress = [
    { title: 'AI Strategy & Intelligent Systems', Progress: 98 },
    { title: 'Enterprise Architecture & Cloud', Progress: 95 },
    { title: 'Professional Training & Capability', Progress: 92 }
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        titleKey: 'service1Title',
        descriptionKey: 'service1Desc',
        tagsKey: 'service1List',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        titleKey: 'service2Title',
        descriptionKey: 'service2Desc',
        tagsKey: 'service2List',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        titleKey: 'service3Title',
        descriptionKey: 'service3Desc',
        tagsKey: 'service3List',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        titleKey: 'service4Title',
        descriptionKey: 'service4Desc',
        tagsKey: 'service4List',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        titleKey: 'service5Title',
        descriptionKey: 'service5Desc',
        tagsKey: 'service5List',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        titleKey: 'service6Title',
        descriptionKey: 'service6Desc',
        tagsKey: 'service6List',
    },
];

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/cozycasa.png'),
        alt: 'Portfolio',
        title: 'Cozycasa',
        slug: 'Cozycasa',
        info: 'Designation',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/mars.png'),
        alt: 'Portfolio',
        title: 'Mars',
        slug: 'Mars',
        info: 'Designation',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/humans.png'),
        alt: 'Portfolio',
        title: 'Everyday Humans',
        slug: 'everyday-humans',
        info: 'Designation',
        Class: 'md:mt-0'
    },
];

export const teamMembers = [
    {
        nameKey: 'teamMember1Name',
        roleKey: 'teamMember1Role',
        expertiseKey: 'teamMember1Desc',
        bioKey: 'teamMember1Bio',
        badgeText: 'Technology Leadership & Enterprise Architecture',
        tags: ['Tech Strategy', 'Cloud Platforms', 'Product Engineering', 'Scale Systems'],
        linkedin: 'https://www.linkedin.com/in/chamil/',
        image: getImgPath('/chamil-jeewantha.png'),
        initials: 'CJ',
    },
    {
        nameKey: 'teamMember2Name',
        roleKey: 'teamMember2Role',
        expertiseKey: 'teamMember2Desc',
        bioKey: 'teamMember2Bio',
        badgeText: 'AI Strategy & Workforce Transformation',
        tags: ['AI Strategy', 'Responsible AI', 'Capacity Building', 'Gov & Industry Alliances'],
        linkedin: 'https://www.linkedin.com/in/thamara-rangana-waidyarathne-74a38459/',
        image: getImgPath('/thamara-waidyarathne.png'),
        initials: 'TW',
    },
    {
        nameKey: 'teamMember3Name',
        roleKey: 'teamMember3Role',
        expertiseKey: 'teamMember3Desc',
        bioKey: 'teamMember3Bio',
        badgeText: 'Applied AI & Advanced Research',
        tags: ['Deep Learning', 'Cybersecurity', 'Bioinformatics', 'High-Performance Computing'],
        linkedin: 'https://www.linkedin.com/in/sugandima-vidanagamachchi-75205921/',
        image: getImgPath('/Dr.Sugandima.jpeg'),
        initials: 'SV',
    },
];