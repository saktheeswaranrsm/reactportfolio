import React from 'react';
import ProfileSection from './ProfileSection';
import AboutPreview from '../components/AboutPreview';
import SkillsPreview from '../components/SkillsPreview';

function Home() {
  return (
    <div>
      <ProfileSection />
      <AboutPreview />
      <SkillsPreview />
    </div>
  );
}

export default Home;