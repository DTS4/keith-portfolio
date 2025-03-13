import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript'],
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'PostgreSQL'],
    },
    {
      title: 'Design Tools',
      skills: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Sketch'],
    },
    {
      title: 'Other Skills',
      skills: ['Git', 'Responsive Design', 'UI/UX Design', 'SEO', 'Agile'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center bg-gray-50 p-2 rounded"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;