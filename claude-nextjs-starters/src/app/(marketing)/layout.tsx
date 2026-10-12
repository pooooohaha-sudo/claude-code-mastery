import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";

/** 마케팅 페이지는 공개 셸(헤더 + 푸터)로 감싼다 */
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
