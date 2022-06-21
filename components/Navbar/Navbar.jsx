import styles from './Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const brazil = '/imgs/Brazil.svg'
  const usa = '/imgs/USA.svg'

  const [menuActive, setMenuActive] = useState(false)
  const [firstMenuOpen, setFirstMenuOpen] = useState(false)

  function handleClick() {
    // Switch menu state
    setMenuActive(prevState => !prevState)
    setFirstMenuOpen(true)
  }

  return (
    <nav className={`
      ${styles.container_navbar} 
      ${menuActive && styles.navbar_expanded} 
      ${(firstMenuOpen && !menuActive) && styles.navbar_collapsed}
    `}>
      <div className={styles.language_selector} id="language_selector">
        <div className={styles.active_language}><img src={brazil} alt="Língua Português do Brasil" /></div>
        <div><img src={usa} alt="English language" /></div>
      </div>
      {menuActive && 
      <ul className={`
        ${styles.menu_container} 
        ${menuActive && styles.menu_container_unfade}
      `}>
          <li><a href="#home">Home</a></li>
          <li><a href="#work">Projetos</a></li>
          <li><a href="#academic">Formação</a></li>
          <li><a href="#contact">Contato</a></li>
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