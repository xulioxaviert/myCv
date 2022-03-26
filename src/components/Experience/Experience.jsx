import React from "react";

import "./_Experience.scss";

const Experience = ({ experience }) => {
  return (
    <div className="container-experience">
          {
              experience.map((item, index) => {
                  return (
                    <div key={index} className="experience-card" >
                      <h3>Cargo: {item.name}</h3>;<h3>Fecha: {item.date}</h3>;
                      <h3>Empresa: {item.where}</h3>;
                      <h3>Descripción del puesto: {item.description}</h3>;
                    </div>
                  );
      })};
    </div>
  );
};

export default Experience;
