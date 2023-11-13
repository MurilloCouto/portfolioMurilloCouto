import styles from './Cards.module.css'
import ButtonB from './ButtonB'

function Cards({img, title, tech, desc, site, repo}) {
    return (
      <div className={styles.cards}>
        <a href={site}>
          <img src={img} alt="erro" />
        </a>
        <section>
          <h3>{title}</h3>
          <p>{tech}</p>
          <p>{desc}</p>
          <ButtonB link={repo} text="Acesse o repositório" target="_blank"/>
        </section>
      </div>
    );
  }
  
  export default Cards;
  