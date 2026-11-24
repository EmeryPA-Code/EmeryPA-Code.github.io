// Contenido de /shopify/prompts/. Edita textos o prompts aquí
// sin tocar los componentes.

export const prompts = {
  meta: {
    title: '8 prompts para crear secciones de Shopify con IA — Gratis',
    description:
      'Los prompts que uso para diseñar secciones a medida en Shopify con ChatGPT o Claude: campaña tipo revista, reseñas, envío gratis, packs y más.',
    url: 'https://emerypa-code.github.io/shopify/prompts/',
    ogImage: '/images/shopify/og-image.jpg',
  },

  gate: {
    unlockStorageKey: 'emerypa-prompts-unlocked',
    origin: 'Pack prompts secciones IA',
    tag: 'RECURSO GRATIS',
    headline: ['8 prompts para crear', 'secciones de Shopify con IA.'],
    headlineItalicIndex: 1,
    subtitle:
      'Los prompts que uso para diseñar secciones a medida, como el catálogo de Black Friday de Acuatoi. Déjame tu correo y tu WhatsApp y los tienes al momento.',
    benefits: [
      'Un prompt base para que la IA entienda tu marca y tu tema',
      '8 secciones listas para pedir: campaña tipo revista, reseñas, envío gratis, packs…',
      'Código nativo de Shopify, editable desde el personalizador y sin apps',
    ],
    previewLabel: 'Esto es lo que vas a desbloquear',
    fields: {
      email: { label: 'Correo electrónico', placeholder: 'tucorreo@tutienda.com' },
      whatsapp: { label: 'WhatsApp', placeholder: '600 000 000' },
    },
    submitLabel: 'Quiero los prompts',
    submittingLabel: 'Enviando…',
    privacyNote: 'Sin spam. Solo te escribo si tiene sentido para tu tienda.',
    errorMessage: 'Algo ha fallado al enviar el formulario. Prueba de nuevo o escríbeme directamente por email.',
  },

  tag: 'TUS PROMPTS',
  headline: ['Crea secciones de Shopify', 'a medida con IA.'],
  headlineItalicIndex: 1,
  subtitle:
    'Copia el prompt base, rellena los [CORCHETES] con los datos de tu tienda y después pide la sección que necesites. Funcionan con ChatGPT y con Claude.',

  steps: {
    title: 'CÓMO USARLOS',
    items: [
      {
        title: 'Duplica tu tema',
        text: 'Tienda online → Temas → ··· → Duplicar. Trabaja siempre en la copia, nunca en el tema publicado.',
      },
      {
        title: 'Pega el prompt base',
        text: 'Rellena los datos de tu marca y pégalo en ChatGPT o Claude. Así todo lo que te genere sigue las mismas reglas.',
      },
      {
        title: 'Pide la sección',
        text: 'Copia el prompt de la sección que quieras y ajusta los [CORCHETES]. Si algo no te convence, pide cambios en el mismo chat.',
      },
      {
        title: 'Instálala y pruébala',
        text: 'Editar código → Sections → Añadir sección → pega el código. Luego añádela desde Personalizar y revísala en móvil antes de publicar.',
      },
    ],
    tip: 'Si te da un error al guardar, pega el mensaje de error en el chat y pide que lo corrija.',
  },

  copyLabel: 'Copiar',
  copiedLabel: 'Copiado',

  base: {
    title: 'Prompt base',
    use: 'Pégalo siempre primero. Le da a la IA el contexto de tu tienda y las reglas técnicas.',
    text: `Actúa como desarrollador senior de temas de Shopify (Online Store 2.0) y diseñador de e-commerce con foco en conversión.

Contexto de mi tienda:
- Marca: [NOMBRE DE LA MARCA]
- Qué vendo: [PRODUCTOS / CATEGORÍAS]
- Cliente ideal: [EDAD, ESTILO, QUÉ LE IMPORTA AL COMPRAR]
- Estilo visual: [COLORES EN HEX, TIPOGRAFÍAS, 3 ADJETIVOS QUE DEFINEN LA MARCA]
- Tema que uso: [DAWN / OTRO]

Reglas para todo lo que me generes:
1. Entrega un solo archivo .liquid de sección, listo para pegar en la carpeta Sections. Si hace falta tocar otro archivo del tema, dime exactamente cuál y dónde.
2. Incluye un {% schema %} completo: ajustes editables (textos, colores, imágenes, enlaces), bloques donde tenga sentido y "presets" para poder añadirla desde el personalizador.
3. CSS dentro de la sección, con clases prefijadas con el id de la sección para que no choque con el tema.
4. Mobile first. Comprueba que se ve bien a 375 px de ancho.
5. Sin librerías externas ni apps. JavaScript solo si es imprescindible, en vanilla y ligero.
6. Accesible: textos alternativos, contraste suficiente y foco visible.
7. Imágenes con image_url e image_tag de Shopify. Nada de URLs fijas.
8. Al final, explícame en 3 pasos cómo instalarla y qué ajustes tiene.

Confirma que lo has entendido y espera a que te pida la primera sección.`,
  },

  items: [
    {
      title: 'Landing de campaña tipo revista',
      use: 'Black Friday, rebajas o lanzamientos. Es el concepto de la página de Black Friday de Acuatoi.',
      text: `Crea una sección "Catálogo de campaña tipo revista" para [CAMPAÑA, p. ej. Black Friday].

- Portada: etiqueta de edición ("Edición especial", número y mes editables), titular grande, subtítulo y hasta 3 productos destacados con su número.
- Botón "Descubre el catálogo" que baje con scroll suave al índice.
- Índice: lista de categorías con su número de página ("Pág. 02") que enlace a cada bloque.
- Un bloque por categoría: elijo una colección y muestra sus productos con precio, precio tachado y % de descuento calculado con compare_at_price, y botón de añadir al carrito.
- Cierre: frase grande de marca y botón "Seguir comprando".
- Estética de catálogo impreso: márgenes generosos, números de página y líneas finas. Nada de cuadrícula genérica de tienda.`,
    },
    {
      title: 'Reseñas con foto',
      use: 'Prueba social en la home o en la ficha de producto.',
      text: `Crea una sección de reseñas para [PRODUCTO o TIENDA].

- Arriba: valoración media con estrellas y número total de reseñas (editables). Opción de ocultarlo si aún tengo pocas.
- Cada reseña es un bloque: foto opcional, nombre, ciudad, estrellas, texto y etiqueta "Compra verificada" activable.
- En móvil, carrusel deslizable con scroll-snap (sin librerías). En escritorio, rejilla de 3 columnas.
- Opción de destacar una reseña en grande.
- Que el texto largo se recorte a 5 líneas con un "Leer más".`,
    },
    {
      title: 'Barra de envío gratis en el carrito',
      use: 'Subir el ticket medio empujando a añadir un producto más.',
      text: `Crea una barra de progreso de envío gratis para el carrito (página de carrito y carrito lateral si mi tema lo tiene).

- Umbral editable (p. ej. 50 €) y textos editables: "Te faltan {cantidad} para el envío gratis" / "¡Tienes envío gratis!".
- Calcula con cart.total_price y muestra el importe con el formato de moneda de la tienda.
- Que se actualice sin recargar al cambiar cantidades (escucha los eventos del carrito de mi tema o vuelve a pedir /cart.js).
- Debajo, opcional: 2 o 3 productos de una colección elegida que ayuden a llegar al mínimo, con botón de añadir.`,
    },
    {
      title: 'Tabla comparativa',
      use: 'Responder al "¿por qué comprarte a ti?" antes de que se vayan a comparar.',
      text: `Crea una sección de comparativa "[MI MARCA] vs. lo típico".

- Columnas: mi marca (destacada con el color de acento) y "Otras opciones". Opción de añadir una tercera columna.
- Cada fila es un bloque: característica + valor por columna (check, cruz o texto corto).
- Titular, subtítulo y botón final a una colección o producto.
- En móvil la tabla no puede romperse: columna de características fija y desplazamiento horizontal si hace falta.
- Tono honesto: no nombres marcas concretas de la competencia.`,
    },
    {
      title: 'FAQ que quita objeciones',
      use: 'Resolver dudas de envío, devoluciones o tallas justo antes de comprar.',
      text: `Antes de nada, propónme las 8 preguntas que más frenan la compra en una tienda de [MI SECTOR], con una respuesta corta para cada una.

Después crea la sección:
- Acordeón accesible con <details> y <summary>, sin JavaScript.
- Cada pregunta es un bloque con respuesta en texto enriquecido.
- Opción de agrupar por temas (Envíos, Devoluciones, Producto, Pagos).
- Al final, caja de contacto "¿Sigues con dudas?" con enlace a WhatsApp o email.
- Genera también el JSON-LD de FAQPage a partir de los bloques.`,
    },
    {
      title: 'Completa el look / pack',
      use: 'Venta cruzada en la ficha de producto.',
      text: `Crea una sección para la ficha de producto tipo "Completa el look".

- Muestra el producto actual + 2 o 3 productos elegidos en los ajustes (o desde un metacampo del producto si lo tengo).
- Casillas para elegir cuáles añadir, precio total actualizado al momento y botón "Añadir todo al carrito" que use /cart/add.js con varios artículos a la vez.
- Si un producto tiene variantes, un selector pequeño de talla o color en cada uno.
- Mensaje opcional "Ahorras X € comprándolos juntos" (solo texto: el descuento lo configuro yo en Shopify).`,
    },
    {
      title: 'Hero de colección con historia',
      use: 'Que una colección se sienta como un lanzamiento y no como un listado.',
      text: `Crea un hero para páginas de colección que cuente una historia, no solo un título.

- Imagen o vídeo de fondo editable, con versión distinta para móvil.
- Titular, texto corto con la historia de la colección y hasta 3 datos destacados como bloques (p. ej. "Hecho en España", "Edición limitada", "Envío 24-48 h").
- Botón que baje a los productos.
- El texto siempre tiene que leerse bien: capa de color sobre la imagen con opacidad ajustable.
- Carga rápida: imagen principal con loading="eager" y fetchpriority="high", con srcset responsive.`,
    },
    {
      title: 'Cuenta atrás honesta',
      use: 'Urgencia real para campañas con fecha de fin.',
      text: `Crea una barra de anuncios con cuenta atrás para [CAMPAÑA].

- Fecha y hora de fin editables, con la zona horaria de mi tienda.
- Al llegar a cero desaparece o cambia a otro mensaje editable. Nunca se reinicia sola: la urgencia tiene que ser real.
- Texto, colores y enlace editables. Opción de que se quede fija arriba al hacer scroll.
- JavaScript mínimo y sin saltos al cargar: que no desplace el contenido de la página.`,
    },
  ],

  finalCta: {
    title: '¿Prefieres que te la haga yo?',
    text: 'Diseño y programo secciones a medida para tu tienda, como el catálogo de Black Friday de Acuatoi. Cuéntame qué tienes en mente.',
    ctaLabel: 'Cuéntame tu idea',
    ctaHref: '/shopify/#contacto',
    secondaryLabel: 'Ver el ejemplo de Acuatoi',
    secondaryHref: 'https://acuatoi.com/pages/black-friday',
  },
};

export type Prompts = typeof prompts;
