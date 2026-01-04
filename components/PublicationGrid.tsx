
import React, { useState } from 'react';
import { ACADEMIC_PUBLICATIONS } from '../constants.ts';
import { AcademicPublication } from '../types.ts';
import { FileText, ExternalLink, BookOpen, GraduationCap } from 'lucide-react';

export const PublicationGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AcademicPublication['category'] | 'All'>('All');

  const filtered = activeTab === 'All' 
    ? ACADEMIC_PUBLICATIONS 
    : ACADEMIC_PUBLICATIONS.filter(p => p.category === activeTab);

  const getIcon = (cat: string) => {
    switch(cat) {
      case 'Journal': return <FileText className="w-4 h-4" />;
      case 'Book': return <BookOpen className="w-4 h-4" />;
      case 'Course': return <GraduationCap className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-32 px-8 max-w-5xl mx-auto">
      <div className="mb-20 space-y-4">
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500">Academic Portfolio</span>
        <h2 className="text-5xl font-serif">Scientific Publications</h2>
      </div>

      <div className="flex space-x-6 mb-16 text-[10px] uppercase tracking-widest border-b border-zinc-900 pb-4 overflow-x-auto">
        {['All', 'Journal', 'Conference', 'Book', 'Course'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat as any)}
            className={`transition-colors whitespace-nowrap ${activeTab === cat ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
          >
            {cat === 'All' ? 'All' : cat === 'Journal' ? 'Journals' : cat === 'Conference' ? 'Conferences' : cat === 'Book' ? 'Books' : 'Resources'}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        {filtered.map((pub) => (
          <div key={pub.id} className="group border-l border-zinc-800 pl-8 py-2 hover:border-white transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-zinc-500 text-[10px] uppercase tracking-widest">
                  {getIcon(pub.category)}
                  <span>{pub.year}</span>
                  <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                  <span>{pub.category}</span>
                </div>
                
                <h3 className="text-xl font-serif text-zinc-200 group-hover:text-white transition-colors leading-snug">
                  {pub.title}
                </h3>
                
                <p className="text-sm text-zinc-500 font-light leading-relaxed">
                  <span className="text-zinc-400 font-medium">{pub.authors}</span>. 
                  <span className="italic"> {pub.journalOrVenue}</span>.
                </p>

                {(pub.doi || pub.url) && (
                  <a 
                    href={pub.doi ? `https://doi.org/${pub.doi}` : pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors pt-2"
                  >
                    {pub.doi ? `DOI: ${pub.doi}` : 'Access Document'}
                    <ExternalLink className="ml-2 w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
