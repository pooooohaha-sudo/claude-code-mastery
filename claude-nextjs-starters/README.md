# Starter Kit

Next.js 15 App Router 기반의 웹 스타터킷입니다. TypeScript, Tailwind CSS, shadcn/ui, lucide-react가 설정되어 있어 바로 기능 개발을 시작할 수 있습니다.

## 기술 스택

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui (new-york 스타일, neutral 테마)
- lucide-react
- next-themes (다크 모드)

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열면 확인할 수 있습니다.

### 스크립트

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |
| `npm run typecheck` | TypeScript 타입 검사 |

## 폴더 구조

```
src/
  app/                  # 라우트 (layout, page, not-found, error, loading)
    globals.css         # Tailwind 및 shadcn 테마 변수 (라이트/다크)
  components/
    ui/                 # shadcn/ui 컴포넌트
    layout/             # 헤더, 푸터, 모바일 내비게이션
    common/             # 공용 컴포넌트 (테마 토글 등)
    providers/          # 전역 Provider (ThemeProvider)
  config/
    site.ts             # 사이트 이름, 설명, 내비게이션 설정
  lib/
    utils.ts            # cn() 클래스명 병합 유틸
  types/
    index.ts            # 공용 타입
```

경로 별칭 `@/*`는 `src/*`를 가리킵니다. 예: `@/components/ui/button`

## 사용법

### 사이트 정보 변경

`src/config/site.ts`에서 사이트 이름, 설명, 내비게이션 링크를 수정하면 헤더, 푸터, 메타데이터에 함께 반영됩니다.

### shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add dialog
```

추가된 컴포넌트는 `src/components/ui/`에 생성됩니다. 색상은 `src/app/globals.css`의 CSS 변수로 조정합니다.

### 다크 모드

`ThemeProvider`가 `html` 태그에 `.dark` 클래스를 붙입니다. 시스템 설정을 기본값으로 사용하며, `ThemeToggle` 버튼으로 전환할 수 있습니다.

## 참고

- 이 프로젝트는 Next.js 15.5 기준입니다. 설정 파일(`next.config.ts`, `postcss.config.mjs`)은 Next 15 방식에 맞춰져 있습니다.
