import Head from 'next/head'
import { Inter } from '@next/font/google'

import Particle from './components/Particle.jsx'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>

      <Particle />

      <Head>
        <title>Nestor Developer Frontend</title>
        <meta name="frontend developer" content="build new projects with me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="main">

        <Navbar />

        <About />

        <Experience />

      </main>
    </>
  )
}
