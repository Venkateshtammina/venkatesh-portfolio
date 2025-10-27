'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionContainer from './SectionContainer';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight, FiImage, FiX } from 'react-icons/fi';
import Image from 'next/image';

// Lightbox Component
const Lightbox = ({ isOpen, onClose, images, currentIndex, onNext, onPrev }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent main body scroll

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Restore main body scroll
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      >
        {/* Close button - Fixed position ensures it's always visible and on top */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed top-4 right-4 z-[60] p-3 bg-black/50 hover:bg-black/70 rounded-full shadow-lg transition-all duration-300 ease-out"
          onClick={(e) => {
            e.stopPropagation(); // Prevent closing the lightbox background when clicking the button
            onClose();
          }}
          aria-label="Close lightbox"
        >
          <FiX className="w-6 h-6 text-white" />
        </motion.button>

        {/* Main Lightbox Content Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-6xl max-h-[90vh] bg-black rounded-lg shadow-2xl flex flex-col overflow-hidden" // overflow-hidden here to clip anything outside this main box
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the lightbox content
        >
          {/* Image Display Area - This is where the image will be rendered and potentially scrolled */}
          {/* This div will define the scrollable viewport for the image */}
          <div className="relative flex-grow flex items-center justify-center overflow-auto p-4"> {/* p-4 for some padding around the image */}
            {!images[currentIndex] ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <FiImage className="w-12 h-12 text-white animate-spin" />
              </motion.div>
            ) : (
              // This inner div will contain the Image.
              // We'll give the Image explicit large dimensions and use object-none.
              // The `overflow-auto` on the parent `div` will then enable scrolling.
              <div className="relative w-full h-full flex justify-center items-center">
                 <Image
                    src={images[currentIndex]}
                    alt={`Project image ${currentIndex + 1}`}
                    // Set a very large width and height. This tells Next.js Image to create an element
                    // of this size. Combined with `object-none`, the image will render at its natural
                    // resolution or this size, whichever is smaller, allowing it to overflow its parent.
                    width={2000} // Example large width. Adjust based on your largest screenshot.
                    height={1200} // Example large height. Adjust based on your largest screenshot.
                    className="object-contain" // Changed to object-contain, it will fit if small, but if large, the explicit size will dominate for rendering
                    // Let's try `object-contain` and let the parent `overflow-auto` handle it.
                    // If `object-contain` still shrinks the image too much for scrolling,
                    // we'd switch back to `object-none` here.
                    // For now, `object-contain` is safer to ensure visibility.
                    // If you want pan/zoom, you'd need `object-none` and manual scale/translate.
                    // Given "image should be properly placed within the container like structure",
                    // `object-contain` is likely what you want, where it fits initially, then scrolls if bigger.
                    // The `overflow-auto` is on the parent container.
                    style={{
                        // Ensure image starts centered within the scrollable viewport
                        maxWidth: 'unset', // Allow image to be wider than the parent container
                        maxHeight: 'unset', // Allow image to be taller than the parent container
                        width: 'auto', // Allow width to be determined by content if needed
                        height: 'auto', // Allow height to be determined by content if needed
                    }}
                    priority={true}
                    quality={90}
                  />
              </div>
            )}
          </div>

          {/* Navigation Controls for Lightbox (positioned absolutely within the main content box) */}
          {images.length > 1 && (
            <>
              <motion.button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 text-slate-800 rounded-full shadow-lg hover:bg-white transition-all z-10"
                aria-label="Previous image"
                whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.15)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 text-slate-800 rounded-full shadow-lg hover:bg-white transition-all z-10"
                aria-label="Next image"
                whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.15)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronRight className="w-5 h-5" />
              </motion.button>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ... (Rest of ProjectCard and Projects components remain the same)

const projects = [
    {
        id: 1,
        title: "Traffic Analysis System (TASS)",
        description: "A real-time traffic route optimization system using ML to analyze traffic and suggest the fastest routes, reducing travel time by 23% in Bangalore.",
        tech: ["React", "FastAPI", "Machine Learning", "Google Maps API"],
        images: ["/tass-2.png", "/tass-1.png"], // Assuming these paths are correct relative to /public
        githubLink: "https://github.com/Venkateshtammina/TASS",
        color: "from-rose-500 to-amber-500",
    },
    {
        id: 2,
        title: "MedTrack",
        description: "Comprehensive medicine inventory management system with expiry alerts, helping reduce waste through timely notifications and efficient stock management.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        images: ["/medtrack.png"], // Assuming this path is correct relative to /public
        githubLink: "https://github.com/Venkateshtammina/MedTrack-frontend",
        liveLink: "https://medtrack-frontend.onrender.com",
        color: "from-amber-500 to-orange-500",
    },
    {
        id: 3,
        title: "SmartHome IoT",
        description: "IoT-based home automation system that monitors environmental conditions in real-time, with remote control and automated alerts for temperature and humidity.",
        tech: ["ESP32", "MicroPython", "WebSocket", "React"],
        images: [], // No images provided, the fallback will be shown
        color: "from-orange-500 to-rose-500",
    }
];

const ProjectCard = ({ project, index }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const handleNextImage = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const handlePrevImage = (e) => {
        e?.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    };

    const openLightbox = (e) => {
        e?.stopPropagation();
        if (project.images.length > 0) {
            setIsLightboxOpen(true);
        }
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const changeImageIndex = (newIndex) => {
        setCurrentImageIndex(newIndex);
    };

    return (
        <>
            <Lightbox
                isOpen={isLightboxOpen}
                onClose={closeLightbox}
                images={project.images}
                currentIndex={currentImageIndex}
                onNext={handleNextImage}
                onPrev={handlePrevImage}
                // Removed onChangeIndex prop as it's not being used in the Lightbox component
            />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Decorative accent */}
                <motion.div
                    className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500 to-rose-500"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />

                <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div
                        className="w-full lg:w-6/12 relative aspect-video lg:aspect-[5/4] overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 cursor-zoom-in group/image-container"
                        onClick={openLightbox}
                    >
                        {project.images.length > 0 ? (
                            <div className="relative w-full h-full">
                                {/* Enhanced Image with Hover Effects */}
                                <motion.div
                                    className="relative w-full h-full flex items-center justify-center" // Added flex for centering
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={project.images[currentImageIndex]}
                                        alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                        fill={true} // Use fill for responsiveness
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-contain p-4 transition-all duration-500 ease-in-out transform group-hover/image-container:scale-[1.02]"
                                        style={{
                                            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))',
                                            willChange: 'transform, filter',
                                        }}
                                        priority={index < 2} // Keep priority for initial load, consider not using for all
                                        quality={90} // Optimize quality
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            openLightbox();
                                        }}
                                    />
                                </motion.div>

                                {/* Enhanced Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Image counter */}
                                {project.images.length > 1 && (
                                    <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
                                        {currentImageIndex + 1} / {project.images.length}
                                    </div>
                                )}

                                {/* Navigation Controls for Project Card */}
                                {project.images.length > 1 && (
                                    <>
                                        <motion.button
                                            onClick={handlePrevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 text-slate-800 rounded-full shadow-lg hover:bg-white transition-all z-10 opacity-0 group-hover/image-container:opacity-100 duration-300"
                                            aria-label="Previous image"
                                            whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.15)' }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FiChevronLeft className="w-5 h-5" />
                                        </motion.button>
                                        <motion.button
                                            onClick={handleNextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 text-slate-800 rounded-full shadow-lg hover:bg-white transition-all z-10 opacity-0 group-hover/image-container:opacity-100 duration-300"
                                            aria-label="Next image"
                                            whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.15)' }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FiChevronRight className="w-5 h-5" />
                                        </motion.button>

                                        {/* Dots indicator */}
                                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover/image-container:opacity-100 duration-300">
                                            {project.images.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCurrentImageIndex(i);
                                                    }}
                                                    className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                                                    aria-label={`View image ${i + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className={`w-full h-full flex items-center justify-center ${project.color} bg-opacity-5`}>
                                <div className="text-center p-6">
                                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center text-amber-500">
                                        <FiImage className="w-8 h-8" />
                                    </div>
                                    <p className="text-slate-500 font-medium">Project Preview</p>
                                    <p className="text-sm text-slate-400 mt-1">No images available</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-6/12 p-6 md:p-8 flex flex-col">
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                                {project.title}
                            </h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full mb-3"></div>
                        </div>

                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, i) => (
                                <motion.span
                                    key={i}
                                    className="px-3 py-1.5 bg-amber-50 text-amber-700 text-xs font-medium rounded-full border border-amber-100 hover:bg-amber-100 transition-colors"
                                    whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(249, 115, 22, 0.2)' }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>

                        <div className="mt-auto pt-4 flex flex-wrap gap-3 border-t border-slate-100">
                            {project.githubLink && (
                                <motion.a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn flex items-center gap-2 px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-800 rounded-xl font-medium transition-all duration-300 border border-slate-200"
                                    whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FiGithub className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
                                    <span className="text-sm font-medium">View Code</span>
                                </motion.a>
                            )}

                            {project.liveLink ? (
                                <motion.a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white rounded-xl font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                                    whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FiExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                                    <span className="text-sm font-medium">Live Demo</span>
                                                </motion.a>
                            ) : (
                                <motion.span
                                    className="px-4 py-2.5 text-xs text-slate-400 flex items-center bg-slate-50 rounded-xl"
                                    whileHover={{ y: -2 }}
                                >
                                    Demo coming soon
                                </motion.span>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

const Projects = () => {
    return (
        <SectionContainer id="projects" className="bg-amber-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-rose-700 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default Projects;