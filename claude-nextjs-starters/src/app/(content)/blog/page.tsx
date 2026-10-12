import Link from "next/link";

import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = { title: "블로그" };

/* 예시 글 목록 */
const posts = [
  {
    slug: "hello-world",
    title: "스타터킷 첫 번째 글",
    description: "블로그 레이아웃과 본문 스타일이 어떻게 적용되는지 보여주는 예시 글입니다.",
    date: "2026-10-01",
  },
];

export default function BlogPage() {
  return (
    <Container className="py-10">
      <PageHeader title="블로그" description="개발 기록과 소식을 전합니다." />

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
            <Card className="h-full transition-colors hover:bg-accent/40">
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  {post.date}
                </Badge>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
