import styles from './ButtonB.module.css'

function ButtonB({text, link}) {
    return (
      <div>
        <a href={link}>
          <buttton className={styles.btn}> {text} </buttton>
        </a>
      </div>
    );
  }
  
  export default ButtonB;
  