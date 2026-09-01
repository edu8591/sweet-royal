const en = {
  common: {
    language: "Language",
    selectLanguage: "Select language",
  },
  languageNames: {
    en: "English",
    es: "Spanish",
  },
  nav: {
    brand: "E. Serrano",
    links: {
      sourcing: "Sourcing",
      route: "Route",
      spec: "Spec",
      faq: "FAQ",
    },
    quote: "Get a quote",
  },
  hero: {
    kicker: "Ecuador - Asia · Spot Fruit Sourcing",
    firstName: "Eduardo",
    lastName: "Serrano",
    role: "Fruit Trader",
    intro:
      "Spot sourcing of Ecuadorian Cavendish bananas for Asian buyers, drawn from a network of certified growers rather than a single fixed origin.",
    ctaContact: "Get in touch",
    ctaSpec: "Product spec",
  },
  marquee: {
    items: [
      "Certifications sourced to your requirement",
      "GlobalG.A.P. · GRASP · Rainforest Alliance and others",
      "FCA ex-Guayaquil",
      "Type A Premium Cavendish",
      "Spot volumes, quoted per shipment",
    ],
  },
  stats: {
    items: [
      {
        text: "46 mm",
        count: { to: 46, suffix: " mm" },
        label: "Max calibration",
      },
      {
        text: "19.5 kg",
        count: { to: 19.5, decimals: 1, suffix: " kg" },
        label: "Net weight / box",
      },
      {
        text: "10 - 12 wks",
        count: { to: 12, prefix: "10 - ", suffix: " wks" },
        label: "Fruit age at cut",
      },
      { text: "Your call", label: "Certifications you specify", accent: true },
    ],
  },
  sections: {
    sourcing: {
      heading: "How sourcing works",
      p1:
        "I work as an independent trader connecting Ecuadorian banana supply with buyers in Asia. Rather than representing one grower's fixed production, I source spot volumes through a partner network of growers in Ecuador - which means pricing and availability are quoted per shipment, and I can flex on volume as your needs change.",
      p2:
        "Trade basis: FCA at origin, with terms discussed per order. Reach out with your target volume and delivery window and I'll come back with a quote.",
      imageAlt: "Green bananas being cut at a plantation",
      quote:
        "One trader, many growers - so volume and timing flex with your order, not the other way round.",
      quoteCaption: "Sourcing principle",
    },
    route: {
      heading: "Origin to port",
      mapAlt:
        "Map of shipping routes from Guayaquil, Ecuador to Tokyo, Busan, Shanghai and Singapore",
      originLabel: "Origin",
      originPort: "Guayaquil",
      originNote: "Ecuador · FCA basis",
      destinationLabel: "Destination",
      destinationPort: "Asian ports",
      destinationNote: "Japan · Korea · China · SE Asia",
      loadingAlt: "Workers loading bananas onto a truck at a plantation",
      loadingCaption: "Cut, packed and loaded at origin",
      stepPrefix: "Step",
      steps: [
        {
          n: "01",
          title: "Order",
          body: "You send target volume, box format and delivery window. I quote per shipment on FCA basis.",
        },
        {
          n: "02",
          title: "Pack",
          body: "Fruit cut at 10-12 weeks, calibrated and vacuum-packed to the agreed box spec at the grower's packhouse.",
        },
        {
          n: "03",
          title: "Ship",
          body: "Consolidated and loaded ex-Guayaquil. Certificates and shipping documents issued per container.",
        },
        {
          n: "04",
          title: "Land",
          body: "Arrival at your nominated Asian port. Spec and count reconciled against the manifest on discharge.",
        },
      ],
    },
    spec: {
      heading: "Reference spec sheet",
      imageAlt: "Bunch of green Cavendish bananas on the plant",
      cargoRef: "Cargo Ref.",
      cargoValue: "Banano Cavendish",
      boxTypes: [
        {
          title: "Box type - 22XU",
          specs: [
            { k: "Class", v: "Type A Premium" },
            { k: "Packing", v: "Vacuum-packed" },
            { k: "Clusters / box", v: "16 - 18" },
            { k: "Presentation", v: "Corrugated carton" },
            { k: "Net weight", v: "18.14 - 19.5 kg" },
            { k: "Fruit age at cut", v: "10 - 12 weeks" },
            { k: "Calibration", v: "39 - 46 mm" },
            { k: "Min. finger length", v: "20 cm (8 in)" },
          ],
        },
        {
          title: "Box type - 208",
          specs: [
            { k: "Class", v: "Type A Premium" },
            { k: "Packing", v: "Vacuum-packed" },
            { k: "Hands / box", v: "4 - 5" },
            { k: "Presentation", v: "Corrugated carton" },
            { k: "Net weight", v: "13.5 - 14.5 kg" },
            { k: "Fruit age at cut", v: "10 - 12 weeks" },
            { k: "Calibration", v: "39 - 46 mm" },
            { k: "Min. finger length", v: "20 cm (8 in)" },
          ],
        },
      ],
      note:
        "Indicative spec range for premium-grade Cavendish available through the sourcing network. Exact spec confirmed per shipment.",
    },
    standards: {
      heading: "Grower standards",
      certifications: [
        {
          mark: "G.A.P.",
          name: "GlobalG.A.P.",
          note: "Good agricultural practice across the grower network.",
        },
        {
          mark: "GRASP",
          name: "GRASP",
          note: "Social practice assessment alongside GlobalG.A.P.",
        },
        {
          mark: "R.A.",
          name: "Rainforest Alliance",
          note: "Certified sustainable farm management.",
        },
      ],
      note:
        "These are the certifications most common across the network - but tell me what your market requires and I'll source growers that hold it. Certificates for a specific shipment provided on request.",
    },
    faq: {
      heading: "Buyer questions",
      items: [
        {
          q: "What volumes can you handle?",
          a: "Volume is quoted per shipment. Because supply comes from a partner network rather than one fixed grower, I can flex up or down between orders - send your target and I'll confirm what the network covers.",
        },
        {
          q: "What are the trade terms?",
          a: "FCA at origin, ex-Guayaquil, with payment and documentation terms discussed per order.",
        },
        {
          q: "How is quality assured?",
          a: "Tell me which certifications you need and I'll source growers that hold them - GlobalG.A.P., GRASP and Rainforest Alliance are common across the network. Spec is confirmed per shipment and certificates for a given container are provided on request.",
        },
        {
          q: "Which box formats are available?",
          a: "22XU (18.14-19.5 kg, 16-18 clusters) and 208 (13.5-14.5 kg, 4-5 hands), both Type A Premium and vacuum-packed.",
        },
      ],
    },
    contact: {
      heading: "Contact",
      label: "Leave a message",
      placeholder: "Tell me what you're looking for - product, volume, timing...",
      emailSubject: "Sourcing inquiry",
      defaultMessage: "Hi Eduardo, I'd like to talk about sourcing.",
      ctaWhatsApp: "Send via WhatsApp",
      ctaEmail: "Send via Email",
      entries: [
        { k: "Email", value: "eduardoserrano@sweet-royal.com" },
        { k: "Phone", value: "+81 80 6481 5663" },
        { k: "Based", value: "Okinawa, Japan" },
        { k: "Sourcing", value: "Ecuador (ex-Guayaquil)" },
      ],
    },
  },
  fab: {
    ariaLabel: "Message me on WhatsApp",
    label: "Message me",
  },
  footer: {
    text: "Eduardo Serrano · Independent Fruit Trader · Ecuador -> Asia",
  },
};

export default en;
