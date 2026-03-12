import { Routes, Route } from 'react-router-dom';
import { RetroPage } from './pages/RetroPage';
import { WebflowPage } from './pages/WebflowPage';
import { WebflowPageV2 } from './pages/WebflowPageV2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RetroPage />} />
      <Route path="/new-design" element={<WebflowPage />} />
      <Route path="/new-design-v2" element={<WebflowPageV2 />} />
    </Routes>
  );
}

export default App;
