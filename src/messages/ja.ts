const ja = {
  common: {
    language: "言語",
    selectLanguage: "言語を選択",
  },
  languageNames: {
    en: "英語",
    es: "スペイン語",
    ja: "日本語",
    ko: "韓国語",
    zh: "中国語",
  },
  nav: {
    brand: "E. Serrano",
    links: {
      sourcing: "調達",
      route: "ルート",
      spec: "仕様",
      faq: "FAQ",
    },
    quote: "見積を依頼",
  },
  hero: {
    kicker: "エクアドル - アジア ・ スポット果実調達",
    firstName: "Eduardo",
    lastName: "Serrano",
    role: "フルーツトレーダー",
    intro:
      "エクアドル産キャベンディッシュバナナを、固定生産者ではなく認証取得済みの生産者ネットワークからアジア向けにスポット調達します。",
    ctaContact: "お問い合わせ",
    ctaSpec: "製品仕様",
  },
  marquee: {
    items: [
      "必要条件に合わせた認証調達",
      "GlobalG.A.P. ・ GRASP ・ Rainforest Alliance ほか",
      "FCA ex-Guayaquil",
      "Type A Premium Cavendish",
      "スポット数量・船積み単位で見積",
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
        label: "箱あたり正味重量",
      },
      {
        text: "10 - 12 週",
        count: { to: 12, prefix: "10 - ", suffix: " 週" },
        label: "収穫時果齢",
      },
      { text: "ご指定", label: "必要認証に対応", accent: true },
    ],
  },
  sections: {
    sourcing: {
      heading: "調達の仕組み",
      p1: "私は独立トレーダーとして、エクアドルのバナナ供給をアジアの買い手と結びます。単一生産者の固定生産を扱うのではなく、エクアドルの提携生産者ネットワークからスポット数量を調達するため、価格と供給可否は船積みごとに提示し、必要数量の増減にも柔軟に対応できます。",
      p2: "取引条件は原産地FCAを基本に、注文ごとに協議します。希望数量と納期ウィンドウをご連絡いただければ、見積を提示します。",
      imageAlt: "農園で青いバナナを収穫している様子",
      quote:
        "一人のトレーダー、複数の生産者。だから数量とタイミングは供給側ではなく注文側に合わせられます。",
      quoteCaption: "調達方針",
    },
    route: {
      heading: "原産地から港まで",
      mapAlt:
        "エクアドル・グアヤキルから東京、釜山、上海、シンガポールへの海上輸送ルート地図",
      originLabel: "出発地",
      originPort: "グアヤキル",
      originNote: "エクアドル ・ FCA基準",
      destinationLabel: "到着地",
      destinationPort: "アジア主要港",
      destinationNote: "日本 ・ 韓国 ・ 中国 ・ 東南アジア",
      loadingAlt: "農園でバナナをトラックに積み込む作業員",
      loadingCaption: "収穫・梱包・積み込みを原産地で実施",
      stepPrefix: "STEP",
      steps: [
        {
          n: "01",
          title: "発注",
          body: "希望数量、箱規格、納期ウィンドウをご提示ください。FCA条件で船積み単位に見積します。",
        },
        {
          n: "02",
          title: "梱包",
          body: "10-12週で収穫した果実を選果・口径選別し、合意仕様で生産者パッキングハウスにて真空梱包します。",
        },
        {
          n: "03",
          title: "出荷",
          body: "グアヤキル出しで集荷・積載。証明書と船積書類はコンテナ単位で発行します。",
        },
        {
          n: "04",
          title: "到着",
          body: "指定アジア港に到着後、荷卸し時にマニフェストと照合して仕様・数量を確認します。",
        },
      ],
    },
    spec: {
      heading: "参考仕様書",
      imageAlt: "樹上の青いキャベンディッシュバナナの房",
      cargoRef: "貨物参照",
      cargoValue: "Banano Cavendish",
      boxTypes: [
        {
          title: "箱タイプ - 22XU",
          specs: [
            { k: "等級", v: "Type A Premium" },
            { k: "梱包", v: "真空梱包" },
            { k: "クラスター / 箱", v: "16 - 18" },
            { k: "外装", v: "段ボール箱" },
            { k: "正味重量", v: "18.14 - 19.5 kg" },
            { k: "収穫時果齢", v: "10 - 12 weeks" },
            { k: "口径", v: "39 - 46 mm" },
            { k: "最小フィンガー長", v: "20 cm (8 in)" },
          ],
        },
        {
          title: "箱タイプ - 208",
          specs: [
            { k: "等級", v: "Type A Premium" },
            { k: "梱包", v: "真空梱包" },
            { k: "ハンド / 箱", v: "4 - 5" },
            { k: "外装", v: "段ボール箱" },
            { k: "正味重量", v: "13.5 - 14.5 kg" },
            { k: "収穫時果齢", v: "10 - 12 weeks" },
            { k: "口径", v: "39 - 46 mm" },
            { k: "最小フィンガー長", v: "20 cm (8 in)" },
          ],
        },
      ],
      note: "本仕様は調達ネットワークで取り扱うプレミアムグレード・キャベンディッシュの参考値です。最終仕様は船積みごとに確定します。",
    },
    standards: {
      heading: "生産者基準",
      certifications: [
        {
          mark: "G.A.P.",
          name: "GlobalG.A.P.",
          note: "生産者ネットワーク全体での適正農業規範。",
        },
        {
          mark: "GRASP",
          name: "GRASP",
          note: "GlobalG.A.P.に付随する社会的実践評価。",
        },
        {
          mark: "R.A.",
          name: "Rainforest Alliance",
          note: "持続可能な農場管理認証。",
        },
      ],
      note: "これらはネットワークで一般的な認証ですが、市場要件に応じて必要認証を保有する生産者を手配します。特定船積みの証明書はご要望に応じて提出します。",
    },
    faq: {
      heading: "バイヤーからの質問",
      items: [
        {
          q: "対応可能な数量は?",
          a: "数量は船積み単位で見積します。単一生産者ではなく提携ネットワークから供給するため、注文ごとに増減調整が可能です。目標数量をご連絡ください。",
        },
        {
          q: "取引条件は?",
          a: "原産地FCA（グアヤキル出し）を基本に、支払・書類条件は注文ごとに協議します。",
        },
        {
          q: "品質保証はどうなっていますか?",
          a: "必要な認証を指定いただければ、その要件を満たす生産者を手配します。GlobalG.A.P.、GRASP、Rainforest Allianceはネットワークで一般的です。仕様は船積みごとに確定し、コンテナごとの証明書を提出します。",
        },
        {
          q: "利用可能な箱規格は?",
          a: "22XU（18.14-19.5 kg、16-18クラスター）と208（13.5-14.5 kg、4-5ハンド）に対応。いずれもType A Premiumで真空梱包です。",
        },
      ],
    },
    contact: {
      heading: "お問い合わせ",
      label: "メッセージを入力",
      placeholder: "必要な商品、数量、時期などをご記入ください...",
      emailSubject: "調達に関するお問い合わせ",
      defaultMessage: "Eduardoさん、調達について相談したいです。",
      ctaWhatsApp: "WhatsAppで送信",
      ctaEmail: "メールで送信",
      entries: [
        { k: "Email", value: "eduardoserrano@sweet-royal.com" },
        { k: "Phone", value: "+81 80 6481 5663" },
        { k: "Based", value: "沖縄、日本" },
        { k: "Sourcing", value: "エクアドル（ex-Guayaquil）" },
      ],
    },
  },
  fab: {
    ariaLabel: "WhatsAppでメッセージ",
    label: "メッセージ",
  },
  footer: {
    text: "Eduardo Serrano ・ 独立系フルーツトレーダー ・ Ecuador -> Asia",
  },
};

export default ja;
