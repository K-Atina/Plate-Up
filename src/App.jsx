import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div style={{ padding: '2rem', fontSize: '1.5rem' }}>✅ Root Route Works</div>} />
      <Route path="*" element={<div>🚫 Not Found</div>} />
    </Routes>
  );
}

export default App;
