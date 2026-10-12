"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { docsNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

/**
 * 문서 좌측 내비게이션.
 * 데스크톱에서는 고정 목록으로, 모바일에서는 시트로 열어서 보여준다.
 */
export function DocsNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // 현재 경로와 일치하는 링크를 강조하는 공통 렌더러
  const renderLinks = (onNavigate?: () => void) => (
    <ul className="flex flex-col gap-1">
      {docsNav.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent",
              pathname === item.href ? "bg-accent font-medium text-foreground" : "text-muted-foreground",
            )}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="md:w-56 md:shrink-0">
      {/* 모바일: 시트로 여는 메뉴 */}
      <div className="mb-4 md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <Menu className="size-4" />
              문서 메뉴
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <SheetHeader>
              <SheetTitle>문서</SheetTitle>
            </SheetHeader>
            <nav className="px-4">{renderLinks(() => setOpen(false))}</nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* 데스크톱: 고정 사이드 내비게이션 */}
      <nav className="sticky top-20 hidden md:block" aria-label="문서 목차">
        {renderLinks()}
      </nav>
    </div>
  );
}
