"use client"; // This is a client component 👈🏽

import Card from '@/components/card'
import {useState, useEffect } from 'react';
import { idText } from 'typescript';
import { metadata } from '../app/(default)/page';

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
export default function Instagram(props: VideosPageProps) {
  const {title, description} = props
  const accessToken = process.env.NEXT_PUBLIC_IG_TOKEN
  const fields = 'media_url,media_type,permalink,id,caption'
  const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}`
  const [instagramPosts, setInstagramPosts] = useState<any>([])
  
useEffect(()=> {
  fetch(
    url
    )
  .then(response => response.json())
  .then(data => {
    // Process the response data
    if (data.data !== undefined) { 
      const arr = data.data
      const lastSix = arr.filter((post:any, index: number) => {
        if(index <= 5) return true
        return false
      })
      if(lastSix !== undefined) {
        const postData: VgaPostProps = lastSix.map((post: any) => {
          const returnPost: VgaPostProps = {
            id: post.id, 
            title: post.caption,
            description: 'Está é a descrição da proposta, post do Instagram ou vídeo.', 
            media_type: post.media_type,
            media_url: post.media_url,
            permalink: post.permalink,
            caption: post.caption
          }
          return returnPost
        } )
        setInstagramPosts(postData)
      }
    }
    console.log('');
    // Handle or display the posts as needed
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
  });
}, [])

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">{title}</h2>
            <p className="text-xl text-gray-400">{description}</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {instagramPosts?.map((card: any) => {
              console.log(instagramPosts)
              return (
                <Card
                  title={card.title}
                  description={card.description}
                  img={card.media_url}
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
