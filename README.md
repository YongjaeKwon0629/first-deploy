# 🚀 권용재 - Software Engineer

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**현대적이고 반응형 이력서 웹사이트**

[🌐 라이브 데모](https://first-deploy-vercel-url.vercel.app) • [📧 연락하기](mailto:yongjae.kwon0629@gmail.com) • [💼 GitHub](https://github.com/YongjaeKwon0629)

</div>

---

## 📋 프로젝트 소개

이 프로젝트는 **Next.js**와 **TypeScript**를 활용하여 구축된 개인 이력서 웹사이트입니다. 이재연님의 예시 사이트를 참조하여 현대적이고 전문적인 디자인을 적용했습니다.

### ✨ 주요 특징

- 🎨 **현대적인 디자인**: 그라데이션 헤더와 카드 형태의 깔끔한 레이아웃
- 📱 **완전 반응형**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화
- ⚡ **빠른 로딩**: Next.js 15.5.3과 Turbopack을 활용한 최적화된 성능
- 🔄 **동적 콘텐츠**: GitHub API를 통한 실시간 데이터 로딩
- 🎯 **SEO 최적화**: 메타데이터와 시맨틱 HTML 구조
- 🌙 **다크모드 지원**: 시스템 설정에 따른 자동 테마 전환

## 🛠️ 기술 스택

### Frontend
- **Framework**: [Next.js 15.5.3](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Fonts**: [Geist](https://vercel.com/font) (Sans & Mono)

### Backend & Deployment
- **Runtime**: Node.js
- **Hosting**: [Vercel](https://vercel.com/)
- **Data Source**: GitHub API (JSON)
- **Version Control**: Git & GitHub

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0 이상
- npm, yarn, pnpm 또는 bun

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/YongjaeKwon0629/first-deploy.git
   cd first-deploy
   ```

2. **의존성 설치**
   ```bash
   npm install
   # 또는
   yarn install
   # 또는
   pnpm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   # 또는
   yarn dev
   # 또는
   pnpm dev
   ```

4. **브라우저에서 확인**
   ```
   http://localhost:3000
   ```

## 📁 프로젝트 구조

```
first-deploy/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── service/               # 데이터 서비스
│   ├── resume_general_info_service.json
│   └── resume_portfolio_service.json
├── public/                # 정적 파일
│   └── diginori_logo.jpg  # 프로필 이미지
├── package.json           # 프로젝트 설정
├── tailwind.config.js     # Tailwind 설정
├── tsconfig.json          # TypeScript 설정
└── README.md              # 프로젝트 문서
```

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: Blue (#2563EB) → Purple (#7C3AED) 그라데이션
- **Secondary**: Gray (#6B7280)
- **Background**: White (#FFFFFF) / Dark (#0A0A0A)
- **Text**: Gray (#171717) / Light (#EDEDED)

### 타이포그래피
- **Headings**: Geist Sans (Bold)
- **Body**: Geist Sans (Regular)
- **Code**: Geist Mono

## 📊 성능 최적화

- ⚡ **Turbopack**: Next.js 15의 새로운 번들러로 빠른 빌드
- 🖼️ **Image Optimization**: Next.js Image 컴포넌트 활용
- 📦 **Code Splitting**: 자동 코드 분할로 초기 로딩 최적화
- 🗜️ **Compression**: Gzip/Brotli 압축으로 전송 크기 최소화

## 🔧 커스터마이징

### 개인 정보 수정
`service/resume_general_info_service.json` 파일을 수정하여 개인 정보를 업데이트할 수 있습니다:

```json
{
  "name": "이름",
  "title": "직책",
  "github": "GitHub URL",
  "bio": "자기소개",
  "email": "이메일",
  "location": "위치",
  "skills": ["기술1", "기술2", "기술3"]
}
```

### 프로젝트 정보 수정
`service/resume_portfolio_service.json` 파일을 수정하여 프로젝트 정보를 업데이트할 수 있습니다:

```json
[
  {
    "title": "프로젝트 제목",
    "summary": "프로젝트 설명",
    "url": "프로젝트 URL",
    "tech": ["기술1", "기술2"]
  }
]
```

## 🚀 배포

### Vercel 배포 (권장)
1. [Vercel](https://vercel.com/)에 GitHub 계정으로 로그인
2. 새 프로젝트 생성
3. GitHub 저장소 연결
4. 자동 배포 완료!

### 기타 플랫폼
- **Netlify**: `npm run build` → `out` 폴더 배포
- **GitHub Pages**: GitHub Actions를 통한 자동 배포
- **AWS S3**: 정적 웹사이트 호스팅

## 📈 개발 로드맵

- [ ] 다크모드 토글 버튼 추가
- [ ] 다국어 지원 (i18n)
- [ ] 블로그 섹션 추가
- [ ] 연락처 폼 기능
- [ ] 애니메이션 효과 강화
- [ ] PWA 지원

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

**권용재** - Software Engineer

- 📧 Email: [yongjae.kwon0629@gmail.com](mailto:yongjae.kwon0629@gmail.com)
- 💼 GitHub: [@YongjaeKwon0629](https://github.com/YongjaeKwon0629)
- 🌐 Website: [Live Demo](https://first-deploy-vercel-url.vercel.app)

---

<div align="center">

**⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요! ⭐**

Made with ❤️ by [권용재](https://github.com/YongjaeKwon0629)

</div>

