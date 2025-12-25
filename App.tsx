
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { content } from './constants';
import { ArrowUp } from 'lucide-react';

export type Language = 'en' | 'fr';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const data = content[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-accent selection:text-white">
      <Navbar language={language} setLanguage={setLanguage} ui={data.ui} />
      <main>
        <Hero data={data.personalInfo} ui={data.ui.hero} />
        <About data={data.personalInfo} ui={data.ui.about} />
        <Experience experiences={data.experiences} ui={data.ui.experience} />
        <Skills categories={data.skillCategories} ui={data.ui.skills} />
        <Projects projects={data.projects} ui={data.ui.projects} />
        <Education education={data.education} ui={data.ui.education} />
      </main>
      <Contact contactInfo={data.contactInfo} ui={data.ui.contact} personalInfo={data.personalInfo} />

      {/* Back To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-accent transition-all duration-300 z-40 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;
