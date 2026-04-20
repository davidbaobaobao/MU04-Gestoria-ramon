-- SEED — Gestoria Ramón Muntaner
-- Client UUID: 53291a33-cfb3-4187-834d-339dadacd8be
-- Ejecutar en: Supabase → SQL Editor
-- Vitrina Studio · 20 de abril de 2026

-- ══════════════════════════════════════════════════════
-- IMPORTANTE: DELETE antes de INSERT para evitar duplicados
-- ══════════════════════════════════════════════════════

-- ─── 1. TESTIMONIALS ──────────────────────────────────

DELETE FROM testimonials
WHERE client_id = '53291a33-cfb3-4187-834d-339dadacd8be';

INSERT INTO testimonials (client_id, author_name, role, body, rating, sort_order, visible)
VALUES
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    'Jordi Mas',
    'Gerente · Distribuciones Mas, Girona',
    'Llevamos más de cinco años con ellos y nunca hemos tenido un problema con Hacienda. Resuelven cualquier duda en menos de 24 horas y siempre con una explicación clara. Los recomiendo a cualquier empresa de la zona.',
    5,
    0,
    true
  ),
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    'Ana Rovira',
    'Directora · Clínica Fisio Girona',
    'Gestionar las nóminas de nuestro equipo era un quebradero de cabeza hasta que llegamos aquí. Ahora llegan puntuales cada mes y sin errores. Trato cercano y muy profesional.',
    5,
    1,
    true
  ),
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    'Marc Puigdomènech',
    'Autónomo · Consultoría TI',
    'Me ayudaron a constituir mi empresa y desde entonces llevan toda mi contabilidad. Lo que más valoro es que me explican las cosas en lenguaje normal, sin tecnicismos. Se nota que les importa el cliente.',
    5,
    2,
    true
  );

-- ─── 2. TEAM MEMBERS ──────────────────────────────────

DELETE FROM team_members
WHERE client_id = '53291a33-cfb3-4187-834d-339dadacd8be';

INSERT INTO team_members (client_id, name, role, bio, photo_url, sort_order, visible)
VALUES
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    'Ramón Muntaner',
    'Director y asesor fiscal',
    'Más de 20 años asesorando a pymes de Girona en materia fiscal y contable. Especialista en planificación tributaria para pequeñas y medianas empresas.',
    null,
    0,
    true
  ),
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    'Equip de Gestoria',
    '10 professionals especialitzats',
    'Comptabilitat, fiscal, laboral i tràmits administratius. Atenció presencial i telemàtica, de dilluns a divendres de 9:00 a 17:00.',
    null,
    1,
    true
  );

-- ─── 3. FAQS ──────────────────────────────────────────

DELETE FROM faqs
WHERE client_id = '53291a33-cfb3-4187-834d-339dadacd8be';

INSERT INTO faqs (client_id, question, answer, category, sort_order, visible)
VALUES
  -- Contabilidad
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    '¿Qué incluye el servicio de contabilidad?',
    'Incluye la llevanza de los libros contables, la elaboración de las cuentas anuales, las declaraciones trimestrales y anuales, y la preparación de informes de gestión para que puedas tomar decisiones con información real sobre tu negocio.',
    'Contabilidad',
    0,
    true
  ),
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    '¿Con qué frecuencia recibiré informes de mi contabilidad?',
    'Como mínimo, recibirás un informe trimestral coincidiendo con las declaraciones de IVA. Si lo necesitas con más frecuencia, podemos adaptarlo a mensual. Siempre tienes acceso a tu información actualizada bajo solicitud.',
    'Contabilidad',
    1,
    true
  ),
  -- Nóminas
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    '¿Cuándo tengo que enviarte los datos para las nóminas?',
    'Para que las nóminas estén listas a tiempo, necesitamos los datos de horas, incidencias y variaciones antes del día 20 de cada mes. Si hay cambios de última hora (bajas, altas), indícanoslo cuanto antes y lo gestionamos.',
    'Nóminas',
    2,
    true
  ),
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    '¿Gestionáis también las altas y bajas en la Seguridad Social?',
    'Sí, nos encargamos de todo el ciclo: contratos, altas en la Seguridad Social, modificaciones contractuales y bajas. Solo tienes que avisarnos con la información del trabajador y nosotros tramitamos el resto.',
    'Nóminas',
    3,
    true
  ),
  -- Trámites
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    '¿Qué impuestos presentáis en mi nombre?',
    'Gestionamos todas las declaraciones habituales: IVA trimestral y anual, retenciones de IRPF, Impuesto de Sociedades, declaración de operaciones con terceros (modelo 347) y cualquier otro modelo que requiera tu actividad.',
    'Trámites',
    4,
    true
  ),
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    '¿Podéis ayudarme a constituir una sociedad?',
    'Por supuesto. Te asesoramos sobre la forma jurídica más adecuada para tu situación (SL, SA, autónomo…), redactamos los estatutos, gestionamos el registro mercantil y te acompañamos en todo el proceso de constitución.',
    'Trámites',
    5,
    true
  ),
  -- Fiscal
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    '¿La primera consulta es realmente gratuita?',
    'Sí, sin compromiso. En esa primera reunión analizamos tu situación actual, te explicamos cómo podemos ayudarte y te damos un presupuesto claro. Si decides continuar, perfecto; si no, no hay ningún coste.',
    'General',
    6,
    true
  ),
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    '¿Podemos trabajar de forma telemática o es necesario ir a la oficina?',
    'Trabajamos perfectamente de forma telemática. Puedes enviarnos la documentación por email o a través de nuestra plataforma, y hacemos las reuniones por videollamada si lo prefieres. Si estás en Girona y prefieres venir en persona, también puedes. Nos adaptamos a ti.',
    'General',
    7,
    true
  );

-- ─── 4. POSTS (blog) ──────────────────────────────────

-- Nota: La tabla puede llamarse 'posts' o similar según el schema de Supabase.
-- Si no existe la tabla posts en el schema base, omitir este bloque
-- y crear la tabla manualmente o adaptar al nombre correcto.

DELETE FROM posts
WHERE client_id = '53291a33-cfb3-4187-834d-339dadacd8be';

INSERT INTO posts (client_id, title, excerpt, category, slug, published_at, visible, sort_order)
VALUES
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    'Novedades fiscales 2026: lo que debes saber si tienes una pyme',
    'Repasamos los principales cambios en la normativa fiscal que afectan a las pequeñas y medianas empresas este año: nuevos límites, plazos modificados y deducciones a tener en cuenta.',
    'Fiscal',
    'novedades-fiscales-2026-pymes',
    '2026-04-15',
    true,
    0
  ),
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    'Cómo gestionar una baja laboral en tu empresa sin errores',
    'Una baja de un trabajador genera trámites que hay que hacer bien y a tiempo. Te explicamos el proceso paso a paso: plazos, documentación y lo que tienes que comunicar a la Seguridad Social.',
    'Laboral',
    'gestionar-baja-laboral-empresa',
    '2026-03-28',
    true,
    1
  ),
  (
    '53291a33-cfb3-4187-834d-339dadacd8be',
    'IVA trimestral: errores frecuentes y cómo evitarlos',
    'La declaración de IVA del primer trimestre es una de las más problemáticas para muchos autónomos y pymes. Estos son los errores que vemos con más frecuencia y cómo evitarlos.',
    'Contabilidad',
    'iva-trimestral-errores-frecuentes',
    '2026-03-10',
    true,
    2
  );

-- ─── ACTUALIZAR ESTADO DEL CLIENTE ────────────────────

UPDATE clients
SET
  status = 'building',
  dynamic_sections = ARRAY['testimonials', 'team_members', 'faqs', 'posts']
WHERE id = '53291a33-cfb3-4187-834d-339dadacd8be';

-- ══════════════════════════════════════════════════════
-- FIN DEL SEED
-- Registros insertados:
--   testimonials:  3
--   team_members:  2
--   faqs:          8
--   posts:         3
-- Estado cliente:  building
-- ══════════════════════════════════════════════════════
