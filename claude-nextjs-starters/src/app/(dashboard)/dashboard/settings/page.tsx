import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = { title: "설정" };

/* 알림 설정 항목 예시 */
const notificationItems = [
  { id: "email", label: "이메일 알림", description: "중요한 활동을 이메일로 받습니다." },
  { id: "marketing", label: "마케팅 소식", description: "새 기능과 이벤트 소식을 받습니다." },
];

export default function SettingsPage() {
  return (
    <>
      <PageHeader title="설정" description="프로필과 알림 설정을 관리합니다." />

      <Tabs defaultValue="profile" className="max-w-2xl">
        <TabsList>
          <TabsTrigger value="profile">프로필</TabsTrigger>
          <TabsTrigger value="notifications">알림</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>프로필</CardTitle>
              <CardDescription>표시될 이름과 이메일을 수정합니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="profile-name">이름</Label>
                <Input id="profile-name" defaultValue="홍길동" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile-email">이메일</Label>
                <Input id="profile-email" type="email" defaultValue="user@example.com" />
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              {/* TODO: 실제 저장 로직 연동 */}
              <Button>저장</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>알림</CardTitle>
              <CardDescription>받고 싶은 알림을 선택하세요.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {notificationItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <Label htmlFor={`notify-${item.id}`}>{item.label}</Label>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <Switch id={`notify-${item.id}`} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
