'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const links = [
    { href: '/servicios', label: 'Servicios' },
    { href: '/sobre-nosotros', label: 'Sobre nosotros' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--color-cloud)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <span
            className="text-base font-semibold leading-tight"
            style={{ fontFamily: 'var(--font-jakarta)', color: '#1A1F2E' }}
          >
            Gestoria Ramón
          </span>
          <span
            className="text-base font-semibold leading-tight"
            style={{ fontFamily: 'var(--font-jakarta)', color: '#2D6A4F' }}
          >
            &nbsp;Muntaner
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-[#2D6A4F]'
                  : 'text-[#3D4A5C] hover:text-[#2D6A4F]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="ml-2 px-5 py-2 rounded-lg text-sm font-semibold text-white bg-[#2D6A4F] hover:bg-[#1B4332] transition-colors duration-200"
            style={{ boxShadow: 'var(--shadow-cta)' }}
          >
            Contactar
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md text-[#3D4A5C]"
          aria-label="Abrir menú"
        >
          <span className="block w-5 h-0.5 bg-current mb-1"></span>
          <span className="block w-5 h-0.5 bg-current mb-1"></span>
          <span className="block w-5 h-0.5 bg-current"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--color-cloud)] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#3D4A5C] hover:text-[#2D6A4F]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="inline-flex justify-center px-5 py-2 rounded-lg text-sm font-semibold text-white bg-[#2D6A4F]"
          >
            Contactar
          </Link>
        </div>
      )}
    </header>
  )
}
