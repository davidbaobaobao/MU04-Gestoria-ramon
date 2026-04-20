# BUILD.md — Gestoria Ramón Muntaner
# Vitrina Studio · Next.js 14 App Router + Tailwind CSS + Supabase
# Client UUID: 53291a33-cfb3-4187-834d-339dadacd8be
# Plan: Profesional · Girona · 20 de abril de 2026

---

## DESIGN DIALS

```
VARIANCE: 3    Layout simétrico, grid convencional. Sector requiere confianza.
MOTION:   3    Scroll reveals suaves. Sin animaciones llamativas.
DENSITY:  5    Espaciado equilibrado. Profesional sin ser aireado.
```

---

## PROJECT OVERVIEW

```
Nombre:       Gestoria Ramón Muntaner
Sector:       Gestoría / Asesoría fiscal y laboral
Ciudad:       Girona, Cataluña
Email:        davidbaobaobao@gmail.com
Teléfono:     (pendiente — omitir si no hay, no usar placeholder)
Horario:      Lunes a viernes, 9:00 a 17:00
Client UUID:  53291a33-cfb3-4187-834d-339dadacd8be
```

**Tagline:** Tu gestoría de confianza en Girona
**Descripción:** Gestoría con 10 profesionales en Girona especializada en contabilidad, trámites administrativos y gestión de nóminas para pymes. Servicio cercano, respuesta en 24 horas, primera consulta gratuita.

**Tono de voz:** Cercano pero profesional. Claro, directo, sin tecnicismos innecesarios. No es un despacho corporativo distante — es el gestor de confianza que conoce tu negocio.

---

## TECH STACK

```
Framework:    Next.js 14 App Router (NUNCA static HTML)
Styling:      Tailwind CSS — solo tokens de brand.md, nunca colores Tailwind por defecto
Fonts:        next/font → Plus Jakarta Sans (600, 700) + Inter (400, 500)
Images:       next/image con alt en español siempre
Database:     Supabase — solo para secciones marcadas dynamic: true
Deploy:       Vercel
Language:     Español en todo — UI, copy, meta, alt text, errores
```

---

## BRAND TOKENS

Leer `brand_assets/brand.md` para todos los valores. Nunca usar hex directamente en componentes.

```css
:root {
  --color-primary:       #2D6A4F;
  --color-primary-dark:  #1B4332;
  --color-primary-mid:   #52B788;
  --color-primary-pale:  #D8F3DC;
  --color-ink:           #1A1F2E;
  --color-slate:         #3D4A5C;
  --color-mist:          #8A96A3;
  --color-cloud:         #E8ECF0;
  --color-off-white:     #F7F8FA;
  --color-white:         #FFFFFF;
  --font-display:        'Plus Jakarta Sans', sans-serif;
  --font-body:           'Inter', sans-serif;
}
```

---

## DYNAMIC SECTIONS — PATRÓN OBLIGATORIO

Todas las secciones `dynamic: true` deben usar este patrón exacto:

```typescript
// En el Server Component de la sección:
export const revalidate = 60

const { data } = await supabase
  .from('NOMBRE_TABLA')
  .select('*')
  .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
  .eq('visible', true)
  .order('sort_order', { ascending: true })

if (!data || data.length === 0) return null
```

- Nunca `.single()` — usar arrays o `.maybeSingle()`
- Nunca mostrar sección vacía — `return null` si no hay datos
- Nunca client-side fetch para datos Supabase — siempre Server Components

---

## ARCHITECTURE

### `/` — Inicio

**Nav** (sticky)
- Logo tipográfico: "Gestoria Ramón Muntaner" en Plus Jakarta Sans 600
- Links: Servicios / Sobre nosotros / Blog / Contacto
- CTA: botón verde "Contactar" → /contacto
- Backdrop-blur al hacer scroll
- dynamic: false

**Hero**
- H1: "Gestoría de confianza en Girona"
- Subtítulo: "Contabilidad, nóminas y trámites para pymes que quieren crecer sin complicaciones fiscales."
- CTA primario verde: "Hablar con un gestor" → /contacto
- CTA secundario outline: "Nuestros servicios" → /servicios
- Imagen: `media_assets/hero.jpg`
- dynamic: false

**Servicios (resumen)**
- H2: "Lo que hacemos"
- 4 cards · grid 2×2 mobile / 4 col desktop · icono Lucide trazo fino verde + título + descripción
- dynamic: false
- Contenido:
  - Contabilidad — "Llevanza contable completa. Sin sorpresas a final de trimestre."
  - Nóminas y laboral — "Elaboración de nóminas, contratos y gestiones con la Seguridad Social."
  - Trámites — "IVA, IRPF, IS y gestiones con organismos oficiales."
  - Asesoría fiscal — "Planificación y optimización fiscal para tu empresa."

**Por qué elegirnos**
- H2: "Por qué elegirnos"
- Fondo: `--color-primary-pale`
- 4 puntos en grid 2×2
- dynamic: false
- Contenido:
  1. "10 profesionales a tu lado" — Equipo multidisciplinar con experiencia en Girona.
  2. "Respuesta en 24 horas" — Resolvemos dudas con rapidez. Sin esperas.
  3. "Sin letra pequeña" — Precios claros, servicio concreto.
  4. "Presencial y telemático" — Como mejor te venga.

**Testimonios**
- H2: "Lo que dicen nuestros clientes"
- 3 cards horizontales desktop / stack móvil · comillas decorativas + texto + nombre + empresa
- **dynamic: true · table: testimonials**
- Campos: `author_name`, `role`, `body`, `rating`
- `return null` si no hay datos

**CTA Final**
- Fondo: `--color-primary-pale`
- H2: "¿Tienes dudas sobre tu situación fiscal o laboral?"
- Subtítulo: "Escríbenos — la primera consulta es gratuita."
- Botón verde: "Contactar ahora" → /contacto
- dynamic: false

**Footer**
- Logo · Girona, Cataluña · L–V 9:00–17:00 · davidbaobaobao@gmail.com
- Links servicios + links legales
- © 2026 Gestoria Ramón Muntaner · Diseño web por Yele

---

### `/servicios` — Servicios

**Header**
- H1: "Nuestros servicios"
- Subtítulo: "Todo lo que necesita tu empresa para estar al día fiscal y laboral."
- dynamic: false

**Servicios en detalle (4 bloques)**
Cada bloque: icono grande verde + H2 + párrafo + lista de incluidos

1. **Contabilidad** — "Llevanza contable completa para pymes. Gestionamos tus libros, cuentas anuales, declaraciones y todas las obligaciones contables."
   Incluye: Libros contables / Cuentas anuales / Declaraciones trimestrales / Informes de gestión

2. **Nóminas y gestión laboral** — "Elaboramos nóminas, contratos, y gestionamos altas y bajas en la Seguridad Social. Asesoramiento laboral para decisiones de RRHH."
   Incluye: Elaboración de nóminas / Contratos de trabajo / Altas y bajas SS / Asesoramiento laboral

3. **Trámites administrativos** — "Presentamos tus impuestos y gestionamos cualquier trámite con la AEAT y organismos oficiales."
   Incluye: IVA · IRPF · IS / Gestiones con la AEAT / Registro mercantil / Constitución de sociedades

4. **Asesoría fiscal** — "Planificamos tu carga fiscal dentro del marco legal. Resolvemos consultas y te acompañamos en inspecciones."
   Incluye: Planificación fiscal / Consultas y dudas / Optimización tributaria / Acompañamiento en inspecciones

**FAQ de servicios**
- H2: "Preguntas frecuentes"
- Accordion
- **dynamic: true · table: faqs**
- Campos: `question`, `answer`, `category`
- `return null` si no hay datos

**CTA**
- "¿Tienes alguna duda? La primera consulta es gratuita."
- Botón → /contacto

---

### `/sobre-nosotros` — Sobre Nosotros

**Header**
- H1: "Quiénes somos"
- Subtítulo: "Un equipo de 10 profesionales comprometidos con las pymes de Girona."

**Historia y valores**
- Texto: "Gestoria Ramón Muntaner nace de la convicción de que las pymes merecen el mismo nivel de asesoramiento que las grandes empresas, sin la burocracia ni los costes de un despacho corporativo. Estamos en Girona porque conocemos su tejido empresarial y queremos ser parte activa de su crecimiento."
- Imagen: `media_assets/about.jpg`
- dynamic: false

**El equipo**
- H2: "Nuestro equipo"
- Grid de cards: nombre + rol + bio corta (+ foto si `photo_url` existe)
- **dynamic: true · table: team_members**
- Campos: `name`, `role`, `bio`, `photo_url`
- Fallback si no hay datos: párrafo "Un equipo de 10 profesionales especializados en Girona."

**Filosofía de trabajo**
- 3 valores en cards:
  1. "Claridad" — Explicamos las cosas sin tecnicismos.
  2. "Proximidad" — Respondemos en 24 horas y te llamamos por tu nombre.
  3. "Rigor" — Sin errores, sin sorpresas, sin improvisaciones.
- dynamic: false

---

### `/blog` — Blog

**Header**
- H1: "Blog"
- Subtítulo: "Novedades fiscales, laborales y contables para pymes."

**Grid de artículos**
- Cards: badge categoría + título + fecha + extracto + "Leer más →"
- **dynamic: true · table: posts**
- Campos: `title`, `excerpt`, `published_at`, `category`, `slug`
- Ordenar por `published_at` descendente
- Si no hay datos: `<p>Próximamente — estamos preparando contenido para ti.</p>` (no return null aquí — la página debe existir)

---

### `/contacto` — Contacto

**Header**
- H1: "Contacta con nosotros"
- Subtítulo: "Respuesta en menos de 24 horas. Primera consulta gratuita."

**Split layout**

Izquierda — Formulario:
- Nombre completo (required)
- Email (required)
- Empresa (opcional)
- Asunto: select — Contabilidad / Nóminas y laboral / Trámites / Asesoría fiscal / Otro
- Mensaje (required, textarea)
- Botón verde: "Enviar consulta"
- Texto: "Respuesta garantizada en menos de 24 horas."
- Envío via Resend → `davidbaobaobao@gmail.com`

Derecha — Datos:
- Email: davidbaobaobao@gmail.com
- Horario: Lunes a viernes, 9:00 a 17:00
- Ciudad: Girona, Cataluña
- (Sin teléfono hasta que el cliente lo facilite)

- dynamic: false

---

### `/faq` — Preguntas Frecuentes

**Header**
- H1: "Preguntas frecuentes"

**FAQs accordion**
- Agrupadas por campo `category`
- Una accordion abierta a la vez
- **dynamic: true · table: faqs**
- Campos: `question`, `answer`, `category`
- `return null` si no hay datos

---

### Páginas legales
`/aviso-legal` · `/privacidad` · `/cookies`
- Layout: nav + contenido + footer
- Sin diseño especial — tipografía limpia, max-width 720px
- Textos estándar adaptados: Gestoria Ramón Muntaner, Girona
- dynamic: false

---

## ANTI-PATRONES

- ❌ Colores Tailwind por defecto — solo `var(--color-*)` de brand.md
- ❌ `.single()` en Supabase — usar `.maybeSingle()` o arrays
- ❌ `client_id` hardcodeado — siempre `process.env.NEXT_PUBLIC_CLIENT_ID`
- ❌ Sección dinámica vacía visible — `return null` si no hay datos
- ❌ Imágenes sin `next/image`
- ❌ Texto en inglés en la UI
- ❌ Anglicismos: "management", "outsourcing", "compliance", "expertise"
- ❌ Copy genérico: "soluciones integrales", "excelencia", "comprometidos con el cliente"
- ❌ Fotos de stock de hombres en corbata

---

## BUILD ORDER

1. `npx create-next-app@latest . --typescript --tailwind --eslint --app`
2. `npm install @supabase/supabase-js`
3. `tailwind.config.js` — extender con tokens de brand.md
4. `app/layout.tsx` — fuentes con `next/font`
5. `app/globals.css` — CSS variables
6. `lib/supabase.ts` — cliente Supabase
7. Componentes compartidos: `<Nav>`, `<Footer>`
8. Páginas: `/` → `/servicios` → `/sobre-nosotros` → `/blog` → `/contacto` → `/faq`
9. Secciones dinámicas con `revalidate: 60`
10. Páginas legales
11. `npm run build` — cero errores
12. `vercel deploy --prod`

---

## ENV VARS

```bash
NEXT_PUBLIC_SUPABASE_URL=https://wdnwacdkoowrrnyaskjl.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[anon key]
NEXT_PUBLIC_CLIENT_ID=53291a33-cfb3-4187-834d-339dadacd8be
RESEND_API_KEY=[resend key]
```

---

## SEO

```
/              → "Gestoria Ramón Muntaner — Asesoría y gestoría en Girona"
                  "Gestoría en Girona especializada en contabilidad, nóminas y trámites
                   para pymes. 10 profesionales, respuesta en 24h. Primera consulta gratuita."
/servicios     → "Servicios de gestoría — Contabilidad, nóminas y trámites | Girona"
/sobre-nosotros→ "Quiénes somos — Equipo de 10 profesionales | Gestoria Ramón Muntaner"
/blog          → "Blog fiscal y laboral para pymes — Gestoria Ramón Muntaner"
/contacto      → "Contacto — Gestoria Ramón Muntaner, Girona"
/faq           → "Preguntas frecuentes — Gestoria Ramón Muntaner"
```

---

*BUILD.md v2 · Vitrina Studio Workflow v7 · Client UUID: 53291a33-cfb3-4187-834d-339dadacd8be*
