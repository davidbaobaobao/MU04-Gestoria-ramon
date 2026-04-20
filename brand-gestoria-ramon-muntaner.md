# Brand Tokens — Gestoria Ramón Muntaner
# Sector: Gestoría / Asesoría · Estilo: Moderno-limpio
# Generado: 20 de abril de 2026

---

## Colores

```css
:root {
  --color-primary:       #2D6A4F;   /* Verde principal — CTAs, iconos, acento */
  --color-primary-dark:  #1B4332;   /* Verde oscuro — hover de botones */
  --color-primary-mid:   #52B788;   /* Verde medio — highlights, bordes activos */
  --color-primary-pale:  #D8F3DC;   /* Verde pálido — fondos de sección */
  --color-ink:           #1A1F2E;   /* Titulares principales */
  --color-slate:         #3D4A5C;   /* Cuerpo de texto */
  --color-mist:          #8A96A3;   /* Texto secundario, labels */
  --color-cloud:         #E8ECF0;   /* Borders, separadores */
  --color-off-white:     #F7F8FA;   /* Fondos de secciones alternas */
  --color-white:         #FFFFFF;   /* Fondo principal */
}
```

## Tipografía

```css
--font-display: 'Plus Jakarta Sans', sans-serif;   /* Titulares: weight 600, 700 */
--font-body:    'Inter', sans-serif;               /* Cuerpo: weight 400, 500 */
```

**next/font — cargar en `app/layout.tsx`:**
```typescript
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
})
```

**Escala tipográfica:**
```css
--text-xs:   0.75rem;    /* 12px — labels, badges */
--text-sm:   0.875rem;   /* 14px — texto secundario */
--text-base: 1rem;       /* 16px — cuerpo */
--text-lg:   1.125rem;   /* 18px — cuerpo destacado */
--text-xl:   1.25rem;    /* 20px — subtítulos */
--text-2xl:  1.5rem;     /* 24px — H3 */
--text-3xl:  1.875rem;   /* 30px — H2 */
--text-4xl:  2.25rem;    /* 36px — H1 mobile */
--text-5xl:  3rem;       /* 48px — H1 desktop */
```

## Tailwind Config

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:      '#2D6A4F',
        'primary-dark':'#1B4332',
        'primary-mid': '#52B788',
        'primary-pale':'#D8F3DC',
        ink:          '#1A1F2E',
        slate:        '#3D4A5C',
        mist:         '#8A96A3',
        cloud:        '#E8ECF0',
        'off-white':  '#F7F8FA',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

## Espaciado y layout

```css
--spacing-section:   5rem;      /* Padding vertical entre secciones */
--max-width:         1120px;    /* Ancho máximo del contenido */
--border-radius-sm:  6px;
--border-radius-md:  10px;
--border-radius-lg:  16px;
```

## Sombras

```css
--shadow-card:   0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05);
--shadow-hover:  0 4px 20px rgba(45,106,79,0.12);
--shadow-cta:    0 2px 8px rgba(45,106,79,0.25);
```

## Logo

El cliente no tiene logo. Usar logotipo tipográfico:
- Texto: "Gestoria Ramón Muntaner"
- Fuente: Plus Jakarta Sans 600
- Color: `--color-ink` (#1A1F2E)
- Punto de acento: `--color-primary` (#2D6A4F)
- Favicon: monograma "GRM" en verde sobre blanco

## Personalidad

Profesional · Cercano · Claro · Sin rodeos · Moderno
Tono: Directo, accesible, en español castellano. Sin tecnicismos innecesarios.
Evitar: Anglicismos, copy genérico, frialdad corporativa.
