import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const Logo: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <Link href="/" className="flex flex-col">
      <div className="flex items-center gap-3">
        <Image
          src="/images/logo/logo.png"
          alt={`VinuLabs - Innovating with Vision, Novelty, and Unity`}
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
      </div>
      <div className='text-white text-xs hidden sm:block font-bold text-center mt-1 px-2 py-1'>
        Innovating with Vision,<br/>
        Novelty, and Unity
      </div>
    </Link>
  );
};

export default Logo;
