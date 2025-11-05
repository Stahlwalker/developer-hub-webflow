import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { DeveloperProducts } from './components/DeveloperProducts';
import { Documentation } from './components/Documentation';
import { APIPlayground } from './components/APIPlayground';
import { Examples } from './components/Examples';
import { Integrations } from './components/Integrations';
import { Community } from './components/Community';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <DeveloperProducts />
        <Documentation />
        <APIPlayground />
        <Examples />
        <Integrations />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
