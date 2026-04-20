'use client'

import { useRef } from 'react'

type Props = {
  title: string
  desc: string
  video: string
}

export default function ServiceVideoCard({ title, desc, video }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div
      className="group glass-card rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-[#2D6A4F]/10 transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        const v = videoRef.current
        if (v) { v.pause(); v.currentTime = 0 }
      }}
    >
      <div className="relative h-44 overflow-hidden bg-[#0f1420] rounded-t-2xl">
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          autoPlay
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
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
