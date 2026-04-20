import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'

export const revalidate = 60

async function getTestimonials() {
  const { data } = await supabase
    .from('testimonials')
    .select('*')
    .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
    .eq('visible', true)
    .order('sort_order', { ascending: true })
  return data
}

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
    title: 'Contabilidad',
    desc: 'Llevanza contable completa. Sin sorpresas a final de trimestre.',
    img: '/media/service-contabilidad.jpeg',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Nóminas y laboral',
    desc: 'Elaboración de nóminas, contratos y gestiones con la Seguridad Social.',
    img: '/media/service-nominas.jpeg',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
      </svg>
    ),
    title: 'Trámites',
    desc: 'IVA, IRPF, IS y gestiones con organismos oficiales.',
    img: '/media/service-tramites.jpeg',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: 'Asesoría fiscal',
    desc: 'Planificación y optimización fiscal para tu empresa.',
    img: '/media/service-fiscal.jpeg',
  },
]

const reasons = [
  { title: '10 profesionales a tu lado', desc: 'Equipo multidisciplinar con experiencia en Girona.' },
  { title: 'Respuesta en 24 horas', desc: 'Resolvemos dudas con rapidez. Sin esperas.' },
  { title: 'Sin letra pequeña', desc: 'Precios claros, servicio concreto.' },
  { title: 'Presencial y telemático', desc: 'Como mejor te venga.' },
]

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#2D6A4F" stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

type Testimonial = {
  id: string
  author_name: string
  role: string
  body: string
  rating: number
}

export default async function HomePage() {
  const testimonials = await getTestimonials()

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/media/hero.jpeg"
              alt="Oficina de Gestoria Ramón Muntaner en Girona"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2E]/85 via-[#1A1F2E]/55 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1120px] mx-auto px-6 py-24">
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

        {/* Servicios */}
        <section className="py-20 bg-white">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Lo que hacemos</h2>
              <p className="text-[#8A96A3] max-w-lg mx-auto">
                Servicios de gestoría pensados para pymes que necesitan claridad, no complicaciones.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group rounded-xl overflow-hidden border border-[#E8ECF0] hover:border-[#52B788] transition-all duration-300"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-[#2D6A4F] mb-3">{s.icon}</div>
                    <h3 className="text-base font-semibold text-[#1A1F2E] mb-2">{s.title}</h3>
                    <p className="text-sm text-[#3D4A5C] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="py-20 bg-[#D8F3DC]">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Por qué elegirnos</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((r) => (
                <div key={r.title} className="bg-white rounded-xl p-6" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <div className="w-8 h-8 rounded-full bg-[#2D6A4F] mb-4 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1F2E] mb-2">{r.title}</h3>
                  <p className="text-sm text-[#3D4A5C] leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios — solo si hay datos */}
        {testimonials && testimonials.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-[1120px] mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3">Lo que dicen nuestros clientes</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(testimonials as Testimonial[]).map((t) => (
                  <div
                    key={t.id}
                    className="rounded-xl p-6 border border-[#E8ECF0]"
                    style={{ boxShadow: 'var(--shadow-card)' }}
                  >
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: t.rating || 5 }).map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    <p className="text-sm text-[#3D4A5C] leading-relaxed mb-4">&ldquo;{t.body}&rdquo;</p>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1F2E]">{t.author_name}</p>
                      <p className="text-xs text-[#8A96A3]">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Final */}
        <section className="py-20 bg-[#D8F3DC]">
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-[#1A1F2E] mb-4">
              ¿Tienes dudas sobre tu situación fiscal o laboral?
            </h2>
            <p className="text-[#3D4A5C] mb-8 text-lg">
              Escríbenos — la primera consulta es gratuita.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-3 rounded-lg text-base font-semibold text-white bg-[#2D6A4F] hover:bg-[#1B4332] transition-colors duration-200"
              style={{ boxShadow: 'var(--shadow-cta)' }}
            >
              Contactar ahora
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
