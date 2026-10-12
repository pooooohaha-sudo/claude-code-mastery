import Link from "next/link";

import { Button } from "@/components/ui/button";

/** 존재하지 않는 경로에 표시되는 404 페이지 */
export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-32 text-center">
      <p className="text-sm font-semibold text-muted-foreground">404</p>
      <h1 className="text-3xl font-bold">페이지를 찾을 수 없습니다</h1>
      <p className="text-muted-foreground">주소가 잘못되었거나 페이지가 이동되었을 수 있습니다.</p>
      <Button asChild>
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
    </div>
  );
}
