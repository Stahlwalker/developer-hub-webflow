import { WfNavigation } from '../components/webflow/WfNavigation';
import { WfHero } from '../components/webflow/WfHero';
import { WfDeveloperProducts } from '../components/webflow/WfDeveloperProducts';
import { WfDocumentation } from '../components/webflow/WfDocumentation';
import { WfAPIPlayground } from '../components/webflow/WfAPIPlayground';
import { WfExamples } from '../components/webflow/WfExamples';
import { WfIntegrations } from '../components/webflow/WfIntegrations';
import { WfCommunity } from '../components/webflow/WfCommunity';
import { WfFooter } from '../components/webflow/WfFooter';

export function WebflowPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <WfNavigation />
      <main>
        <WfHero />
        <WfDeveloperProducts />
        <WfDocumentation />
        <WfAPIPlayground />
        <WfExamples />
        <WfIntegrations />
        <WfCommunity />
      </main>
      <WfFooter />
    </div>
  );
}
