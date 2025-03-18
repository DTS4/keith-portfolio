import React from 'react';
import { GraduationCap, Code, Briefcase } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Moringa School',
      date: '2024 - 2025',
      description: 'Full Stack Development Program',
    },
    {
      icon: <Code size={24} />,
      title: 'Web Design',
      date: '2023',
      description: 'Designed and developed personal portfolios',
    },
    {
      icon: <Briefcase size={24} />,
      title: 'Founded Spark Synapse',
      date: '2024',
      description: 'Started digital design and branding agency',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {/* Timeline items */}
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full z-10">
                  <div className="text-blue-600">{item.icon}</div>
                </div>
                <div className="ml-8">
                  <div className="flex items-center">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="ml-4 text-sm text-gray-500">{item.date}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-gray-600">
            <p className="mb-4">
              I'm a passionate full-stack developer with a keen eye for design and a drive for innovation. 
              My journey in tech began at Moringa School, where I honed my development skills and discovered 
              my love for creating impactful digital solutions.
            </p>
            <p>
              Today, as the founder of Spark Synapse, I combine my technical expertise with creative vision 
              to deliver exceptional web experiences and digital branding solutions for clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;