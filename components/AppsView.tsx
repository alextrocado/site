
import { INTERACTIVE_APPS } from '../constants.ts';
import { Clock } from 'lucide-react';
import React from 'react';

export const AppsView: React.FC = () => {
  return (
    <section className="min-h-screen bg-black py-32 px-4 md:px-8">
      <div className="mb-24 space-y-4 text-center max-w-6xl mx-auto">
        <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-600">Learning Tools</span>
        <h2 className="text-5xl md:text-6xl font-serif text-white italic">Interactive Apps</h2>
      </div>

      <div className="space-y-48 max-w-7xl mx-auto">
        {INTERACTIVE_APPS.map((app) => (
          <div key={app.id} className="group space-y-10 flex flex-col items-center">
            <div className="w-full max-w-5xl flex items-center border-b border-zinc-900 pb-6">
              <div className="flex items-center space-x-4">
                <Clock className="w-5 h-5 text-zinc-500" />
                <h3 className="text-2xl md:text-3xl font-serif text-zinc-300 group-hover:text-white transition-colors duration-500">
                  {app.title}
                </h3>
              </div>
            </div>

            <div 
              className="relative bg-black border border-zinc-800 group-hover:border-zinc-500 transition-all duration-700 overflow-hidden rounded-sm flex items-center justify-center mx-auto"
              style={{ 
                width: '100%',
                maxWidth: `${app.width}px`,
                aspectRatio: `${app.width} / ${app.height}`
              }}
            >
              <iframe 
                scrolling="no" 
                title={app.title} 
                src={`https://www.geogebra.org/material/iframe/id/${app.geogebraId}/width/${app.width}/height/${app.height}/border/000000/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false`} 
                className="relative z-20 border-0 bg-black w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
