import { useState } from "react";
import "./styles/main.scss";
import { Hero } from "./components/Hero/Hero";
import { Education } from "./components/Education/Education";
import { CV } from "./CV/CS";
import Experience from "./components/Experience/Experience";
import More from "./components/More/More";
import { SiReact } from "react-icons/si";

const { hero, education, experience, languages, habilities } = CV;

//let colores = ["azul", "verde", "negro", "rojo"];

function App() {
  const [showEducation, setShowEducation] = useState(0);
  //const [showExperience, setShowExperience] = useState(true);
  //const [showMore, setShowMore] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
      <div className="container-btn">
        <button className="btn" onClick={() => setShowEducation(1)}>
          Estudios Realizados
        </button>
        <button className="btn" onClick={() => setShowEducation(2)}>
          Experiencia Laboral
        </button>
        <button className="btn" onClick={() => setShowEducation(3)}>
          Idiomas y Habilidades
        </button>
      </div>
      <div>
        {showEducation === 1 ? (
          <Education education={education} />
        ) : showEducation === 2 ? (
          <Experience experience={experience} />
        ) : showEducation === 3 ? (
          <More habilities={habilities} languages={languages} />
        ) : (
          console.log("no muestro nada")
        )}
      </div>
      <div className="footer" >
        <SiReact /> Aplicación hecha con React <SiReact />
      </div>
    </div>
  );
}

export default App;
