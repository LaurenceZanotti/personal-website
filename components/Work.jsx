import WorkItem from "./WorkItem";

export default function Work() {
  return (
    <section className="container-work">
        <h2>Projetos Recentes</h2>
        <p>Confira meus trabalhos mais recentes. Também tem muito mais no <a href="https://github.com/LaurenceZanotti">GitHub</a> ou no <a href="#">blog</a>!</p>
        <div className="container-work-items">
          <WorkItem 
            title="Jobfindr" 
            description="Plataforma que facilita o encontro de profissionais com seus futuros empregadores e caçadores de talentos. Feito em Next.js e Django (wip)" 
          />
          <WorkItem 
            title="FollowPhone" 
            description="Aplicativo web que ajuda a acompanhar as conversas com amigos ou até parceiros de negócios. Feito em Flask e JavaScript" 
          />
          <WorkItem 
            title="Countfin App" 
            description="Aplicativo web que auxilia no controle de finanças pessoais. Feito em JavaScript puro com princípios de POO." 
          />
          <WorkItem 
            title="Achou interessante?" 
            description="Confira meu blog. Lá falo sobre projetos pessoais, como fiz eles e muito mais sobre tecnologia." 
          />
        </div>
    </section>
  )
}