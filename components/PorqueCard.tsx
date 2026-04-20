'use client'

import { useEffect, useRef } from 'react'

type Props = {
  title: string
  desc: string
  video: string
}

export default function PorqueCard({ title, desc, video }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {})
        } else {
          if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
          }
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="bg-white rounded-xl overflow-hidden"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      <div className="relative h-36 overflow-hidden bg-[#1A1F2E]">
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-[#1A1F2E] mb-2">{title}</h3>
        <p className="text-sm text-[#3D4A5C] leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
