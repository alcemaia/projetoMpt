import React from 'react'
import Link from 'next/link'
import Logo from '../logo'

export default function Footer() {
  return (
    <footer>
      <div className="bg-cover bg-center" style={{
          // backgroundImage: "url('/images/MosaicBackground.png')",
          backgroundColor: '#e9e9e2'
          }}>
      <div className="py-12 md:py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
            <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Logo />
            </Link>
            </div>
              <div className="text-vermelho-900">MPT+</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 flex justify-end sm:grid-cols-3 gap-8">
              
              <div className="justify-end">
                <h6 className="text-gray-200 font-medium mb-1">MPT+</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">mpt.mp.br</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">PGT</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="https://www.youtube.com/@marcioamazonas9054" className="flex justify-center items-center text-custom-300 bg-vermelho-900 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="30px"
                    height="30px"
                  >   
                    <path fill='white' d="M 15 4 z M 12 10.3984 L 20 15 L 12 19.6016 L 12 10.3984 z"/>
                    </svg>  
                </Link>
              </li>
              
              <li className="ml-4">
                <Link target="_blank" href="https://www.instagram.com/marcio.amazonas/" className="flex justify-center items-center text-custom-300 bg-vermelho-900 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              {/*<li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-custom-300 bg-vermelho-900 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>*/}
              
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Márcio Amazonas. Todos os direitos reservados.</div>

          </div>

        </div>
      </div>
      </div>
    </footer>
  )
}
