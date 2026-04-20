import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ServiceVideoCard from '@/components/ServiceVideoCard'
import PorqueCard from '@/components/PorqueCard'
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
    title: 'Contabilidad',
    desc: 'Llevanza contable completa. Sin sorpresas a final de trimestre.',
    video: '/media/service-contabilidad.mp4',
  },
  {
    title: 'Nóminas y laboral',
    desc: 'Elaboración de nóminas, contratos y gestiones con la Seguridad Social.',
    video: '/media/service-nominas.mp4',
  },
  {
    title: 'Trámites',
    desc: 'IVA, IRPF, IS y gestiones con organismos oficiales.',
    video: '/media/service-tramites.mp4',
  },
  {
    title: 'Asesoría fiscal',
    desc: 'Planificación y optimización fiscal para tu empresa.',
    video: '/media/service-fiscal.mp4',
  },
]

const reasons = [
  { title: '10 profesionales a tu lado', desc: 'Equipo multidisciplinar con experiencia en Girona.', video: '/media/porque-1.mp4' },
  { title: 'Respuesta en 24 horas', desc: 'Resolvemos dudas con rapidez. Sin esperas.', video: '/media/porque-2.mp4' },
  { title: 'Sin letra pequeña', desc: 'Precios claros, servicio concreto.', video: '/media/porque-3.mp4' },
  { title: 'Presencial y telemático', desc: 'Como mejor te venga.', video: '/media/porque-4.mp4' },
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
        {/* Hero — two-video with scroll-triggered crossfade + blur */}
        <HeroSection nextSectionId="servicios-section" />

        {/* Servicios */}
        <section id="servicios-section" className="py-20 bg-white">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Lo que hacemos</h2>
              <p className="text-[#8A96A3] max-w-lg mx-auto">
                Servicios de gestoría pensados para pymes que necesitan claridad, no complicaciones.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <ServiceVideoCard key={s.title} title={s.title} desc={s.desc} video={s.video} />
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
                <PorqueCard key={r.title} title={r.title} desc={r.desc} video={r.video} />
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
