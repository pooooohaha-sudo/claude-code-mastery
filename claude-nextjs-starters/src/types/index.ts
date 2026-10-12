import type { LucideIcon } from "lucide-react";

/** 내비게이션 링크 항목 (아이콘은 선택) */
export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  disabled?: boolean;
}

/** 내비게이션 그룹 (사이드바, 문서 목차 등 계층형 메뉴용) */
export interface NavGroup {
  title: string;
  items: NavItem[];
}

/** 사이트 설정 구조 */
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
}
