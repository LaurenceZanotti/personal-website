import Navbar from "../Navbar/Navbar"
import styles from './Header.module.css'

export default function Header() {

  return (
    <header className={styles.container_header}>
      <Navbar />

      <div className={styles.profile_picture}></div>
      <div>
        <h1 className={styles.name}>Laurence Zanotti</h1>
        <h2 className={styles.title}>Desenvolvedor Web Front end</h2>
      </div>
      <p className={styles.description}>Projetando e construindo interfaces de usuário e experiências inesquecíveis</p>
      <a href="/cv.pdf" download>
        <div className={styles.baixar_btn}>BAIXAR CV</div>
      </a>
      <div className={styles.scroll_icon}>
          <div className={styles.ball}></div>
      </div>
    </header>
  )
}