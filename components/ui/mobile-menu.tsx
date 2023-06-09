'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const staged = process.env.NEXT_PUBLIC_STG
  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="bg-custom-300 px-4 py-2">
          <li>
            <Link href="/#marcio" 
            className="flex font-medium w-full text-custom-200 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              MÁRCIO
            </Link>
          </li>
          <li>
            <Link href="/#propostas" 
            className="flex font-medium w-full text-custom-200 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              MPT+
            </Link>
          </li>
          <li>
            <Link href="/#agenda" 
            className="flex font-medium w-full text-custom-200 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
            AGENDA
            </Link>
          </li>
          <li>
            <Link href="/#videos" 
            className="flex font-medium w-full text-custom-200 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
            VÍDEOS
            </Link>
          </li>
          <li>
            <Link href="/contato" 
            className="flex font-medium w-full text-custom-200 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              PARTICIPE
            </Link>
          </li>
          { staged !== 'prod' && 
            (
              <li>
                <Link href="/d7b459d50991451c9d0c8d5752540f4c" className="flex font-medium w-full text-custom-200 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
                  DATA
                </Link>
              </li>
            )}
        </ul>
      </nav>
    </div>
  )
}
