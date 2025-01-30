import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          About Me
        </h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform">
          <p className="text-lg text-gray-700 leading-relaxed">
            I am deeply fascinated by the way programming seamlessly bridges creativity and logic,
            allowing endless possibilities for innovation. My journey started with the basics of
            HTML and CSS, where I discovered the joy of crafting visually appealing designs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Gradually, I advanced to building dynamic and interactive websites using JavaScript,
            which opened the door to solving complex challenges and enhancing user experiences.
            Beyond web development, I am passionate about diving into the intricacies of computer
            science, exploring advanced topics like Data Structures and Algorithms in C++.
          </p>
        </div>
      </div>
    </section>
  );
}