
import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { PublicationGrid } from './components/PublicationGrid.tsx';
import { AppsView } from './components/AppsView.tsx';
import { AppSection } from './types.ts';
import { Mail } from 'lucide-react';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>(AppSection.Home);

  const navigateTo = (section: AppSection) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar currentSection={currentSection} onNavigate={navigateTo} />
      
      {currentSection === AppSection.Home && (
        <main className="animate-fade-in">
          <Hero onExplore={() => navigateTo(AppSection.Publications)} />
          
          <section className="py-40 px-8 max-w-7xl mx-auto text-center space-y-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-600">Academic Vision</span>
            <h2 className="text-3xl md:text-5xl font-serif italic max-w-3xl mx-auto leading-relaxed text-zinc-300">
              "Exploring the frontiers between computational algebra and mathematics education."
            </h2>
            <div className="flex justify-center gap-12">
               <div className="text-center">
                 <div className="text-3xl font-serif mb-2">15+</div>
                 <div className="text-[9px] uppercase tracking-widest text-zinc-500">Publications</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-serif mb-2">500+</div>
                 <div className="text-[9px] uppercase tracking-widest text-zinc-500">Dynamic Materials</div>
               </div>
            </div>
          </section>
        </main>
      )}

      {currentSection === AppSection.Publications && (
        <main className="pt-20 animate-fade-in bg-black">
          <PublicationGrid />
        </main>
      )}

      {currentSection === AppSection.Apps && (
        <main className="pt-20 animate-fade-in bg-black">
          <AppsView />
        </main>
      )}

      {currentSection === AppSection.Contact && (
        <main className="pt-60 pb-40 px-8 max-w-7xl mx-auto animate-fade-in bg-black flex items-center justify-center">
          <div className="max-w-2xl text-center space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-600">Get in touch</span>
              <h2 className="text-6xl md:text-8xl font-serif text-white">Contact</h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-xl mx-auto">
                For inquiries about research, speaking engagements, or educational projects.
              </p>
            </div>
            
            <div className="pt-8 flex justify-center">
              <a 
                href="mailto:mail@alexandretrocado.com"
                className="group flex flex-col items-center space-y-6 text-zinc-500 hover:text-white transition-all duration-500"
              >
                <div className="w-20 h-20 border border-zinc-900 rounded-full flex items-center justify-center group-hover:border-white group-hover:scale-110 transition-all duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="block text-[10px] tracking-[0.3em] uppercase text-zinc-700 group-hover:text-zinc-500 transition-colors">Direct Email</span>
                  <span className="text-lg tracking-widest font-light">mail@alexandretrocado.com</span>
                </div>
              </a>
            </div>
          </div>
        </main>
      )}

      <footer className="py-24 border-t border-zinc-900/50 mt-20 px-8 text-center bg-black">
        <p className="text-[9px] tracking-[0.5em] uppercase text-zinc-700">
          &copy; {new Date().getFullYear()} Alexandre Trocado &mdash; Algebra & Research
        </p>
      </footer>
    </div>
  );
};

export default App;
