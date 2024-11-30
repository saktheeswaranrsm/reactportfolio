import React from 'react';

function Skills() {
  const skills = [
    'Python', 'JavaScript', 'React', 
    'Django', 'HTML/CSS', 'Tailwind CSS',
    'Git', 'PostgreSQL', 'Ethical Hacking'
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-gray-100 p-4 rounded-lg text-center hover:bg-gray-200 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;