import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Arquitectura from './pages/Arquitectura';
import Documento from './pages/Documento';
import Diapositivas from './pages/Diapositivas';

function App() {
  return (
    <BrowserRouter basename="/Arquitectura-CI-CD">
      <nav className="bg-gray-900 text-white p-4 flex flex-wrap gap-6 justify-center shadow-lg">
        <Link to="/" className="hover:text-blue-400 transition font-medium">Inicio</Link>
        <Link to="/arquitectura" className="hover:text-blue-400 transition font-medium">Arquitectura</Link>
        <Link to="/documento" className="hover:text-blue-400 transition font-medium">Documento</Link>
        <Link to="/diapositivas" className="hover:text-blue-400 transition font-medium">Diapositivas</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/arquitectura" element={<Arquitectura />} />
        <Route path="/documento" element={<Documento />} />
        <Route path="/diapositivas" element={<Diapositivas />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
