export default function Arquitectura() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Arquitectura del Proyecto</h2>
        
        <div className="space-y-6 text-gray-600">
          <p>
            Este proyecto utiliza una arquitectura Full-Stack moderna:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Frontend:</strong> React + Vite + Tailwind CSS, desplegado en GitHub Pages.</li>
            <li><strong>Backend:</strong> Node.js + Express, desplegado en Render.</li>
            <li><strong>CI/CD:</strong> Automatización con GitHub Actions.</li>
          </ul>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-8">Estructura de Directorios</h3>
            {/* Aquí está la magia: pre y code respetan los espacios */}
            <pre className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto text-sm font-mono shadow-inner">
              <code>
{`C:.
├───.github
│   └───workflows
├───backend
│   └───node_modules
├───public
└───src
    ├───assets
    └───pages`}
              </code>
            </pre>
            <p className="text-sm text-gray-500 mt-2">
              * Se ha omitido la carpeta <code>node_modules</code> interna por brevedad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}