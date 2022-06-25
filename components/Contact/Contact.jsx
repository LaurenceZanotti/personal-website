import styles from './Contact.module.css'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FaChevronUp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className={styles.container_contact} id="contact">
        <h2>Entre em contato</h2>
        <form action="" className={styles.form_container}>
          <div className={styles.input_container}>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" placeholder='Me diga o seu nome'/>
          </div>
          <div className={styles.input_container}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder='Digite seu email'/>
          </div>
          <div className={styles.input_container}>
            <label htmlFor="assunto">Assunto</label>
            <input type="text" name="assunto" placeholder='Qual o assunto?'/>
          </div>
          <div className={`${styles.input_container} ${styles.textarea_container}`}>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea name="mensagem" id="" cols="30" rows="10" placeholder='Escreva sua mensagem' />
          </div>
          <div className={`${styles.input_container} ${styles.btn_container}`}>
            <button>Enviar</button>
          </div>
        </form>
        <p>ou se preferir...</p>
        <div>
          <div>
            <AiFillLinkedin/>
            Linkedin
          </div>
          <div>
            Github
            <AiFillGithub/>
          </div>
        </div>

        <p>Voltar ao topo <FaChevronUp/></p>
    </section>
  )
}