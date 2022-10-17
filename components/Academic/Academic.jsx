import AcademicItem from "./AcademicItem";

export default function Academic() {
  return (
    <section className="
      bg-cover 
      bg-black/[.85]
      bg-book-bg 
      bg-blend-multiply
      flex 
      flex-col 
      items-center
      overflow-hidden
      " 
      id="academic"
    >
        <div className="h-32 sm:h-64 w-full bg-gradient-to-b from-black"></div>
        <h2 className="text-center my-4 text-lg lg:text-3xl font-bold">Formação</h2>
        <div className="text-center">
          <AcademicItem logo="estacio" className="flex flex-wrap sm:flex-nowrap justify-evenly sm:justify-between items-center gap-4 w-9/12 sm:w-[22rem] m-auto sm:min-w-[26rem] border-b border-white">
            <h3 className="school text-lg font-bold">Universidade Estácio de Sá</h3>
            <p className="curso">Análise e Desenvolvimento de Sistemas</p>
            <p className="periodo">2022 - em andamento</p>
          </AcademicItem>
          <AcademicItem logo="harvard" className="flex flex-wrap sm:flex-nowrap justify-evenly sm:justify-between items-center gap-4 w-9/12 sm:w-[22rem] m-auto sm:min-w-[26rem] sm:flex-row-reverse  border-b border-white">
            <h3 className="school text-lg font-bold">Harvard CS50 Web</h3>
            <p className="curso">CS50's Web Programming with Python and JavaScript</p>
            <p className="periodo">2021 - em andamento</p>
          </AcademicItem>
          <AcademicItem logo="harvard" className="flex flex-wrap sm:flex-nowrap justify-evenly sm:justify-between items-center gap-4 w-9/12 sm:w-[22rem] m-auto sm:min-w-[26rem] border-b border-white">
            <h3 className="school text-lg font-bold">Harvard CS50</h3>
            <p className="curso">CS50's Introduction to Computer Science</p>
            <p className="periodo">Setembro 2020 - Dezembro 2020</p>
          </AcademicItem>
          <AcademicItem logo="etec" className="flex flex-wrap sm:flex-nowrap justify-evenly sm:justify-between items-center gap-4 w-9/12 sm:w-[22rem] m-auto sm:min-w-[26rem] sm:flex-row-reverse border-b border-white">
            <h3 className="school text-lg font-bold">ETEC de Cotia</h3>
            <p className="curso">Técnico de Informática</p>
            <p className="periodo">2016 - 2017</p>
          </AcademicItem>
        </div>
        <div className="h-32 sm:h-64 w-full bg-gradient-to-t from-black"></div>
    </section>
  )
}

