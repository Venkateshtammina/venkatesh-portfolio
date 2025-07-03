// app/layout.js
import './styles/globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Venkatesh T | Portfolio',
  description: 'AI & ML Engineer | Full-Stack Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
