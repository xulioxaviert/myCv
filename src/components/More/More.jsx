import React from "react";
import "./_More.scss";

export default function More({ languages, habilities }) {
  return (
    <div className="container-languages">
      <h2>Idioma: {languages.language}</h2>;
      <h2>Escrito: {languages.wrlevel}</h2>;
      <h2>Hablado: {languages.splevel}</h2>;
      <div className="container-habilities">
        {habilities.map((item, index) => {
          return (
            <div key= {index} className="habilities">
              <p>{item} </p>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};
