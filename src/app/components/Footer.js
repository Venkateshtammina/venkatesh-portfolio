import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const links = [
  { label: 'GitHub', href: 'https://github.com/Venkateshtammina', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/venkatesh-t-310a93297', icon: FiLinkedin },
  { label: 'Email', href: 'mailto:venkatesht1243@gmail.com', icon: FiMail },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Venkatesh T. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {links.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="p-2 rounded-full hover:bg-slate-800 hover:text-amber-400 transition-colors"><Icon className="w-5 h-5" /></a>)}
        </div>
      </div>
    </footer>
  );
}
