
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-slate-100' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Modern Logo */}
        <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 group cursor-pointer select-none"
        >
          <div className="relative w-9 h-9 flex items-center justify-center">
             {/* Geometric Icon */}
             <div className={`absolute inset-0 border-2 rounded-sm transform rotate-45 transition-all duration-500 group-hover:rotate-90 group-hover:scale-110 ${scrolled ? 'border-slate-800' : 'border-white'}`}></div>
             <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(14,165,233,0.6)]"></div>
          </div>
          
          {/* Typographic Name */}
          <div className="flex flex-col justify-center">
             <span className={`font-bold text-xl leading-none tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                Ahmed
             </span>
             <span className={`text-[0.6rem] uppercase tracking-[0.3em] font-medium leading-none mt-1 pl-0.5 ${scrolled ? 'text-slate-500' : 'text-slate-300'}`}>
                Znouda
             </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {ui.nav.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium transition-all duration-200 relative group cursor-pointer ${
                activeSection === link.id 
                  ? 'text-accent' 
                  : scrolled ? 'text-slate-600 hover:text-accent' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${activeSection === link.id ? 'w-full' : ''}`}></span>
            </a>
          ))}
          
          {/* Language Toggle Desktop */}
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full border transition-all ${
                scrolled 
                    ? 'border-slate-200 text-slate-600 hover:bg-slate-100' 
                    : 'border-white/20 text-white hover:bg-white/10'
            }`}
          >
            <Globe size={14} />
            <span>{language === 'en' ? 'FR' : 'EN'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none transition-colors ${scrolled ? 'text-slate-800' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className="text-accent" /> : <Menu size={28} />} 
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-2 border-t border-slate-100 animate-fade-in-down">
          {ui.nav.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-slate-700 hover:text-accent hover:bg-slate-50 font-medium block p-3 rounded-lg transition-colors cursor-pointer ${activeSection === link.id ? 'bg-slate-50 text-accent' : ''}`}
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="border-t border-slate-100 pt-2 mt-2">
              <button 
                onClick={toggleLanguage}
                className="flex items-center justify-center w-full gap-2 text-slate-700 font-semibold p-3 rounded-lg hover:bg-slate-50"
              >
                <Globe size={18} />
                {language === 'en' ? 'Switch to French' : 'Passer en Anglais'}
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
