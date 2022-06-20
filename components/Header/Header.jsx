import Navbar from "../Navbar/Navbar"
import styles from './Header.module.css'

export default function Header() {

  return (
    <header className={styles.container_header}>
        <div className={styles.gradient_bg}>
          <Navbar />
          <div className={styles.profile_picture}></div>
          <h1 className={styles.name}>Laurence Zanotti</h1>
          <h2 className={styles.title}>Front-end Web Developer</h2>
          <p className={styles.description}>Projetando e construindo interfaces de usuário e experiências inesquecíveis</p>
          <a href="/cv.pdf" download>
            <div className={styles.baixar_btn}>BAIXAR CV</div>
          </a>
          <div className={styles.scroll_icon}>
              <div className={styles.ball}></div>
          </div>
        </div>
    </header>
  )
}