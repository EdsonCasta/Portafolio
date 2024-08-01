import React from 'react';
import Technologies from './Technologies';

const About: React.FC = () => {
  return (
    <section id="acerca-de" className="pt-24 flex flex-col items-center justify-between p-6 bg-gray-100 text-gray-900 min-h-screen">
      <div className="flex flex-col lg:flex-row lg:w-full items-center justify-between mb-6">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 px-4 lg:px-0">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">Sobre Mí 😊</h2>
          <p className="text-lg mb-6">
            Soy Edson Orlando Castañeda Urrego, un desarrollador de 33 años de Bogotá, Colombia. 👨‍💻 Tengo experiencia en diversas tecnologías adquiridas a través de la participación en múltiples proyectos, lo que me ha permitido aplicar y profundizar mis conocimientos en áreas tanto de frontend como de backend. Estoy comprometido con el aprendizaje continuo 📚 y actualmente busco mi primer empleo en el sector IT, con el objetivo de seguir creciendo profesionalmente y contribuir de manera significativa a proyectos innovadores. 🚀
          </p>
          <p className="text-lg">
            Ofrezco servicios completos de desarrollo web, desde la creación de interfaces de usuario atractivas y responsivas hasta la implementación de funcionalidades complejas en el backend. 💼
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full lg:w-5/6 flex justify-center lg:justify-end">
            <img
              src="/images/imagePro.png"
              alt="Edson Orlando Castañeda Urrego"
              className="w-full h-auto object-cover rounded-full border-4 border-gray-200 shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Technologies />
      </div>
    </section>
  );
};

export default About;
