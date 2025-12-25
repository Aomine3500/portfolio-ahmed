
import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Experience as ExperienceType, UIContent } from '../types';
import ScrollReveal from './ScrollReveal';

interface ExperienceProps {
  experiences: ExperienceType[];
  ui: UIContent['experience'];
}

const Experience: React.FC<ExperienceProps> = ({ experiences, ui }) => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal width="100%">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{ui.title}</h2>
            <p className="text-slate-500 mt-3 text-lg">{ui.subtitle}</p>
            </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 md:pl-12 group">
                {/* Timeline Dot */}
                <div className={`absolute -left-[9px] md:-left-[11px] top-2 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 bg-white transition-colors duration-300 z-10 ${exp.isCurrent ? 'border-accent' : 'border-slate-300 group-hover:border-accent'}`}></div>
                
                <ScrollReveal width="100%" delay={index * 100}>
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group-hover:border-sky-100 relative overflow-hidden">
                    {exp.isCurrent && <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full -mr-8 -mt-8"></div>}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 relative z-10">
                        <div>
                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 flex-wrap">
                            {exp.role}
                            {exp.isCurrent && (
                            <span className="bg-sky-50 text-accent text-xs font-semibold px-2.5 py-0.5 rounded-full border border-sky-100">{ui.currentBadge}</span>
                            )}
                        </h3>
                        <h4 className="text-lg text-slate-600 font-medium mt-1">{exp.company}</h4>
                        </div>
                        <div className="flex flex-col items-start md:items-end mt-3 md:mt-0 text-sm text-slate-500 space-y-1 font-medium">
                        <div className="flex items-center gap-1.5">
                            <Calendar size={16} className="text-accent" />
                            <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin size={16} className="text-accent" />
                            <span>{exp.location}</span>
                        </div>
                        </div>
                    </div>
                    
                    <ul className="space-y-2 text-slate-600 leading-relaxed relative z-10">
                        {exp.description.map((desc, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
                            <span>{desc}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
