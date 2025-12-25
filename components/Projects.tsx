
import React, { useState } from 'react';
import { Github, ExternalLink, Smartphone, Monitor, Globe, ImageOff } from 'lucide-react';
import { Project, UIContent } from '../types';
import ScrollReveal from './ScrollReveal';

interface ProjectsProps {
  projects: Project[];
  ui: UIContent['projects'];
}

const Projects: React.FC<ProjectsProps> = ({ projects, ui }) => {
  const [filter, setFilter] = useState<'all' | 'Mobile' | 'Web' | 'Desktop'>('all');

  const filteredProjects = projects.filter(p => filter === 'all' || p.type === filter);

  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal width="100%">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">{ui.title}</h2>
                <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4"></div>
                <p className="text-secondary text-lg">{ui.subtitle}</p>
            </div>
        </ScrollReveal>

        {/* Smart Filter Tabs */}
        <div className="flex justify-center mb-16 flex-wrap gap-3">
            {[
                { id: 'all', label: ui.filters.all, icon: null },
                { id: 'Mobile', label: ui.filters.mobile, icon: <Smartphone size={16} /> },
                { id: 'Web', label: ui.filters.web, icon: <Globe size={16} /> },
                { id: 'Desktop', label: ui.filters.desktop, icon: <Monitor size={16} /> }
            ].map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setFilter(tab.id as any)}
                    className={`px-8 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                        filter === tab.id 
                        ? 'bg-primary text-white shadow-lg shadow-primary/30 transform scale-105' 
                        : 'bg-white text-secondary hover:bg-slate-50 border border-slate-100'
                    }`}
                >
                    {tab.icon}
                    {tab.label}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} width="100%" delay={idx * 100}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-aerial hover:shadow-2xl transition-all duration-300 group flex flex-col h-full hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden bg-slate-100">
                    {project.image ? (
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.nextElementSibling?.classList.remove('hidden');
                            }}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    ) : null}
                     {/* Fallback element */}
                     <div className={`absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400 ${project.image ? 'hidden' : ''}`}>
                         <div className="flex flex-col items-center gap-2">
                            <ImageOff size={32} />
                            <span className="text-sm font-medium">No Image</span>
                         </div>
                    </div>

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5 shadow-lg z-10">
                        {project.type === 'Mobile' ? <Smartphone size={14} className="text-accent" /> : project.type === 'Web' ? <Globe size={14} className="text-accent" /> : <Monitor size={14} className="text-accent" />}
                        {project.type}
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-secondary mb-8 flex-grow leading-relaxed">{project.description}</p>
                    
                    <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                        <span key={i} className="text-xs font-bold px-3 py-1.5 bg-surface text-primary rounded-lg">
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>

                    <div className="flex items-center gap-4 mt-auto pt-8 border-t border-slate-50">
                    <a 
                        href="#" 
                        className="flex-1 py-3 rounded-xl bg-primary text-white flex items-center justify-center gap-2 text-sm font-bold hover:bg-[#34495e] transition-colors shadow-lg shadow-primary/20"
                        onClick={(e) => { e.preventDefault(); alert(`Navigating to ${project.title} Source Code (Placeholder)`); }}
                    >
                        <Github size={18} />
                        {ui.sourceBtn}
                    </a>
                    <a 
                        href="#" 
                        className="flex-1 py-3 rounded-xl border-2 border-accent text-accent flex items-center justify-center gap-2 text-sm font-bold hover:bg-accent hover:text-white transition-all"
                        onClick={(e) => { e.preventDefault(); alert(`Launching ${project.title} Demo (Placeholder)`); }}
                    >
                        <ExternalLink size={18} />
                        {ui.demoBtn}
                    </a>
                    </div>
                </div>
                </div>
            </ScrollReveal>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
             <div className="text-center text-secondary py-12">
                No projects found in this category.
             </div>
        )}
      </div>
    </section>
  );
};

export default Projects;