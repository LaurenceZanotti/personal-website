import WorkItem from './WorkItem'
import styles from './Work.module.css'

import jobfindrMockup from '../../public/imgs/jobfindr_mockup.jpg'
import followphoneMockup from '../../public/imgs/followphone_mockup.png'
import countfinMockup from '../../public/imgs/countfin_mockup.png'
import blackbg from '../../public/imgs/blackbg.png'

export default function Work() {
  return (
    <section className={styles.container_work} id="work">
        <div className={styles.header}>
          <h2 className="text-base lg:text-3xl m-auto lg:mb-2">Projetos Recentes</h2>
          <p className="text-xs lg:text-base">Confira meus trabalhos mais recentes. Também tem muito mais no <a href="https://github.com/LaurenceZanotti">GitHub</a>.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <WorkItem
            img={jobfindrMockup}
            title="Jobfindr"
            description="Plataforma que facilita o encontro de profissionais com seus futuros empregadores e caçadores de talentos. Feito em Next.js e Django (wip)"
            link="https://github.com/LaurenceZanotti/cs50web-capstone"
          />
          <WorkItem
            img={followphoneMockup}
            title="FollowPhone"
            description="Aplicativo web que ajuda a acompanhar as conversas com amigos ou até parceiros de negócios. Feito em Flask e JavaScript"
            link="https://github.com/LaurenceZanotti/cs50x2020-followphone"
          />
          <WorkItem
            img={countfinMockup}
            title="Countfin App"
            description="Aplicativo web que auxilia no controle de finanças pessoais. Feito em JavaScript puro com princípios de POO."
            link="https://github.com/LaurenceZanotti/countfin-app"
          />
          <WorkItem
            img={blackbg}
            title="Achou interessante?"
            description="Confira meu GitHub. Há muitos projetos interessantes por lá!"
            link="https://github.com/LaurenceZanotti"
            button="Acessar GitHub"
          />
        </div>
    </section>
  )
}
