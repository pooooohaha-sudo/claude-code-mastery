import { TableOfContents } from "@/components/layout/table-of-contents";

export const metadata = { title: "시작하기" };

/* 본문 제목과 목차가 같은 id를 공유한다 */
const toc = [
  { id: "install", title: "설치" },
  { id: "run", title: "개발 서버 실행" },
  { id: "structure", title: "폴더 구조" },
];

export default function GettingStartedPage() {
  return (
    <div className="flex items-start gap-10">
      <article className="prose min-w-0 max-w-none flex-1 dark:prose-invert prose-code:before:content-none prose-code:after:content-none">
        <h1>시작하기</h1>

        <h2 id="install">설치</h2>
        <p>의존성을 설치합니다.</p>
        <pre>
          <code>npm install</code>
        </pre>

        <h2 id="run">개발 서버 실행</h2>
        <p>
          개발 서버를 실행한 뒤 <code>http://localhost:3000</code>을 엽니다.
        </p>
        <pre>
          <code>npm run dev</code>
        </pre>

        <h2 id="structure">폴더 구조</h2>
        <p>
          라우트 그룹 <code>(marketing)</code>, <code>(auth)</code>, <code>(dashboard)</code>,{" "}
          <code>(content)</code>가 각자 레이아웃을 가집니다. 공용 컴포넌트는 <code>components</code>에
          계층별로 나뉘어 있습니다.
        </p>
      </article>

      <TableOfContents items={toc} />
    </div>
  );
}
