'use client';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Traffic Analysis System (TASS)",
      description: "A real-time traffic route optimization system for Bangalore that uses machine learning to analyze traffic patterns and suggest the fastest routes, reducing average travel time by 23% during peak hours.",
      tech: ["React", "FastAPI", "Machine Learning", "Google Maps API", "NetworkX"],
      image: "/tass-1.png",
      githubLink: "https://github.com/Venkateshtammina/TASS"
    },
    {
      id: 2,
      title: "MedTrack",
      description: "Comprehensive medicine inventory management system with expiry alerts, helping pharmacies reduce waste by 40% through timely notifications and efficient stock management.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT Authentication"],
      image: "/medtrack.png",
      githubLink: "https://github.com/Venkateshtammina/MedTrack-frontend",
      liveLink: "https://medtrack-frontend.onrender.com"
    },
    {
      id: 3,
      title: "SmartHome IoT",
      description: "IoT-based home automation system that monitors environmental conditions in real-time, with remote control capabilities and automated alerts for temperature and humidity changes.",
      tech: ["ESP32", "MicroPython", "WebSocket", "React Dashboard"]
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-4xl font-bold text-gray-400 mr-6">{project.id}.</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4">
                    {project.image && (
                      <a 
                        href={project.image} 
                        className="flex items-center text-blue-600 hover:underline"
                      >
                        <span>View Image</span>
                        <FiExternalLink className="ml-1 w-4 h-4" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        className="flex items-center text-gray-700 hover:underline"
                      >
                        <FiGithub className="mr-1 w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        className="flex items-center text-green-600 hover:underline"
                      >
                        <FiExternalLink className="mr-1 w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;