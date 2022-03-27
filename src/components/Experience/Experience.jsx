import React from "react";

import "./_Experience.scss";

const Experience = ({ experience }) => {
  return (
    <>
      <h2>Experiencia Laboral</h2>
      <div className="container-experience">
        {experience.map((item, index) => {
          return (
            <div key={index} className="experience-card">
              <h4>Cargo:</h4>
              <p>{item.name}</p>
              <h4>Empresa:</h4>
              <p>{item.where}</p>
              <h4>Fecha:</h4>
              <p>{item.date}</p>
              <h4>Descripción del puesto:</h4>
              <p>{item.description}</p>
            </div>
          );
        })}
     </div>
    </>
  );
};

export default Experience;
