import React from 'react';
import { Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-6">
            <a href="https://github.com/AngshuCode" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:monskyspeed@gamil.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Angshu Karmakar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}