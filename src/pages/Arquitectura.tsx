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
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Estructura de Directorios (Resumida)</h3>
            
            {/* Usamos una plantilla de texto con saltos de línea reales */}
            <pre className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto text-sm font-mono shadow-inner leading-relaxed">
{`Arquitectura-CI-CD/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── backend/
│   ├── node_modules/     (Dependencias)
│   ├── package.json
│   └── server.js         (API Express)
├── public/
│   ├── informe.pdf
│   └── diapositivas.pptx
├── src/
│   ├── assets/
│   ├── pages/
│   │   ├── Inicio.tsx
│   │   ├── Arquitectura.tsx
│   │   ├── Documento.tsx
│   │   └── Diapositivas.tsx
│   ├── App.tsx           (Rutas)
│   └── main.tsx
├── .env.production
├── package.json
└── vite.config.ts`}
            </pre>
            
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-sm">
              <p><strong>Nota:</strong> Se ha omitido la carpeta <code>node_modules</code> completa por razones de espacio. La estructura muestra los archivos clave del proyecto.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}