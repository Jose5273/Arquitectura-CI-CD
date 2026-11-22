export default function Arquitectura() {
  // Aquí está la magia: un array donde cada elemento es una línea
  const lineasArbol = [
    "C:.",
    "├───.github",
    "│   └───workflows",
    "├───backend",
    "│   └───node_modules",
    "│       ├───accepts",
    "│       ├───body-parser",
    "│       ├───cors",
    "│       ├───express",
    "│       └───... (otras dependencias)",
    "├───node_modules",
    "│   ├───.bin",
    "│   ├───@tailwindcss",
    "│   ├───react",
    "│   ├───react-router-dom",
    "│   └───... (otras dependencias de React)",
    "├───public",
    "│   ├───informe.pdf",
    "│   └───diapositivas.pptx",
    "└───src",
    "    ├───assets",
    "    └───pages",
    "        ├───Arquitectura.tsx",
    "        ├───Diapositivas.tsx",
    "        ├───Documento.tsx",
    "        ├───Inicio.tsx",
    "        └───Proyecto.tsx"
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Arquitectura del Proyecto</h2>
        
        <div className="space-y-6 text-gray-600 mb-8">
          <p>Este proyecto utiliza una arquitectura Full-Stack moderna:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Frontend:</strong> React + Vite + Tailwind CSS, desplegado en GitHub Pages.</li>
            <li><strong>Backend:</strong> Node.js + Express, desplegado en Render.</li>
            <li><strong>CI/CD:</strong> Automatización con GitHub Actions.</li>
          </ul>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto shadow-inner">
          <h3 className="text-white font-semibold mb-4 text-lg border-b border-gray-700 pb-2">Estructura del Repositorio</h3>
          
          {/* Aquí recorremos el array y creamos un div por cada línea */}
          <div className="font-mono text-sm text-green-400 leading-relaxed">
            {lineasArbol.map((linea, index) => (
              <div key={index} className="whitespace-pre">
                {linea}
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">* Diagrama resumido por razones de espacio.</p>
      </div>
    </div>
  );
}