import styles from './Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { useState } from 'react';

export default function Navbar() {
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
      <span className='font-thin text-xl mx-2 px-2 border-r border-r-white whitespace-nowrap'>
        Laurence Zanotti 
      </span>
      {/* Desktop menu options */}
      <ul className="hidden sm:flex gap-8 font-bold">
          <li><a className='hover:text-slate-400' href="#home">Home</a></li>
          <li><a className='hover:text-slate-400' href="#work">Projetos</a></li>
          <li><a className='hover:text-slate-400' href="#academic">Formação</a></li>
          <li><a className='hover:text-slate-400' href="#contact">Contato</a></li>
      </ul>
      {/* Mobile hamburguer menu options */}
      {menuActive && 
      <ul className={`
        ${styles.menu_container} 
        ${menuActive && styles.menu_container_unfade}
        sm:hidden
      `}>
          <li><a href="#home">Home</a></li>
          <li><a href="#work">Projetos</a></li>
          <li><a href="#academic">Formação</a></li>
          <li><a href="#contact">Contato</a></li>
      </ul>}
      {/* Mobile hamburguer menu button */}
      {menuActive ?
      <div className={`${styles.hamburguer} sm:invisible lg:w-[160px]`} onClick={handleClick}>
        <AiOutlineCloseCircle/>
      </div> :
      <div className={`${styles.hamburguer} sm:invisible lg:w-[160px]`} onClick={handleClick}>
        <GiHamburgerMenu/>
      </div>}
    </nav>
  )
}