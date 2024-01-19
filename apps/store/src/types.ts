export interface Page {
    id?: number;
    tag: string;
    category:string;
    // header: string;
    // 추가적인 필드가 있으면 여기에 계속 추가하세요.
  }

  export interface Section {
  id?: number;
  tag: string;
  pageId: number;
  header: string;
  // 추가적인 필드가 있으면 여기에 계속 추가하세요.
}

export interface Container {
  id?: number;
  tag: string;
  sectionId: number;
  header: string;
  // 추가적인 필드가 있으면 여기에 계속 추가하세요.
}


export interface HTML {
  id?:number;
  containerId: number;
  code: string;
  // 추가적인 필드가 있으면 여기에 계속 추가하세요.
}

export interface CSS {
  id?:number;
  containerId: number;
  code: string;
  tag: string;
  // 추가적인 필드가 있으면 여기에 계속 추가하세요.
}


export interface Example {
  id?:number;
  containerId: number;
  property: string;
  // 추가적인 필드가 있으면 여기에 계속 추가하세요.
}

type IndustryDetails = {
  [industry: string]: string[];
};

export const industries: IndustryDetails = {
  "기업 홈페이지": ["기술 기업 웹사이트", "금융 기업 웹사이트", "제조업 기업 웹사이트", "기타 기업 홈페이지"],
  "전자상거래 홈페이지": ["온라인 쇼핑몰", "전자상거래 플랫폼", "중고 거래 사이트", "디지털 상품 판매 사이트"],
  "정보 제공 홈페이지": ["뉴스 및 미디어 웹사이트", "정보 제공 포털", "학문 및 연구 기관 웹사이트", "기타 정보 제공 관련 홈페이지"],
  "블로그 및 개인 홈페이지": ["개인 블로그", "예술가 및 창작자 웹사이트", "개인 포트폴리오 사이트", "기타 개인 및 블로그 관련 홈페이지"],
  "교육 및 훈련 홈페이지": ["온라인 교육 플랫폼", "학원 및 교습소 웹사이트", "전문 교육 기관 홈페이지", "기타 교육 및 훈련 관련 홈페이지"],
  "커뮤니티 및 소셜 네트워크": ["소셜 네트워크 플랫폼", "토론 및 커뮤니티 사이트", "관심사 그룹 웹사이트", "기타 커뮤니티 및 소셜 네트워크 관련 홈페이지"],
  "여행 및 호텔 예약": ["여행사 및 투어 웹사이트", "호텔 예약 사이트", "여행 블로그 및 리뷰 사이트", "기타 여행 및 호텔 예약 관련 홈페이지"],
  "건강 및 의료 서비스": ["의료 기관 웹사이트", "건강 및 웰니스 블로그", "의학 정보 제공 사이트", "기타 건강 및 의료 관련 홈페이지"],
  "부동산 홈페이지": ["부동산 중개 업체 웹사이트", "부동산 검색 엔진", "건설 및 개발 회사 웹사이트", "기타 부동산 관련 홈페이지"],
  "음식 및 음료 업종": ["음식점 및 카페 웹사이트", "음식 및 요리 블로그", "식품 및 음료 소매 업체 웹사이트", "기타 음식 및 음료 관련 홈페이지"]
};

// 예시: "전자상거래 홈페이지" 업종에 속하는 세부 업종 출력
export const industryKeys: string[] = Object.keys(industries);

export const pageCategory=[
  "소개"  , "제품" , "고객센터"
]

export const sectionCategory=
  [
    "atricle" , "footer","header"
  ]

  export const ContainerCactory=
  [
    "card1"  ,"card2" ,"card3"
    ,"carousel" ,"nav" , "search" ,"links"
  ]

