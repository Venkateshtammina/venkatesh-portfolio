import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'Venkatesh T | Data Analytics & Engineering Apprentice',
  description: 'Portfolio of Venkatesh T, a Data Analytics and Engineering Apprentice at Fidelity Business Services India, specializing in Snowflake, SQL, Python, Tableau, and data governance.',
  keywords: ['data analytics', 'data engineering', 'Snowflake', 'SQL', 'Python', 'Tableau', 'Venkatesh T'],
  openGraph: {
    title: 'Venkatesh T | Data Analytics & Engineering Apprentice',
    description: 'Data analytics, engineering, governance, and automation portfolio.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venkatesh T | Data Analytics & Engineering Apprentice',
    description: 'Data analytics, engineering, governance, and automation portfolio.',
  },
  icons: { icon: '/favicon.ico' },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        <Navbar />
        <div className="relative overflow-x-hidden aurora-background floating-particles">
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
