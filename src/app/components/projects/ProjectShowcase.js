'use client';

import ProjectCard from './ProjectCard';

const ProjectShowcase = ({ projects }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.number} 
          project={project} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default ProjectShowcase;