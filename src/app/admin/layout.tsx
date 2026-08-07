/**
 * Admin section layout — renders WITHOUT the site-wide <Header> and <Footer>.
 * The root layout still provides <html>, <body>, ThemeProvider, Toaster, etc.
 * This layout simply replaces children directly, letting each admin sub-route
 * (dashboard, auth pages, etc.) control its own chrome.
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
