import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Edson Castañeda.</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#inicio" className="hover:text-blue-400 transition-colors duration-200">
                Inicio
              </a>
            </li>
            <li>
              <a href="#acerca-de" className="hover:text-blue-400 transition-colors duration-200">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#proyectos" className="hover:text-blue-400 transition-colors duration-200">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-blue-400 transition-colors duration-200">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
