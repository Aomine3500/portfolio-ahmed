
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { UIContent } from '../types';
import { Language } from '../App';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  ui: UIContent;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, ui }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-aerial py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 group cursor-pointer select-none"
        >
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center transform rotate-3 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-accent/40">
             <span className="text-white font-bold text-xl">A</span>
          </div>
          
          <div className="flex flex-col justify-center">
             <span className={`font-bold text-xl leading-none tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
                Ahmed<span className="text-accent">.</span>
             </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {ui.nav.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium transition-all duration-200 relative group cursor-pointer tracking-wide ${
                activeSection === link.id 
                  ? 'text-accent' 
                  : scrolled ? 'text-secondary hover:text-accent' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0 ${activeSection === link.id ? 'w-full left-0' : ''}`}></span>
            </a>
          ))}
          
          {/* Language Toggle Desktop */}
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full border-2 transition-all uppercase tracking-wider ${
                scrolled 
                    ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                    : 'border-white/30 text-white hover:bg-white/20'
            }`}
          >
            <Globe size={14} />
            <span>{language === 'en' ? 'FR' : 'EN'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className="text-accent" /> : <Menu size={28} />} 
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-aerial py-6 px-6 flex flex-col space-y-3 border-t border-slate-100 animate-fade-in-down rounded-b-3xl">
          {ui.nav.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-secondary hover:text-accent hover:bg-surface font-medium block p-4 rounded-xl transition-colors cursor-pointer ${activeSection === link.id ? 'bg-surface text-accent' : ''}`}
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-2">
              <button 
                onClick={toggleLanguage}
                className="flex items-center justify-center w-full gap-2 text-white bg-primary font-semibold p-4 rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/30"
              >
                <Globe size={18} />
                {language === 'en' ? 'Passer en Français' : 'Switch to English'}
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
