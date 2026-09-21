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
  ctaHref: '/#contacto',

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
      { src: '/images/shopify/store-1.svg', alt: 'Placeholder captura de tienda Shopify 1' },
      { src: '/images/shopify/store-2.svg', alt: 'Placeholder captura de tienda Shopify 2' },
      { src: '/images/shopify/store-3.svg', alt: 'Placeholder captura de tienda Shopify 3' },
      { src: '/images/shopify/store-4.svg', alt: 'Placeholder captura de tienda Shopify 4' },
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
    cta: { label: 'Quiero arreglar esto', href: '/#contacto' },
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
    cta: { label: 'Cuéntame tu caso', href: '/#contacto' },
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
    headline: ['Compromiso,', 'no promesas vacías.'],
    headlineItalicIndex: 1,
    // Placeholder: define aquí qué garantía ofreces realmente antes de publicar.
    text: '[PLACEHOLDER — escribe aquí tu garantía real: por ejemplo, qué pasa si no se cumplen los plazos, qué incluye el soporte post-lanzamiento, o bajo qué condiciones seguimos trabajando juntos hasta que el resultado te convenza.]',
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
        result: '[PLACEHOLDER — cifra real: ventas, tráfico orgánico o pedidos conseguidos]',
      },
      {
        name: 'Piscinas Toi',
        logo: '/images/logos/piscinas-toi.png',
        challenge: 'Tienda de piscinas desmontables con mucha estacionalidad y necesidad de subir el ticket medio.',
        action:
          'Gestiono el e-commerce completo: fichas de producto, email marketing, packaging y campañas de meta ads alineadas con la temporada.',
        result: '[PLACEHOLDER — cifra real: crecimiento de ventas o de ticket medio]',
      },
      {
        name: 'Acuatoi',
        logo: '/images/logos/piscinas-toi.png',
        challenge: 'Montar una tienda de merch y lifestyle desde cero junto a mi hermano, sin experiencia previa del equipo.',
        action:
          'Desarrollo y diseño de la tienda Shopify, estrategia de marca y estructura de catálogo pensada para crecer por categorías.',
        result: '[PLACEHOLDER — cifra real: pedidos, tráfico o facturación]',
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
          '[PLACEHOLDER — define aquí tu estructura de pagos: por ejemplo, un % al inicio y el resto al entregar, o pagos por fases.]',
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
          'Las dos cosas. La mayoría de proyectos son tiendas ya en marcha que necesitan optimización, no una tienda nueva de cero.',
      },
      {
        question: '¿Qué necesitas de mí para empezar?',
        answer:
          'Acceso de colaborador a tu admin de Shopify, acceso a Google Analytics/Meta si los usas, y media hora tuya para la primera llamada de contexto.',
      },
    ],
  },

  finalCta: {
    tag: 'HABLEMOS',
    headline: ['Tu tienda puede', 'vender más.'],
    headlineItalicIndex: 1,
    subtitle: 'Cuéntame en qué punto está tu Shopify y qué te gustaría mejorar primero.',
  },
};

export type Shopify = typeof shopify;
