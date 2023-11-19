import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation() {
  return (
    <div id="presentation" className={styles.presentation}>
      <h2><strong>Bem-vindo ao meu Portfólio</strong></h2>
      <h1>Olá! Eu sou Murillo Couto</h1>
      <p>
        Sou militar da Força Aérea Brasileira e trabalho como Controlador de Voo no controle de aproximação de São Paulo, essa minha vocação para solucionar conflitos e achar soluções rápidas e eficientes me trouxe até o mundo da programação, por enquanto como hobbie, mas quero cada vez mais estar incluso nesse mundo fantástico da tecnologia, e para isso tenho buscado cada vez mais conhecimento técnico e prático voltado para o desenvolvimento web a fim de me tornar um desenvolvedor full-stack.
      </p>
      <ButtonA text='Conecte-se comigo!' link="https://github.com/MurilloCouto"/>
    </div>
  );
}

export default Presentation;
