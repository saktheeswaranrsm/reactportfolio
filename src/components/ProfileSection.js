import React from 'react';
import profileImage from '../assets/profile-image.jpg'; // Create this path to your image

const ProfileSection = () => {
  const socialLinks = [
    {
      icon: 'fab fa-github',
      link: 'https://github.com/saktheeswaranrsm',
      label: 'GitHub'
    },
    {
      icon: 'fab fa-linkedin',
      link: 'https://linkedin.com/in/saktheeswaran-rsm-9997a2319/',
      label: 'LinkedIn'
    },
    {
      icon: 'fab fa-instagram',
      link: 'https://www.instagram.com/sathya.rsm',
      label: 'Instagram'
    }
  ];

  return (
    <section className="bg-gradient-dark text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Profile Image */}
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src={profileImage} 
              alt="Saktheeswaran RSM" 
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Profile Content */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Saktheeswaran RSM
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Software Developer
            </h2>
            <p className="text-base md:text-lg text-gray-200 mb-8">
              Enthusiastic developer with a background in web technologies, 
              passionate about building secure, user-centered applications 
              and advancing skills in cybersecurity.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-white hover:text-gray-300 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;