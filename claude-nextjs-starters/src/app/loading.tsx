import { Loader2 } from "lucide-react";

/** 페이지 로딩 중 표시되는 대기 화면 */
export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="로딩 중">
      <Loader2 className="size-8 animate-spin text-muted-foreground" />
    </div>
  );
}
