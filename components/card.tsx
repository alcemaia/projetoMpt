'use client'

import { useState } from 'react'

export default function Card(props: any) {
  const {title, description, img} = props
  const [bannerOpen, setBannerOpen] = useState<boolean>(false)
  const mockUrl = "https://scontent.cdninstagram.com/v/t51.2885-15/82318333_470935963599832_2235932132522600038_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=4nskLHruwT8AX8FgAN1&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDNxRiWTFhhxKbFiobovQffrWn-CW5QqyqD18Jm8B_KGA&oe=647039A1"

  return (
    <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
        <img className="w-50 h-50 mb-4" src={img} />
        <h4
          className="h4 mb-2"
        >
          {title}
        </h4>
        <p 
          className="text-lg text-gray-400 text-center"
        >
          {description}
        </p>
    </div>
  )
}
