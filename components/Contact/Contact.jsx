// Styles
import styles from './Contact.module.css'

// Ícones
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
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
        <div className={styles.socials_container}>
          <p>ou se preferir...</p>
          <div className='my-8'>
            <div>
              <AiFillLinkedin color={"005DB4"} size={32}/>
              <a href="https://linkedin.com/in/laurence-zanotti" target="_blank" rel='noreferrer'>
                <span>Linkedin</span>
              </a>
            </div>
            <div>
              <img src="/instagram.png" alt="Instagram logo" className='m-auto'/>
              <a href="https://instagram.com/laurencezanotti" target="_blank" rel='noreferrer'>
                <span>Instagram</span>
              </a>
            </div>
            <div>
              <AiFillGithub size={32} />
              <a href="https://github.com/LaurenceZanotti" target="_blank" rel='noreferrer'>
                <span>Github</span>
              </a>
            </div>
          </div>
          <a href="#home" className='my-8'>Voltar ao topo <FaChevronUp className='inline'/></a>
        </div>
    </section>
  )
}