import { siteConfig } from "@/config/site";

/**
 * 하단 푸터. 연도는 렌더링 시점에 계산한다.
 */
export function SiteFooter() {
  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>Next.js · Tailwind CSS · shadcn/ui</p>
      </div>
    </footer>
  );
}
