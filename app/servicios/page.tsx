import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Servicios de gestoría — Contabilidad, nóminas y trámites | Girona',
  description: 'Gestoría Ramón Muntaner: contabilidad, nóminas, trámites y asesoría fiscal para pymes en Girona.',
}

async function getFaqs() {
  const { data } = await supabase
    .from('faqs')
    .select('*')
    .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
    .eq('visible', true)
    .order('sort_order', { ascending: true })
  return data
}

const services = [
  {
    id: 'contabilidad',
    title: 'Contabilidad',
    img: '/media/service-contabilidad.jpeg',
    desc: 'Llevanza contable completa para pymes. Gestionamos tus libros, cuentas anuales, declaraciones y todas las obligaciones contables.',
    items: ['Libros contables', 'Cuentas anuales', 'Declaraciones trimestrales', 'Informes de gestión'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
  },
  {
    id: 'nominas',
    title: 'Nóminas y gestión laboral',
    img: '/media/service-nominas.jpeg',
    desc: 'Elaboramos nóminas, contratos, y gestionamos altas y bajas en la Seguridad Social. Asesoramiento laboral para decisiones de RRHH.',
    items: ['Elaboración de nóminas', 'Contratos de trabajo', 'Altas y bajas en la Seguridad Social', 'Asesoramiento laboral'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    id: 'tramites',
    title: 'Trámites administrativos',
    img: '/media/service-tramites.jpeg',
    desc: 'Presentamos tus impuestos y gestionamos cualquier trámite con la AEAT y organismos oficiales.',
    items: ['IVA · IRPF · IS', 'Gestiones con la AEAT', 'Registro mercantil', 'Constitución de sociedades'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
      </svg>
    ),
  },
  {
    id: 'fiscal',
    title: 'Asesoría fiscal',
    img: '/media/service-fiscal.jpeg',
    desc: 'Planificamos tu carga fiscal dentro del marco legal. Resolvemos consultas y te acompañamos en inspecciones.',
    items: ['Planificación fiscal', 'Consultas y dudas', 'Optimización tributaria', 'Acompañamiento en inspecciones'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
]

type Faq = { id: string; question: string; answer: string; category: string }

function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details key={faq.id} className="group rounded-xl border border-[#E8ECF0] bg-white overflow-hidden">
          <summary className="flex justify-between items-center px-6 py-4 cursor-pointer list-none font-medium text-[#1A1F2E] hover:text-[#2D6A4F] transition-colors">
            <span>{faq.question}</span>
            <svg className="w-5 h-5 shrink-0 ml-4 text-[#2D6A4F] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </summary>
          <div className="px-6 pb-5 text-sm text-[#3D4A5C] leading-relaxed border-t border-[#E8ECF0] pt-4">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  )
}

export default async function ServiciosPage() {
  const faqs = await getFaqs()

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#F7F8FA] py-16 border-b border-[#E8ECF0]">
          <div className="max-w-[1120px] mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2E] mb-4">Nuestros servicios</h1>
            <p className="text-lg text-[#3D4A5C] max-w-2xl">
              Todo lo que necesita tu empresa para estar al día fiscal y laboral.
            </p>
          </div>
        </section>

        {/* Services detail */}
        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-6 space-y-20">
            {services.map((s, i) => (
              <div
                key={s.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
                    <Image src={s.img} alt={s.title} fill className="object-cover" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="text-[#2D6A4F] mb-4">{s.icon}</div>
                  <h2 className="text-2xl font-bold text-[#1A1F2E] mb-3">{s.title}</h2>
                  <p className="text-[#3D4A5C] leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-[#3D4A5C]">
                        <span className="w-5 h-5 rounded-full bg-[#D8F3DC] flex items-center justify-center shrink-0">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs dinámicas */}
        {faqs && faqs.length > 0 && (
          <section className="py-16 bg-[#F7F8FA]">
            <div className="max-w-[1120px] mx-auto px-6">
              <h2 className="text-3xl font-bold text-[#1A1F2E] mb-10 text-center">Preguntas frecuentes</h2>
              <div className="max-w-2xl mx-auto">
                <FaqAccordion faqs={faqs as Faq[]} />
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <p className="text-lg text-[#3D4A5C] mb-6">
              ¿Tienes alguna duda? La primera consulta es gratuita.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-7 py-3 rounded-lg font-semibold text-white bg-[#2D6A4F] hover:bg-[#1B4332] transition-colors duration-200"
              style={{ boxShadow: 'var(--shadow-cta)' }}
            >
              Contactar
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
