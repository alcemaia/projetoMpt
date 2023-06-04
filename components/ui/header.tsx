import Link from 'next/link'
import Logo from '../logo'
import MobileMenu from './mobile-menu'

export default function Header() {
  const staged = process.env.NEXT_PUBLIC_STG
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Logo />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/contato"
                  className="font-bold text-custom-200 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  CONTATO
                </Link>
              </li>
              <li>
                <Link
                  href="/#propostas"
                  className="font-bold text-custom-200 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  PROPOSTAS
                </Link>
              </li>
              <li>
                <Link
                  href="/#Instagram"
                  className="font-bold text-custom-200 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  INSTAGRAM
                </Link>
              </li>
              <li>
                <Link
                  href="/#videos"
                  className="font-bold text-custom-200 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  VÍDEOS
                </Link>
              </li>
              { staged !== 'prod' && (
              <li>
                <Link
                  href="/d7b459d50991451c9d0c8d5752540f4c"
                  className="btn-sm text-white bg-custom-200 hover:bg-purple-700 ml-3">
                  DATA
                </Link>
              </li>
              )}
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
