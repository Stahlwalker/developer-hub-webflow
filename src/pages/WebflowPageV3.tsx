import { V3Navigation } from '../components/webflow-v3/V3Navigation';
import { V3Hero } from '../components/webflow-v3/V3Hero';
import { V3TrustedBy } from '../components/webflow-v3/V3TrustedBy';
import { V3DeveloperProducts } from '../components/webflow-v3/V3DeveloperProducts';
import { V3AgenticPlatform } from '../components/webflow-v3/V3AgenticPlatform';
import { V3MCPBridge } from '../components/webflow-v3/V3MCPBridge';
import { V3Documentation } from '../components/webflow-v3/V3Documentation';
import { V3APIPlayground } from '../components/webflow-v3/V3APIPlayground';
import { V3Examples } from '../components/webflow-v3/V3Examples';
import { V3Integrations } from '../components/webflow-v3/V3Integrations';
import { V3Community } from '../components/webflow-v3/V3Community';
import { V3Newsletter } from '../components/webflow-v3/V3Newsletter';
import { V3Footer } from '../components/webflow-v3/V3Footer';

export function WebflowPageV3() {
  return (
    <div className="min-h-screen bg-white font-wf-body">
      <V3Navigation />
      <main>
        <V3Hero />
        <V3TrustedBy />
        <V3DeveloperProducts />
        <V3MCPBridge />
        <V3AgenticPlatform />
        <V3Documentation />
        <V3APIPlayground />
        <V3Examples />
        <V3Integrations />
        <V3Community />
        <V3Newsletter />
      </main>
      <V3Footer />
    </div>
  );
}
