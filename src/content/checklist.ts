// Contenido de /shopify/checklist/. Edita textos, zonas o el mensaje
// final aquí sin tocar los componentes.

export const checklist = {
  meta: {
    title: '20 fallos que te quitan ventas en tu tienda online — Checklist gratis',
    description:
      'Audita tu tienda Shopify en 2 minutos: marca los fallos que reconoces y descubre cuántas ventas estás dejando sobre la mesa.',
    url: 'https://emerypa-code.github.io/shopify/checklist/',
    ogImage: '/images/shopify/og-image.jpg',
  },

  tag: 'CHECKLIST GRATIS',
  headline: ['20 fallos que te quitan', 'ventas en tu tienda online.'],
  headlineItalicIndex: 1,
  subtitle:
    'Marca las casillas que describen tu tienda ahora mismo. Al final te digo cuántas ventas podrías estar perdiendo y qué hacer primero.',

  counterLabel: 'Fallos encontrados',
  storageKey: 'emerypa-checklist-v1',

  zones: [
    {
      id: 'tarjeta',
      title: 'Tarjeta de producto',
      items: [
        {
          id: 1,
          title: 'Todo centrado → alinea el texto a la izquierda',
          description:
            'Los títulos descriptivos, las características y los párrafos se leen y escanean mejor alineados a la izquierda. Reserva el centrado para elementos cortos donde tenga sentido.',
        },
        {
          id: 2,
          title: 'Demasiadas etiquetas → quédate con una',
          description:
            '¿Nuevo, oferta, top ventas y exclusivo a la vez? Prioriza una etiqueta comercial que realmente aporte valor. Evita competir por la atención del comprador.',
        },
        {
          id: 3,
          title: 'Texto legal en la tarjeta → llévalo a la ficha de producto',
          description:
            'No llenes las tarjetas con bloques de condiciones. Usa información breve y deja los detalles en la ficha, manteniendo siempre visible la información exigida legalmente.',
        },
        {
          id: 4,
          title: 'Precio escondido → hazlo grande y visible junto al botón',
          description:
            'El cliente debe identificar el precio sin buscarlo. Dale jerarquía visual y colócalo cerca de la acción de compra.',
        },
        {
          id: 5,
          title: 'Foto recargada → producto protagonista',
          description:
            'La imagen principal debe mostrar claramente qué vendes. Utiliza un fondo limpio, buena iluminación y un encuadre consistente entre productos.',
        },
      ],
    },
    {
      id: 'navegacion',
      title: 'Navegación y home',
      items: [
        {
          id: 6,
          title: 'Home confusa → explica qué vendes desde el primer vistazo',
          description:
            'Tu primera pantalla debe responder qué vendes, por qué elegirte y dónde empezar a comprar. Evita eslóganes bonitos que no explican nada.',
        },
        {
          id: 7,
          title: 'Menú complicado → categorías claras y fáciles de encontrar',
          description:
            'Organiza los productos con nombres que utilizarían tus clientes, no con términos internos de la empresa. Evita menús interminables.',
        },
        {
          id: 8,
          title: 'Buscador y filtros deficientes → facilita encontrar productos',
          description:
            'Haz accesible la búsqueda. Si el catálogo lo necesita, añade filtros por precio, talla, color o atributos relevantes, con los filtros activos visibles.',
        },
      ],
    },
    {
      id: 'ficha',
      title: 'Ficha de producto',
      items: [
        {
          id: 9,
          title: 'Una sola fotografía → muestra el producto en contexto',
          description:
            'Incluye varias perspectivas, detalles y una foto que permita apreciar su tamaño real. En moda, muestra también cómo queda puesto.',
        },
        {
          id: 10,
          title: 'Descripción genérica → comunica beneficios reales',
          description:
            'No te limites a enumerar materiales y características. Explica qué problema soluciona, para quién es y qué lo hace diferente, sin omitir datos técnicos útiles.',
        },
        {
          id: 11,
          title: 'Variantes ocultas → tamaños y colores visibles',
          description:
            'Muestra las opciones como botones o muestras visuales cuando sea práctico. Indica cuáles están agotadas antes de que el cliente intente comprarlas.',
        },
        {
          id: 12,
          title: 'Botón de compra perdido → CTA claro y accesible',
          description:
            'Destaca «Añadir al carrito» frente a otras acciones. En fichas largas de móvil, prueba un botón de compra fijo sin tapar contenido importante.',
        },
      ],
    },
    {
      id: 'confianza',
      title: 'Confianza y transparencia',
      items: [
        {
          id: 13,
          title: 'Gastos y plazos ocultos → información antes del checkout',
          description:
            'Indica los gastos de envío, las condiciones de envío gratis y una estimación de entrega desde la ficha del producto, cuando puedan calcularse.',
        },
        {
          id: 14,
          title: 'Devoluciones escondidas → explica la política junto a la compra',
          description:
            'Muestra un resumen comprensible y un enlace a la política completa. El cliente debe conocer las condiciones antes de pagar.',
        },
        {
          id: 15,
          title: 'Sin reseñas → opiniones auténticas y relevantes',
          description:
            'Incorpora valoraciones verificables y, cuando existan, fotografías de compradores. No ocultes sistemáticamente las críticas: responderlas también genera confianza.',
        },
      ],
    },
    {
      id: 'carrito',
      title: 'Carrito y checkout',
      items: [
        {
          id: 16,
          title: 'Carrito confuso → resumen editable y costes transparentes',
          description:
            'Permite cambiar cantidades, eliminar productos y comprobar subtotales fácilmente. Evita sorpresas económicas en el último paso.',
        },
        {
          id: 17,
          title: 'Checkout con obstáculos → compra como invitado y pago rápido',
          description:
            'No obligues a crear una cuenta. Ofrece opciones de pago rápido compatibles con tu mercado, como Shop Pay, Apple Pay, Google Pay o PayPal.',
        },
        {
          id: 18,
          title: 'Productos recomendados al azar → venta cruzada útil',
          description:
            'Propón complementos que tengan sentido y packs con valor real. No conviertas el carrito en una sucesión de ofertas que dificulte terminar la compra.',
        },
      ],
    },
    {
      id: 'movil',
      title: 'Móvil y datos',
      items: [
        {
          id: 19,
          title: 'Web lenta en móvil → mejora la velocidad real',
          description:
            'Comprime y dimensiona imágenes, elimina scripts y aplicaciones innecesarias y revisa Core Web Vitals. Como referencia, busca un LCP de 2,5 segundos o menos.',
        },
        {
          id: 20,
          title: 'Cambios a ciegas → mide dónde pierdes compradores',
          description:
            'Revisa visitas a productos, añadidos al carrito, llegada al checkout y compras. Prioriza las mejoras por datos y comprueba sus resultados tras implementarlas.',
        },
      ],
    },
  ],

  results: {
    threshold: 5,
    lowTitle: 'Vas por buen camino.',
    lowMessage:
      'Tu tienda tiene menos fallos de los habituales. Aun así, cerrar estos huecos suele notarse directo en la tasa de conversión.',
    highTitle: 'Estás perdiendo ventas cada día.',
    highMessage:
      'Con más de {threshold} fallos activos, es muy probable que estés perdiendo pedidos que ya tienes a un clic de distancia.',
    ctaLabel: 'Quiero que lo arreglen por mí',
    ctaHref: '/shopify/#contacto',
    resetLabel: 'Empezar de nuevo',
  },
};

export type Checklist = typeof checklist;
