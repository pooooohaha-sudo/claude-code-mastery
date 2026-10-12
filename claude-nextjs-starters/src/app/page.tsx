import Link from "next/link";
import { Zap, Layers, Palette, Smartphone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/* 주요 기능 목록 */
const features = [
  {
    icon: Zap,
    title: "빠른 시작",
    description: "App Router, TypeScript, Tailwind 설정이 끝난 상태에서 바로 개발을 시작하세요.",
  },
  {
    icon: Layers,
    title: "레이어 분리 구조",
    description: "components, config, lib, types를 나눠 두어 기능이 늘어나도 구조가 유지됩니다.",
  },
  {
    icon: Palette,
    title: "테마와 다크 모드",
    description: "shadcn/ui 테마 변수와 next-themes로 라이트/다크 모드를 지원합니다.",
  },
  {
    icon: Smartphone,
    title: "반응형 레이아웃",
    description: "모바일에서는 시트 메뉴, 데스크톱에서는 상단 내비게이션을 제공합니다.",
  },
];

/* 기술 스택 목록 */
const stack = ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "lucide-react"];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 히어로 영역 */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-24 text-center">
        <Badge variant="secondary">Next.js 15 App Router</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          빠르게 시작하는 모던 웹 스타터킷
        </h1>
        <p className="max-w-2xl text-balance text-muted-foreground sm:text-lg">
          필요한 도구는 이미 준비되어 있습니다. 페이지만 채우면 바로 서비스를 만들 수 있습니다.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/#features">기능 보기</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#stack">기술 스택</Link>
          </Button>
        </div>
      </section>

      {/* 기능 소개 */}
      <section id="features" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16">
        <h2 className="mb-8 text-center text-2xl font-semibold">주요 기능</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="mb-2 size-6 text-primary" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* 기술 스택 */}
      <section id="stack" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-16">
        <h2 className="mb-8 text-center text-2xl font-semibold">기술 스택</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {stack.map((item) => (
            <Badge key={item} variant="outline" className="px-3 py-1 text-sm">
              {item}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
