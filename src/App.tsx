import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import SparkSynapse from './components/SparkSynapse';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <SparkSynapse />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;