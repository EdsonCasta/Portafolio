'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_8ulpk8i';
const TEMPLATE_ID = 'template_o1qm0ky';
const PUBLIC_KEY = 'sulFqS9vYEND5yaJU';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);

      if (result.text === 'OK') {
        setFormStatus('Mensaje enviado con éxito.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Error al enviar el mensaje.');
      }
      
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <p className="mb-4">¡Estoy aquí para ayudarte! Completa el formulario para enviarme un mensaje.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg mb-1">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg mb-1">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg mb-1">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full p-2 bg-blue-500 text-white rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
        {formStatus && (
          <p className={`mt-4 ${formStatus.toLowerCase().includes('éxito') ? 'text-green-500' : 'text-red-500'}`}>
            {formStatus}
          </p>
        )}
      </form>
    </section>
  );
};

export default Form;
