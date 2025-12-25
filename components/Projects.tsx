
import React, { useState } from 'react';
import { Github, ExternalLink, Smartphone, Monitor, Globe } from 'lucide-react';
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
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal width="100%">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{ui.title}</h2>
                <p className="text-slate-500 mt-3 text-lg">{ui.subtitle}</p>
            </div>
        </ScrollReveal>

        {/* Smart Filter Tabs */}
        <div className="flex justify-center mb-12 flex-wrap gap-2">
            {[
                { id: 'all', label: ui.filters.all, icon: null },
                { id: 'Mobile', label: ui.filters.mobile, icon: <Smartphone size={16} /> },
                { id: 'Web', label: ui.filters.web, icon: <Globe size={16} /> },
                { id: 'Desktop', label: ui.filters.desktop, icon: <Monitor size={16} /> }
            ].map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setFilter(tab.id as any)}
                    className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all flex items-center gap-2 ${
                        filter === tab.id 
                        ? 'bg-accent text-white shadow-lg shadow-sky-500/30' 
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                >
                    {tab.icon}
                    {tab.label}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} width="100%" delay={idx * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-slate-200 hover:border-sky-200">
                <div className="relative h-56 overflow-hidden bg-slate-200">
                    <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                        {project.type === 'Mobile' ? <Smartphone size={12} /> : project.type === 'Web' ? <Globe size={12} /> : <Monitor size={12} />}
                        {project.type}
                    </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{project.description}</p>
                    
                    <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                        <span key={i} className="text-xs font-semibold px-3 py-1 bg-sky-50 text-sky-700 rounded-full border border-sky-100">
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>

                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                    <a 
                        href="#" 
                        className="flex-1 py-2.5 rounded-lg bg-slate-800 text-white flex items-center justify-center gap-2 text-sm font-semibold hover:bg-slate-700 transition-colors"
                        onClick={(e) => { e.preventDefault(); alert(`Navigating to ${project.title} Source Code (Placeholder)`); }}
                    >
                        <Github size={18} />
                        {ui.sourceBtn}
                    </a>
                    <a 
                        href="#" 
                        className="flex-1 py-2.5 rounded-lg bg-accent text-white flex items-center justify-center gap-2 text-sm font-semibold hover:bg-sky-400 transition-colors"
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
             <div className="text-center text-slate-400 py-12">
                No projects found in this category.
             </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
