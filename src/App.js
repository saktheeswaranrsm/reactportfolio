import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-white text-gray-900">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Profile Section */}
          <ProfileSection />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <Projects />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;