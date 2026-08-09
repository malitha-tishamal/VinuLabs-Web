"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const { t } = useLanguage();

  const label = item.key && t[item.key as keyof typeof t] ? t[item.key as keyof typeof t] : item.label;

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const path = usePathname();

  return (
    <Link href={item.href} className="relative block w-full">
      <button
        onClick={item.submenu ? handleToggle : undefined}
        className={`flex items-center justify-between w-full py-2 px-3 text-black rounded-md dark:text-grey dark:text-opacity-70 focus:outline-hidden ${path === item.href ? 'bg-primary text-white dark:text-white!' : '  '} ${path.startsWith("/blog") && item.href==="/blog"?"bg-primary! text-white dark:text-white!":null} ${path.startsWith("/portfolio") && item.href==="/portfolio"?"bg-primary text-white dark:text-white!":null}`}
      >
        {label}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </button>
      {submenuOpen && item.submenu && (
        <div className="bg-white p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link key={index} href={subItem.href} className="block py-2 text-gray-500 hover:bg-gray-200">
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
};

export default MobileHeaderLink;
