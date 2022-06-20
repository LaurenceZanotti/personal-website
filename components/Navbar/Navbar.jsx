import styles from './Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  const brazil = '/imgs/Brazil.svg'
  const usa = '/imgs/USA.svg'

  return (
    <nav className={styles.container_navbar}>
        <div className={styles.language_selector} id="language_selector">
          <div className={styles.active_language}><img src={brazil} alt="" /></div>
          <div><img src={usa} alt="" /></div>
        </div>
        <ul className={styles.invisible}>
            <li>Home</li>
            <li>Projetos</li>
            <li>Formação</li>
            <li>Contato</li>
        </ul>
        <div className={styles.hamburguer}>
            <GiHamburgerMenu/>
        </div>
    </nav>
  )
}