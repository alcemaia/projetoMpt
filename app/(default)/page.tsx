"use client"; // This is a client component 👈🏽

import {useState, useEffect } from 'react';
import Hero from '@/components/hero'
import Instagram from '@/components/instagram'
import Videos from '@/components/videos'
import Zigzag from '@/components/zigzag'
import { apiInstagram } from '../services/getInstagramData';
import { apiYouTube } from '../services/getYoutubeData';
import Sobre from '@/components/sobre';
import Agenda from '@/components/agenda';


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

  return (
    <>
      <div className="bg-cover bg-center bg-opacity-70 TTT" style={{ 
        backgroundImage: "url('/images/MosaicBackground_50.png')",
        }}>
        <Hero
          title={'Márcio Amazonas, candidato a PGT'}
          description={'MPT DE TODAS E TODOS'}
          />
        <section key="marcio" id="marcio">
          <Sobre />
        </section>
        <section key="agenda" id="agenda">
          <Agenda />
        </section>
        <section key="propostas" id="propostas">
          <Zigzag />
        </section>
        {
          YouTubePosts[0] !== undefined && 
            <section key="videos" id="videos">
              <Videos
                title={'MPT+ TV'}
                ytPosts={YouTubePosts}
              />
            </section>
        }
        {
          InstagramPosts[0] !== undefined && (
          <section key="Instagram" id="Instagram">
            <Instagram 
              title={'@marcio.amazonas'}
              igPosts={InstagramPosts}
              />
          </section>
        )}
      </div> 
    </>
  )
}
