function Episodes() {
  const episodes = [
    { id: 1, title: 'Episodio 1: Introducción', src: '../../public/episodeo1.m4a' },
    { id: 2, title: 'Episodio 2: Profundizando', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">Episodios</h1>
      {episodes.map(ep => (
        <div key={ep.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold mb-2">{ep.title}</h2>
          <audio controls className="w-full">
            <source src={ep.src} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      ))}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-2">Producción</h2>
        <p className="text-lg text-gray-700">
          Nuestro proceso de grabación y edición utiliza herramientas como Audacity y FFmpeg, combinadas con métodos modernos para ofrecer la mejor calidad de audio.
        </p>
      </div>
    </div>
  )
}

export default Episodes
