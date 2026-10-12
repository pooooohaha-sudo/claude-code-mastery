import Link from "next/link";

import { siteConfig } from "@/config/site";

/**
 * 사이트 로고. 현재는 텍스트 로고이며, 이미지 로고로 바꿀 때 이 파일만 수정한다.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`text-lg font-bold tracking-tight ${className ?? ""}`}>
      {siteConfig.name}
    </Link>
  );
}
