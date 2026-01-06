//changement repository Vercel
// import React, { useState, useEffect } from 'react';
// import { ArrowDown, Download, Mail, ChevronRight } from 'lucide-react';
// import { AppContent, UIContent } from '../types';
// import ScrollReveal from './ScrollReveal';

// interface HeroProps {
  // data: AppContent['personalInfo'];
  // ui: UIContent['hero'];
// }

// const Hero: React.FC<HeroProps> = ({ data, ui }) => {
  // const [text, setText] = useState('');
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [loopNum, setLoopNum] = useState(0);
  // const [typingSpeed, setTypingSpeed] = useState(150);

  // const roles = ui.roles;

  // useEffect(() => {
    // const handleTyping = () => {
      // const i = loopNum % roles.length;
      // const fullText = roles[i];

      // setText(isDeleting 
        // ? fullText.substring(0, text.length - 1) 
        // : fullText.substring(0, text.length + 1)
      // );

      // setTypingSpeed(isDeleting ? 30 : 100);

      // if (!isDeleting && text === fullText) {
        // setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      // } else if (isDeleting && text === '') {
        // setIsDeleting(false);
        // setLoopNum(loopNum + 1);
      // }
    // };

    // const timer = setTimeout(handleTyping, typingSpeed);
    // return () => clearTimeout(timer);
  // }, [text, isDeleting, loopNum, roles, typingSpeed]);

  // const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // e.preventDefault();
    // const element = document.getElementById(id);
    // if (element) {
      // element.scrollIntoView({ behavior: 'smooth' });
    // }
  // };

  // return (
    // <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
      // {/* Aerial Gradient Background */}
      // <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#34495e] to-primary z-0"></div>
      
      // {/* Decorative Circles (Clouds/Atmosphere) */}
      // <div className="absolute top-20 left-10 w-72 h-72 bg-accent opacity-10 rounded-full blur-3xl animate-pulse"></div>
      // <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      // {/* Grid Pattern overlay */}
      // <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none"></div>
      
      // {/* Content */}
      // <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        // <ScrollReveal>
            // <div className="w-32 h-32 md:w-48 md:h-48 rounded-full p-2 mb-8 shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10 mx-auto">
                // <div className="w-full h-full rounded-full overflow-hidden border-4 border-accent shadow-inner">
                    // <img 
                        // src={data.heroImage} 
                        // alt={data.name} 
                        // onError={(e) => {
                            // const target = e.target as HTMLImageElement;
                            // target.onerror = null; 
                            // target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=1abc9c&color=fff&size=256`;
                        // }}
                        // className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    // />
                // </div>
            // </div>
        // </ScrollReveal>

        // <ScrollReveal delay={200}>
            // <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white drop-shadow-lg">
            // {data.name}
            // </h1>
        // </ScrollReveal>
        
        // <div className="flex items-center justify-center gap-3 mb-10 text-secondary text-lg md:text-2xl font-light h-10 tracking-wide">
             // <span className="text-slate-300">{data.title}</span>
             // <span className="hidden sm:inline w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#1abc9c]"></span>
             // <span className="text-accent font-semibold min-w-[10px]">
                // {text}
                // <span className="animate-blink border-r-2 border-accent ml-1"></span>
             // </span>
        // </div>
        
        // <ScrollReveal delay={400}>
            // <div className="flex flex-col sm:flex-row gap-5 w-full max-w-md justify-center">
            // <a 
                // href="#contact" 
                // onClick={(e) => scrollToSection(e, 'contact')}
                // className="px-8 py-4 bg-accent hover:bg-[#16a085] text-white rounded-full font-bold transition-all shadow-[0_10px_20px_-5px_rgba(26,188,156,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(26,188,156,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer"
            // >
                // <Mail size={20} />
                // {ui.contactBtn}
                // <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            // </a>
            // <a 
                // href="/resume.pdf" 
                // className="px-8 py-4 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-1"
                // onClick={(e) => { 
                    // e.preventDefault(); 
                    // alert("This would trigger the download of Ahmed Znouda's PDF Resume."); 
                // }}
            // >
                // <Download size={20} />
                // {ui.downloadBtn}
            // </a>
            // </div>
        // </ScrollReveal>
      // </div>

      // {/* Scroll Indicator */}
      // <div className="absolute bottom-10 animate-bounce flex flex-col items-center gap-2 text-white/50 hover:text-accent transition-colors cursor-pointer z-10" onClick={(e: any) => scrollToSection(e, 'about')}>
        // <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{ui.scroll}</span>
        // <div className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          // <ArrowDown size={18} />
        // </div>
      // </div>
    // </section>
  // );
// };

// export default Hero;


//changement repository Vercel
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
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Aerial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#34495e] to-primary z-0"></div>
      
      {/* Decorative Circles (Clouds/Atmosphere) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        <ScrollReveal>
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full p-2 mb-8 shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-accent shadow-inner">
                    <img 
                        src={data.heroImage} 
                        alt={data.name} 
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null; 
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=1abc9c&color=fff&size=256`;
                        }}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                </div>
            </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white drop-shadow-lg">
            {data.name}
            </h1>
        </ScrollReveal>
        
        <div className="flex items-center justify-center gap-3 mb-10 text-secondary text-lg md:text-2xl font-light h-10 tracking-wide">
             <span className="text-slate-300">{data.title}</span>
             <span className="hidden sm:inline w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#1abc9c]"></span>
             <span className="text-accent font-semibold min-w-[10px]">
                {text}
                <span className="animate-blink border-r-2 border-accent ml-1"></span>
             </span>
        </div>
        
        <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-5 w-full max-w-md justify-center">
            <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-8 py-4 bg-accent hover:bg-[#16a085] text-white rounded-full font-bold transition-all shadow-[0_10px_20px_-5px_rgba(26,188,156,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(26,188,156,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer"
            >
                <Mail size={20} />
                {ui.contactBtn}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
                href="/Ahmed_Znouda_CV.pdf"
                download="Ahmed_Znouda_CV.pdf"
                className="px-8 py-4 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-1"
            >
                <Download size={20} />
                {ui.downloadBtn}
            </a>
            </div>
        </ScrollReveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce flex flex-col items-center gap-2 text-white/50 hover:text-accent transition-colors cursor-pointer z-10" onClick={(e: any) => scrollToSection(e, 'about')}>
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{ui.scroll}</span>
        <div className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <ArrowDown size={18} />
        </div>
      </div>
    </section>
  );
};

export default Hero;