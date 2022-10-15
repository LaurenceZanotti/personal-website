import WorkItem from "./WorkItem";
import styles from "./Work.module.css"

export default function Work() {
  return (
    <section className={styles.container_work} id="work">
        <div className={styles.header}>
          <h2>Projetos Recentes</h2>
          <p>Confira meus trabalhos mais recentes. Também tem muito mais no <a href="https://github.com/LaurenceZanotti">GitHub</a>.</p>
        </div>
        <div className="container_work_items">
          <WorkItem 
            img="jobfindr_mockup.jpg"
            title="Jobfindr" 
            description="Plataforma que facilita o encontro de profissionais com seus futuros empregadores e caçadores de talentos. Feito em Next.js e Django (wip)" 
            link="https://github.com/LaurenceZanotti/cs50web-capstone"
          />
          <WorkItem 
            img="followphone_mockup.png"
            title="FollowPhone" 
            description="Aplicativo web que ajuda a acompanhar as conversas com amigos ou até parceiros de negócios. Feito em Flask e JavaScript" 
            link="https://github.com/LaurenceZanotti/cs50x2020-followphone"
          />
          <WorkItem 
            img="countfin_mockup.png"
            title="Countfin App" 
            description="Aplicativo web que auxilia no controle de finanças pessoais. Feito em JavaScript puro com princípios de POO." 
            link="https://github.com/LaurenceZanotti/countfin-app"
          />
          <WorkItem 
            img=""
            title="Achou interessante?" 
            description="Confira meu GitHub. Há muitos projetos interessantes por lá!" 
            link="https://github.com/LaurenceZanotti"
            button="Acessar GitHub"
          />
        </div>
    </section>
  )
}