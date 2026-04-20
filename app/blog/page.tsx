import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog fiscal y laboral para pymes — Gestoria Ramón Muntaner',
  description: 'Artículos sobre novedades fiscales, laborales y contables para pymes en Girona.',
}

const posts = [
  {
    slug: 'novedades-irpf-2026',
    title: 'Novedades del IRPF para 2026: lo que debes saber como autónomo',
    excerpt: 'La declaración de la renta trae cambios para autónomos y pymes. Te explicamos qué ha cambiado y cómo afecta a tu situación fiscal.',
    category: 'Fiscal',
    published_at: '2026-03-15',
    img: '/media/blog-fiscal.jpeg',
  },
  {
    slug: 'contrato-indefinido-incentivos',
    title: 'Incentivos por contratar indefinido en 2026',
    excerpt: 'El Gobierno mantiene las bonificaciones a la Seguridad Social para empresas que consoliden empleo. Te contamos los requisitos y cuánto puedes ahorrar.',
    category: 'Laboral',
    published_at: '2026-02-28',
    img: '/media/blog-laboral.jpeg',
  },
  {
    slug: 'cierre-contable-trucos',
    title: 'Cierre contable anual: 5 errores que cometen las pymes',
    excerpt: 'Cada año vemos los mismos fallos en el cierre contable de diciembre. Aquí los cinco más habituales y cómo evitarlos fácilmente.',
    category: 'Contabilidad',
    published_at: '2026-01-20',
    img: '/media/blog-contabilidad.jpeg',
  },
]

const categoryColors: Record<string, string> = {
  Fiscal:       'bg-[#D8F3DC] text-[#2D6A4F]',
  Laboral:      'bg-[#E8ECF0] text-[#3D4A5C]',
  Contabilidad: 'bg-[#F7F8FA] text-[#1A1F2E]',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#F7F8FA] py-16 border-b border-[#E8ECF0]">
          <div className="max-w-[1120px] mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2E] mb-4">Blog</h1>
            <p className="text-lg text-[#3D4A5C] max-w-2xl">
              Novedades fiscales, laborales y contables para pymes.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group rounded-xl overflow-hidden border border-[#E8ECF0] hover:border-[#52B788] transition-all duration-300"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 ${categoryColors[post.category] || 'bg-[#E8ECF0] text-[#3D4A5C]'}`}>
                      {post.category}
                    </span>
                    <h2 className="text-base font-bold text-[#1A1F2E] mb-2 leading-snug group-hover:text-[#2D6A4F] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-xs text-[#8A96A3] mb-3">{formatDate(post.published_at)}</p>
                    <p className="text-sm text-[#3D4A5C] leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="text-sm font-medium text-[#2D6A4F] group-hover:text-[#1B4332]">
                      Leer más →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#F7F8FA] border-t border-[#E8ECF0]">
          <div className="max-w-[1120px] mx-auto px-6 text-center">
            <p className="text-[#3D4A5C] mb-4">
              ¿Tienes dudas sobre algún tema? Consúltanos sin compromiso.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#2D6A4F] hover:bg-[#1B4332] transition-colors"
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
