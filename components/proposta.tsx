'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Proposta(props: any) {
  const {topTitle, title, description, img, isLeft, itemA, itemB, itemC} = props
  // const [bannerOpen, setBannerOpen] = useState<boolean>(false)
  const mockUrl = "https://scontent.cdninstagram.com/v/t51.2885-15/82318333_470935963599832_2235932132522600038_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=4nskLHruwT8AX8FgAN1&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDNxRiWTFhhxKbFiobovQffrWn-CW5QqyqD18Jm8B_KGA&oe=647039A1"
  const side = isLeft
  return (
<>

{
  side && 
    <>
      <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={img} width={540} height={405} alt="Features 02" />
      </div>
      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
        <div className="md:pl-4 lg:pl-12 xl:pl-16">
          <div className="font-architects-daughter text-xl text-purple-600 mb-2">{topTitle}</div>
          <h3 className="h3 mb-3">{title}</h3>
          <p className="text-xl text-gray-400 mb-4">{description}</p>
          <ul className="text-lg text-gray-400 -mb-2">
            <li className="flex items-center mb-2">
              <svg className="w-3 h-3 fill-current text-purple-700 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>{itemA}</span>
            </li>
            <li className="flex items-center mb-2">
              <svg className="w-3 h-3 fill-current text-purple-700 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>{itemB}</span>
            </li>
            <li className="flex items-center">
              <svg className="w-3 h-3 fill-current text-purple-700 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>{itemC}</span>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </>
  }
{
  !side && 
    <>
      <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
        {/* Image */}
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
          <Image className="max-w-full mx-auto md:max-w-none h-auto" src={img} width={540} height={405} alt="Features 01" />
        </div>
        {/* Content */}
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
          <div className="md:pr-4 lg:pr-12 xl:pr-16">
            <div className="font-architects-daughter text-xl text-custom-100 mb-2">{topTitle}</div>
            <h3 className="h3 mb-3 text-custom-100 ">{title}</h3>
            <p className="text-xl text-gray-400 mb-4">{description}</p>
            <ul className="text-lg text-gray-400 -mb-2">
              <li className="flex items-center mb-2">
                <svg className="w-3 h-3 fill-current text-purple-700 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{itemA}</span>
              </li>
              <li className="flex items-center mb-2">
                <svg className="w-3 h-3 fill-current text-purple-700 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{itemB}</span>
              </li>
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-current text-purple-700 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{itemC}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  }

</>
  )
}
