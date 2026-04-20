import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Preguntas frecuentes — Gestoria Ramón Muntaner',
  description: 'Respuestas a las dudas más habituales sobre gestoría, contabilidad, nóminas y trámites fiscales.',
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

type Faq = { id: string; question: string; answer: string; category: string }

export default async function FaqPage() {
  const faqs = await getFaqs()

  if (!faqs || faqs.length === 0) {
    return (
      <>
        <Nav />
        <main className="pt-16 min-h-screen flex items-center justify-center">
          <p className="text-[#8A96A3] text-sm">Próximamente — estamos preparando las preguntas frecuentes.</p>
        </main>
        <Footer />
      </>
    )
  }

  const categories = Array.from(new Set((faqs as Faq[]).map((f) => f.category)))

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#F7F8FA] py-16 border-b border-[#E8ECF0]">
          <div className="max-w-[1120px] mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2E] mb-4">Preguntas frecuentes</h1>
            <p className="text-lg text-[#3D4A5C] max-w-2xl">
              Las dudas más habituales que nos llegan. Si la tuya no está aquí, escríbenos.
            </p>
          </div>
        </section>

        {/* FAQs por categoría */}
        <section className="py-16 bg-white">
          <div className="max-w-[720px] mx-auto px-6 space-y-12">
            {categories.map((cat) => (
              <div key={cat}>
                <h2 className="text-xl font-bold text-[#1A1F2E] mb-5 pb-3 border-b border-[#E8ECF0]">{cat}</h2>
                <div className="space-y-3">
                  {(faqs as Faq[])
                    .filter((f) => f.category === cat)
                    .map((faq) => (
                      <details key={faq.id} className="group rounded-xl border border-[#E8ECF0] bg-[#F7F8FA] overflow-hidden">
                        <summary className="flex justify-between items-center px-6 py-4 cursor-pointer list-none font-medium text-[#1A1F2E] hover:text-[#2D6A4F] transition-colors">
                          <span>{faq.question}</span>
                          <svg className="w-5 h-5 shrink-0 ml-4 text-[#2D6A4F] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9"/>
                          </svg>
                        </summary>
                        <div className="px-6 pb-5 text-sm text-[#3D4A5C] leading-relaxed border-t border-[#E8ECF0] pt-4 bg-white">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#D8F3DC]">
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <p className="text-[#1A1F2E] font-semibold mb-2">¿No encuentras tu respuesta?</p>
            <p className="text-[#3D4A5C] text-sm mb-6">Escríbenos — la primera consulta es gratuita.</p>
            <a
              href="/contacto"
              className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#2D6A4F] hover:bg-[#1B4332] transition-colors"
              style={{ boxShadow: 'var(--shadow-cta)' }}
            >
              Contactar
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
