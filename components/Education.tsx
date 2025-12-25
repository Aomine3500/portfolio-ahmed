
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Education as EducationType, UIContent } from '../types';

interface EducationProps {
  education: EducationType[];
  ui: UIContent['education'];
}

const Education: React.FC<EducationProps> = ({ education, ui }) => {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{ui.title}</h2>
          <p className="text-slate-500 mt-3 text-lg">{ui.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="flex group relative">
              {/* Connector Line */}
              <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-slate-100 group-last:hidden"></div>

              <div className="mr-6 flex flex-col items-center z-10">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300 shadow-sm">
                    {edu.degree.includes('Certification') ? <Award size={20} /> : <GraduationCap size={20} />}
                </div>
              </div>
              
              <div className="pb-4 flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-accent transition-colors">{edu.degree}</h3>
                  <span className="text-sm text-accent font-semibold bg-sky-50 px-3 py-1 rounded-full w-fit mt-1 md:mt-0 border border-sky-100">{edu.period}</span>
                </div>
                <h4 className="text-base text-slate-600 mb-2 font-medium">{edu.institution}, {edu.location}</h4>
                {edu.details && (
                  <p className="text-sm text-slate-500 italic bg-slate-50 p-3 rounded-lg border border-slate-100 inline-block">{edu.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
