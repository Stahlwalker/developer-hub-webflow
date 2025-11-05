import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Documentation } from './components/Documentation';
import { APIPlayground } from './components/APIPlayground';
import { Examples } from './components/Examples';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Documentation />
        <APIPlayground />
        <Examples />
      </main>
      <Footer />
    </div>
  );
}

export default App;
