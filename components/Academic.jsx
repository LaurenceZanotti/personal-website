import AcademicItem from "./AcademicItem";

export default function Academic() {
  return (
    <section className="container-academic">
        <div className="black-fade"></div>
        <h2>Onde estudei</h2>
        <AcademicItem 
          school="Universidade Estácio de Sá"
          course="Análise e Desenvolvimento de Sistemas"
          start_year="2022"
        />
        <AcademicItem 
          school="Harvard CS50 Web"
          course="CS50's Web Programming with Python and JavaScript"
          start_year="2021"
        />
        <AcademicItem 
          school="Harvard CS50"
          course="CS50's Introduction to Computer Science"
          start_year="Setembro 2020"
          end_year="Dezembro 2020"
        />
        <AcademicItem 
          school="ETEC de Cotia"
          course="Técnico de Informática"
          start_year="2016"
          end_year="2017"
        />
        <div className="black-fade"></div>
    </section>
  )
}

