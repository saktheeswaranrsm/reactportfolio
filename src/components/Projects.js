import React, { useState } from 'react';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Echo - AI Code Editor',
      description: 'Web-based code editor integrated with AI capabilities',
      technologies: ['React', 'Python', 'AI Integration'],
      fullDescription: 'A cutting-edge web-based code editor that leverages AI to provide intelligent code suggestions, error detection, and auto-completion across multiple programming languages. The project focuses on creating an intuitive coding environment with real-time AI assistance, helping developers write more efficient and error-free code.'
    },
    {
      title: 'Taxi Booking Application',
      description: 'Full-stack web application for taxi booking services',
      technologies: ['Django', 'React', 'PostgreSQL'],
      fullDescription: 'A comprehensive taxi booking platform that enables users to book rides, track vehicle location, and manage their transportation needs with real-time updates. The application features a robust backend with Django, a responsive React frontend, and seamless integration with PostgreSQL for efficient data management and user experience.'
    },
      {
      title: 'Dr. Soul Spark',
      description: 'Emotion-based quote generator for mental health support',
      technologies: ['Python', 'DeepFace', 'OpenCV', 'React'],
      fullDescription: 'Dr. Soul Spark is a project designed to help individuals cope with depression by detecting emotions using facial recognition and providing uplifting, contextually relevant quotes. The application integrates DeepFace for facial emotion recognition, Python for backend logic, and React for an engaging user interface. It emphasizes personalization, ease of use, and broad accessibility.'
    }
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Projects...</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition group"
          >
            <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
            
            <p className="mb-4 text-gray-600">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <button
              onClick={() => openProjectModal(project)}
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button 
                onClick={closeModal}
                className="text-gray-600 hover:text-black"
              >
                ✕
              </button>
            </div>
            
            <p className="mb-4 text-gray-700">{selectedProject.fullDescription}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
           
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
