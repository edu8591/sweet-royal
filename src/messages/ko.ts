const ko = {
  common: {
    language: "언어",
    selectLanguage: "언어 선택",
  },
  languageNames: {
    en: "영어",
    es: "스페인어",
    ja: "일본어",
    ko: "한국어",
    zh: "중국어",
  },
  nav: {
    brand: "E. Serrano",
    links: {
      sourcing: "소싱",
      route: "물류 경로",
      spec: "스펙",
      faq: "FAQ",
    },
    quote: "견적 요청",
  },
  hero: {
    kicker: "에콰도르 - 아시아 · 스팟 과일 소싱",
    firstName: "Eduardo",
    lastName: "Serrano",
    role: "과일 트레이더",
    intro:
      "아시아 바이어를 위해 에콰도르산 캐번디시 바나나를 스팟으로 소싱합니다. 단일 고정 농가가 아닌 인증 농가 네트워크를 통해 공급합니다.",
    ctaContact: "문의하기",
    ctaSpec: "제품 스펙",
  },
  marquee: {
    items: [
      "요구 사항에 맞춘 인증 소싱",
      "GlobalG.A.P. · GRASP · Rainforest Alliance 및 기타",
      "FCA ex-Guayaquil",
      "Type A Premium Cavendish",
      "스팟 물량, 선적 단위 견적",
    ],
  },
  stats: {
    items: [
      {
        text: "46 mm",
        count: { to: 46, suffix: " mm" },
        label: "최대 규격",
      },
      {
        text: "19.5 kg",
        count: { to: 19.5, decimals: 1, suffix: " kg" },
        label: "박스 순중량",
      },
      {
        text: "10 - 12 주",
        count: { to: 12, prefix: "10 - ", suffix: " 주" },
        label: "수확 시 과령",
      },
      { text: "맞춤", label: "요청 인증 기준 반영", accent: true },
    ],
  },
  sections: {
    sourcing: {
      heading: "소싱 방식",
      p1: "저는 독립 트레이더로서 에콰도르 바나나 공급과 아시아 바이어를 연결합니다. 단일 농가의 고정 생산 물량이 아니라 에콰도르 파트너 농가 네트워크를 통해 스팟 물량을 소싱하므로, 가격과 가용 물량은 선적 단위로 제시되며 수요 변화에 맞춰 유연하게 대응할 수 있습니다.",
      p2: "거래 조건은 원산지 FCA 기준이며 주문별로 협의합니다. 목표 물량과 납기 윈도우를 주시면 견적을 드립니다.",
      imageAlt: "농장에서 초록 바나나를 수확하는 장면",
      quote:
        "한 명의 트레이더, 여러 농가. 그래서 물량과 타이밍을 주문에 맞춰 유연하게 조정할 수 있습니다.",
      quoteCaption: "소싱 원칙",
    },
    route: {
      heading: "원산지에서 항구까지",
      mapAlt:
        "에콰도르 과야킬에서 도쿄, 부산, 상하이, 싱가포르로 향하는 해상 운송 경로 지도",
      originLabel: "출발지",
      originPort: "과야킬",
      originNote: "에콰도르 · FCA 기준",
      destinationLabel: "도착지",
      destinationPort: "아시아 주요 항구",
      destinationNote: "일본 · 한국 · 중국 · 동남아",
      loadingAlt: "농장에서 바나나를 트럭에 적재하는 작업자",
      loadingCaption: "수확, 포장, 적재를 원산지에서 수행",
      stepPrefix: "단계",
      steps: [
        {
          n: "01",
          title: "주문",
          body: "목표 물량, 박스 규격, 납기 윈도우를 전달하면 선적 단위 FCA 조건으로 견적합니다.",
        },
        {
          n: "02",
          title: "포장",
          body: "10-12주 과령의 과실을 선별하고 합의된 박스 규격에 맞춰 농가 팩하우스에서 진공 포장합니다.",
        },
        {
          n: "03",
          title: "선적",
          body: "과야킬 기점으로 집하 및 적재하며, 인증서와 선적 서류를 컨테이너 단위로 발행합니다.",
        },
        {
          n: "04",
          title: "도착",
          body: "지정한 아시아 항구 도착 후 하역 시 매니페스트와 대조하여 규격과 수량을 확인합니다.",
        },
      ],
    },
    spec: {
      heading: "참고 스펙 시트",
      imageAlt: "나무에 달린 초록 캐번디시 바나나 송이",
      cargoRef: "화물 참조",
      cargoValue: "Banano Cavendish",
      boxTypes: [
        {
          title: "박스 타입 - 22XU",
          specs: [
            { k: "등급", v: "Type A Premium" },
            { k: "포장", v: "진공 포장" },
            { k: "클러스터 / 박스", v: "16 - 18" },
            { k: "포장재", v: "골판지 카톤" },
            { k: "순중량", v: "18.14 - 19.5 kg" },
            { k: "수확 시 과령", v: "10 - 12 weeks" },
            { k: "규격", v: "39 - 46 mm" },
            { k: "최소 핑거 길이", v: "20 cm (8 in)" },
          ],
        },
        {
          title: "박스 타입 - 208",
          specs: [
            { k: "등급", v: "Type A Premium" },
            { k: "포장", v: "진공 포장" },
            { k: "핸드 / 박스", v: "4 - 5" },
            { k: "포장재", v: "골판지 카톤" },
            { k: "순중량", v: "13.5 - 14.5 kg" },
            { k: "수확 시 과령", v: "10 - 12 weeks" },
            { k: "규격", v: "39 - 46 mm" },
            { k: "최소 핑거 길이", v: "20 cm (8 in)" },
          ],
        },
      ],
      note: "본 스펙은 소싱 네트워크에서 제공 가능한 프리미엄 등급 캐번디시의 참고 범위입니다. 최종 스펙은 선적별로 확정됩니다.",
    },
    standards: {
      heading: "재배 농가 기준",
      certifications: [
        {
          mark: "G.A.P.",
          name: "GlobalG.A.P.",
          note: "농가 네트워크 전반의 우수농업관리 기준.",
        },
        {
          mark: "GRASP",
          name: "GRASP",
          note: "GlobalG.A.P.와 연계된 사회적 실천 평가.",
        },
        {
          mark: "R.A.",
          name: "Rainforest Alliance",
          note: "지속가능한 농장 운영 인증.",
        },
      ],
      note: "이 인증들은 네트워크에서 가장 일반적이지만, 시장 요구에 맞는 인증 보유 농가로 소싱할 수 있습니다. 특정 선적의 인증서는 요청 시 제공합니다.",
    },
    faq: {
      heading: "바이어 FAQ",
      items: [
        {
          q: "어느 정도 물량까지 가능한가요?",
          a: "물량은 선적 단위로 견적합니다. 단일 농가가 아닌 파트너 네트워크 공급이므로 주문 간 증감 조정이 가능합니다. 목표 물량을 보내주시면 커버 가능 범위를 확인해 드립니다.",
        },
        {
          q: "거래 조건은 어떻게 되나요?",
          a: "원산지 FCA, ex-Guayaquil 기준이며 결제 및 서류 조건은 주문별로 협의합니다.",
        },
        {
          q: "품질은 어떻게 보증하나요?",
          a: "필요한 인증을 알려주시면 해당 인증 보유 농가를 소싱합니다. GlobalG.A.P., GRASP, Rainforest Alliance는 네트워크에서 일반적입니다. 스펙은 선적별로 확정되며 컨테이너별 인증서를 요청 시 제공합니다.",
        },
        {
          q: "가능한 박스 포맷은 무엇인가요?",
          a: "22XU (18.14-19.5 kg, 16-18 클러스터)와 208 (13.5-14.5 kg, 4-5 핸드), 두 규격 모두 Type A Premium 및 진공 포장으로 제공됩니다.",
        },
      ],
    },
    contact: {
      heading: "문의",
      label: "메시지 남기기",
      placeholder: "원하시는 상품, 물량, 일정 등을 알려주세요...",
      emailSubject: "소싱 문의",
      defaultMessage: "안녕하세요 Eduardo님, 소싱 관련 상담을 원합니다.",
      ctaWhatsApp: "WhatsApp으로 보내기",
      ctaEmail: "이메일 보내기",
      entries: [
        { k: "Email", value: "eduardoserrano@sweet-royal.com" },
        { k: "Phone", value: "+81 80 6481 5663" },
        { k: "Based", value: "오키나와, 일본" },
        { k: "Sourcing", value: "에콰도르 (ex-Guayaquil)" },
      ],
    },
  },
  fab: {
    ariaLabel: "WhatsApp으로 메시지 보내기",
    label: "메시지",
  },
  footer: {
    text: "Eduardo Serrano · 독립 과일 트레이더 · Ecuador -> Asia",
  },
};

export default ko;
