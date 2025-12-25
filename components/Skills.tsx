
import React, { useState } from 'react';
import { CheckCircle2, Search } from 'lucide-react';
import { SkillCategory, UIContent } from '../types';
import ScrollReveal from './ScrollReveal';

interface SkillsProps {
  categories: SkillCategory[];
  ui: UIContent['skills'];
}

const Skills: React.FC<SkillsProps> = ({ categories, ui }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.map(cat => ({
    ...cat,
    skills: cat.skills.filter(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal width="100%">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{ui.title}</h2>
                <p className="text-slate-500 mt-3 text-lg">{ui.subtitle}</p>
            </div>
        </ScrollReveal>

        {/* Smart Search */}
        <div className="max-w-md mx-auto mb-12 relative">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input 
                    type="text" 
                    placeholder={ui.searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all shadow-sm bg-slate-50 focus:bg-white"
                />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, idx) => (
            <ScrollReveal key={idx} width="100%" delay={idx * 100}>
                <div className="h-full bg-slate-50 p-8 rounded-2xl border border-transparent hover:border-accent/20 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <h3 className="text-xl font-bold text-slate-800 mb-6 pb-3 border-b border-slate-200 group-hover:border-accent/30 transition-colors">
                    {category.name}
                </h3>
                <ul className="space-y-3">
                    {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-center gap-3 text-slate-700 group-hover:text-slate-900">
                        <CheckCircle2 size={18} className="text-slate-300 group-hover:text-accent transition-colors" />
                        <span className="font-medium">
                            {skill.split(new RegExp(`(${searchTerm})`, 'gi')).map((part, i) => 
                                part.toLowerCase() === searchTerm.toLowerCase() && searchTerm !== '' ? <span key={i} className="bg-yellow-200 text-slate-900 rounded px-0.5">{part}</span> : part
                            )}
                        </span>
                    </li>
                    ))}
                </ul>
                </div>
            </ScrollReveal>
          ))}
        </div>
        
        {filteredCategories.length === 0 && (
            <div className="text-center text-slate-400 py-8">
                No skills found matching "{searchTerm}"
            </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
