export default function Diapositivas() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Diapositivas de Presentación</h2>
        <div className="flex justify-center">
          {/* Vista previa de Office Online (Requiere que el archivo sea público) */}
          <iframe
            className="w-full h-[600px] border border-gray-200 rounded-lg"
            src="https://view.officeapps.live.com/op/embed.aspx?src=https://jose5273.github.io/Arquitectura-CI-CD/Gestion_de_versionamiento_GitHub_vs_GitLab.pptx"
            title="Gestion_de_versionamiento_GitHub_vs_GitLab"
          ></iframe>
        </div>
      </div>
    </div>
  );
}