import { LayoutDashboard, Settings } from "lucide-react";

import type { NavItem } from "@/types";

/**
 * 마케팅 헤더와 모바일 시트에서 쓰는 메인 내비게이션.
 */
export const mainNav: NavItem[] = [
  { title: "홈", href: "/" },
  { title: "기능", href: "/#features" },
  { title: "기술 스택", href: "/#stack" },
  { title: "문서", href: "/docs" },
  { title: "블로그", href: "/blog" },
];

/** 대시보드 사이드바 메뉴 */
export const dashboardNav: NavItem[] = [
  { title: "대시보드", href: "/dashboard", icon: LayoutDashboard },
  { title: "설정", href: "/dashboard/settings", icon: Settings },
];

/** 문서 사이드 내비게이션 */
export const docsNav: NavItem[] = [
  { title: "문서 소개", href: "/docs" },
  { title: "시작하기", href: "/docs/getting-started" },
];
