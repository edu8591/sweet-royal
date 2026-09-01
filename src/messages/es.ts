const es = {
  common: {
    language: "Idioma",
    selectLanguage: "Seleccionar idioma",
  },
  languageNames: {
    en: "Ingles",
    es: "Espanol",
    ja: "Japones",
    ko: "Coreano",
    zh: "Chino",
  },
  nav: {
    brand: "E. Serrano",
    links: {
      sourcing: "Abastecimiento",
      route: "Ruta",
      spec: "Especificacion",
      faq: "FAQ",
    },
    quote: "Solicitar cotizacion",
  },
  hero: {
    kicker: "Ecuador - Asia · Abastecimiento spot de fruta",
    firstName: "Eduardo",
    lastName: "Serrano",
    role: "Comerciante de fruta",
    intro:
      "Abastecimiento spot de banano Cavendish ecuatoriano para compradores en Asia, desde una red de productores certificados en lugar de un origen fijo unico.",
    ctaContact: "Contactar",
    ctaSpec: "Ficha tecnica",
  },
  marquee: {
    items: [
      "Certificaciones segun tu requerimiento",
      "GlobalG.A.P. · GRASP · Rainforest Alliance y otras",
      "FCA ex-Guayaquil",
      "Cavendish Tipo A Premium",
      "Volumenes spot, cotizados por embarque",
    ],
  },
  stats: {
    items: [
      {
        text: "46 mm",
        count: { to: 46, suffix: " mm" },
        label: "Calibre maximo",
      },
      {
        text: "19.5 kg",
        count: { to: 19.5, decimals: 1, suffix: " kg" },
        label: "Peso neto / caja",
      },
      {
        text: "10 - 12 sem",
        count: { to: 12, prefix: "10 - ", suffix: " sem" },
        label: "Edad de fruta al corte",
      },
      {
        text: "A pedido",
        label: "Certificaciones que solicites",
        accent: true,
      },
    ],
  },
  sections: {
    sourcing: {
      heading: "Como funciona el abastecimiento",
      p1: "Trabajo como trader independiente conectando oferta de banano ecuatoriano con compradores en Asia. En vez de representar la produccion fija de un solo productor, abastezco volumenes spot mediante una red de productores en Ecuador, lo que permite cotizar precio y disponibilidad por embarque y ajustar volumen segun tu necesidad.",
      p2: "Base comercial: FCA en origen, con terminos acordados por pedido. Escribeme con tu volumen objetivo y ventana de entrega y regreso con una cotizacion.",
      imageAlt: "Bananos verdes siendo cortados en una plantacion",
      quote:
        "Un trader, muchos productores: el volumen y el timing se adaptan a tu pedido, no al reves.",
      quoteCaption: "Principio de abastecimiento",
    },
    route: {
      heading: "Origen a puerto",
      mapAlt:
        "Mapa de rutas de embarque desde Guayaquil, Ecuador hacia Tokio, Busan, Shanghai y Singapur",
      originLabel: "Origen",
      originPort: "Guayaquil",
      originNote: "Ecuador · Base FCA",
      destinationLabel: "Destino",
      destinationPort: "Puertos de Asia",
      destinationNote: "Japon · Corea · China · Sudeste Asiatico",
      loadingAlt: "Trabajadores cargando bananos en un camion en la plantacion",
      loadingCaption: "Corte, empaque y carga en origen",
      stepPrefix: "Paso",
      steps: [
        {
          n: "01",
          title: "Pedido",
          body: "Envias volumen objetivo, formato de caja y ventana de entrega. Cotizo por embarque en base FCA.",
        },
        {
          n: "02",
          title: "Empaque",
          body: "Fruta cortada a las 10-12 semanas, calibrada y empacada al vacio segun la especificacion acordada en la empacadora del productor.",
        },
        {
          n: "03",
          title: "Embarque",
          body: "Consolidado y cargado ex-Guayaquil. Certificados y documentos de embarque emitidos por contenedor.",
        },
        {
          n: "04",
          title: "Arribo",
          body: "Llegada al puerto asiatico nominado. Especificacion y conteo conciliados contra el manifiesto en descarga.",
        },
      ],
    },
    spec: {
      heading: "Ficha referencial de especificaciones",
      imageAlt: "Racimo de banano Cavendish verde en la planta",
      cargoRef: "Ref. de carga",
      cargoValue: "Banano Cavendish",
      boxTypes: [
        {
          title: "Tipo de caja - 22XU",
          specs: [
            { k: "Clase", v: "Tipo A Premium" },
            { k: "Empaque", v: "Empacado al vacio" },
            { k: "Clusters / caja", v: "16 - 18" },
            { k: "Presentacion", v: "Carton corrugado" },
            { k: "Peso neto", v: "18.14 - 19.5 kg" },
            { k: "Edad de fruta al corte", v: "10 - 12 semanas" },
            { k: "Calibracion", v: "39 - 46 mm" },
            { k: "Longitud minima de dedo", v: "20 cm (8 in)" },
          ],
        },
        {
          title: "Tipo de caja - 208",
          specs: [
            { k: "Clase", v: "Tipo A Premium" },
            { k: "Empaque", v: "Empacado al vacio" },
            { k: "Manos / caja", v: "4 - 5" },
            { k: "Presentacion", v: "Carton corrugado" },
            { k: "Peso neto", v: "13.5 - 14.5 kg" },
            { k: "Edad de fruta al corte", v: "10 - 12 semanas" },
            { k: "Calibracion", v: "39 - 46 mm" },
            { k: "Longitud minima de dedo", v: "20 cm (8 in)" },
          ],
        },
      ],
      note: "Rango referencial para Cavendish premium disponible por la red de abastecimiento. La especificacion exacta se confirma por embarque.",
    },
    standards: {
      heading: "Estandares de productores",
      certifications: [
        {
          mark: "G.A.P.",
          name: "GlobalG.A.P.",
          note: "Buenas practicas agricolas en toda la red de productores.",
        },
        {
          mark: "GRASP",
          name: "GRASP",
          note: "Evaluacion social complementaria a GlobalG.A.P.",
        },
        {
          mark: "R.A.",
          name: "Rainforest Alliance",
          note: "Gestion sostenible de finca certificada.",
        },
      ],
      note: "Estas son las certificaciones mas comunes en la red, pero dime que exige tu mercado y abastezco productores que la tengan. Certificados por embarque disponibles a solicitud.",
    },
    faq: {
      heading: "Preguntas de compradores",
      items: [
        {
          q: "Que volumen puedes manejar?",
          a: "El volumen se cotiza por embarque. Como la oferta proviene de una red de productores y no de un solo origen fijo, puedo ajustar al alza o a la baja entre pedidos. Enviame tu objetivo y confirmo cobertura.",
        },
        {
          q: "Cuales son los terminos comerciales?",
          a: "FCA en origen, ex-Guayaquil, con condiciones de pago y documentacion acordadas por pedido.",
        },
        {
          q: "Como se asegura la calidad?",
          a: "Indica que certificaciones necesitas y abastezco productores que las tengan. GlobalG.A.P., GRASP y Rainforest Alliance son comunes en la red. La especificacion se confirma por embarque y se entregan certificados por contenedor a solicitud.",
        },
        {
          q: "Que formatos de caja estan disponibles?",
          a: "22XU (18.14-19.5 kg, 16-18 clusters) y 208 (13.5-14.5 kg, 4-5 manos), ambos Tipo A Premium y empacados al vacio.",
        },
      ],
    },
    contact: {
      heading: "Contacto",
      nameLabel: "Nombre",
      emailLabel: "Email",
      label: "Deja un mensaje",
      placeholder: "Dime que buscas: producto, volumen, tiempo...",
      emailSubject: "Consulta de abastecimiento",
      defaultMessage: "Hola Eduardo, me gustaria hablar sobre abastecimiento.",
      ctaWhatsApp: "Enviar por WhatsApp",
      ctaEmail: "Enviar por email",
      entries: [
        { k: "Email", value: "eduardoserrano@sweet-royal.com" },
        { k: "Telefono", value: "+81 80 6481 5663" },
        { k: "Base", value: "Okinawa, Japon" },
        { k: "Abastecimiento", value: "Ecuador (ex-Guayaquil)" },
      ],
    },
  },
  fab: {
    ariaLabel: "Escribeme por WhatsApp",
    label: "Escribeme",
  },
  footer: {
    text: "Eduardo Serrano · Trader independiente de fruta · Ecuador -> Asia",
  },
};

export default es;
