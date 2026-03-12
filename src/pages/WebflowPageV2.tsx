import { V2Navigation } from '../components/webflow-v2/V2Navigation';
import { V2Hero } from '../components/webflow-v2/V2Hero';
import { V2DeveloperProducts } from '../components/webflow-v2/V2DeveloperProducts';
import { V2Documentation } from '../components/webflow-v2/V2Documentation';
import { V2APIPlayground } from '../components/webflow-v2/V2APIPlayground';
import { V2Examples } from '../components/webflow-v2/V2Examples';
import { V2Integrations } from '../components/webflow-v2/V2Integrations';
import { V2Community } from '../components/webflow-v2/V2Community';
import { V2Footer } from '../components/webflow-v2/V2Footer';

export function WebflowPageV2() {
  return (
    <div className="min-h-screen bg-white font-wf-body">
      <V2Navigation />
      <main>
        <V2Hero />
        <V2DeveloperProducts />
        <V2Documentation />
        <V2APIPlayground />
        <V2Examples />
        <V2Integrations />
        <V2Community />
      </main>
      <V2Footer />
    </div>
  );
}
