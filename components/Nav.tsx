'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  const links = [
    { href: '/servicios',       label: 'Servicios' },
    { href: '/sobre-nosotros',  label: 'Sobre nosotros' },
    { href: '/blog',            label: 'Blog' },
    { href: '/contacto',        label: 'Contacto' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 select-none">
          <span className="text-sm font-semibold text-white/90" style={{ fontFamily: 'var(--font-jakarta)' }}>
            Gestoria Ramón
          </span>
          <span className="text-sm font-semibold text-[#52B788]" style={{ fontFamily: 'var(--font-jakarta)' }}>
            &nbsp;Muntaner
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-[#52B788]'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="glass-btn-primary ml-1 px-5 py-2 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all duration-200"
          >
            Claim a Spot ↗
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white"
          aria-label="Abrir menú"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all"></span>
          <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all"></span>
          <span className="block w-5 h-0.5 bg-current transition-all"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-dark border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-[#52B788] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="glass-btn-primary inline-flex justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
          >
            Contactar
          </Link>
        </div>
      )}
    </header>
  )
}
