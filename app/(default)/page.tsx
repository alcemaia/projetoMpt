"use client"; // This is a client component 👈🏽

export const metadata = {
  title: 'Márcio Amazonas',
  description: 'Page description',
}

import {useState, useEffect } from 'react';
import Hero from '@/components/hero'
import Instagram from '@/components/instagram'
import Videos from '@/components/videos'
import Zigzag from '@/components/zigzag'
import { apiInstagram } from '../services/getInstagramData';
import { apiYouTube } from '../services/getYoutubeData';
import Proposta from '@/components/proposta';

export default function Home() {
  const [InstagramPosts, setInstagramPosts] = useState<any>([])
  const [YouTubePosts, setYouTubePost] = useState<any>([])
  
  useEffect(()=> {
  }, [InstagramPosts, YouTubePosts])
  
  useEffect(()=> {
    apiInstagram().then(igData=>{
      if(igData !== undefined) setInstagramPosts(igData)
    }).catch(e=>console.log(e))
    apiYouTube().then(ytData=>{
      if(ytData !== undefined) setYouTubePost(ytData)
    }).catch(e=>console.log(e))
  }, [])

  const zigzagComponent = <Zigzag />;
  return (
    <>
      <Hero
        title={'Márcio Amazonas, candidato a PGT'}
        description={'MPT DE TODAS E TODOS'}
        />
        <section key="MPT+" id="">
        < zigzagComponent/>
      </section>
      <section key="propostas" id="propostas">
        <Zigzag />
      </section>
      {InstagramPosts[0] !== undefined && (
        <section key="Instagram" id="Instagram">
          <Instagram 
            title={'@marcio.amazonas'}
            //description={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            igPosts={InstagramPosts}
            />
        </section>
      )}
      {YouTubePosts[0] !== undefined && 
      <section key="videos" id="videos">
        <Videos
          title={'MPT+  Programa de gestão'}
          //description={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          ytPosts={YouTubePosts}
        />
      </section>
      } 
    </>
  )
}
