import Navbar from "../Navbar/Navbar"
import styles from './Header.module.css'

export default function Header() {

  return (
    <header className={styles.container_header} id="home">
      <Navbar />

      <div className={styles.profile_picture}></div>
      <div>
        <h1 className={styles.name}>Laurence Zanotti</h1>
        <h2 className={styles.title}>Desenvolvedor Web Full stack</h2>
      </div>
      <p className={styles.description}>Projetando e construindo soluções web completas e experiências inesquecíveis</p>
      <a href="/cv.pdf" className={styles.baixar_btn} download>
        BAIXAR CV
      </a>
      <div className={styles.scroll_icon}>
          <div className={styles.ball}></div>
      </div>
    </header>
  )
}