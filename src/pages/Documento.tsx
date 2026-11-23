export default function Documento() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Informe del Proyecto</h2>
        <div className="flex justify-center">
          {/* El src apunta al archivo en la carpeta public */}
          <iframe
            className="w-full h-[800px] border border-gray-200 rounded-lg"
            src="SRS_Proyecto_FullStack_Arquitectura_CICD.pdf"
            title="SRS_Proyecto_FullStack_Arquitectura_CICD"
          ></iframe>
        </div>
      </div>
    </div>
  );
}