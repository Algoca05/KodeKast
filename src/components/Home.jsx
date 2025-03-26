function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
     
      <p className="text-lg text-center text-yellow-300">
        Disfruta de nuestro contenido fresco sobre tecnología, producción de podcast y entrevistas exclusivas.
      </p>
      <div className="bg-yellow-900 p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-2 text-yellow-500">Episodio Reciente</h2>
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/PVNCNq_4g1s"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <p className="text-center text-gray-600">
        Explora las demás secciones usando el menú de navegación.
      </p>
    </div>
  )
}

export default Home
