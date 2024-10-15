# Obsidian-blog

**Obsidian-blog**은 평소 사용하는 Obsidian 노트 앱을 활용하여 손쉽게 블로그에 글을 작성하고, 이를 자동으로 배포할 수 있도록 만든 프로젝트입니다. `/posts` 폴더에서 MDX 형식으로 글을 작성하면, Contentlayer가 이를 Next.js에서 사용 가능한 형태로 변환해주고, Obsidian의 Git 확장 기능을 이용해 자동으로 푸시됩니다. 푸시된 내용은 Vercel과 연동되어 자동으로 블로그에 게시됩니다.

## 기술 스택

- **TypeScript**
- **Next.js**
- **Contentlayer**
- **Styled-Components**
- **Vercel**
- **React-Redux**

## 프로젝트 설치 및 실행 방법

아래 명령어를 통해 프로젝트를 로컬 환경에서 설치하고 실행할 수 있습니다:

```bash
npm install
npm run dev
```

## 주요 폴더 구조

- **/posts**: Obsidian으로 작성한 글이 저장되는 폴더입니다. 이 글들은 MDX 형식으로 저장되며, Contentlayer에 의해 변환되어 앱에서 사용됩니다.
- **/generated**: Contentlayer에 의해 생성된 파일들이 저장되는 폴더로, 앱 내부에서 작성한 글을 불러오는 데 사용됩니다.

---
