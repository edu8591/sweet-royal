const zh = {
  common: {
    language: "语言",
    selectLanguage: "选择语言",
  },
  languageNames: {
    en: "英语",
    es: "西班牙语",
    ja: "日语",
    ko: "韩语",
    zh: "中文",
  },
  nav: {
    brand: "E. Serrano",
    links: {
      sourcing: "采购",
      route: "路线",
      spec: "规格",
      faq: "FAQ",
    },
    quote: "获取报价",
  },
  hero: {
    kicker: "厄瓜多尔 - 亚洲 · 现货水果采购",
    firstName: "Eduardo",
    lastName: "Serrano",
    role: "水果贸易商",
    intro:
      "面向亚洲买家提供厄瓜多尔卡文迪许香蕉现货采购。货源来自认证种植者网络，而非单一固定农场。",
    ctaContact: "立即联系",
    ctaSpec: "产品规格",
  },
  marquee: {
    items: [
      "按你的要求匹配认证",
      "GlobalG.A.P. · GRASP · Rainforest Alliance 等",
      "FCA ex-Guayaquil",
      "Type A Premium Cavendish",
      "现货数量，按每票出货报价",
    ],
  },
  stats: {
    items: [
      {
        text: "46 mm",
        count: { to: 46, suffix: " mm" },
        label: "最大口径",
      },
      {
        text: "19.5 kg",
        count: { to: 19.5, decimals: 1, suffix: " kg" },
        label: "每箱净重",
      },
      {
        text: "10 - 12 周",
        count: { to: 12, prefix: "10 - ", suffix: " 周" },
        label: "采收果龄",
      },
      { text: "按需", label: "按你指定认证", accent: true },
    ],
  },
  sections: {
    sourcing: {
      heading: "采购如何运作",
      p1: "我作为独立贸易商，将厄瓜多尔香蕉供应与亚洲买家对接。不同于只代表单一种植者固定产量，我通过厄瓜多尔合作种植者网络进行现货采购，因此价格与可供数量按每票出货报价，并可随你的需求灵活调整。",
      p2: "贸易基础为原产地FCA，具体条款按订单沟通。告诉我你的目标数量和交付窗口，我会回传报价。",
      imageAlt: "种植园内采收青香蕉",
      quote:
        "一个贸易商，对接多个种植者，所以数量与节奏可以跟着你的订单走，而不是反过来。",
      quoteCaption: "采购原则",
    },
    route: {
      heading: "原产地到港口",
      mapAlt: "从厄瓜多尔瓜亚基尔到东京、釜山、上海和新加坡的海运路线图",
      originLabel: "起运地",
      originPort: "瓜亚基尔",
      originNote: "厄瓜多尔 · FCA基础",
      destinationLabel: "目的地",
      destinationPort: "亚洲港口",
      destinationNote: "日本 · 韩国 · 中国 · 东南亚",
      loadingAlt: "工人在种植园将香蕉装上卡车",
      loadingCaption: "在原产地完成采收、包装和装载",
      stepPrefix: "步骤",
      steps: [
        {
          n: "01",
          title: "下单",
          body: "你提供目标数量、箱规和交付窗口，我按FCA基础进行每票出货报价。",
        },
        {
          n: "02",
          title: "包装",
          body: "果实在10-12周采收，按约定箱规分级并在种植者包装站进行真空包装。",
        },
        {
          n: "03",
          title: "发运",
          body: "在瓜亚基尔完成集拼与装载，证书及运输文件按每个集装箱出具。",
        },
        {
          n: "04",
          title: "到港",
          body: "抵达你指定的亚洲港口后，卸货时依据舱单核对规格与数量。",
        },
      ],
    },
    spec: {
      heading: "参考规格表",
      imageAlt: "植株上的青色卡文迪许香蕉串",
      cargoRef: "货物编号",
      cargoValue: "Banano Cavendish",
      boxTypes: [
        {
          title: "箱型 - 22XU",
          specs: [
            { k: "等级", v: "Type A Premium" },
            { k: "包装", v: "真空包装" },
            { k: "簇 / 箱", v: "16 - 18" },
            { k: "外箱", v: "瓦楞纸箱" },
            { k: "净重", v: "18.14 - 19.5 kg" },
            { k: "采收果龄", v: "10 - 12 weeks" },
            { k: "口径", v: "39 - 46 mm" },
            { k: "最小指长", v: "20 cm (8 in)" },
          ],
        },
        {
          title: "箱型 - 208",
          specs: [
            { k: "等级", v: "Type A Premium" },
            { k: "包装", v: "真空包装" },
            { k: "把 / 箱", v: "4 - 5" },
            { k: "外箱", v: "瓦楞纸箱" },
            { k: "净重", v: "13.5 - 14.5 kg" },
            { k: "采收果龄", v: "10 - 12 weeks" },
            { k: "口径", v: "39 - 46 mm" },
            { k: "最小指长", v: "20 cm (8 in)" },
          ],
        },
      ],
      note: "该规格为采购网络可提供的优等级卡文迪许参考区间。最终规格按每票出货确认。",
    },
    standards: {
      heading: "种植者标准",
      certifications: [
        {
          mark: "G.A.P.",
          name: "GlobalG.A.P.",
          note: "覆盖种植者网络的良好农业规范。",
        },
        {
          mark: "GRASP",
          name: "GRASP",
          note: "与GlobalG.A.P.配套的社会责任评估。",
        },
        {
          mark: "R.A.",
          name: "Rainforest Alliance",
          note: "可持续农场管理认证。",
        },
      ],
      note: "以上是网络内最常见的认证。如果你的市场有特定要求，我可匹配持证种植者。具体批次证书可按需提供。",
    },
    faq: {
      heading: "买家常见问题",
      items: [
        {
          q: "你能处理多大数量?",
          a: "数量按每票出货报价。由于供应来自合作网络而非单一固定种植者，可在不同订单间灵活增减。请发送目标数量，我会确认可覆盖范围。",
        },
        {
          q: "贸易条款是什么?",
          a: "基于原产地FCA（ex-Guayaquil），付款和单证条款按订单协商。",
        },
        {
          q: "如何保证质量?",
          a: "告诉我你需要的认证，我会匹配具备该认证的种植者。GlobalG.A.P.、GRASP、Rainforest Alliance在网络中较常见。规格按每票出货确认，且可按需提供单柜证书。",
        },
        {
          q: "可提供哪些箱规?",
          a: "22XU（18.14-19.5 kg，16-18簇）和208（13.5-14.5 kg，4-5把），均为Type A Premium并采用真空包装。",
        },
      ],
    },
    contact: {
      heading: "联系",
      nameLabel: "姓名",
      emailLabel: "邮箱",
      label: "留言",
      placeholder: "请告诉我你的产品、数量和时间需求...",
      emailSubject: "采购咨询",
      defaultMessage: "你好 Eduardo，我想咨询采购事宜。",
      ctaWhatsApp: "通过WhatsApp发送",
      ctaEmail: "通过邮件发送",
      entries: [
        { k: "Email", value: "eduardoserrano@sweet-royal.com" },
        { k: "Phone", value: "+81 80 6481 5663" },
        { k: "Based", value: "日本冲绳" },
        { k: "Sourcing", value: "厄瓜多尔（ex-Guayaquil）" },
      ],
    },
  },
  fab: {
    ariaLabel: "通过WhatsApp给我发消息",
    label: "发消息",
  },
  footer: {
    text: "Eduardo Serrano · 独立水果贸易商 · Ecuador -> Asia",
  },
};

export default zh;
