import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SendIT',
      description: 'A parcel delivery application that allows users to send and track their packages in real-time.',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=500',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Church Posters',
      description: 'Collection of modern and engaging church event posters designed with attention to typography and visual hierarchy.',
      image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=500',
      tags: ['Photoshop', 'Illustrator', 'Typography'],
      links: {
        demo: '#',
      },
    },
    {
      title: 'Web Design Portfolio',
      description: 'Showcase of responsive and modern website designs created for various clients and industries.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=500',
      tags: ['Web Design', 'UI/UX', 'Responsive'],
      links: {
        demo: '#',
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="flex items-center text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="flex items-center text-gray-600 hover:text-gray-700"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;