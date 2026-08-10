import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const Logo: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/images/logo/logo.png"
        alt={`VinuLabs - ${t.expertiseTitle}`}
        width={160}
        height={48}
        style={{ width: 'auto', height: '36px' }}
        quality={100}
        priority
      />
      <h2 className='text-2xl font-bold hidden sm:block'>
        <span className='text-white dark:text-white'>Vinu</span>
        <span className='text-cyan-400 dark:text-cyan-400'>Labs</span>
      </h2>
    </Link>
  );
};

export default Logo;
