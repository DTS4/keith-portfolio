import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Hi, I'm Keith Githinji
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Full Stack Developer & Digital Creative
            </p>
            <p className="text-gray-600 mb-8 max-w-lg">
              Crafting digital experiences through code and creativity. 
              Founder of Spark Synapse, specializing in web design and digital branding.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/DTS4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/keith-githinji-bb7b07242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:keithgithinji@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-start">
            <img
              src="https://res.cloudinary.com/dulnfomcr/image/upload/v1741880955/Photo_braehn.jpg"
              alt="Keith Githinji"
              className="rounded-2xl shadow-2xl w-96 h-auto object-cover -ml-8"
              style={{ height: '37rem' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;