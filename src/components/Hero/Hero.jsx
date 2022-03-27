import React from "react";
import "./_Hero.scss";

export const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={hero.image} alt={hero.name} />
      </div>
      <div className="hero-data">
        <h4>Nombre: </h4>
        <p>{hero.name}</p>
        <h4>Dirección: </h4>
        <p>{hero.adress}</p>
        <h4>email: </h4>
        <p>{hero.email}</p>
        <h4>Móvil: </h4>
        <p>{hero.phone}</p>
        <h4>gitHub: </h4>
        <a
          href="https://github.com/xulioxaviert"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{hero.gitHub}</p>
        </a>
        <h4>LinkedIn: </h4>
        <a
          href="https://www.linkedin.com/in/xulio-xaviert-rojas-teixeira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{hero.LinkedIn}</p>
        </a>
        <div className="aboutMe">
          {hero.aboutMe.map((item, index) => {
            return (
              <div key={index} className="aboutMe">
                <h4>Sobre mi:</h4>
                <p>{item.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
