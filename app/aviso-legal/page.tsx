import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aviso legal — Gestoria Ramón Muntaner',
}

export default function AvisoLegalPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <div className="max-w-[720px] mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold text-[#1A1F2E] mb-8">Aviso legal</h1>
          <div className="prose prose-slate max-w-none text-[#3D4A5C] text-sm leading-relaxed space-y-6">
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">1. Datos identificativos</h2>
              <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa que el titular de este sitio web es <strong>Gestoria Ramón Muntaner</strong>, con domicilio en Girona, Cataluña. Contacto: davidbaobaobao@gmail.com.</p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">2. Objeto y ámbito de aplicación</h2>
              <p>El presente aviso legal regula el acceso y uso del sitio web de Gestoria Ramón Muntaner. El acceso al sitio web implica la aceptación plena de este aviso legal.</p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">3. Propiedad intelectual</h2>
              <p>Todos los contenidos del sitio web, incluyendo textos, imágenes, diseño y código, son propiedad de Gestoria Ramón Muntaner o de sus licenciantes. Queda prohibida su reproducción total o parcial sin autorización expresa.</p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">4. Responsabilidad</h2>
              <p>Gestoria Ramón Muntaner no se hace responsable de los daños derivados del uso del sitio web ni de la información contenida en él. La información tiene carácter orientativo y no constituye asesoramiento profesional.</p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">5. Ley aplicable y jurisdicción</h2>
              <p>Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Girona, con renuncia expresa a cualquier otro fuero.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
