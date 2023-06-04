"use client"; // This is a client component 👈🏽

import {useState, useEffect } from 'react';
import VideoCard from './videoCard';
// import Card from '@/components/card'
// import { idText } from 'typescript';
// import { metadata } from '../app/(default)/page';

export interface VgaPostProps { 
id:string 
title?:string 
description?:string 
media_type: string
media_url: string
permalink: string
caption: string
}
export interface VideosPageProps{
  title: string,
  description: string
}

const descriptions: Description[] = [
  {
    title: "Melhorias para o Servidor",
    description: "Conheça propostas e iniciativas para promover melhores condições de trabalho, valorização profissional e benefícios para os servidores públicos."
  },
  {
    title: "Programas de Capacitação",
    description: "Saiba mais sobre programas de capacitação e desenvolvimento profissional para os servidores, incluindo oportunidades de treinamento e cursos específicos."
  },
  {
    title: "Saúde e Qualidade de Vida",
    description: "Descubra as ações voltadas para a saúde e qualidade de vida dos servidores, como programas de bem-estar, acesso a atividades físicas e políticas de prevenção de doenças ocupacionais."
  },
  {
    title: "Infraestrutura e Tecnologia",
    description: "Informe-se sobre projetos de melhoria da infraestrutura e tecnologia nas instituições públicas, visando proporcionar um ambiente de trabalho moderno e eficiente."
  },
  {
    title: "Valorização do Servidor",
    description: "Conheça propostas para a valorização do servidor público, abordando aspectos como planos de carreira, progressão salarial e reconhecimento de mérito."
  },
  {
    title: "Direitos e Benefícios",
    description: "Aprenda sobre os direitos e benefícios garantidos aos servidores públicos, como licenças, gratificações e benefícios previdenciários."
  }
];


export default function Instagram(props: VideosPageProps) {
  const {title, description} = props
  const [instagramPosts, setInstagramPosts] = useState<any>([])
  // const handlerData = (data: any) => {
  //   let arr = []
  //   if(data !== undefined){
  //     arr = data.items
  //     arr.forEach((element) => {
  //       console.log(element)
  //     });
  //   }

  // }
useEffect(()=> {
  const handlerAsync = async () => {
    const data = await fetch('http://localhost:3000/api/hello')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error))
    console.log(data.data[0], '@@@')

    setInstagramPosts(data.data)
  }
  handlerAsync().then((e)=>e).catch(err=>console.log(err))
}, [])

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-left pb-12 md:pb-20">
            <h2 className="h2 mb-4">{title}</h2>
            <p className="text-xl text-left text-gray-400">{description}</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {instagramPosts?.map((card: any) => {
              const randomIndex = Math.floor(Math.random() * instagramPosts.length);

              console.log(instagramPosts, '@@@@@')
              return (
                <VideoCard
                  title={card.title}
                  description={descriptions[randomIndex].description}
                  video_url={card.video_url}
                  media_url={card.media_url}
                  />
              )
            })}
            {/* {} */}
          </div>
        </div>
      </div>
    </section>
  )
}
