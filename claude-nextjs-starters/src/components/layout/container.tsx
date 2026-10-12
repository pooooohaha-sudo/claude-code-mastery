import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * 최대 폭을 제한하고 좌우 여백을 주는 컨테이너.
 * 페이지 콘텐츠는 대부분 이 컴포넌트로 감싼다.
 */
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4", className)} {...props} />;
}
