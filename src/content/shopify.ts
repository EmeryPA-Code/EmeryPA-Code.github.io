// Todo el contenido editable de /shopify/ vive aquí.
// Cambia textos, cifras o enlaces sin tocar los componentes.

export const shopify = {
  meta: {
    title: 'Desarrollo y optimización de tiendas Shopify — Emery Piqueras',
    description:
      'Diseño, desarrollo y optimizo tiendas Shopify para que conviertan más con el tráfico que ya tienes. 10+ años de marketing, ahora aplicados al código.',
    url: 'https://emerypa-code.github.io/shopify/',
    ogImage: '/images/shopify/og-image.jpg',
  },

  nav: [
    { label: 'Problemas', href: '#problemas' },
    { label: 'Cómo lo arreglo', href: '#soluciones' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Casos', href: '#casos' },
    { label: 'Método', href: '#metodo' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaLabel: 'Trabajemos juntos',
  ctaHref: '#contacto',

  floatingNav: [
    { key: 'inicio', label: 'Inicio', href: '#inicio' },
    { key: 'problemas', label: 'Problemas', href: '#problemas' },
    { key: 'soluciones', label: 'Soluciones', href: '#soluciones' },
    { key: 'calculadora', label: 'Calculadora', href: '#calculadora' },
    { key: 'faq', label: "FAQ's", href: '#faq' },
  ],

  hero: {
    eyebrow: 'DESARROLLO Y OPTIMIZACIÓN SHOPIFY',
    headlineBefore: 'Hago que tu',
    headlineAfter: 'venda más',
    headlineLine2: 'con el tráfico que ya tienes.',
    subtitle:
      'Diseño, desarrollo y optimizo tiendas Shopify con criterio de marketer: cada cambio se mide en pedidos, no en "queda más bonito".',
    ctaPrimary: 'Trabajemos juntos',
    ctaSecondary: 'Ver cómo lo hago',
    scarcity: 'Solo acepto 3 proyectos nuevos al mes.',
    notifications: [
      { store: 'whitegorilla.co', amount: '34,90 €', product: 'Calcetines pack x3' },
      { store: 'acuatoi.com', amount: '58,00 €', product: 'Sudadera Acuatoi' },
      { store: 'piscinastoi.com', amount: '412,00 €', product: 'Piscina desmontable 4m' },
      { store: 'tutienda.com', amount: '76,50 €', product: 'Pedido nuevo' },
    ],
    screenshots: [
      { src: '/images/shopify/store-1.jpg', alt: 'Captura de la tienda Naranjamania' },
      { src: '/images/shopify/store-2.jpg', alt: 'Captura de la tienda Hawkers' },
      { src: '/images/shopify/store-3.jpg', alt: 'Captura de la tienda Toi' },
      { src: '/images/shopify/store-4.jpg', alt: 'Captura de la tienda Piscinas Toi' },
    ],
  },

  logos: {
    label: 'Marcas con las que he trabajado',
    items: [
      { src: '/images/logos/hawkers.png', alt: 'Hawkers' },
      { src: '/images/logos/piscinas-toi.png', alt: 'Piscinas Toi' },
      { src: '/images/logos/white-gorilla.png', alt: 'White Gorilla Co' },
      { src: '/images/logos/phone-house.png', alt: 'Phone House' },
      { src: '/images/logos/mynx.png', alt: 'Mynx' },
    ],
  },

  problems: {
    tag: 'EL PROBLEMA',
    headline: ['¿Por qué tu tienda', 'no vende lo que debería?'],
    headlineItalicIndex: 1,
    items: [
      {
        icon: 'template' as const,
        title: 'Plantilla genérica',
        description: 'El tema por defecto no cuenta nada de tu marca y se parece a otras mil tiendas.',
      },
      {
        icon: 'speed' as const,
        title: 'Web lenta en móvil',
        description: 'Cada segundo de más carga es gente que se va antes de ver el producto.',
      },
      {
        icon: 'ticket' as const,
        title: 'Ticket medio estancado',
        description: 'Vendes, pero siempre la misma cifra por pedido, mes tras mes.',
      },
      {
        icon: 'cac' as const,
        title: 'CAC que sube',
        description: 'Cada vez pagas más por cada cliente nuevo y el margen se estrecha.',
      },
      {
        icon: 'apps' as const,
        title: 'Demasiadas apps',
        description: 'Instalaste diez apps para arreglar diez síntomas, no la causa.',
      },
      {
        icon: 'blind' as const,
        title: 'Cambios sin datos',
        description: 'Decides por intuición porque nadie mide qué funciona y qué no.',
      },
      {
        icon: 'cart' as const,
        title: 'Checkout con fugas',
        description: 'La gente llega al carrito y se va justo antes de pagar.',
      },
    ],
    cta: { label: 'Quiero arreglar esto', href: '#contacto' },
  },

  solutions: {
    tag: 'LA SOLUCIÓN',
    headline: ['Cómo', 'lo arreglo.'],
    headlineItalicIndex: 1,
    blocks: [
      {
        title: 'Más ventas con el mismo tráfico',
        description:
          'Optimizo cada paso del embudo (producto, carrito, checkout) para que conviertan más de las visitas que ya te está trayendo tu marketing, sin depender de subir el presupuesto de ads.',
        visual: 'notifications' as const,
      },
      {
        title: 'Clientes que compran más por pedido',
        description:
          'Cross-selling, upsells y bundles bien colocados suben el ticket medio sin que se note forzado, solo mostrando lo que de verdad encaja.',
        visual: 'ticket' as const,
      },
      {
        title: 'Recompra, no solo primera venta',
        description:
          'Email post-compra, programas de fidelización y una experiencia que da ganas de volver: captar un cliente nuevo cuesta más que hacer que vuelva.',
        visual: 'orders' as const,
      },
    ],
    cta: { label: 'Cuéntame tu caso', href: '#contacto' },
  },

  calculator: {
    tag: 'LA CALCULADORA',
    headline: ['Cuánto dejas de', 'ganar cada mes.'],
    headlineItalicIndex: 1,
    subtitle: 'Mueve los sliders con tus números reales y mira el impacto de subir la conversión.',
    sessions: { label: 'Sesiones al mes', min: 500, max: 50000, step: 500, default: 8000 },
    conversionRate: { label: 'Tasa de conversión actual', min: 0.5, max: 6, step: 0.1, default: 1.5, unit: '%' },
    aov: { label: 'Ticket medio', min: 15, max: 300, step: 5, default: 55, unit: '€' },
    improvementPoints: 0.5,
    currentLabel: 'Ahora mismo',
    improvedLabel: 'Con +0,5 puntos de conversión',
    ordersLabel: 'Pedidos al mes',
    revenueLabel: 'Facturación al mes',
    differenceLabel: 'Diferencia al mes',
  },

  guarantee: {
    tag: 'MI FORMA DE TRABAJAR',
    headline: ['Garantía contractual', 'de resultados.'],
    headlineItalicIndex: 1,
    text: 'Si tu conversión no sube después de realizar tu web, seguimos trabajando gratis hasta conseguirlo. No cobramos por horas. Cobramos por resultados.',
  },

  cases: {
    tag: 'CASOS REALES',
    headline: ['Tiendas en las que', 'ya he trabajado.'],
    headlineItalicIndex: 1,
    items: [
      {
        name: 'White Gorilla Co',
        logo: '/images/logos/white-gorilla.png',
        challenge: 'Lanzar de cero una marca de calcetines sin presupuesto de agencia ni equipo técnico.',
        action:
          'Diseñé y desarrollé la tienda en Shopify, monté el catálogo, el SEO on-page y la presencia en marketplaces adicionales (Amazon, Zatro).',
        result:
          'Llegué a vender alrededor de 10.000 € con apenas presupuesto y construí una imagen de marca que en 2016 era muy adelantada a su época (hoy está de moda). Acabé cerrándola: toda la inversión era personal y no llegué a los resultados que esperaba.',
      },
      {
        name: 'Piscinas Toi',
        logo: '/images/logos/piscinas-toi.png',
        challenge: 'Tienda de piscinas desmontables con mucha estacionalidad y necesidad de subir el ticket medio.',
        action:
          'Gestiono el e-commerce completo: fichas de producto, email marketing, packaging y campañas de meta ads alineadas con la temporada.',
        result: 'Incremento de la facturación de un 10%.',
      },
      {
        name: 'Hawkers',
        logo: '/images/logos/hawkers.png',
        challenge:
          'Escalar las ventas en más de una decena de marketplaces internacionales (Amazon, Mercado Libre, Zalando, La Redoute...) sin perder margen ni control de stock.',
        action:
          'Gestioné yo solo las cuentas, campañas de venta y promociones de todos los marketplaces, con picos de máxima exigencia en fechas clave como el Black Friday.',
        result: 'Más de 1.000.000 € vendidos yo solo en fechas como Black Friday.',
      },
      {
        name: 'Acuatoi',
        logo: '/images/logos/piscinas-toi.png',
        challenge: 'Montar una tienda de merch y lifestyle desde cero junto a mi hermano, sin experiencia previa del equipo.',
        action:
          'Desarrollo y diseño de la tienda Shopify, estrategia de marca y estructura de catálogo pensada para crecer por categorías.',
        result: 'Lleva 3 meses online con inversión propia: ya está facturando y sigue en marcha.',
      },
    ],
  },

  methodology: {
    tag: 'MÉTODO',
    headline: ['Cómo trabajo,', 'paso a paso.'],
    headlineItalicIndex: 1,
    phases: [
      {
        label: 'Onboarding y análisis',
        weeks: 'Semana 1',
        description:
          'Entiendo tu negocio, tu margen, tu cliente y tus números actuales. Sin esto, cualquier cambio es un tiro a ciegas.',
        visual: 'checklist' as const,
      },
      {
        label: 'Auditoría CRO',
        weeks: 'Semana 1-2',
        description:
          'Reviso cada paso del embudo con datos: dónde se pierde gente, qué fricciona el checkout y qué palancas van a mover más la aguja.',
        visual: 'audit' as const,
      },
      {
        label: 'Diseño',
        weeks: 'Semana 2-3',
        description:
          'Diseño la tienda (o los cambios) priorizando conversión y coherencia de marca, no solo estética.',
        visual: 'design' as const,
      },
      {
        label: 'Desarrollo',
        weeks: 'Semana 3-5',
        description: 'Implemento en Liquid, pruebo en distintos dispositivos y dejo todo documentado.',
        visual: 'code' as const,
        codeSnippet: [
          '{% if product.available %}',
          '  <button class="btn-buy">',
          '    Añadir al carrito',
          '  </button>',
          '{% else %}',
          '  <span class="sold-out">Agotado</span>',
          '{% endif %}',
        ],
      },
    ],
  },

  complementary: {
    tag: 'SERVICIOS COMPLEMENTARIOS',
    headline: 'Además de Shopify, también me encargo de:',
    items: [
      { name: 'Meta Ads', description: 'Campañas de Facebook e Instagram enfocadas a conversión.' },
      { name: 'TikTok Ads', description: 'Contenido y campañas nativas para tráfico nuevo.' },
      { name: 'Pinterest Ads', description: 'Captación con intención de compra alta.' },
      { name: 'Email marketing', description: 'Flujos de recuperación, bienvenida y fidelización.' },
      { name: 'SEO', description: 'Estructura, contenido y rendimiento pensados para buscadores.' },
    ],
  },

  faq: {
    tag: 'PREGUNTAS FRECUENTES',
    headline: ['Antes de que', 'preguntes.'],
    headlineItalicIndex: 1,
    items: [
      {
        question: '¿Cuánto tardas en tener mi tienda lista?',
        answer:
          'Depende del alcance: una auditoría CRO puede estar en 1-2 semanas, un rediseño completo suele moverse entre 4 y 6 semanas. Te doy un plazo concreto después de la fase de análisis.',
      },
      {
        question: '¿Cómo es el pago?',
        answer:
          'Siempre por adelantado, ya que una vez efectuado el pago empezamos a mover todos nuestros recursos para brindarte el mejor servicio.',
      },
      {
        question: '¿Cómo nos comunicamos durante el proyecto?',
        answer:
          'Un canal directo (email o WhatsApp) y actualizaciones periódicas de avance, sin depender de reuniones interminables.',
      },
      {
        question: '¿Qué es exactamente una auditoría CRO?',
        answer:
          'Es una revisión a fondo de tu tienda enfocada en conversión: reviso analítica, comportamiento de usuarios, checkout y fichas de producto, y te entrego un listado priorizado de qué cambiar y por qué.',
      },
      {
        question: '¿Trabajas con tiendas que ya existen o solo desde cero?',
        answer:
          'Las dos cosas. La mayoría de proyectos son tiendas ya en marcha que necesitan optimización, no una tienda nueva de cero. Eso sí, siempre dependerá del presupuesto.',
      },
      {
        question: '¿Qué necesitas de mí para empezar?',
        answer:
          'Acceso de colaborador a tu admin de Shopify, acceso a Google Analytics/Meta si los usas, y media hora tuya para la primera llamada de contexto.',
      },
    ],
  },

  about: {
    tag: '¿QUIÉN HAY DETRÁS?',
    headline: ['No soy una agencia.', 'Soy yo, con criterio.'],
    headlineItalicIndex: 1,
    portraitAlt: 'Retrato de Emery Piqueras',
    paragraphs: [
      'Empecé montando mi propia marca, White Gorilla, y ahí aprendí lo que de verdad importa cuando el dinero que se juega es el tuyo: retorno, prioridades claras y gestión de principio a fin. Después pasé por Hawkers gestionando marketplaces a gran volumen, y por agencia llevando cuentas grandes bajo presión.',
      'Hoy compagino el marketing y e-commerce de Piscinas Toi con un Máster en Full Stack Web Development, porque creo que el futuro de Shopify está en el cruce entre estrategia de marketing y ejecución técnica. Por eso no solo te diseño una tienda bonita: la construyo pensando en que venda.',
    ],
    facts: [
      { value: '10+', label: 'Años en marketing y growth' },
      { value: '2016', label: 'Fundador de White Gorilla Co' },
      { value: 'Ahora', label: 'Máster en Full Stack Web Development' },
    ],
  },

  finalCta: {
    tag: 'HABLEMOS',
    headline: ['Tu tienda puede', 'vender más.'],
    headlineItalicIndex: 1,
    subtitle: 'Cuéntame en qué punto está tu Shopify y qué te gustaría mejorar primero.',
  },

  intakeForm: {
    countryCodes: [
      { code: 'ES', dial: '+34' },
      { code: 'PT', dial: '+351' },
      { code: 'FR', dial: '+33' },
      { code: 'MX', dial: '+52' },
      { code: 'AR', dial: '+54' },
      { code: 'CO', dial: '+57' },
      { code: 'US', dial: '+1' },
    ],
    fields: {
      name: { label: 'Nombre y Apellidos', placeholder: '' },
      email: { label: 'Correo electrónico', placeholder: '' },
      phone: { label: 'Número de teléfono', placeholder: '600 000 000' },
      storeUrl: { label: 'Link de tu Tienda Online', placeholder: 'tutienda.com' },
      billing: {
        label: 'Facturación mensual',
        placeholder: 'Seleccionar...',
        options: [
          'Menos de 1.000 €',
          '1.000 € – 3.000 €',
          '3.000 € – 5.000 €',
          '5.000 € – 10.000 €',
          '10.000 € – 25.000 €',
          'Más de 25.000 €',
        ],
      },
      founder: {
        label: '¿Eres el fundador/a de la marca?',
        placeholder: 'Seleccionar',
        options: ['Sí, soy el fundador/a', 'No, formo parte del equipo', 'Soy agencia o freelance para esta marca'],
      },
      problems: {
        label: '¿Qué problemas estás teniendo actualmente en tu Tienda Online?',
        placeholder: '',
      },
      budget: {
        label:
          '¿Invertirías +6.000 € para mejorar la tasa de conversión de tu Tienda Online de forma asegurada bajo contrato?',
        placeholder: 'Seleccionar',
        options: ['Sí', 'No', 'Depende, cuéntame más'],
      },
    },
    submitLabel: 'Enviar',
    submittingLabel: 'Enviando…',
    successMessage: 'Gracias, he recibido tu solicitud. Te responderé lo antes posible.',
    errorMessage: 'Algo ha fallado al enviar el formulario. Prueba de nuevo o escríbeme directamente por email.',
  },
};

export type Shopify = typeof shopify;
