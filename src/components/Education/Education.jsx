import React from "react";
import "./_Education.scss";

export const Education = ({ education }) => {
  return (
    <div className="container-education">
      {education.map((item, index) => {
        return (
          <div key={index} className="education-card">

            <h3> Titulo: {item.name}</h3>
            <h3> Fecha: {item.date}</h3>
            <h3> Lugar: {item.where}</h3>
          </div>
        );
      })}
    </div>
  );
}
