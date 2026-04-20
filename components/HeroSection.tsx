'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function HeroSection({ nextSectionId }: { nextSectionId: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [blurAmount, setBlurAmount] = useState(0)
  const initialVideoRef = useRef<HTMLVideoElement>(null)
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  // Watch when the next section enters the viewport
  useEffect(() => {
    const target = document.getElementById(nextSectionId)
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setScrolled(true)
        else setScrolled(false)
      },
      { threshold: 0.05 }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [nextSectionId])

  // Gradually increase blur as user scrolls deeper into the page
  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight
      const ratio = Math.min(window.scrollY / vh, 1)
      setBlurAmount(ratio * 8) // max 8px blur
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Play hero.mp4 from start when transition triggers
  useEffect(() => {
    if (scrolled && heroVideoRef.current) {
      heroVideoRef.current.currentTime = 0
      heroVideoRef.current.play().catch(() => {})
    }
  }, [scrolled])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* hero-initial.mp4 — always looping underneath */}
      <video
        ref={initialVideoRef}
        src="/media/hero-initial.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
        style={{ opacity: scrolled ? 0 : 1 }}
      />

      {/* hero.mp4 — fades in on scroll + blur grows */}
      <video
        ref={heroVideoRef}
        src="/media/hero.mp4"
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
        style={{
          opacity: scrolled ? 1 : 0,
          filter: `blur(${blurAmount}px)`,
          transform: 'scale(1.04)', // hide blur edges
        }}
      />

      {/* Dark gradient overlay — always on top of videos */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1A1F2E]/85 via-[#1A1F2E]/55 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-[1120px] mx-auto px-6 py-24">
        <div className="max-w-xl">
          <p className="text-[#52B788] text-sm font-medium tracking-wide uppercase mb-4">
            Tu gestoría de confianza en Girona
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Gestoría de confianza en Girona
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            Contabilidad, nóminas y trámites para pymes que quieren crecer sin complicaciones fiscales.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contacto"
              className="inline-flex justify-center items-center px-7 py-3 rounded-lg text-base font-semibold text-white bg-[#2D6A4F] hover:bg-[#1B4332] transition-colors duration-200"
              style={{ boxShadow: 'var(--shadow-cta)' }}
            >
              Hablar con un gestor
            </Link>
            <Link
              href="/servicios"
              className="inline-flex justify-center items-center px-7 py-3 rounded-lg text-base font-semibold text-white border border-white/40 hover:border-white/70 hover:bg-white/10 transition-colors duration-200"
            >
              Nuestros servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
