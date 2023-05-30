'use client'

import { useState } from 'react'
import IMG from '@/public/images/m.svg'
import FeatImage01 from '@/public/images/features-03-image-01.png'
import Image from 'next/image'

export default function Logo(props: any) {
  // const {title, description, img} = props
  // const [bannerOpen, setBannerOpen] = useState<boolean>(false)
  // const mockUrl = "https://scontent.cdninstagram.com/v/t51.2885-15/82318333_470935963599832_2235932132522600038_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=4nskLHruwT8AX8FgAN1&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDNxRiWTFhhxKbFiobovQffrWn-CW5QqyqD18Jm8B_KGA&oe=647039A1"

  return (
  //   <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
  // </svg>
  <Image className="w-50 h-50 mb-4" src={IMG}  width={120} height={10} alt="Features 02"  />

  )
}       
//  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={img} width={540} height={405} />
