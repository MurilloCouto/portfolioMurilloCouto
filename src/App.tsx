import React from "react";
import Navbar from "./componentes/section/Navbar.tsx";
import Presentation from "./componentes/section/Presentation.tsx";
import Skills from "./componentes/section/Skills.tsx";
import Projects from "./componentes/section/Projects.tsx";
import Contact from "./componentes/section/Contact.tsx";

import "./global.scss";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
