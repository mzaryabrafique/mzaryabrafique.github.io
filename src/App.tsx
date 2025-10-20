import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesDetail from './pages/ServicesDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServicesDetail />} />
        <Route path="/services" element={<ServicesDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
