import React from 'react';
import { Code2, Brain, Layout, Terminal } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: Layout,
    items: ["HTML", "CSS", "JavaScript"]
  },
  {
    category: "Programming",
    icon: Code2,
    items: ["C++", "Problem Solving"]
  },
  {
    category: "Computer Science",
    icon: Brain,
    items: ["Data Structures", "Algorithms"]
  },
  {
    category: "Tools & Technologies",
    icon: Terminal,
    items: ["Git", "VS Code", "Command Line"]
  }
];

export function Skills() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                <skill.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600 text-center">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}