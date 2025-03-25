import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthYear: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://formsubmit.co/tu-correo@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) throw new Error("Error enviando el formulario");
  
      alert("✅ Formulario enviado con éxito");
      setFormData({ name: "", email: "", phone: "", birthYear: "", message: "" });
    } catch (error) {
      alert(`❌ Error enviando formulario: ${error.message}`);
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 text-yellow-500">
      <form
        onSubmit={handleSubmit}
        className="bg-black shadow-md rounded-lg p-8 w-full max-w-md border border-yellow-500"
      >
        <h2 className="text-2xl font-extrabold mb-6 text-center">Registro y Participación</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-transparent border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-yellow-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-transparent border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-yellow-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-transparent border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-yellow-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="birthYear" className="block font-medium mb-2">
            Año de Nacimiento
          </label>
          <input
            type="date"
            name="birthYear"
            id="birthYear"
            value={formData.birthYear}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-transparent border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-yellow-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block font-medium mb-2">
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-transparent border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-yellow-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;
