import React from 'react';
import { Palette, Globe, PenTool, Zap } from 'lucide-react';

const SparkSynapse = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Web Design',
      description: "Custom, responsive websites that capture your brand's essence.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-blue-600" />,
      title: 'Logo Design',
      description: "Memorable logos that tell your brand's story at a glance.",
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: 'Digital Branding',
      description: 'Comprehensive branding solutions for the digital age.',
    },
  ];

  return (
    <section id="spark-synapse" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <Zap className="w-10 h-10 text-blue-600" />
          <h2 className="text-3xl font-bold ml-3">Spark Synapse</h2>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-600">
            Igniting digital transformation through innovative design and development solutions.
            We help businesses establish a strong online presence with our comprehensive creative services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default SparkSynapse;