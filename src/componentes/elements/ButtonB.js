import styles from "./ButtonB.module.scss";

function ButtonB({ text, link }) {
  return (
    <div>
      <a href={link}>
        <buttton className={styles.btn}> {text} </buttton>
      </a>
    </div>
  );
}

export default ButtonB;
