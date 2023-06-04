'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function VideoCard(props: any) {
  const {title, description, video_url, media_url} = props
  const [bannerOpen, setBannerOpen] = useState<boolean>(false)
  const mockUrl = "https://scontent.cdninstagram.com/v/t51.2885-15/82318333_470935963599832_2235932132522600038_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=4nskLHruwT8AX8FgAN1&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDNxRiWTFhhxKbFiobovQffrWn-CW5QqyqD18Jm8B_KGA&oe=647039A1"

  return (
    <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
        <img className="h-40 w-full object-cover" src={media_url} />

        <button 
          className="absolute group m-11"
          onClick={() => { console.log(true) }} 
          aria-label="Watch the video">
                    <Link
        target="_blank" 
        href={video_url}
        >
        <svg 
          className="w-20 h-20 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
              <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
              <stop stopColor="#EBF1F5" offset="100%" />
            </linearGradient>
          </defs>
      <circle fill="url(#a)" cx="44" cy="44" r="44" />
      <path className="fill-current text-vermelho-900" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
    </svg>
            </Link>
  </button>
        <h4
          className="h4 mb-2 text-justify-left text-vermelho-900"
        >
          {title}
        </h4>
        <p 
          className="text-lg text-gray-400 text-justify-left"
        >
          {description}
        </p>
    </div>
  )
}



{/* <div>
<div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
  <Image src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
  <button className="absolute group" onClick={() => { setModalOpen(true) }} aria-label="Watch the video">
    <svg className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
          <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
          <stop stopColor="#EBF1F5" offset="100%" />
        </linearGradient>
      </defs>
      <circle fill="url(#a)" cx="44" cy="44" r="44" />
      <path className="fill-current text-purple-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
    </svg>
  </button>
</div>
</div> */}