import React from 'react';
import { FaNodeJs, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiPostgresql, SiRedux, SiSequelize, SiVisualstudiocode } from 'react-icons/si';

const technologies = [
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <SiSequelize />, name: "Sequelize" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <SiVisualstudiocode />, name: "Visual Studio Code" }
];

const Technologies: React.FC = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl mb-10">Tecnologías:</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-5xl mb-2">{tech.icon}</div>
            <p className="text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
