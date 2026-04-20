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
      className="group rounded-xl overflow-hidden border border-[#E8ECF0] hover:border-[#52B788] transition-all duration-300"
      style={{ boxShadow: 'var(--shadow-card)' }}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
      }}
    >
      <div className="relative h-44 overflow-hidden bg-[#1A1F2E]">
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          autoPlay
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
