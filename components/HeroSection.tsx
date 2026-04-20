'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'

// How many viewport-heights of scroll space the hero animation occupies.
// At 300vh the user has ~3 screens of scroll to play through 5.2s of video.
const SCROLL_VH = 300

export default function HeroSection() {
  const wrapperRef   = useRef<HTMLDivElement>(null)
  const initialVidRef = useRef<HTMLVideoElement>(null)
  const scrollVidRef  = useRef<HTMLVideoElement>(null)
  const rafRef        = useRef<number>(0)

  const [ready, setReady]           = useState(false)   // scroll video preloaded
  const [progress, setProgress]     = useState(0)       // 0–1
  const [isScrolling, setScrolling] = useState(false)   // past first pixel

  // Preload the scroll video before allowing scrubbing
  useEffect(() => {
    const v = scrollVidRef.current
    if (!v) return
    const onReady = () => setReady(true)
    if (v.readyState >= 3) { setReady(true); return }
    v.addEventListener('canplaythrough', onReady, { once: true })
    return () => v.removeEventListener('canplaythrough', onReady)
  }, [])

  const updateScroll = useCallback(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const scrollY    = window.scrollY
    const maxScroll  = wrapper.offsetHeight - window.innerHeight
    if (maxScroll <= 0) return

    const p = Math.min(Math.max(scrollY / maxScroll, 0), 1)
    setProgress(p)
    setScrolling(scrollY > 2)

    // Scrub video — never call play(), just set currentTime
    const sv = scrollVidRef.current
    if (sv && ready && isFinite(sv.duration) && sv.duration > 0) {
      sv.currentTime = p * sv.duration
    }
  }, [ready])

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateScroll)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [updateScroll])

  // Pause initial video once scrolling starts
  useEffect(() => {
    const iv = initialVidRef.current
    if (!iv) return
    if (isScrolling) iv.pause()
    else iv.play().catch(() => {})
  }, [isScrolling])

  // Derived values
  const textOpacity  = Math.max(0, 1 - progress * 3)          // text fades at first 33%
  const exitProgress = Math.max(0, (progress - 0.82) / 0.18)  // hero exits last 18%
  const heroY        = exitProgress * -100                      // -100vh at exit
  const heroOpacity  = 1 - exitProgress

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${SCROLL_VH}vh` }}
      aria-label="Sección hero"
    >
      <div
        className="sticky top-0 h-screen overflow-hidden will-change-transform"
        style={{
          transform: `translateY(${heroY}vh)`,
          opacity: heroOpacity,
        }}
      >
        {/* ── hero-initial.mp4: loops at rest ── */}
        <video
          ref={initialVidRef}
          src="/media/hero-initial.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-opacity duration-700"
          style={{ opacity: isScrolling ? 0 : 1 }}
        />

        {/* ── hero.mp4: scrubbed by scroll ── */}
        <video
          ref={scrollVidRef}
          src="/media/hero.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-opacity duration-700"
          style={{ opacity: isScrolling ? 1 : 0 }}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#1A1F2E]/80 via-[#1A1F2E]/40 to-transparent" />

        {/* Hero content — fades out in first third of scroll */}
        <div
          className="relative z-20 max-w-[1120px] mx-auto px-6 h-full flex items-center"
          style={{ opacity: textOpacity, transform: `translateY(${progress * -30}px)` }}
        >
          <div className="max-w-xl">
            <p className="text-[#52B788] text-sm font-medium tracking-widest uppercase mb-5">
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
                className="glass-btn-primary inline-flex justify-center items-center px-7 py-3 rounded-xl text-base font-semibold text-white hover:bg-[#2D6A4F]/90 transition-all duration-200"
              >
                Hablar con un gestor
              </Link>
              <Link
                href="/servicios"
                className="glass-btn-ghost inline-flex justify-center items-center px-7 py-3 rounded-xl text-base font-semibold text-white hover:bg-white/20 transition-all duration-200"
              >
                Nuestros servicios
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint — vanishes once scrolling */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-500"
          style={{ opacity: isScrolling ? 0 : 0.7 }}
        >
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 text-white/60 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
