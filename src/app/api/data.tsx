import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Expertise", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Team", href: "#team" },
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
        title: 'AI Strategy & Adoption',
        description: 'Turn AI ambition into measurable business value—prioritised use cases, responsible adoption, and practical roadmaps.',
        tags: ['AI readiness', 'Roadmaps', 'Governance', 'Automation', 'Responsible AI'],
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Architecture & Engineering',
        description: 'Design scalable, secure and cloud-ready systems with clear technical direction from concept through delivery.',
        tags: ['Cloud architecture', 'Platform engineering', 'Technical reviews', 'Security', 'DevOps'],
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Business Transformation',
        description: 'Connect customer needs, process improvement and technology choices to create solutions that work in the real world.',
        tags: ['Discovery', 'Process optimization', 'Innovation', 'Customer experience'],
    },
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Professional Training',
        description: 'Build confident, capable teams through tailored programmes in AI, software engineering, cybersecurity and digital skills.',
        tags: ['AI literacy', 'Cybersecurity', 'Software engineering', 'Leadership', 'Upskilling'],
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Applied AI & Research',
        description: 'Bridge research and industry with intelligent prototypes, data-driven models and evidence-led technical experimentation.',
        tags: ['Machine learning', 'Deep learning', 'Data science', 'Research', 'Prototyping'],
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Delivery Leadership',
        description: 'Strengthen execution with technical oversight, project governance and hands-on guidance for engineering teams.',
        tags: ['Project governance', 'Team mentoring', 'Technical oversight', 'Quality assurance'],
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
        name: 'Chamil Jeewantha',
        role: 'Co-Founder & Director',
        expertise: 'Technology Strategy · Architecture · Product Delivery',
        bio: 'Software and technology leader focused on technical excellence, scalable platforms, product innovation, and long-term customer partnerships.',
        linkedin: 'https://www.linkedin.com/in/chamil/',
        image: getImgPath('/chamil-jeewantha.png'),
        initials: 'CJ',
    },
    {
        name: 'Thamara Rangana Waidyarathne',
        role: 'Academic & AI Strategy Lead',
        expertise: 'AI Education · Training · Business Development',
        bio: 'Academic leader, consultant, and AI researcher bringing together workforce development, responsible AI adoption, and industry–education collaboration.',
        linkedin: 'https://www.linkedin.com/in/thamara-rangana-waidyarathne-74a38459/',
        image: getImgPath('/thamara-waidyarathne.png'),
        initials: 'TW',
    },
    {
        name: 'Dr. Sugandima Vidanagamachchi',
        role: 'Applied AI & Research Lead',
        expertise: 'AI/ML · Cybersecurity · Research & Innovation',
        bio: 'Computer science researcher and senior academic specialising in machine learning, deep learning, cybersecurity, bioinformatics, and accelerated computing.',
        linkedin: 'https://www.linkedin.com/in/sugandima-vidanagamachchi-75205921/',
        image: getImgPath('/Dr.Sugandima.jpeg'),
        initials: 'SV',
    },
];