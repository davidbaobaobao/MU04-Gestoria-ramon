'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  title: string
  desc: string
  video: string
}

export default function PorqueCard({ title, desc, video }: Props) {
  const videoRef    = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (visible) v.play().catch(() => {})
    else { v.pause(); v.currentTime = 0 }
  }, [visible])

  return (
    <div
      ref={containerRef}
      className="glass-card rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-[#2D6A4F]/10 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-40 overflow-hidden rounded-t-2xl bg-[#0f1420]">
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-[#1A1F2E] mb-2">{title}</h3>
        <p className="text-sm text-[#3D4A5C] leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
