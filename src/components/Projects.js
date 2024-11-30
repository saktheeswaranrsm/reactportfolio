import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Echo - AI Code Editor',
      description: 'Web-based code editor integrated with AI capabilities',
      technologies: ['React', 'Python', 'AI Integration']
    },
    {
      title: 'Taxi Booking Application',
      description: 'Full-stack web application for taxi booking services',
      technologies: ['Django', 'React', 'PostgreSQL']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;