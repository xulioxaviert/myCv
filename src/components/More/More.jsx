import React from "react";
import "./_More.scss";

export default function More({ languages, habilities }) {
  return (
    <>
      <h2>Idiomas y Habilidades: </h2>
      <div className="container-more">
        <h2>Idioma:</h2>
        <div className="container-languages">
          {languages.map((item, index) => {
            return (
              <>
                <p key={index} >
                  {item.language}
                </p>
                <p>Escrito: {item.wrlevel}</p>
                <p>Hablado: {item.splevel}</p>
              </>
            );
          })}
        </div>
        <h2>Habilidades: </h2>
        <div className="container-habilities">
          {habilities.map((item, index) => {
            return (
              <div key={index} className="habilities">
                <p>{item} </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
