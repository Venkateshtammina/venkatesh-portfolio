import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'Venkatesh T - Portfolio',
  description: 'Portfolio of Venkatesh T, AI & ML Engineer and Full Stack Developer',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-slate-900">
        <Navbar />
        <div className="relative overflow-hidden aurora-background floating-particles">
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}