import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Quiénes somos — Equipo de 10 profesionales | Gestoria Ramón Muntaner',
  description: 'Conoce el equipo de Gestoria Ramón Muntaner: 10 profesionales especializados en gestoría en Girona.',
}

async function getTeam() {
  const { data } = await supabase
    .from('team_members')
    .select('*')
    .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
    .eq('visible', true)
    .order('sort_order', { ascending: true })
  return data
}

const valores = [
  {
    title: 'Claridad',
    desc: 'Explicamos las cosas sin tecnicismos. Quieres saber qué pagas y por qué — te lo decimos sin rodeos.',
  },
  {
    title: 'Proximidad',
    desc: 'Respondemos en 24 horas y te llamamos por tu nombre. No eres un número de expediente.',
  },
  {
    title: 'Rigor',
    desc: 'Sin errores, sin sorpresas, sin improvisaciones. Hacemos bien lo que hacemos.',
  },
]

type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  photo_url: string | null
}

export default async function SobreNosotrosPage() {
  const team = await getTeam()

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#F7F8FA] py-16 border-b border-[#E8ECF0]">
          <div className="max-w-[1120px] mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2E] mb-4">Quiénes somos</h1>
            <p className="text-lg text-[#3D4A5C] max-w-2xl">
              Un equipo de 10 profesionales comprometidos con las pymes de Girona.
            </p>
          </div>
        </section>

        {/* Historia */}
        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#1A1F2E] mb-4">Nuestra historia</h2>
                <p className="text-[#3D4A5C] leading-relaxed">
                  Gestoria Ramón Muntaner nace de la convicción de que las pymes merecen el mismo nivel de asesoramiento que las grandes empresas, sin la burocracia ni los costes de un despacho corporativo. Estamos en Girona porque conocemos su tejido empresarial y queremos ser parte activa de su crecimiento.
                </p>
                <p className="text-[#3D4A5C] leading-relaxed mt-4">
                  Con 10 profesionales especializados en contabilidad, laboral y fiscal, ofrecemos un servicio cercano, ágil y sin tecnicismos innecesarios. Cada cliente es diferente — por eso escuchamos primero.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex mt-6 items-center px-6 py-3 rounded-lg font-semibold text-white bg-[#2D6A4F] hover:bg-[#1B4332] transition-colors duration-200 text-sm"
                  style={{ boxShadow: 'var(--shadow-cta)' }}
                >
                  Hablar con nosotros
                </Link>
              </div>
              <div className="relative h-72 md:h-96 rounded-xl overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
                <Image
                  src="/media/about.jpeg"
                  alt="Equipo de Gestoria Ramón Muntaner trabajando en su oficina de Girona"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="py-16 bg-[#F7F8FA]">
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1A1F2E] mb-10 text-center">Nuestro equipo</h2>
            {team && team.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {(team as TeamMember[]).map((member) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-xl overflow-hidden border border-[#E8ECF0]"
                    style={{ boxShadow: 'var(--shadow-card)' }}
                  >
                    <div className="relative h-48">
                      <Image
                        src={member.photo_url || '/media/team-placeholder.jpeg'}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <p className="font-semibold text-[#1A1F2E]">{member.name}</p>
                      <p className="text-sm text-[#2D6A4F] mb-2">{member.role}</p>
                      <p className="text-sm text-[#3D4A5C] leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-[#3D4A5C] max-w-lg mx-auto">
                Un equipo de 10 profesionales especializados en Girona, con amplia experiencia en contabilidad, laboral y asesoría fiscal para pymes.
              </p>
            )}
          </div>
        </section>

        {/* Filosofía */}
        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1A1F2E] mb-10 text-center">Nuestra forma de trabajar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {valores.map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl p-6 bg-[#D8F3DC]"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <h3 className="text-lg font-bold text-[#1A1F2E] mb-3">{v.title}</h3>
                  <p className="text-sm text-[#3D4A5C] leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
