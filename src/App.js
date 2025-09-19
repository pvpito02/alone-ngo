import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Goals from './components/Goals';
import Stats from './components/Stats';
import Causes from './components/Causes';
import About from './components/About';
import Shop from './components/Shop';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Partners from './components/Partners';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Mission />
      <Goals />
      <Stats />
      <Causes />
      <About />
      <Shop />
      <Partners />
      <Events />
      <Testimonials />
      <News />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;