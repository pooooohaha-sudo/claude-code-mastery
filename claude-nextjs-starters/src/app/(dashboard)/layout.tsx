import type { ReactNode } from "react";

import { AppSidebar } from "@/components/layout/app-sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

/* 인증 연동 전까지 사용하는 예시 사용자 정보 */
const demoUser = { name: "홍길동", email: "user@example.com" };

/**
 * 대시보드 레이아웃. 사이드바, 상단 바, 본문 영역을 배치한다.
 * 사이드바 열림 상태는 SidebarProvider가 쿠키로 유지한다.
 */
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader user={demoUser} />
        <main className="flex flex-1 flex-col gap-6 p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
