'use client'

import { useQRCode } from 'next-qrcode';

export default function Codebox(props: any) {

  const { Image } = useQRCode();
  const {link, subtitle, title, side,} = props
  const styleFragment = side ? ' rtl ' : ' md:order-1'
  const className = "max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-10 md:mb-0"
  const style = className + styleFragment

  return (
    <div className="mb-20 md:grid md:grid-cols-12 md:gap-6 items-center">

        <div className={style} data-aos="fade-up" >
          <div className='bd-gray-900 p-10 flex justify-center' >
              <Image
                text={link}
                options={{
                  type: 'image/jpeg',
                  quality: 0.3,
                  level: 'M',
                  margin: 4,
                  scale: 4,
                  width: 250,
                  color: {
                    dark: '#082945',
                    light: '#e9e9e2',
                  },
                }}
                />
          </div>
        </div>
        <div className="max-w-xl text-vermelho-900 md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
          <div className='bd-gray-900 p-10 flex justify-right' >
          <div className="md:pl-4 lg:pl-12 xl:pl-16">

            <h3 className="h3 mb-3">{title}</h3>
            <ul className="text-lg text-gray-400 -mb-2">
                <li className="flex items-center mb-2">
                <span>{subtitle}</span>
              </li>
            </ul>
          </div>
          </div>
        </div>
    </div>
  )
}





