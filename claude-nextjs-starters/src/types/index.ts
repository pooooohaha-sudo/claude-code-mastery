/** 내비게이션 링크 항목 */
export interface NavItem {
  title: string;
  href: string;
}

/** 사이트 설정 구조 */
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  nav: NavItem[];
}
