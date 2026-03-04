import { Routes, Route } from 'react-router-dom';
import { RetroPage } from './pages/RetroPage';
import { WebflowPage } from './pages/WebflowPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RetroPage />} />
      <Route path="/new-design" element={<WebflowPage />} />
    </Routes>
  );
}

export default App;
