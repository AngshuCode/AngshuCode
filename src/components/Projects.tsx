import React from 'react';
import { Github } from 'lucide-react';

export function Projects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Projects
        </h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Color Picker</h3>
            <p className="text-lg text-gray-700 text-center mb-6">
              A web application that helps users select and manage color palettes for their projects.
              Built with modern web technologies to provide an intuitive color selection experience.
            </p>
            <a 
              href="https://github.com/AngshuCode/Color-Picker"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}