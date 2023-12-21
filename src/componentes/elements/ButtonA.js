import styles from "./ButtonA.module.scss";

function ButtonA({ text, link }) {
  return (
    <div>
      <a href={link}>
        <buttton className={styles.btn}> {text} </buttton>
      </a>
    </div>
  );
}

export default ButtonA;
