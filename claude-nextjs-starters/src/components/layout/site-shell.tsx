import * as React from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

/**
 * 마케팅, 콘텐츠 그룹이 공유하는 공개 페이지 골격.
 * 상단 헤더, 본문, 하단 푸터를 세로로 배치하고 본문이 남은 높이를 채운다.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
