import React from 'react';
import { CodeIcon, ShieldIcon, TargetIcon, TrendingUpIcon } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-8 bg-white/70 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-2 border border-gray-100">
      <div className="flex justify-center mb-4">
        {Icon && <Icon className="w-12 h-12 text-black mb-4" />}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  const aboutCards = [
    {
      icon: CodeIcon,
      title: 'Developer Journey',
      description: 'Passionate about creating efficient, user-centered applications that enhance digital experiences. Specializing in modern frameworks and scalable solutions.'
    },
    {
      icon: ShieldIcon,
      title: 'Security Focus',
      description: 'Actively pursuing cybersecurity and ethical hacking, with a keen interest in understanding system vulnerabilities and defense mechanisms.'
    },
    {
      icon: TargetIcon,
      title: 'Mission',
      description: 'Building bridges between development and security, creating applications that are both innovative and secure.'
    },
    {
      icon: TrendingUpIcon,
      title: 'Growth',
      description: 'Continuously expanding expertise in both development and security domains, embracing new challenges and technologies.'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aboutCards.map((card, index) => (
          <AboutCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;