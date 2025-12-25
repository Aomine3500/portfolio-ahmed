
import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, ChevronRight } from 'lucide-react';
import { AppContent, UIContent } from '../types';
import ScrollReveal from './ScrollReveal';

interface HeroProps {
  data: AppContent['personalInfo'];
  ui: UIContent['hero'];
}

const Hero: React.FC<HeroProps> = ({ data, ui }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ui.roles;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center bg-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
         <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grad)" />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#0284c7', stopOpacity: 0.4 }} />
              </linearGradient>
            </defs>
         </svg>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        <ScrollReveal>
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-accent/30 p-1 mb-8 shadow-2xl backdrop-blur-sm mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent bg-slate-800">
                    <img 
                        src={data.heroImage} 
                        alt={data.name} 
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null; 
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=0ea5e9&color=fff&size=256`;
                        }}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
            {data.name}
            </h1>
        </ScrollReveal>
        
        <div className="flex items-center justify-center gap-3 mb-8 text-slate-300 text-lg md:text-2xl font-light h-10">
             <span>{data.title}</span>
             <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-accent"></span>
             <span className="text-accent font-medium min-w-[10px]">
                {text}
                <span className="animate-blink border-r-2 border-accent ml-1"></span>
             </span>
        </div>
        
        <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
            <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-8 py-4 bg-accent hover:bg-sky-400 text-white rounded-lg font-semibold transition-all shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 group cursor-pointer"
            >
                <Mail size={20} />
                {ui.contactBtn}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
                href="/resume.pdf" 
                className="px-8 py-4 bg-white/10 border border-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
                onClick={(e) => { 
                    e.preventDefault(); 
                    alert("This would trigger the download of Ahmed Znouda's PDF Resume."); 
                }}
            >
                <Download size={20} />
                {ui.downloadBtn}
            </a>
            </div>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce flex flex-col items-center gap-2 text-slate-400 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" onClick={(e: any) => scrollToSection(e, 'about')}>
        <span className="text-xs uppercase tracking-widest">{ui.scroll}</span>
        <div className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
