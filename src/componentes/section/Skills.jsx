import styles from "./Skills.module.scss";

function Skills() {
  return (
    <div id="skills" className={styles.skills}>
      <h1>
        <strong>Habilidades</strong>
      </h1>
      <p>
        Estas são algumas das minhas principais habilidades e conhecimentos.
      </p>
      <div>
        <img src="https://skillicons.dev/icons?i=react" alt="ReactJS" />
        <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" />
        <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
        <img src="https://skillicons.dev/icons?i=nextjs" alt="NextJS" />
        <img src="https://skillicons.dev/icons?i=python" alt="Python" />
        <img src="https://skillicons.dev/icons?i=nodejs" alt="NodeJS" />
        <img src="https://skillicons.dev/icons?i=express" alt="Express" />
        <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" />
        <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
        <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
        <img src="https://skillicons.dev/icons?i=scss" alt="SASS" />
        <img src="https://skillicons.dev/icons?i=git" alt="Git" />
        <img src="https://skillicons.dev/icons?i=vercel" alt="Vercel" />
      </div>
    </div>
  );
}

export default Skills;
