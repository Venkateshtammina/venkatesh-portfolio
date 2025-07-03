'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink, FiCode, FiImage } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
          {project.image ? (
            <a 
              href={project.image} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
              <Image
                src={project.image}
                alt={project.alt || project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 p-2 rounded-full transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <FiImage className="w-6 h-6 text-gray-800" />
                </div>
              </div>
            </a>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <FiCode className="w-8 h-8 text-blue-500" />
                </div>
                <p className="text-gray-500">No preview available</p>
              </div>
            </div>
          )}
        </div>

        {/* Rest of the component remains the same */}
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          {/* ... existing content ... */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;