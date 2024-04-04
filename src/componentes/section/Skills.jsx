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
        <img
          src="https://skillicons.dev/icons?i=react"
          alt="ReactJS"
          title="ReactJS"
        />
        <img
          src="https://skillicons.dev/icons?i=ts"
          alt="TypeScript"
          title="TypeScript"
        />
        <img
          src="https://skillicons.dev/icons?i=js"
          alt="JavaScript"
          title="JavaScript"
        />
        <img
          src="https://skillicons.dev/icons?i=nextjs"
          alt="NextJS"
          title="NextJS"
        />
        <img
          src="https://skillicons.dev/icons?i=python"
          alt="Python"
          title="Python"
        />
        <img
          src="https://skillicons.dev/icons?i=nodejs"
          alt="NodeJS"
          title="NodeJS"
        />
        <img
          src="https://skillicons.dev/icons?i=express"
          alt="Express"
          title="Express"
        />
        <img
          src="https://skillicons.dev/icons?i=mongodb"
          alt="MongoDB"
          title="MongoDB"
        />
        <img src="https://skillicons.dev/icons?i=css" alt="CSS" title="CSS" />
        <img
          src="https://skillicons.dev/icons?i=html"
          alt="HTML"
          title="HTML"
        />
        <img
          src="https://skillicons.dev/icons?i=scss"
          alt="SASS"
          title="SASS"
        />
        <img src="https://skillicons.dev/icons?i=git" alt="Git" title="Git" />
        <img
          src="https://skillicons.dev/icons?i=vercel"
          alt="Vercel"
          title="Vercel"
        />
      </div>
    </div>
  );
}

export default Skills;
