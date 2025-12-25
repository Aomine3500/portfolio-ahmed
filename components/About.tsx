
import React from 'react';
import { Code2, Database, Layout } from 'lucide-react';
import { AppContent, UIContent } from '../types';
import ScrollReveal from './ScrollReveal';

interface AboutProps {
  data: AppContent['personalInfo'];
  ui: UIContent['about'];
}

const About: React.FC<AboutProps> = ({ data, ui }) => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal width="100%">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{ui.title}</h2>
                <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal width="100%" delay={200}>
            <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm mb-12">
                <p className="text-lg text-slate-600 leading-relaxed text-center">
                    {data.about}
                </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal width="100%" delay={300}>
                <div className="h-full p-6 rounded-xl bg-white border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300 group text-center">
                    <div className="w-14 h-14 mx-auto bg-sky-50 rounded-full flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                        <Layout size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{ui.cards.frontend.title}</h3>
                    <p className="text-slate-500 text-sm">{ui.cards.frontend.desc}</p>
                </div>
            </ScrollReveal>
            
            <ScrollReveal width="100%" delay={400}>
                <div className="h-full p-6 rounded-xl bg-white border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300 group text-center">
                    <div className="w-14 h-14 mx-auto bg-sky-50 rounded-full flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                        <Database size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{ui.cards.backend.title}</h3>
                    <p className="text-slate-500 text-sm">{ui.cards.backend.desc}</p>
                </div>
            </ScrollReveal>

            <ScrollReveal width="100%" delay={500}>
                <div className="h-full p-6 rounded-xl bg-white border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300 group text-center">
                    <div className="w-14 h-14 mx-auto bg-sky-50 rounded-full flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                        <Code2 size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{ui.cards.legacy.title}</h3>
                    <p className="text-slate-500 text-sm">{ui.cards.legacy.desc}</p>
                </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
