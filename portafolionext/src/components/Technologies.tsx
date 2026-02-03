import React from 'react';
import { FaNodeJs, FaReact, FaJs, FaHtml5, FaCss3Alt, FaJava, FaDocker  } from 'react-icons/fa';
import { SiPostgresql, SiMysql, SiRedux, SiSequelize, SiVisualstudiocode, SiIntellijidea, 
  SiSpringboot, SiJson, SiFastapi, SiGithub, SiGit } from 'react-icons/si';

const technologies = [
  { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
  { icon: <SiIntellijidea />, name: "Intellij IDEA" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiSpringboot />, name: "Spring Boot" },
  { icon: <SiPostgresql />, name: "PostgreSQL / H2" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiSequelize />, name: "Sequelize" },
  { icon: <SiFastapi />, name: "IA Service (API)" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <SiJson />, name: "REST / JSON" },
  { icon: <SiGithub />, name: "GitHub" },

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
