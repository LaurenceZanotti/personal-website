import type { Metadata } from 'next'

import Header from '../components/Header/Header'
import Work from '../components/Work/Work'
import Academic from '../components/Academic/Academic'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Laurence Zanotti | Full Stack Web Developer',
  openGraph: {
    title: 'Laurence Zanotti | Full Stack Web Developer',
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Work />
        <Academic />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
