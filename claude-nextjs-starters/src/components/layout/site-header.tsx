import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { siteConfig } from "@/config/site";

/**
 * 상단 고정 헤더. 데스크톱에서는 내비게이션 링크, 모바일에서는 시트 메뉴를 보여준다.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link href="/" className="text-lg font-bold tracking-tight">
            {siteConfig.name}
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/#stack">시작하기</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
