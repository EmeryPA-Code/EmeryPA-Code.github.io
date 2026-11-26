// Contenido de «Mi kit de IA» (/ia/kit/). Edita herramientas, stack o prompts aquí.

export const kit = {
  path: '/ia/kit/',

  meta: {
    title: 'Mi kit de IA — Herramientas, stack y prompts | Emery Piqueras',
    description:
      'Las herramientas, el stack y los prompts que uso para construir webs y apps con IA, de la idea a publicarlo. Gratis.',
    url: 'https://emerypa-code.github.io/ia/kit/',
    ogImage: '/images/shopify/og-image.jpg',
  },

  gate: {
    unlockStorageKey: 'emerypa-kit-ia-unlocked',
    origin: 'Mi kit de IA',
    tag: 'RECURSO GRATIS',
    headline: ['Mi kit para construir', 'webs y apps con IA.'],
    headlineItalicIndex: 1,
    subtitle:
      'Lo que uso de verdad para pasar de una idea a algo publicado: herramientas, stack, mi forma de trabajar y 5 prompts listos para copiar.',
    preview: ['Las herramientas que uso', 'Mi stack para webs y apps', 'De la idea al lanzamiento en 5 pasos', '5 prompts para copiar'],
  },

  tag: 'MI KIT DE IA',
  headline: ['Todo lo que uso para', 'construir con IA.'],
  headlineItalicIndex: 1,
  subtitle: 'Guárdate esta página: la iré actualizando a medida que cambie mi forma de trabajar.',

  tools: {
    title: 'Las herramientas que uso',
    items: [
      { name: 'Claude', what: 'Mi IA principal para pensar, escribir y programar. Es la que más uso cada día.' },
      { name: 'Claude Code', what: 'Programo con él dentro de VS Code: le explico qué quiero y construye, revisa y corrige el código conmigo.' },
      { name: 'ChatGPT', what: 'Segunda opinión, ideas e imágenes. Pago los dos porque se complementan muy bien.' },
      { name: 'Lovable', what: 'Para levantar un prototipo visual en minutos y enseñarlo antes de construir en serio.' },
      { name: 'Antigravity', what: 'La alternativa gratuita para crear apps con IA que enseño en mi canal.' },
      { name: 'Gemini', what: 'Útil si trabajas con Google. Los Gems desaparecen y llegan las Skills: lo explico en el canal.' },
      { name: 'ElevenLabs', what: 'Voces naturales para vídeos. Narro con mi propia voz clonada.' },
      { name: 'Zapier', what: 'Conecto formularios, CRM y correo sin programar: los leads llegan solos a donde tienen que llegar.' },
    ],
  },

  stack: {
    title: 'Mi stack para webs y apps',
    intro: 'Pocas piezas, bien conocidas por la IA. Así se equivoca menos y tú dependes de menos cosas.',
    items: [
      { name: 'Next.js + TypeScript', what: 'La base de casi todo lo que construyo: webs rápidas y apps completas.' },
      { name: 'Tailwind CSS', what: 'Diseño directamente en el código. La IA lo maneja muy bien.' },
      { name: 'Supabase', what: 'Usuarios, base de datos y almacenamiento sin montar servidores.' },
      { name: 'Vercel o GitHub Pages', what: 'Para publicar. Esta misma web está en GitHub Pages.' },
      { name: 'GitHub', what: 'Todo el código guardado, con historial, y sincronizado entre ordenadores.' },
      { name: 'APIs de Claude y OpenAI', what: 'Cuando el producto necesita IA dentro: chats, resúmenes, asistentes.' },
    ],
  },

  flow: {
    title: 'De la idea al lanzamiento en 5 pasos',
    steps: [
      { title: 'La idea en una frase', text: 'Para quién es, qué problema resuelve y qué tiene que poder hacer el primer día. Si no cabe en una frase, aún no está clara.' },
      { title: 'Plan con IA', text: 'Con el prompt 1 conviertes la idea en un plan de MVP: pantallas, datos y qué dejar fuera.' },
      { title: 'Prototipo rápido', text: 'Lovable o Antigravity para ver y tocar la idea en una tarde. Se lo enseñas a 5 personas antes de seguir.' },
      { title: 'Construcción', text: 'Claude Code con un CLAUDE.md (prompt 2) y el stack de arriba. Pasos pequeños y probar cada uno.' },
      { title: 'Publicar y medir', text: 'Revisión final (prompt 5), publicar y mirar qué hace la gente. Mejorar con datos, no con intuiciones.' },
    ],
  },

  copyLabel: 'Copiar',
  copiedLabel: 'Copiado',

  prompts: {
    title: '5 prompts para copiar',
    intro: 'Funcionan en Claude y en ChatGPT. Cambia lo que está entre [CORCHETES].',
    items: [
      {
        title: 'De idea a plan de MVP',
        use: 'Para aterrizar una idea antes de escribir una sola línea de código.',
        text: `Actúa como product manager con experiencia lanzando productos digitales pequeños.

Mi idea: [DESCRIBE TU IDEA EN 2-3 FRASES]
Para quién es: [TU CLIENTE IDEAL]
Cómo pienso ganar dinero (si aplica): [MODELO]

Hazme un plan de MVP:
1. El problema principal en una frase y cómo lo resuelve el producto.
2. Las 3-5 funciones imprescindibles para la primera versión. Nada más.
3. Lo que dejo fuera a propósito, y por qué.
4. Las pantallas que necesito, con lo que hay en cada una.
5. Los datos que hay que guardar (tablas y campos principales).
6. Cómo sabré en 30 días si funciona: 2-3 métricas concretas.

Pregúntame lo que necesites antes de responder si falta información importante.`,
      },
      {
        title: 'CLAUDE.md para tu proyecto',
        use: 'Pídelo al empezar con Claude Code. Le da contexto en cada sesión y evita que se invente cosas.',
        text: `Crea un archivo CLAUDE.md para la raíz de mi proyecto. Va a leerlo Claude Code al empezar cada sesión.

Proyecto: [NOMBRE] — [QUÉ ES EN UNA FRASE]
Stack: [p. ej. Next.js, TypeScript, Tailwind, Supabase, Vercel]
Idioma de la interfaz: [ESPAÑOL]

Incluye:
- Qué es el proyecto y para quién.
- Estructura de carpetas y dónde va cada cosa.
- Comandos para arrancar, compilar y probar.
- Reglas de código: estilo, nombres y cómo crear componentes nuevos.
- Qué no tocar nunca (claves, archivos generados, configuración de producción).
- Cómo trabajar: cambios pequeños, explicar el plan antes de tocar varios archivos y comprobar que compila al terminar.

Que sea corto y directo: máximo una página.`,
      },
      {
        title: 'Landing que convierte',
        use: 'Para la página principal de tu web o tu app.',
        text: `Escribe y diseña la landing de [PRODUCTO] para [CLIENTE IDEAL].

Objetivo de la página: [que se registren / que pidan presupuesto / que dejen su correo]
Lo que la hace distinta: [TU VENTAJA]
Prueba que tengo: [testimonios, números, clientes, nada todavía]

Estructura:
1. Hero: titular que diga el resultado (no la función), subtítulo y un solo botón principal.
2. El problema contado como lo diría el cliente.
3. Cómo funciona en 3 pasos.
4. Beneficios, no características.
5. Prueba social (o, si no tengo, por qué confiar en mí).
6. Preguntas frecuentes que quitan objeciones.
7. Llamada a la acción final.

Dame el texto de cada bloque y después el código en [Next.js + Tailwind], mobile first.`,
      },
      {
        title: 'Arregla este error',
        use: 'Cuando algo se rompe y no sabes por dónde empezar.',
        text: `Tengo este error en mi proyecto [STACK]:

[PEGA EL ERROR COMPLETO]

Lo que estaba haciendo cuando apareció: [ACCIÓN]
Lo que ya he probado: [LO QUE HAYAS INTENTADO]

Antes de cambiar nada:
1. Explícame en lenguaje sencillo qué significa el error.
2. Dime las 2-3 causas más probables, de más a menos.
3. Propón el arreglo más pequeño posible y dime en qué archivo va.
No reescribas archivos enteros si basta con cambiar unas líneas.`,
      },
      {
        title: 'Revisión antes de publicar',
        use: 'El último paso antes de enseñarlo al mundo.',
        text: `Revisa mi proyecto antes de publicarlo. Es [QUÉ ES] hecho con [STACK].

Hazme una lista de comprobación y dime qué falla en cada punto:
- Móvil: ¿se ve y se usa bien a 375 px?
- Velocidad: imágenes pesadas, scripts innecesarios.
- SEO básico: títulos, descripciones, imagen para compartir y sitemap.
- Formularios: ¿funcionan y avisan si algo falla?
- Seguridad: claves expuestas en el código, reglas de acceso a la base de datos.
- Legal: política de privacidad y aviso de cookies si hay analítica.
- Analítica: ¿puedo medir lo importante?

Ordena los problemas de más a menos urgente.`,
      },
    ],
  },

  finalCta: {
    title: '¿Prefieres construirlo conmigo?',
    text: 'Si tienes una idea y quieres llegar antes, cuéntamela y vemos cómo hacerla realidad.',
    ctaLabel: 'Cuéntame tu proyecto',
    ctaHref: '/ia/#contacto',
    secondaryLabel: 'Ver mi canal de YouTube',
    secondaryHref: 'https://www.youtube.com/@emerypiqueras',
  },
};

export type Kit = typeof kit;
