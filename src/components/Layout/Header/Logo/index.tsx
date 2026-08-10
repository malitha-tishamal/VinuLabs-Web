import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const Logo: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <Link href="/" className="flex items-center">
      <h2 className='text-2xl font-bold'>
        <span className='text-white dark:text-white'>Vinu</span>
        <span className='text-cyan-400 dark:text-cyan-400'>Labs</span>
      </h2>
    </Link>
  );
};

export default Logo;
