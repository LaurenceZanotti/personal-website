import Navbar from "./Navbar"

export default function Header() {

  return (
    <header>
        <Navbar />
        <div className="profile-picture"></div>
        <h1 className="name">Laurence Zanotti</h1>
        <h2 className="title">Front-end Web Developer</h2>
        <p>Projetando e construindo interfaces de usuário e experiências inesquecíveis</p>
        <div>BAIXAR CV</div>
        <div className="scroll-icon">
            <div className="ball"></div>
        </div>
    </header>
  )
}