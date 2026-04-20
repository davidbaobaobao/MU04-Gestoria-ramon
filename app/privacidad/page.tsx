import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de privacidad — Gestoria Ramón Muntaner',
}

export default function PrivacidadPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <div className="max-w-[720px] mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold text-[#1A1F2E] mb-8">Política de privacidad</h1>
          <div className="text-[#3D4A5C] text-sm leading-relaxed space-y-6">
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">1. Responsable del tratamiento</h2>
              <p>Gestoria Ramón Muntaner, con domicilio en Girona, Cataluña. Contacto: davidbaobaobao@gmail.com.</p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">2. Datos que recopilamos</h2>
              <p>A través del formulario de contacto recopilamos: nombre, email, nombre de empresa (opcional), asunto y mensaje. No recopilamos datos sensibles.</p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">3. Finalidad del tratamiento</h2>
              <p>Los datos se utilizan exclusivamente para responder a tu consulta. No los cedemos a terceros ni los usamos para fines comerciales sin tu consentimiento explícito.</p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">4. Base legal</h2>
              <p>El tratamiento se basa en el consentimiento del interesado (art. 6.1.a del RGPD) y en el interés legítimo de responder a consultas profesionales.</p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">5. Derechos del interesado</h2>
              <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición y portabilidad escribiendo a davidbaobaobao@gmail.com.</p>
            </section>
            <section>
              <h2 className="text-base font-semibold text-[#1A1F2E] mb-2">6. Conservación de datos</h2>
              <p>Conservamos los datos el tiempo necesario para gestionar tu consulta y, en su caso, para cumplir con obligaciones legales.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
