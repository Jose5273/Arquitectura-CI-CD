export default function Proyecto() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Mi Diseño en Figma</h2>
        <div className="flex justify-center">
          <iframe
            className="w-full h-[600px] border border-gray-200 rounded-lg"
            src="https://embed.figma.com/design/TU_FILE_KEY/Aqui-Tu-Proyecto?embed-host=share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}