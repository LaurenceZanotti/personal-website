import styles from './Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { useState } from 'react';

export default function Navbar() {
  const brazil = '/imgs/Brazil.svg'
  const usa = '/imgs/USA.svg'

  const [menuActive, setMenuActive] = useState(false)

  function handleClick() {
    // Switch menu state
    setMenuActive(prevState => !prevState)
  }

  return (
    <nav className={`${styles.container_navbar} ${menuActive && styles.navbar_expanded}`}>
      <div className={styles.language_selector} id="language_selector">
        <div className={styles.active_language}><img src={brazil} alt="Língua Português do Brasil" /></div>
        <div><img src={usa} alt="English language" /></div>
      </div>
      {menuActive && 
      <ul className={styles.menu_container}>
          <li>Home</li>
          <li>Projetos</li>
          <li>Formação</li>
          <li>Contato</li>
      </ul>}
      {menuActive ?
      <div className={styles.hamburguer} onClick={handleClick}>
        <AiOutlineCloseCircle/>
      </div> :
      <div className={styles.hamburguer} onClick={handleClick}>
        <GiHamburgerMenu/>
      </div>}
    </nav>
  )
}