'use client';

import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const Profile: React.FC = () => {
  const titles = ["DESARROLLADOR FULL STACK", "DESARROLLADOR BACKEND", "DESARROLLADOR FRONTEND"];
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % titles.length);
    }, 2000); // Cambia el título cada 2 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  useEffect(() => {
    setCurrentTitle(titles[index]);
  }, [index]);

  return (
    <section id="inicio" className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 lg:p-8 bg-gray-50">
      <div className="lg:w-2/3 flex flex-col items-center lg:items-start lg:pr-8">
        <h1 className="text-xl lg:text-4xl font-bold mb-10 text-center lg:text-left">
          {currentTitle}
        </h1>
        <h2 className="text-2xl lg:text-2xl font-semibold mb-5 text-center lg:text-left">Hola, Soy Edson!</h2>
        <p className="mb-4 text-lg lg:text-xl text-center lg:text-left">
          Desarrollador con experiencia en frontend y backend, con conocimientos en diversas tecnologías y herramientas. Apasionado por el aprendizaje continuo y la creación de soluciones innovadoras.
        </p>
        <a
          href="/images/CV - Edson Castañeda.pdf"
          download
          className="inline-flex items-center px-4 py-2 mt-10 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Descargar CV
          <FaDownload className="ml-2" />
        </a>
        <div className="flex space-x-4 mt-10">
          <a href="https://www.linkedin.com/in/edsoncasta" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            <FaLinkedin size={32} />
          </a>
          <a href="https://github.com/EdsonCasta" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
            <FaGithub size={32} />
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
        <img
          src="/images/fotoPerfil.jpeg"
          alt="Foto de perfil de Edson"
          className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-gray-200 shadow-md"
        />
      </div>
    </section>
  );
};

export default Profile;
