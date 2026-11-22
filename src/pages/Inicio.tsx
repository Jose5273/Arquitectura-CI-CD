import { useState, useEffect } from 'react';

export default function Inicio() {
  const [mensaje, setMensaje] = useState('Cargando...');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/saludo`)
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje))
      .catch(() => setMensaje('Error al conectar con el backend'));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-10 bg-white rounded-2xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Bienvenido</h1>
        <p className="text-lg text-blue-600 font-mono bg-blue-50 p-4 rounded-lg">{mensaje}</p>
      </div>
    </div>
  );
}