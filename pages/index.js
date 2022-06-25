import Header from "../components/Header/Header";
import Work from "../components/Work/Work";
import Academic from "../components/Academic/Academic";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Home() {
  
  useEffect(() => {
    // This code adapts the height of the Header container (see Header.module.css)
    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <Work />
        <Academic />
        <Contact />
      </main>
      <Footer/>
    </>
  )
}
