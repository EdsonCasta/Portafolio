import React from 'react';
import Form from './Form';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="scroll-mt-8 flex flex-col lg:flex-row min-h-screen bg-gray-100 p-6 lg:p-12">
      <div className="flex flex-col items-center lg:w-1/2 lg:items-start p-6 bg-white shadow-md rounded-lg lg:mr-6 mb-6 lg:mb-0">
        <h2 className="text-4xl font-semibold mb-6 text-blue-600 text-center lg:text-left">Información de Contacto</h2>
        <p className="mb-8 text-center lg:text-left">¡Estoy aquí para ayudarte! Puedes contactarme a través de los siguientes medios:</p>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">Correo Electrónico</h3>
            <p><a href="mailto:dedsoncasta07@gmail.com" className="text-blue-500 hover:text-blue-700 underline">dedsoncasta07@gmail.com</a></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Teléfono/WhatsApp</h3>
            <p><a href="tel:+573166286118" className="text-blue-500 hover:text-blue-700 underline">+57 3166286118</a></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Lugar de Residencia</h3>
            <p>Bogotá, Colombia</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Redes Sociales</h3>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/edsoncasta" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
              <a href="https://github.com/EdsonCasta" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">GitHub</a>
              <a href="https://x.com/dedsoncas" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">Twitter</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center lg:w-1/2 lg:items-start p-6 bg-white shadow-md rounded-lg lg:ml-6">
        <h2 className="text-4xl font-semibold mb-6 text-blue-600 text-center">Formulario de Contacto</h2>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
