# Starter Kit

Next.js 15 App Router 기반의 웹 스타터킷입니다. TypeScript, Tailwind CSS, shadcn/ui, lucide-react가 설정되어 있고, 마케팅·인증·대시보드·콘텐츠 네 가지 레이아웃을 제공합니다.

## 기술 스택

- Next.js 15 (App Router) / React 19 / TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`, `@tailwindcss/typography`)
- shadcn/ui (new-york 스타일, neutral 테마)
- lucide-react
- next-themes (다크 모드)
- react-hook-form + zod (폼 검증)
- sonner (토스트)

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열면 확인할 수 있습니다.

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |
| `npm run typecheck` | TypeScript 타입 검사 |

## 라우트와 레이아웃

라우트 그룹 `(group)`은 URL에 나타나지 않으며, 그룹마다 다른 레이아웃을 적용합니다.

| 그룹 | 레이아웃 | 경로 |
| --- | --- | --- |
| `(marketing)` | 공개 셸 (헤더 + 푸터) | `/` |
| `(auth)` | 중앙 정렬 인증 셸 | `/login`, `/register` |
| `(dashboard)` | 사이드바 + 상단 바 | `/dashboard`, `/dashboard/settings` |
| `(content)` | 공개 셸 + 문서 내비게이션 | `/docs`, `/docs/getting-started`, `/blog`, `/blog/hello-world` |

루트 `app/layout.tsx`는 `html`, `body`, 테마 provider, 토스트, 툴팁 provider만 담당합니다. 헤더와 푸터는 그룹 레이아웃에서 감쌉니다.

## 폴더 구조

```
src/
  app/
    layout.tsx              # 루트: html, body, providers
    globals.css             # Tailwind, shadcn 테마 변수 (라이트/다크)
    (marketing)/ (auth)/ (dashboard)/ (content)/   # 라우트 그룹
  components/
    ui/                     # shadcn/ui 원자 컴포넌트 (수정 최소화)
    layout/                 # 레이아웃 조각: container, section, page-header, 셸, 사이드바, 내비
    common/                 # 여러 화면에서 쓰는 조합 컴포넌트 (logo, user-nav, stat-card 등)
    forms/                  # react-hook-form + zod 폼
    providers/              # 전역 provider (ThemeProvider)
  config/
    site.ts                 # 사이트 이름, 설명, URL
    navigation.ts           # 헤더, 대시보드, 문서 내비게이션 항목
  hooks/
    use-mobile.ts           # 모바일 여부 훅 (sidebar가 사용)
  lib/
    utils.ts                # cn() 클래스명 병합 유틸
    validations/            # zod 스키마
  types/
    index.ts                # NavItem, NavGroup, SiteConfig
```

경로 별칭 `@/*`는 `src/*`를 가리킵니다. 예: `@/components/ui/button`

## 컴포넌트 계층

위 계층은 아래 계층에만 의존합니다. `ui`는 앱 코드를 import하지 않습니다.

1. **기반**: `config`, `lib`, `hooks`, `types`, `globals.css`
2. **프리미티브**: `components/ui` (shadcn)
3. **레이아웃 프리미티브**: `components/layout`의 `Container`, `Section`, `PageHeader`
4. **공통 컴포넌트**: `components/common` (`Logo`, `UserNav`, `StatCard`, `EmptyState`, `ConfirmDialog`)와 `components/forms`
5. **셸**: `SiteShell`, `AuthShell`, `AppSidebar`, `DashboardHeader`, `DocsNav`
6. **템플릿**: 라우트 그룹의 `layout.tsx`
7. **페이지**: 각 `page.tsx`

## 사용법

### 사이트 정보 변경

`src/config/site.ts`에서 이름, 설명, URL을 수정하면 헤더, 푸터, 메타데이터에 반영됩니다. 메뉴 항목은 `src/config/navigation.ts`에서 관리합니다.

### shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add dialog
```

추가된 파일은 `src/components/ui/`에 생성됩니다. 이 CLI는 기본 import를 프로젝트 규약과 다르게 만들 수 있습니다.

- `cn`을 `"cn"` 패키지에서 가져오는 경우: `@/lib/utils`로 바꿉니다.
- `radix-ui` 통합 패키지를 가져오는 경우: `@radix-ui/react-*` 개별 패키지로 바꾸고, 사용하는 패키지를 `npm install`합니다. 이때 `Slot.Root`는 `Slot`으로 씁니다.
- 설치 후 `npm uninstall radix-ui cn`으로 사용하지 않는 패키지를 제거합니다.

### 다크 모드

`ThemeProvider`가 `html` 태그에 `.dark` 클래스를 붙입니다. 시스템 설정을 기본값으로 쓰고, `ThemeToggle` 버튼으로 전환합니다.

### 폼 추가

`components/forms/`에 `useForm`과 `zodResolver`를 조합한 폼을 만듭니다. 스키마는 `src/lib/validations/`에 둡니다. 예시는 `login-form.tsx`를 참고하세요.

## 참고

- 이 프로젝트는 Next.js 15.5 기준입니다. 설정 파일(`next.config.ts`, `postcss.config.mjs`)은 Next 15 방식에 맞춰져 있습니다.
- 인증은 UI와 검증까지만 구현되어 있습니다. 실제 연동은 `// TODO` 주석이 있는 위치에 추가하세요.
