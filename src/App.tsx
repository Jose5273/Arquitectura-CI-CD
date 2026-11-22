import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Proyecto from './pages/Proyecto';

function App() {
  return (
    <BrowserRouter basename="/miproyectofigma">
      <nav className="bg-gray-900 text-white p-4 flex gap-6 justify-center">
        <Link to="/" className="hover:text-blue-400 transition">Inicio</Link>
        <Link to="/proyecto" className="hover:text-blue-400 transition">Proyecto</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyecto" element={<Proyecto />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
