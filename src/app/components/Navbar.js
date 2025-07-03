import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-semibold text-gray-800">Venkatesh T</a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
            <a href="#education" className="text-gray-700 hover:text-blue-600">Education</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
