// Contenido de /ia/. Edita textos, proyectos o vídeos aquí
// sin tocar los componentes.

export const ia = {
  meta: {
    title: 'Webs y apps con IA — Emery Piqueras',
    description:
      'Construyo webs, apps y MVPs con IA: de la idea a algo que la gente puede usar, en semanas. Llévate gratis mi kit de IA con las herramientas, el stack y los prompts que uso.',
    url: 'https://emerypa-code.github.io/ia/',
    ogImage: '/images/shopify/og-image.jpg',
  },

  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Cómo trabajo', href: '#metodo' },
    { label: 'YouTube', href: '#youtube' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaLabel: 'Hablemos',
  ctaHref: '#contacto',

  hero: {
    tag: 'WEBS Y APPS CON IA',
    headline: ['Tu web o tu app,', 'construida con IA.'],
    headlineItalicIndex: 1,
    subtitle:
      'Soy Emery: 10 años en marketing y 2 construyendo productos con IA que ya usa gente real. Te ayudo a lanzar tu web, tu app o tu MVP en semanas, no en meses, y pensado para vender desde el primer día.',
    primaryCta: { label: 'Cuéntame tu proyecto', href: '#contacto' },
    secondaryCta: { label: 'Ver proyectos', href: '#proyectos' },
    proof: [
      { value: '10 años', label: 'en marketing' },
      { value: '5', label: 'proyectos propios publicados' },
      { value: '+100.000', label: 'asientos ocupados en Tu Estadio' },
    ],
  },

  kitCard: {
    tag: 'GRATIS',
    title: 'Mi kit de IA',
    text: 'Las herramientas, el stack y los prompts que uso para pasar de una idea a una web o app publicada.',
    bullets: ['Herramientas y para qué uso cada una', 'Mi stack para webs y apps', '5 prompts listos para copiar'],
    fields: {
      email: { label: 'Tu correo', placeholder: 'tucorreo@email.com' },
    },
    submitLabel: 'Quiero el kit',
    submittingLabel: 'Enviando…',
    privacyNote: 'Sin spam. Te escribo solo cuando tenga algo útil.',
    errorMessage: 'Algo ha fallado al enviar. Prueba de nuevo o escríbeme por el formulario de contacto.',
  },

  services: {
    tag: 'SERVICIOS',
    headline: ['Lo que puedo', 'construir contigo.'],
    headlineItalicIndex: 1,
    intro:
      'Uso la IA para ir mucho más rápido, pero cada proyecto lo diseño con criterio de marketing: claro, rápido y pensado para que la gente haga lo que tiene que hacer.',
    items: [
      {
        icon: 'web' as const,
        title: 'Webs y landings',
        text: 'Webs de marca, landings de captación y páginas de producto rápidas, cuidadas y fáciles de actualizar.',
        idealFor: 'Ideal si necesitas presencia profesional o captar clientes ya.',
        tags: ['Next.js', 'SEO', 'Formularios', 'Analítica'],
      },
      {
        icon: 'app' as const,
        title: 'Apps y MVPs',
        text: 'De la idea a una primera versión que la gente puede usar: registro, base de datos, pagos y panel de control.',
        idealFor: 'Ideal si quieres validar una idea antes de invertir en grande.',
        tags: ['Supabase', 'Usuarios', 'Pagos', 'Panel'],
      },
      {
        icon: 'ai' as const,
        title: 'Funciones con IA',
        text: 'Chat con GPT, Claude o Gemini, asistentes que responden con tus datos y automatizaciones dentro de tu producto.',
        idealFor: 'Ideal si ya tienes producto y quieres sumarle IA útil, no de adorno.',
        tags: ['Claude', 'OpenAI', 'Gemini', 'Agentes'],
      },
    ],
  },

  projects: {
    tag: 'PROYECTOS',
    headline: ['Cosas que ya', 'he construido.'],
    headlineItalicIndex: 1,
    intro: 'Productos propios, construidos con IA y publicados. Puedes entrar y probarlos.',
    // Capturas en /public/images/ia/. Si `image` está vacío, se muestra una portada con el nombre.
    items: [
      {
        name: 'Tu Estadio',
        category: 'Comunidad · 3D',
        description:
          'Un estadio 3D para la comunidad de Tu.Deporte: cada seguidor busca su asiento con su usuario de Instagram. Con votaciones, tienda e hitos que se desbloquean con la comunidad.',
        highlight: '+100.000 asientos ocupados',
        url: 'https://tu-estadio.com/',
        urlLabel: 'tu-estadio.com',
        image: '/images/ia/tu-estadio.jpg',
        accent: '#F5C518',
      },
      {
        name: 'Rívalo',
        category: 'Juego · Deportes',
        description:
          'Plataforma gratuita de predicciones deportivas en español: aciertas resultados de NBA, La Liga o Champions, sumas puntos y ganas cartas coleccionables únicas.',
        highlight: 'Predicciones + cartas coleccionables',
        url: 'https://playrivalo.com/',
        urlLabel: 'playrivalo.com',
        image: '/images/ia/rivalo.jpg',
        accent: '#FF5A6E',
      },
      {
        name: 'Mynx',
        category: 'IA · Chat',
        description:
          'Un único espacio para chatear con GPT, Claude, Gemini, Mistral o DeepSeek y comparar respuestas, sin saltar entre pestañas ni pagar suscripciones sueltas.',
        highlight: 'Todas las IA en un solo sitio',
        url: 'https://usemynx.com/',
        urlLabel: 'usemynx.com',
        image: '/images/ia/mynx.jpg',
        accent: '#8B7CFF',
      },
      {
        name: 'Bebés.cloud',
        category: 'Familia · App',
        description:
          'El panel para futuros padres: semana a semana del embarazo, calculadora de fecha de parto, tareas, citas, presupuesto y baby shower, todo en un solo lugar.',
        highlight: 'El embarazo, bajo control',
        url: 'https://bebes.cloud/',
        urlLabel: 'bebes.cloud',
        image: '/images/ia/bebes-cloud.jpg',
        accent: '#FF9EC4',
      },
      {
        name: 'Modo Tierra',
        category: 'Motor · Validación',
        description:
          'Rutas en moto con el máximo de pistas y el mínimo de asfalto. Antes de programar el motor de rutas, lancé la web para validar la idea con moteros reales.',
        highlight: 'Validar antes de construir',
        url: 'https://www.modotierra.com/',
        urlLabel: 'modotierra.com',
        image: '/images/ia/modo-tierra.jpg',
        accent: '#C98A4B',
      },
    ],
  },

  method: {
    tag: 'CÓMO TRABAJO',
    headline: ['Rápido, pero', 'sin improvisar.'],
    headlineItalicIndex: 1,
    steps: [
      {
        title: 'Llamada',
        text: 'Entendemos qué problema resuelves, para quién y qué es imprescindible en la primera versión.',
      },
      {
        title: 'Prototipo',
        text: 'En pocos días tienes algo que puedes ver y tocar. Ajustamos antes de construir de verdad.',
      },
      {
        title: 'Construcción',
        text: 'Desarrollo con IA y avances que puedes probar cada semana. Sin desaparecer durante meses.',
      },
      {
        title: 'Lanzamiento',
        text: 'Publicado, con analítica y lo básico de SEO. Te explico cómo gestionarlo y qué mejorar después.',
      },
    ],
    why: {
      title: '¿Por qué conmigo?',
      text: 'Porque no solo programo: llevo 10 años en marketing. Pienso en quién va a usar lo que construimos, cómo va a llegar a ello y qué tiene que hacer cuando llegue.',
    },
  },

  youtube: {
    tag: 'YOUTUBE',
    headline: ['Lo cuento todo', 'en mi canal.'],
    headlineItalicIndex: 1,
    intro: 'Documento lo que aprendo y construyo con IA, explicado para gente que no es ingeniera.',
    channelUrl: 'https://www.youtube.com/@emerypiqueras',
    channelLabel: 'Ver el canal',
    videos: [
      { id: 'OjB3u_sCTjM', title: 'Por qué todo el mundo está comprando un Mac mini para tener su propia IA' },
      { id: 'GE0ajrDGOu8', title: 'La revolución de la IA en casa ya está aquí (y NVIDIA acaba de cambiarlo todo)' },
      { id: 'Qk5W0SRMO1E', title: 'DEJA de tirar dinero en Lovable.dev: Usa Antigravity (IA Gratis)' },
    ],
  },

  kitBanner: {
    tag: 'RECURSO GRATIS',
    title: 'Empieza con mi kit de IA.',
    text: 'Las herramientas, el stack y los prompts que uso para construir webs y apps con IA. Déjame tu correo y te lo llevas.',
  },

  faq: {
    tag: "FAQ'S",
    headline: ['Preguntas', 'frecuentes.'],
    headlineItalicIndex: 1,
    items: [
      {
        question: '¿Cuánto cuesta?',
        answer:
          'Depende de lo que haya que construir. Después de la primera llamada te paso un presupuesto cerrado, con lo que incluye y lo que no, para que no haya sorpresas.',
      },
      {
        question: '¿Cuánto se tarda?',
        answer:
          'Una landing o una web sencilla, días. Un MVP, normalmente unas semanas. La IA acelera mucho el desarrollo, y el objetivo es lanzar pronto y mejorar con datos reales.',
      },
      {
        question: '¿Qué tecnologías usas?',
        answer:
          'Next.js, TypeScript y Tailwind para la parte visual, Supabase para usuarios y datos, y Vercel o GitHub Pages para publicar. Para la IA, Claude, OpenAI o Gemini según el caso.',
      },
      {
        question: 'No sé exactamente lo que necesito, ¿te escribo igualmente?',
        answer:
          'Sí. Muchas veces la primera llamada sirve justo para eso: aterrizar la idea y decidir qué tiene sentido construir primero, y qué no.',
      },
      {
        question: '¿Puedo seguir cambiando cosas después?',
        answer:
          'Sí. Te explico cómo actualizar lo básico por tu cuenta y, si lo necesitas, seguimos trabajando en mejoras después del lanzamiento.',
      },
    ],
  },

  contact: {
    tag: 'CONTACTO',
    headline: ['¿Qué quieres', 'construir?'],
    headlineItalicIndex: 1,
    text: 'Cuéntame tu idea en dos líneas y te respondo con los siguientes pasos.',
    origin: 'IA - contacto',
    fields: {
      name: { label: 'Nombre', placeholder: 'Tu nombre' },
      email: { label: 'Correo', placeholder: 'tucorreo@email.com' },
      type: {
        label: '¿Qué necesitas?',
        options: ['Web o landing', 'App o MVP', 'Funciones con IA', 'Aún no lo sé'],
      },
      message: { label: 'Tu idea', placeholder: 'Qué quieres construir, para quién y para cuándo te gustaría tenerlo.' },
    },
    submitLabel: 'Enviar',
    submittingLabel: 'Enviando…',
    successMessage: '¡Recibido! Te escribo en menos de 48 horas.',
    errorMessage: 'Algo ha fallado al enviar. Prueba de nuevo en un momento.',
  },
};

export type Ia = typeof ia;
