import Link from "next/link";

interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

/**
 * 문서 본문의 제목 목록. 넓은 화면(xl 이상)에서만 우측에 고정 표시한다.
 */
export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <aside className="sticky top-20 hidden w-52 shrink-0 xl:block">
      <p className="mb-3 text-sm font-semibold">목차</p>
      <ul className="space-y-2 border-l text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className="-ml-px block border-l border-transparent pl-4 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
