import styles from "./Skills.module.scss";

function Skills() {
  return (
    <div id="skills" className={styles.skills}>
      <h1>
        <strong>Habilidades</strong>
      </h1>
      <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
      <div>
        <img src="https://skillicons.dev/icons?i=js" />
        <img src="https://skillicons.dev/icons?i=css" />
        <img src="https://skillicons.dev/icons?i=html" />
        <img src="https://skillicons.dev/icons?i=scss" />
        <img src="https://skillicons.dev/icons?i=react" />
      </div>
    </div>
  );
}

export default Skills;
