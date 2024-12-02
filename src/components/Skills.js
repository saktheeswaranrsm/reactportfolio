import React from 'react';

const SkillsList = () => {
  const technicalSkills = {
    'Programming Languages': [
      'Python', 
      'JavaScript', 
      'HTML5/CSS3'
    ],
    'Frameworks & Libraries': [
      'Ember.js', 
      'Django'
    ],
    'Tools & Technologies': [
      'Git', 
      'PostgreSQL', 
      'RESTful APIs'
    ],
    'Specialized Skills': [
      'Ethical Hacking',
      'Web Security'
    ]
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Technical Skills...</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(technicalSkills).map(([category, skills]) => (
          <div 
            key={category} 
            className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
              {category}
            </h3>
            <ul className="space-y-2">
              {skills.map((skill, index) => (
                <li 
                  key={index} 
                  className="relative pl-6 text-gray-700 hover:text-black transition-colors"
                >
                  <span className="absolute left-0 top-1 text-black opacity-70">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsList;