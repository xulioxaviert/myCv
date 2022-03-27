import React from "react";
import "./_Education.scss";

export const Education = ({ education }) => {
  return (
    <>
      <h2>Estudios Realizados</h2>
      <div className="container-education">
        {education.map((item, index) => {
          return (
            <div key={index} className="education-card">
              <h4> Titulo:</h4>
              <p> {item.name}</p>
              <h4> Fecha:</h4>
              <p> {item.date}</p>
              <h4>Lugar: </h4>
              <p>{item.where}</p>
            </div>
          )
        })}
      </div>
    </>
  );
};
