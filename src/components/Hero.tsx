import React from 'react';
import { Github, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Angshu Karmakar
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed">
          A passionate Class XI student with a keen interest in Computer Science,
          specializing in web development and problem solving.
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/AngshuCode" className="text-white hover:text-blue-200 transition-colors">
            <Github size={28} />
          </a>
          <a href="mailto:monskyspeed@gamil.com" className="text-white hover:text-blue-200 transition-colors">
            <Mail size={28} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-white hover:text-blue-200 transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
}