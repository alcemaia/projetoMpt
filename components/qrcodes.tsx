'use client'

// import { useState } from 'react'
import Image from 'next/image'
import { useQRCode } from 'next-qrcode';
import Codebox from './codebox';
 
export default function Qrcodes(props: any) {
  const data = [
    {
      title: 'Titulo QrCode A',
      subtitle: 'subtitulo do qrcode a',
      link: process.env.NEXT_PUBLIC_QRCODE_A,
      side: false
    },
    {
      title: 'Titulo QrCode B',
      subtitle: 'subtitulo do qrcode b',
      link: process.env.NEXT_PUBLIC_QRCODE_B,
      side: true
    },
    {
      title: 'Titulo QrCode C',
      subtitle: 'subtitulo do qrcode c',
      link: process.env.NEXT_PUBLIC_QRCODE_C,
      side: false
    },
    {
      title: 'Titulo QrCode D',
      subtitle: 'subtitulo do qrcode d',
      link: process.env.NEXT_PUBLIC_QRCODE_D,
      side: true
    }
  ]
  return (
    <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20 border-t border-gray-800">
        <div className="max-w-3xl text-vermelho-900 mx-auto text-center pb-12 md:pb-16">
          <h1 className="mt-20 h2 mb-4">Dados sigilosos, proibida a reprodução</h1>
        </div>
          {data?.map(ee=> (
            <Codebox
              key={ee.title}
              link={ee.link}
              side={ee.side}
              title={ee.title}
              subtitle={ee.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
    )}
