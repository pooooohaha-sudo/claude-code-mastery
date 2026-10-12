import { Activity, CreditCard, Users, Zap } from "lucide-react";

import { StatCard } from "@/components/common/stat-card";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata = { title: "대시보드" };

/* 예시 통계 데이터 */
const stats = [
  { title: "총 매출", value: "₩12,450,000", description: "지난달 대비 +12%", icon: CreditCard },
  { title: "신규 사용자", value: "1,284", description: "지난달 대비 +8%", icon: Users },
  { title: "활성 세션", value: "342", description: "지금 접속 중", icon: Activity },
  { title: "처리 속도", value: "98ms", description: "평균 응답 시간", icon: Zap },
];

/* 예시 최근 주문 데이터 */
const recent = [
  { id: "ORD-1042", customer: "김민수", status: "완료", amount: "₩84,000" },
  { id: "ORD-1041", customer: "이서연", status: "진행 중", amount: "₩52,000" },
  { id: "ORD-1040", customer: "박지훈", status: "취소", amount: "₩31,500" },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="대시보드" description="주요 지표와 최근 활동을 한눈에 확인하세요." />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>최근 주문</CardTitle>
          <CardDescription>최근 3건의 주문 현황입니다.</CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>주문 번호</TableHead>
                <TableHead>고객</TableHead>
                <TableHead>상태</TableHead>
                <TableHead className="text-right">금액</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recent.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === "취소" ? "destructive" : "secondary"}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{order.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
