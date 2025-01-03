"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: "", email: "", message: "" };
    if (!formData.name) newErrors.name = "El nombre es obligatorio.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Correo inválido.";
    if (!formData.message) newErrors.message = "El mensaje no puede estar vacío.";
    if (Object.values(newErrors).some((err) => err)) {
      setErrors(newErrors);
      return;
    }

    alert("Formulario enviado con éxito.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-6">Contáctame</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
              errors.name ? "border-red-500" : "focus:ring-blue-200"
            }`}
            placeholder="Tu nombre"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
              errors.email ? "border-red-500" : "focus:ring-blue-200"
            }`}
            placeholder="Tu correo electrónico"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
              errors.message ? "border-red-500" : "focus:ring-blue-200"
            }`}
            placeholder="Tu mensaje"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <div className="flex justify-center">
        <Button text="Enviar" onClick={() => {}} />
        </div>
      </form>
    </div>
  );
}
