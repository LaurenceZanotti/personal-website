import Header from "../components/Header/Header";
import Work from "../components/Work";
import Academic from "../components/Academic";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {

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
