import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de cookies — Gestoria Ramón Muntaner',
}

export default function CookiesPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <div className="max-w-[720px] mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold text-[#1A1F2E] mb-8">Política de cookies</h1>
          <div className="text-[#3D4A5C] text-sm leading-relaxed space-y-6">
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">¿Qué son las cookies?</h2>
              <p>Las cookies son pequeños archivos de texto que los sitios web instalan en tu dispositivo para mejorar la experiencia de navegación y recopilar información estadística.</p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">Cookies que utilizamos</h2>
              <p>Este sitio web utiliza únicamente cookies técnicas necesarias para su funcionamiento correcto. No utilizamos cookies de seguimiento, publicidad ni analítica de terceros.</p>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2">
                  <span className="font-medium text-[#1A1F2E] shrink-0">Técnicas:</span>
                  <span>Necesarias para la navegación y el correcto funcionamiento del sitio. No requieren consentimiento.</span>
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">Gestión de cookies</h2>
              <p>Puedes configurar tu navegador para rechazar cookies o para que te avise cuando se instalen. Ten en cuenta que algunas funcionalidades del sitio pueden verse afectadas.</p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">Más información</h2>
              <p>Para cualquier consulta sobre nuestra política de cookies, escríbenos a davidbaobaobao@gmail.com.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
