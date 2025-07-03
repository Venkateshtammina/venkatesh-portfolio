'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Picture */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
          <Image
            src={imageError ? '/placeholder-profile.jpg' : '/profile.jpg'}
            alt="Venkatesh T"
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            priority
          />
        </div>
        
        {/* Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Hi, I'm Venkatesh T</h1>
          <p className="text-xl md:text-2xl text-blue-600 mb-6">
            AI & ML Engineering Graduate | Full-Stack Developer
          </p>
          <p className="text-gray-600 mb-8 max-w-lg">
            Passionate about building intelligent solutions and beautiful web experiences.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a 
              href="https://github.com/Venkateshtammina" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/venkatesh-t-310a93297" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}