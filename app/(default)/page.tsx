export const metadata = {
  title: 'Márcio Amazonas',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Propostas from '@/components/propostas'
import Instagram from '@/components/instagram'
import Videos from '@/components/videos'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import proposta from '@/components/proposta'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero
        title={'Márcio Amazonas, candidato a PGT'}
        description={'MPT DE TODAS E TODOS'}
        />
      <section key="propostas" id="propostas">
        <Zigzag
        /></section>
      <section key="Instagram" id="Instagram">
        <Instagram 
          title={'Acompanhe a campanha pelo Instagram'}
          description={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        /></section>
      <section key="videos" id="videos">
        <Videos
          title={'Assista nossas ultimas ações'}
          description={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        /></section>
      {/* <section key="propostas" id="propostas"><Propostas /></section> */}
      {/* <section key="propostas" id="propostas"><Zigzag /></section> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  )
}
{/* <section key="navWrap" className={styles.navWrap}>
<a key="services" href="/#">home</a>
<a key="portfolio" href="/#portfolio">portfolio</a>
<a key="contact" href="/#contact">contact</a>
<a key="about" href="/#about">about</a>
<Link key="blog" href="/blog">blog</Link> */}