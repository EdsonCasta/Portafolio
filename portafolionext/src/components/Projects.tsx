import React from 'react';

const projects = [
  {
    title: "EbooksPalace",
    description: "E-commerce de libros digitales con funcionalidades de filtrado, ordenamiento, autenticación, carrito de compras, pagos, comentarios y gestión de imágenes con Cloudinary. Incluye un panel de administrador para gestionar usuarios y libros.",
    image: "/images/Ebookspalace.jpg",
    link: "https://ebooks-palace.vercel.app/"
  },
  {
    title: "App Countries",
    description: "Aplicación de países con funcionalidades para filtrar, ordenar, ver detalles y crear actividades. Utilicé React y Redux en el frontend, y Node.js con Express en el backend, manejando la base de datos con PostgreSQL y Sequelize.",
    image: "/images/paisesApp.png",
    link: "https://pi-countries-t4gu.onrender.com"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="scroll-mt-10 min-h-screen bg-gray-100 p-6 lg:p-12">
      <h2 className="text-4xl font-semibold mb-8 text-blue-600 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-lg bg-white">
            <img src={project.image} alt={project.title} className="w-full h-60 object-contain mb-4 rounded-lg"/>
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-lg mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-semibold underline">
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
