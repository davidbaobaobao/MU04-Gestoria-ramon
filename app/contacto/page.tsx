'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const asuntos = [
  'Contabilidad',
  'Nóminas y laboral',
  'Trámites',
  'Asesoría fiscal',
  'Otro',
]

export default function ContactoPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('ok')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#F7F8FA] py-16 border-b border-[#E8ECF0]">
          <div className="max-w-[1120px] mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2E] mb-4">Contacta con nosotros</h1>
            <p className="text-lg text-[#3D4A5C] max-w-2xl">
              Respuesta en menos de 24 horas. Primera consulta gratuita.
            </p>
          </div>
        </section>

        {/* Split layout */}
        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-[#1A1F2E] mb-1.5">
                    Nombre completo <span className="text-[#2D6A4F]">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E8ECF0] text-sm text-[#1A1F2E] placeholder-[#8A96A3] focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] transition"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A1F2E] mb-1.5">
                    Email <span className="text-[#2D6A4F]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E8ECF0] text-sm text-[#1A1F2E] placeholder-[#8A96A3] focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] transition"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-[#1A1F2E] mb-1.5">
                    Empresa <span className="text-[#8A96A3] font-normal">(opcional)</span>
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-[#E8ECF0] text-sm text-[#1A1F2E] placeholder-[#8A96A3] focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] transition"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-[#1A1F2E] mb-1.5">
                    Asunto <span className="text-[#2D6A4F]">*</span>
                  </label>
                  <select
                    id="asunto"
                    name="asunto"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E8ECF0] text-sm text-[#1A1F2E] bg-white focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] transition"
                  >
                    <option value="">Selecciona un asunto</option>
                    {asuntos.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-[#1A1F2E] mb-1.5">
                    Mensaje <span className="text-[#2D6A4F]">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[#E8ECF0] text-sm text-[#1A1F2E] placeholder-[#8A96A3] focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F] transition resize-none"
                    placeholder="Cuéntanos tu situación..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 rounded-lg font-semibold text-white bg-[#2D6A4F] hover:bg-[#1B4332] disabled:opacity-60 transition-colors duration-200"
                  style={{ boxShadow: 'var(--shadow-cta)' }}
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar consulta'}
                </button>

                {status === 'ok' && (
                  <p className="text-sm text-[#2D6A4F] font-medium text-center">
                    Mensaje enviado. Te respondemos en menos de 24 horas.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-600 text-center">
                    Algo ha fallado. Inténtalo de nuevo o escríbenos a davidbaobaobao@gmail.com
                  </p>
                )}

                <p className="text-xs text-[#8A96A3] text-center">
                  Respuesta garantizada en menos de 24 horas.
                </p>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center gap-6">
              <div className="rounded-xl bg-[#F7F8FA] p-6 border border-[#E8ECF0]">
                <h2 className="text-base font-semibold text-[#1A1F2E] mb-5">Información de contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#D8F3DC] flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#8A96A3] mb-0.5">Email</p>
                      <a href="mailto:davidbaobaobao@gmail.com" className="text-sm text-[#2D6A4F] hover:text-[#1B4332]">
                        davidbaobaobao@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#D8F3DC] flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#8A96A3] mb-0.5">Horario</p>
                      <p className="text-sm text-[#3D4A5C]">Lunes a viernes, 9:00 a 17:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#D8F3DC] flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#8A96A3] mb-0.5">Ciudad</p>
                      <p className="text-sm text-[#3D4A5C]">Girona, Cataluña</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-[#D8F3DC] p-6">
                <p className="text-sm font-semibold text-[#1A1F2E] mb-2">Primera consulta gratuita</p>
                <p className="text-sm text-[#3D4A5C]">
                  Sin compromiso. Cuéntanos tu situación y te decimos qué podemos hacer por tu empresa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
