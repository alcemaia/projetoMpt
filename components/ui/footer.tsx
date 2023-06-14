import React from 'react'
import Link from 'next/link'
import Logo from '../logo'

export default function Footer() {
  return (
    <footer>
      <div className="bg-cover bg-center" style={{
          backgroundColor: '#e9e9e2'
          }}>
      <div className="py-12 md:py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            <div className="md:col-span-4 lg:col-span-5">
            <div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Cruip">
              <Logo />
            </Link>
            </div>
            </div>
            <div className="md:col-span-8 lg:col-span-7 flex justify-end sm:grid-cols-3 gap-8">
              <div className="justify-end">
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
            </ul>
              </div>
            </div>
          </div>
          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            <ul className="flex mb-2 md:order-1 md:ml-4 md:mb-0">
            </ul>
            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Márcio Amazonas. All rights reserved.</div>
          </div>

        </div>
      </div>
      </div>
    </footer>
  )
}
