import AcademicItem from "./AcademicItem";
import styles from "./Academic.module.css"

export default function Academic() {
  return (
    <section className="
      px-4 
      sm:px-48 
      bg-cover 
      bg-black/[.85]
      bg-book-bg 
      bg-blend-multiply
      flex 
      flex-col 
      items-center
      " 
      id="academic"
    >
        <div className="h-64 w-full bg-gradient-to-b from-black"></div>
        <h2 className="text-center my-4 text-base lg:text-3xl">Formação</h2>
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
        <div className="h-64 w-full bg-gradient-to-t from-black"></div>
    </section>
  )
}

