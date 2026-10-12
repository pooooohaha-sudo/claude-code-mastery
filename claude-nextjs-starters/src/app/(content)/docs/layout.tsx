import type { ReactNode } from "react";

import { DocsNav } from "@/components/layout/docs-nav";
import { Container } from "@/components/layout/container";

/**
 * 문서 레이아웃. 좌측에 문서 내비게이션을 두고 본문을 그 옆에 배치한다.
 * 우측 목차는 본문마다 내용이 달라서 각 페이지에서 직접 렌더링한다.
 */
export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <Container className="flex flex-col items-start gap-8 py-10 md:flex-row md:gap-10">
      <DocsNav />
      <div className="min-w-0 flex-1">{children}</div>
    </Container>
  );
}
