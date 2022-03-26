//import { useState } from "react";
import "./styles/main.scss";
import {Hero} from "./components/Hero/Hero";
import {Education} from "./components/Education/Education";
import { CV } from "./CV/CS";
import Experience from "./components/Experience/Experience";
import More from "./components/More/More"

const { hero, education, experience, languages, habilities } = CV;

function App() {
  return (
    <div className="App">
      <h1>My CV</h1>
      <Hero hero={hero} />
      <Education education={education} />
      <Experience experience={experience} />
      <More languages={languages} habilities={habilities} />
    </div>
  );
}

export default App;
