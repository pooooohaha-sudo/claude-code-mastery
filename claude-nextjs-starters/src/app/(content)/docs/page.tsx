import { PageHeader } from "@/components/layout/page-header";

export const metadata = { title: "문서" };

export default function DocsPage() {
  return (
    <article className="prose max-w-none dark:prose-invert prose-code:before:content-none prose-code:after:content-none">
      <PageHeader title="문서 소개" description="스타터킷의 구조와 사용법을 안내합니다." />
      <p>
        이 스타터킷은 마케팅, 인증, 대시보드, 콘텐츠 네 가지 레이아웃을 제공합니다. 왼쪽 메뉴에서
        시작하기 문서를 열어 설치와 구조를 확인하세요.
      </p>
    </article>
  );
}
