import React from "react";
import "./_Hero.scss";

export const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={hero.image} alt={hero.name} />
      </div>
      <div className="data-hero">
        <h3>Nombre: </h3>
        <h3>{hero.name}</h3>
        <h3>Dirección: </h3>
        <h3>{hero.adress}</h3>
        <h3>email: </h3>
        <h3>{hero.email}</h3>
        <h3>Móvil: </h3>
        <h3>{hero.phone}</h3>
        <h3>gitHub: </h3>
        <h3>{hero.gitHub}</h3>
        <h3>LinkedIn: </h3>
        <h3>{hero.LinkedIn}</h3>
      </div>
      <div className="aboutMe">
        {hero.aboutMe.map((item, index) => {
          return (
            <div key={index} className="aboutMe">
              <p>{item.info}</p>;
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};
