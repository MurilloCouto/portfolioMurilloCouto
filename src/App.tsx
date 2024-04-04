import React from "react";
import Navbar from "./componentes/section/Navbar.tsx";
import Presentation from "./componentes/section/Presentation.tsx";
import Skills from "./componentes/section/Skills.tsx";
import Projects from "./componentes/section/Projects.tsx";
import Footer from "./componentes/section/Footer.tsx";

import "./global.scss";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Presentation />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
