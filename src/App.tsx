import { Routes, Route } from 'react-router-dom';
import { RetroPage } from './pages/RetroPage';
import { WebflowPage } from './pages/WebflowPage';
import { WebflowPageV2 } from './pages/WebflowPageV2';
import { WebflowPageV3 } from './pages/WebflowPageV3';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WebflowPageV3 />} />
      <Route path="/retro" element={<RetroPage />} />
      <Route path="/new-design" element={<WebflowPage />} />
      <Route path="/new-design-v2" element={<WebflowPageV2 />} />
      <Route path="/new-design-v3" element={<WebflowPageV3 />} />
    </Routes>
  );
}

export default App;
