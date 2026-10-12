import type { SiteConfig } from "@/types";

/**
 * 사이트 전역 설정.
 * 이름, 설명, 내비게이션을 여기서만 수정하면 헤더, 푸터, 메타데이터에 함께 반영된다.
 */
export const siteConfig: SiteConfig = {
  name: "Starter Kit",
  description: "Next.js 15, TypeScript, Tailwind CSS, shadcn/ui로 만든 웹 스타터킷",
  url: "http://localhost:3000",
  nav: [
    { title: "홈", href: "/" },
    { title: "기능", href: "/#features" },
    { title: "기술 스택", href: "/#stack" },
  ],
};
