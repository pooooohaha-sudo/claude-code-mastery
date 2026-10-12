import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";

/** 문서와 블로그는 공개 셸(헤더 + 푸터)을 공유한다 */
export default function ContentLayout({ children }: { children: ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
