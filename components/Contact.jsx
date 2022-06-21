import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FaChevronUp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="container-contact" id="contact">
        <h2>Entre em contato</h2>
        <form action="">
          <div>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label htmlFor="assunto">Assunto</label>
            <input type="text" name="assunto" />
          </div>
          <div>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea name="mensagem" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
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