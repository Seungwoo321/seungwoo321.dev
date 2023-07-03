---
title: Vue개발자의 React 시작기
date: "2023-05-26"
last_modified_at: "2023-05-26"
tags: ["TypeScript", "React"]
categories: "Frontend"
---

## 이 글의 목표

개발의 시작은 사용할 언어와 기술 스택에 맞는 프로젝트를 구성하는것 이라고 생각하지만 새로운 기술이나 익숙하지 않은 프레임워크에 대해서 처음부터 모두 잘 할 수는 없기 때문에 시행 착오를 통해서 결국은 할 수 있는 능력을 갖춰야 한다.

<!-- > Node.js: v16.14.2 -->

리액트 프로젝트 자체는 Vite 기반으로 진행한다면 cli로 아주 쉽게 구성할 수 있기 때문에 기본으로 아래 환경을 구성할 것이다.

- ESLint - Standard Rule + Custom Rule
- Emotion
- React Query

그 다음 프로젝트에서 선택적으로 사용할 수 있도록 TypeScript와 서버사이드 렌더링을 위한 Next.js를 추가하는 과정을 설명 하려고 한다.

- TypeScript
- Next.js

## React 프로젝트 기본 구성

### 리액트 프로젝트 생성

vite CLI을 사용해서 리액트 프로젝트를 생성한다.

```bash
npm create vite@latest react-project -- --template react
```

### ESLint 설정

팀이나 프로젝트 환경에 따라서 기본으로 적용된 ESLint 규칙을 사용하지 않을 수 있다. 개인적으로는 스탠다드(Standard) 규칙을 즐겨쓰기 때문에 이를 기반으로 정리했다.

스탠다드 규칙을 적용하기 위한 라이브러리들을 설치한다.

```bash
npm install --save-dev @babel/core @babel/eslint-parser eslint-config-standard eslint-config-standard-jsx eslint-config-standard-react eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react
```

.eslintrc.cjs

```js
{
  "parser": "@babel/eslint-parser",
  "extends": ["standard", "standard-jsx", "standard-react"]
}
```
