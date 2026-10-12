import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata = { title: "스타터킷 첫 번째 글" };

export default function HelloWorldPost() {
  return (
    <Container className="py-10">
      <div className="mx-auto max-w-prose">
        <Button asChild variant="ghost" size="sm" className="-ml-3 mb-6">
          <Link href="/blog">
            <ArrowLeft className="size-4" />
            블로그 목록
          </Link>
        </Button>

        <article className="prose max-w-none dark:prose-invert">
          <h1>스타터킷 첫 번째 글</h1>
          <p>
            이 글은 블로그 본문 스타일을 확인하기 위한 예시입니다. Tailwind Typography 플러그인이
            제목, 문단, 목록, 인용 같은 요소에 기본 스타일을 적용합니다.
          </p>
          <h2>읽기 폭</h2>
          <p>
            본문은 한 줄이 너무 길어지지 않도록 읽기에 적당한 폭으로 제한합니다. 다크 모드에서도 같은
            스타일이 유지됩니다.
          </p>
          <blockquote>
            좋은 기본값은 개발 속도를 높이고, 좋은 구조는 유지보수 비용을 줄입니다.
          </blockquote>
          <ul>
            <li>라우트 그룹으로 레이아웃을 나눕니다.</li>
            <li>공통 컴포넌트는 계층별로 분리합니다.</li>
            <li>사이트 설정은 한 곳에서 관리합니다.</li>
          </ul>
        </article>
      </div>
    </Container>
  );
}
