"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { ThemeToggle } from "@/components/common/theme-toggle";
import { UserNav } from "@/components/common/user-nav";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { dashboardNav } from "@/config/navigation";

interface DashboardHeaderProps {
  user: { name: string; email: string };
}

/**
 * 대시보드 상단 바. 사이드바 토글, 현재 위치(브레드크럼), 테마, 계정 메뉴를 둔다.
 * 브레드크럼은 현재 경로의 각 단계를 dashboardNav에서 찾아 표시한다.
 */
export function DashboardHeader({ user }: DashboardHeaderProps) {
  const pathname = usePathname();

  // 경로 각 단계에 대응하는 메뉴 항목을 찾아 브레드크럼을 만든다
  const crumbs = dashboardNav.filter(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
  );
  const lastIndex = crumbs.length - 1;

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          {crumbs.map((item, index) => (
            <React.Fragment key={item.href}>
              <BreadcrumbItem>
                {index === lastIndex ? (
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={item.href}>{item.title}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < lastIndex ? <BreadcrumbSeparator /> : null}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <UserNav name={user.name} email={user.email} />
      </div>
    </header>
  );
}
