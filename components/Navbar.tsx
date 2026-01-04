
import React from 'react';
import { AppSection } from '../types';

interface NavbarProps {
  currentSection: AppSection;
  onNavigate: (section: AppSection) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate }) => {
  // Use all enum values for navigation links
  const sections = Object.values(AppSection);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-zinc-900/50">
      <div 
        className="cursor-pointer group"
        onClick={() => onNavigate(AppSection.Home)}
      >
        <h1 className="text-lg font-serif tracking-widest uppercase text-white">
          A. <span className="font-bold">Trocado</span>
        </h1>
      </div>
      
      <div className="hidden lg:flex space-x-10 text-[10px] uppercase tracking-[0.25em] font-medium">
        {/* Skip the first element (Home) as it's typically tied to the logo/brand name */}
        {sections.slice(1).map((section) => (
          <button
            key={section}
            onClick={() => onNavigate(section)}
            className={`hover:text-white transition-colors duration-300 relative group ${
              currentSection === section ? 'text-white' : 'text-zinc-500'
            }`}
          >
            {section}
            <span className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ${
              currentSection === section ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </button>
        ))}
      </div>
    </nav>
  );
};
