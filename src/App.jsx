import { useState } from "react";
import Home from "./components/Home.jsx";
import Episodes from "./components/Episodes.jsx";
import Form from "./components/Form.jsx";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [section, setSection] = useState("home");
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-800 text-yellow-500 flex flex-col">
      <nav className="container mx-auto p-4 bg-black text-yellow-500 min-w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-24" />
            <h1 className="text-4xl font-extrabold text-center text-yellow-500">
              Kodekast
            </h1>
          </div>
          {/* Nav buttons for desktop */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => setSection("home")}
              className="rounded transition duration-300 px-6 py-3 text-lg bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              Inicio
            </button>
            <button
              onClick={() => setSection("episodes")}
              className="rounded transition duration-300 px-6 py-3 text-lg bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              Episodios
            </button>
            <button
              onClick={() => setSection("contact")}
              className="rounded transition duration-300 px-6 py-3 text-lg bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              Registro y Participación
            </button>
          </div>
          {/* Hamburger button for móvil */}
          <div className="md:hidden">
            <button onClick={() => setNavOpen(!navOpen)} className="text-2xl">
              ☰
            </button>
          </div>
        </div>
        {/* Mobile dropdown */}
        <div className={`${navOpen ? "flex" : "hidden"} flex-col mt-4 md:hidden`}>
          <button
            onClick={() => {
              setSection("home");
              setNavOpen(false);
            }}
            className="rounded transition duration-300 px-6 py-3 text-lg bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black mb-2"
          >
            Inicio
          </button>
          <button
            onClick={() => {
              setSection("episodes");
              setNavOpen(false);
            }}
            className="rounded transition duration-300 px-6 py-3 text-lg bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black mb-2"
          >
            Episodios
          </button>
          <button
            onClick={() => {
              setSection("contact");
              setNavOpen(false);
            }}
            className="rounded transition duration-300 px-6 py-3 text-lg bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
          >
            Registro y Participación
          </button>
        </div>
      </nav>

      <main className="container mx-auto p-4 flex-grow">
        {section === "home" && <Home />}
        {section === "episodes" && <Episodes />}
        {section === "contact" && <Form />}
      </main>
    </div>
  );
}

export default App;
