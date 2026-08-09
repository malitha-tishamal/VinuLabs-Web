import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const Logo: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={getImgPath("/images/logo/logo.svg")}
        alt={`VinuLabs - ${t.expertiseTitle}`}
        width={160}
        height={48}
        style={{ width: 'auto', height: '36px' }}
        quality={100}
        priority
        className='dark:hidden'
      />
      <Image
        src={getImgPath("/images/logo/logo-white.svg")}
        alt={`VinuLabs - ${t.expertiseTitle}`}
        width={160}
        height={48}
        style={{ width: 'auto', height: '36px' }}
        quality={100}
        priority
        className='dark:block hidden'
      />
    </Link>
  );
};

export default Logo;
