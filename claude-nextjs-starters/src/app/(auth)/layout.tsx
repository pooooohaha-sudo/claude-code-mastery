import type { ReactNode } from "react";

import { AuthShell } from "@/components/layout/auth-shell";

/** 인증 페이지는 중앙 정렬 셸로 감싼다 */
export default function AuthLayout({ children }: { children: ReactNode }) {
  return <AuthShell>{children}</AuthShell>;
}
