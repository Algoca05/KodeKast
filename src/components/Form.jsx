import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthYear: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convierte la fecha a un formato estándar y remueve caracteres no numéricos del teléfono
    const formattedData = {
      ...formData,
      phone: formData.phone.replace(/\D/g, ""), // Remueve caracteres no numéricos
      birthYear: formData.birthYear ? new Date(formData.birthYear).toISOString().split("T")[0] : "",
    };

    try {
      const response = await fetch("https://kodekast-podcast.vercel.app/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Obtener más detalles del error
        throw new Error(errorData.message || "Error desconocido en el servidor");
      }

      alert("✅ Formulario enviado con éxito");
      setFormData({ name: "", email: "", phone: "", birthYear: "", message: "" });
    } catch (error) {
      console.error("❌ Error enviando el formulario:", error);

      // Diferenciar entre los tipos de errores
      if (error.message.includes("Failed to fetch")) {
        alert("🚫 Error de conexión: No se pudo conectar con el servidor. Verifica que la API esté funcionando.");
      } else if (error.message.includes("CORS")) {
        alert("⚠️ Error de CORS: El servidor no permite solicitudes desde este origen. Intenta desplegar la API correctamente o ajusta la configuración de CORS.");
      } else if (error.message.includes("Missing credentials")) {
        alert("⚠️ Error en las credenciales: Asegúrate de que las credenciales de correo estén configuradas correctamente en el servidor.");
      } else {
        alert(`❌ Error enviando formulario: ${error.message}`);
      }
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
