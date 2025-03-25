// api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    console.log("📩 Recibido:", req.body); // Debugging

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    try {
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECIPIENT_EMAIL) {
        throw new Error("Faltan credenciales en .env");
      }

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      let mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: "Nuevo mensaje del formulario",
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      };

      let info = await transporter.sendMail(mailOptions);
      console.log("✅ Correo enviado:", info.response);
      return res.status(200).json({ message: "Correo enviado correctamente" });

    } catch (error) {
      console.error("❌ Error enviando el correo:", error);
      return res.status(500).json({ message: `Error al enviar el correo: ${error.message}` });
    }
  } else {
    return res.status(405).json({ message: "Método no permitido" });
  }
}
