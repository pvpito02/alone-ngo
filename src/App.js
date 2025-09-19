// Importation de React et des composants nécessaires
import React from 'react';

// Importation des composants de l'application
import Header from './components/Header';        // En-tête du site
import Hero from './components/Hero';            // Section héro avec image de fond et message principal
import Mission from './components/Mission';      // Section décrivant la mission de l'ONG
import Goals from './components/Goals';          // Objectifs de l'organisation
import Stats from './components/Stats';          // Statistiques et réalisations
import Causes from './components/Causes';        // Causes soutenues par l'ONG
import About from './components/About';          // Section À propos
import Shop from './components/Shop';            // Boutique en ligne
import Events from './components/Events';        // Événements à venir
import Testimonials from './components/Testimonials'; // Témoignages
import News from './components/News';            // Dernières actualités
import Newsletter from './components/Newsletter'; // Formulaire d'inscription à la newsletter
import Footer from './components/Footer';        // Pied de page
import Partners from './components/Partners';    // Partenaires de l'organisation

/**
 * Composant principal de l'application
 * @returns {JSX.Element} L'application React
 */
function App() {
  return (
    <div className="App">
      {/* Structure principale de l'application avec l'ordre d'affichage des composants */}
      
      {/* En-tête du site avec navigation */}
      <Header />
      
      {/* Bannière principale */}
      <Hero />
      
      {/* Section Mission */}
      <Mission />
      
      {/* Section Objectifs */}
      <Goals />
      
      {/* Section Statistiques */}
      <Stats />
      
      {/* Section Causes */}
      <Causes />
      
      {/* Section À propos */}
      <About />
      
      {/* Boutique en ligne */}
      <Shop />
      
      {/* Section Partenaires */}
      <Partners />
      
      {/* Section Événements */}
      <Events />
      
      {/* Témoignages */}
      <Testimonials />
      
      {/* Dernières actualités */}
      <News />
      
      {/* Inscription à la newsletter */}
      <Newsletter />
      
      {/* Pied de page */}
      <Footer />
    </div>
  );
}

export default App;