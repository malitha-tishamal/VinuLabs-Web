import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Aoscompo from '@/utils/aos';
import ScrollToTop from '@/components/ScrollToTop';

/**
 * Site layout — wraps all public-facing pages with the site Header and Footer.
 * Admin pages are outside this route group and do NOT get these wrappers.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <Aoscompo>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </Aoscompo>
  );
}
