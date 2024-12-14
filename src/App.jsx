import React from 'react';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero.jsx';
import About from './components/About';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
