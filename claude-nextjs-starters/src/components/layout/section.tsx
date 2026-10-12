import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * 세로 방향 구획. 기본 상하 여백을 주고, 앵커 이동을 위해 scroll-mt를 적용한다.
 */
export function Section({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("scroll-mt-20 py-16", className)} {...props} />;
}
