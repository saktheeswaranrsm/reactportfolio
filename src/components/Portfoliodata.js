

import React from 'react';

const PortfolioData = () => {
  const portfolioInfo = {
    // Personal Information
    name: 'Saktheeswaran RSM',
    title: 'Software Developer',
    bio: 'Enthusiastic developer with a background in web technologies, passionate about building secure, user-centered applications and advancing skills in cybersecurity.',

    // Social Media Links
    socialLinks: {
      instagram: 'https://www.instagram.com/sathya.rsm',
      github: 'https://github.com/saktheeswaranrsm',
      linkedin: 'https://linkedin.com/in/saktheeswaran-rsm-9997a2319/'
    },

    // About Section - Restructured as cards
    aboutCards: [
      {
        icon: 'code',
        title: 'Developer Journey',
        description: 'Passionate about creating efficient, user-centered applications that enhance digital experiences. Specializing in modern frameworks and scalable solutions.'
      },
      {
        icon: 'shield',
        title: 'Security Focus',
        description: 'Actively pursuing cybersecurity and ethical hacking, with a keen interest in understanding system vulnerabilities and defense mechanisms.'
      },
      {
        icon: 'target',
        title: 'Mission',
        description: 'Building bridges between development and security, creating applications that are both innovative and secure.'
      },
      {
        icon: 'trending-up',
        title: 'Growth',
        description: 'Continuously expanding expertise in both development and security domains, embracing new challenges and technologies.'
      }
    ],

    // Technical Skills
    technicalSkills: [
      'Python', 'HTML5/CSS3', 'JavaScript',
      'Django/React.js', 'RESTful APIs',
      'SQLite3/PostgreSQL', 'Git',
      'Ethical Hacking'
    ],

    // Professional Highlights
    professionalHighlights: [
      'Developed a Taxibooking web applications using Django and React.js',
      'Created efficient API endpoints using Django REST Framework',
      'Integrated data visualization solutions using Chart.js',
    ],

    // Key Projects
    keyProjects: [
      'Echo - Built a web based code editor by integrated with AI capabilities',
      'Full-Stack Development - Built responsive web applications with Django and React.js',
    ],

    // Contact Information
    contact: {
      email: 'saktheeswaranrsm@gmail.com',
      phone: '+91 9566354449',
      location: 'INDIA'
    }
  };

  return (
    <div className="portfolio-data">
      {/* You can use this component to provide data to other components 
          or render some basic information */}
      <h1>{portfolioInfo.name}</h1>
      <h2>{portfolioInfo.title}</h2>
      <p>{portfolioInfo.bio}</p>
    </div>
  );
};

export default PortfolioData;