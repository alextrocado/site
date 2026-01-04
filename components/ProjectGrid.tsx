
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

export const ProjectGrid: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Landscape', 'Portrait', 'Documentary', 'Commercial'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
        <div className="space-y-4">
          <span className="text-xs tracking-widest uppercase text-gray-500">Selected Work</span>
          <h3 className="text-4xl md:text-5xl font-serif">Portfolio</h3>
        </div>
        
        <div className="flex space-x-6 text-xs tracking-widest uppercase overflow-x-auto pb-2 w-full md:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`whitespace-nowrap transition-colors ${filter === cat ? 'text-white border-b border-white' : 'text-gray-500 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="px-6 py-2 border border-white text-xs tracking-widest uppercase">View Series</span>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h4 className="text-lg font-serif">{project.title}</h4>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{project.location}</p>
              </div>
              <span className="text-[10px] text-gray-600 border border-zinc-800 px-2 py-1 rounded-full uppercase tracking-tighter">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
