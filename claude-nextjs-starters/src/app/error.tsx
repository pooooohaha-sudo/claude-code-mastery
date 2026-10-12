"use client";

import { Button } from "@/components/ui/button";

/**
 * 라우트 렌더링 중 발생한 오류를 처리하는 에러 바운더리.
 * reset을 호출하면 해당 세그먼트를 다시 렌더링한다.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-32 text-center">
      <h1 className="text-3xl font-bold">문제가 발생했습니다</h1>
      <p className="text-muted-foreground">{error.message || "알 수 없는 오류가 발생했습니다."}</p>
      <Button onClick={() => reset()}>다시 시도</Button>
    </div>
  );
}
