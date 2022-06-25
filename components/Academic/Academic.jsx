import AcademicItem from "./AcademicItem";
import styles from "./Academic.module.css"

export default function Academic() {
  return (
    <section className={styles.container_academic} id="academic">
        <div className="black-fade"></div>
        <h2>Formação</h2>
        <AcademicItem 
          logo="estacio"
          school="Universidade Estácio de Sá"
          course="Análise e Desenvolvimento de Sistemas"
          start_year="2022"
        />
        <AcademicItem 
          logo="harvard"
          school="Harvard CS50 Web"
          course="CS50's Web Programming with Python and JavaScript"
          start_year="2021"
          inverted="inverted"
        />
        <AcademicItem 
          logo="harvard"
          school="Harvard CS50"
          course="CS50's Introduction to Computer Science"
          start_year="Setembro 2020"
          end_year="Dezembro 2020"
        />
        <AcademicItem 
          logo="etec"
          school="ETEC de Cotia"
          course="Técnico de Informática"
          start_year="2016"
          end_year="2017"
          inverted="inverted"
        />
        <div className="black-fade"></div>
    </section>
  )
}

