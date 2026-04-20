import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1A1F2E] text-[#8A96A3]">
      <div className="max-w-[1120px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-jakarta)' }}>
              Gestoria Ramón{' '}
              <span className="text-[#52B788]">Muntaner</span>
            </p>
            <p className="text-sm mt-3 leading-relaxed">
              Gestoría especializada en contabilidad, nóminas y trámites para pymes en Girona.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p>Girona, Cataluña</p>
              <p>Lunes–Viernes · 9:00–17:00</p>
              <a
                href="mailto:davidbaobaobao@gmail.com"
                className="text-[#52B788] hover:text-[#D8F3DC] transition-colors"
              >
                davidbaobaobao@gmail.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-white mb-4">Servicios</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/servicios" className="hover:text-[#52B788] transition-colors">Contabilidad</Link></li>
              <li><Link href="/servicios" className="hover:text-[#52B788] transition-colors">Nóminas y laboral</Link></li>
              <li><Link href="/servicios" className="hover:text-[#52B788] transition-colors">Trámites administrativos</Link></li>
              <li><Link href="/servicios" className="hover:text-[#52B788] transition-colors">Asesoría fiscal</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold text-white mb-4">Información</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre-nosotros" className="hover:text-[#52B788] transition-colors">Quiénes somos</Link></li>
              <li><Link href="/blog" className="hover:text-[#52B788] transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-[#52B788] transition-colors">Preguntas frecuentes</Link></li>
              <li><Link href="/contacto" className="hover:text-[#52B788] transition-colors">Contacto</Link></li>
              <li><Link href="/aviso-legal" className="hover:text-[#52B788] transition-colors">Aviso legal</Link></li>
              <li><Link href="/privacidad" className="hover:text-[#52B788] transition-colors">Política de privacidad</Link></li>
              <li><Link href="/cookies" className="hover:text-[#52B788] transition-colors">Política de cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3D4A5C] pt-6 text-xs flex flex-col sm:flex-row justify-between gap-2">
          <p>© 2026 Gestoria Ramón Muntaner · Todos los derechos reservados.</p>
          <p>Diseño web por <span className="text-[#52B788]">Yele</span></p>
        </div>
      </div>
    </footer>
  )
}
