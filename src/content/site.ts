// Todo el contenido editable de la web vive en este archivo.
// Cambia textos, enlaces o datos aquí sin tocar los componentes.

export const site = {
  meta: {
    name: 'Emery Piqueras',
    fullName: 'Emery Piqueras Aguilar',
    role: 'Marketer & Developer',
    location: 'Valencia, España',
    url: 'https://emerypa-code.github.io/',
    title: 'Emery Piqueras — Marketer & Developer',
    description:
      'Marketing de verdad, capacidad técnica y criterio. Emery Piqueras combina 10+ años de growth y marketing digital con desarrollo full stack e IA aplicada.',
    ogImage: '/images/og-image.jpg',
  },

  contact: {
    email: 'emerypiqueras@gmail.com',
    linkedin: 'https://www.linkedin.com/in/emerypiqueras/',
    x: 'https://x.com/EmeryPA',
    instagram: 'https://www.instagram.com/emery.p.a/',
  },

  nav: [
    { label: 'Lo que hago', href: '#lo-que-hago' },
    { label: 'Trayectoria', href: '#trayectoria' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Formación', href: '#formacion' },
    { label: 'Contacto', href: '#contacto' },
  ],

  hero: {
    kicker: 'EMERY PIQUERAS / MARKETER & DEVELOPER · VALENCIA, ESPAÑA',
    headline: ['Marketing.', 'Código.', 'Criterio.'],
    headlineItalicIndex: 2,
    subtitle:
      'Diez años entendiendo cómo crece una marca y dos construyendo el software que la hace crecer. Ese cruce es mi sitio.',
    ctaPrimary: { label: 'Hablemos', href: '#contacto' },
    ctaSecondary: { label: 'Explora lo que hago', href: '#lo-que-hago' },
    portraitAlt: 'Retrato de Emery Piqueras',
    portraitCaption: 'Emery Piqueras — Valencia, 2026',
    facts: [
      {
        value: '10+' as string | null,
        logo: null as string | null,
        logoAlt: '',
        label: 'Años en marketing y growth',
        detail: 'Desde marca propia hasta cuentas de retail con presencia internacional.',
      },
      {
        value: 'Ahora' as string | null,
        logo: null as string | null,
        logoAlt: '',
        label: 'Máster en Full Stack Web Development',
        detail: 'Python, Flask, APIs y frontend, aplicado a proyectos reales en marcha.',
      },
      {
        value: null as string | null,
        logo: '/images/projects/rivalo-logo.png' as string | null,
        logoAlt: 'Rívalo',
        label: 'Proyecto propio destacado',
        detail: 'Predicciones deportivas con cartas coleccionables, de idea a producto.',
      },
    ],
  },

  logos: {
    label: 'Parte de mi recorrido',
    items: [
      { src: '/images/projects/rivalo-logo.png', alt: 'Rívalo', dark: true },
      { src: '/images/logos/logo-2.svg', alt: 'Logotipo 2 (sustituir)', dark: false },
      { src: '/images/logos/logo-3.svg', alt: 'Logotipo 3 (sustituir)', dark: false },
      { src: '/images/logos/logo-4.svg', alt: 'Logotipo 4 (sustituir)', dark: false },
      { src: '/images/logos/logo-5.svg', alt: 'Logotipo 5 (sustituir)', dark: false },
    ],
  },

  whatIDo: {
    tag: '01 LO QUE HAGO',
    headline: ['Tres formas de', 'sumar valor.'],
    headlineItalicIndex: 1,
    cards: [
      {
        icon: 'growth' as const,
        title: 'Marketing y crecimiento',
        description:
          'Estrategia, contenido y captación con un objetivo claro: que la marca venda, no solo que se vea bien. Diez años montando esto de cero y también dentro de estructuras grandes.',
        tags: ['Estrategia', 'Contenido', 'Marca personal', 'Captación', 'Email marketing', 'SEO'],
      },
      {
        icon: 'code' as const,
        title: 'Desarrollo de producto',
        description:
          'Webs, apps y herramientas a medida construidas con criterio de marketer: pensadas para convertir, no solo para funcionar. Python, Flask y frontend en el día a día.',
        tags: ['Python', 'Flask', 'REST APIs', 'HTML/CSS', 'Frontend', 'Git'],
      },
      {
        icon: 'ai' as const,
        title: 'IA aplicada',
        description:
          'Automatizaciones, agentes e integraciones con LLMs que quitan trabajo repetitivo de en medio y dejan tiempo para lo que de verdad mueve la aguja.',
        tags: ['LLMs', 'Prompt engineering', 'n8n', 'RAG', 'Anthropic', 'OpenAI API'],
      },
    ],
    closing: 'Si tu proyecto necesita hablar los dos idiomas a la vez, probablemente sea buen momento para escribirme.',
  },

  trajectory: {
    tag: '02 TRAYECTORIA',
    headline: ['Del negocio propio', 'al código.'],
    headlineItalicIndex: 1,
    current: {
      label: 'Ahora mismo',
      role: 'Marketing en Piscinas Toi (Torrente Industrial)',
      period: '2020 — Presente',
      description:
        'Estrategia de marketing y gestión de pedidos para una marca de piscinas desmontables: e-commerce, email marketing, packaging, meta ads y creación de contenido. En paralelo, completando un Máster en Full Stack Web Development en Conquer Blocks para cerrar el círculo entre estrategia y ejecución técnica.',
    },
    timeline: [
      {
        year: '2023 — 2024',
        company: 'Freelance',
        role: 'Growth Partner (Marketing)',
        location: 'Valencia',
        description:
          'Servicio 360 para marcas: e-commerce, SEO, email marketing y meta ads, combinando estrategia y ejecución.',
      },
      {
        year: '2021 — 2023',
        company: 'Entrenaranjos International School',
        role: 'Community Manager',
        location: 'Valencia',
        description:
          'Campañas de meta ads para formularios de contacto y captación de alumnado durante las dos temporadas del centro.',
      },
      {
        year: '2020 — Presente',
        company: 'Piscinas Toi (Torrente Industrial)',
        role: 'Marketing',
        location: 'Torrente, Valencia',
        description:
          'Procesamiento de pedidos y estrategia de marketing: e-commerce, email marketing, packaging y meta ads.',
      },
      {
        year: '2018 — 2020',
        company: 'Hawkers',
        role: 'E-tail Account Manager (Marketplaces)',
        location: 'Valencia',
        description:
          'Gestión de cuentas en Amazon, Mercado Libre, Zalando, La Redoute y otros más de una decena de marketplaces internacionales: campañas de venta, promociones y facturación.',
      },
      {
        year: '2016 — 2019',
        company: 'White Gorilla Co',
        role: 'Fundador',
        location: 'Valencia',
        description:
          'Tienda online de calcetines de marca propia: marketing digital, redes, marketplaces, SEO y diseño de e-commerce en Shopify, con gestión directa de presupuesto y proveedores.',
      },
    ],
  },

  about: {
    tag: '03 SOBRE MÍ',
    headline: ['Aprender', 'haciendo.'],
    headlineItalicIndex: 1,
    paragraphs: [
      'Empecé montando mi propia marca, White Gorilla, y ahí aprendí lo que de verdad importa cuando el dinero que se juega es el tuyo: retorno, prioridades claras y gestión de principio a fin. De ahí pasé a Hawkers, donde entendí cómo se mueve el volumen alto y la complejidad de gestionar decenas de marketplaces a la vez.',
      'Después vino el trabajo de agencia, cuentas grandes y entornos de mucha presión, sin dejar nunca el terreno: campañas de email marketing para sectores tan distintos como piscinas desmontables o venta de naranja online, y estrategias de captación para centros educativos. Cada proyecto ha sido una forma distinta de aprender lo mismo: que el marketing sin ejecución se queda en powerpoint.',
      'Ahora mismo estoy sumando la pieza que me faltaba: código. Mientras sigo al frente del marketing de Piscinas Toi, curso un Máster en Full Stack Web Development porque creo que el futuro del e-commerce y del marketing digital está en el cruce entre estrategia y ejecución técnica. Hablar el idioma de los leads y el idioma del código a la vez es, cada vez más, lo que marca la diferencia.',
    ],
    highlight:
      'Entiendo el marketing como motor de negocio, no como una lista de tareas — y ahora tengo el código para construirlo yo mismo.',
  },

  projects: {
    tag: '04 PROYECTOS PROPIOS',
    headline: ['Lo que construyo', 'fuera de nómina.'],
    headlineItalicIndex: 1,
    items: [
      {
        name: 'Rívalo',
        logo: '/images/projects/rivalo-logo.png',
        description:
          'Plataforma de predicciones deportivas con un giro coleccionable: cartas de jugadores y equipos que dan vida al juego de acertar resultados.',
        stack: ['Producto', 'Frontend', 'Gamificación'],
        link: null,
        role: 'Fundador',
      },
      {
        name: 'Mynx',
        logo: null as string | null,
        description:
          'Un único chat para hablar con GPT, Claude y Gemini a la vez, sin saltar entre pestañas ni suscripciones sueltas.',
        stack: ['LLMs', 'Producto', 'IA aplicada'],
        link: null,
        role: 'Fundador',
      },
      {
        name: 'Acuatoi',
        logo: null as string | null,
        description:
          'Tienda de merchandising y lifestyle que llevo junto a mi hermano: diseño de producto, e-commerce y comunidad de marca.',
        stack: ['E-commerce', 'Branding', 'Shopify'],
        link: null,
        role: 'Co-fundador',
      },
      {
        name: 'AI Vibe Builders',
        logo: null as string | null,
        description:
          'Comunidad para gente que construye con IA en español: recursos, conversación y proyectos compartidos sobre marketing, código y automatización.',
        stack: ['Comunidad', 'IA', 'Contenido'],
        link: null,
        role: 'Fundador',
      },
    ],
  },

  education: {
    tag: '05 FORMACIÓN Y CERTIFICACIONES',
    headline: ['Formación que', 'sigue en marcha.'],
    headlineItalicIndex: 1,
    items: [
      {
        period: '2024 — Presente',
        title: 'Máster en Full Stack Web Development',
        institution: 'Conquer Blocks',
      },
      {
        period: '2017 — 2018',
        title: 'Máster en Marketing Digital y Redes Sociales',
        institution: 'EEME Business School, Valencia',
      },
      {
        period: '2013 — 2017',
        title: 'Grado en Administración de Empresas y Marketing',
        institution: 'Universidad Europea de Valencia',
      },
    ],
    certifications: [
      'Meta Lead Generation Course (2023)',
      'Google Ads Fundamentals',
      'Google Analytics Individual Qualification (2018)',
      'Digital Marketing Workshop — Activate Your Business by Google & BBVA',
    ],
    languages: ['Español (nativo)', 'Inglés (C1)', 'Francés (A1)', 'Italiano (A1)'],
  },

  finalCta: {
    tag: 'HABLEMOS',
    headline: ['Las buenas ideas', 'empiezan hablando.'],
    headlineItalicIndex: 1,
    subtitle:
      'Si tienes un proyecto que necesita marketing con criterio, desarrollo a medida o las dos cosas a la vez, cuéntame de qué se trata.',
    email: 'emerypiqueras@gmail.com',
  },

  contactForm: {
    // Crea un formulario gratis en https://formspree.io, copia su ID
    // (el código tras "/f/" en la URL que te dan) y pégalo aquí.
    formspreeId: 'xaennydq',
    fields: {
      name: { label: 'Nombre', placeholder: 'Tu nombre' },
      email: { label: 'Correo', placeholder: 'tucorreo@empresa.com' },
      phone: { label: 'Teléfono', placeholder: '600 000 000' },
      billing: {
        label: 'Facturación mensual',
        placeholder: 'Selecciona un rango',
        options: [
          'Menos de 1.000 €',
          '1.000 € – 3.000 €',
          '3.000 € – 5.000 €',
          '5.000 € – 10.000 €',
          '10.000 € – 25.000 €',
          'Más de 25.000 €',
        ],
      },
      service: {
        label: 'Qué servicio necesitas',
        placeholder: 'Selecciona un servicio',
        options: ['E-commerce', 'Marketing', 'Desarrollo'],
      },
    },
    submitLabel: 'Enviar',
    submittingLabel: 'Enviando…',
    successMessage: 'Gracias, he recibido tu mensaje. Te responderé lo antes posible.',
    errorMessage: 'Algo ha fallado al enviar el formulario. Prueba de nuevo o escríbeme directamente por email.',
  },

  footer: {
    backToTop: 'Volver arriba',
    privacyLink: { label: 'Privacidad', href: '/privacidad/' },
  },
};

export type Site = typeof site;
