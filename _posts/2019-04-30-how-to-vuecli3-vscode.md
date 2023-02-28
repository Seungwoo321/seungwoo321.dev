---
author_profile: true
layout: post
title: VSCode에서 Vue 개발 환경 구성하기
date: "2019-04-30"
tags: Vue VsCode
categories: tech
permalink: /blog/:year/:month/:day/:title/
toc: true
excerpt_separator: <!--more-->
---
Vue CLI 3로 생성한 프로젝트에서 VSCode의 확장 플러그인과 커스텀 설정을 통해 IntelliSense와 ESLint를 활용할 수 있다.
<!--more-->

## Overview

VSCode의 IntelliSense 기능을 커스텀 설정과 확장 플러그인을 통해서 Vue 개발 환경을 지원하고 VSCode에서 ESLint를 사용하는 방법을 정리한다.

---

## ESLint 설정

Vue CLI 3로 생성한 프로젝트는 사용자가 선택한 옵션에 따라서 eslint의 설정이 package.json에 추가되었거나, .eslintrc.js 파일로 생성되어 있다. VSCode에서 ESLint가 올바르게 작동하려면 확장 플러그인 ESLint를 설치하고 setting.json 설정을 추가한다.

### .eslintrc.js

여기에서는 `ESLint + Standard config`를 선택했고 공백을 스페이스바 4칸으로 변경하여 사용한다.

```js
// .eslintrc.js
module.exports = {
    root: true,
    env: {
        node: true
    },
    plugins: ['vue'],
    extends: ['plugin:vue/essential', '@vue/standard'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        'no-tabs': 0
    },
    "parserOptions": {
        "parser": "babel-eslint"
    }
}
```

### 확장 플러그인 ESLint 설치 및 설정

VSCode의 확장 플러그인 ESLint를 설치하고 VSCode의 setting.json에 설정을 추가한다.

* setting.json

```json
"eslint.validate": [
    {
        "language": "vue",
        "autoFix": true
    },
    {
        "language": "javascript",
        "autoFix": true
    }
]
```

## 구문강조 & 코드 자동완성

확장 플러그인 Vetur 을 설치한다. Vetur 은 확장자가 `.vue` 인 파일에서 `scf` 를 입력하면 기본 Template 형식이 자동 완성 되고,  `Ctrl + Space` 로  어시스트 기능을 제공한다. 설치한 Vetur가 0.19.2 버전일 경우에는 알 수 없는 구문오류가 발생하니 VSCode의 `setting.json`에 다음 설정을 추가한다  

```json:setting.json
"vetur.experimental.templateInterpolationService": false
```

## 정의된 파일로 이동하기 (Alt + 마우스 클릭)

Vue CLI 3 로 생성한 프로젝트는 기본적으로 `src/` 의 alias 가 `@/` 으로 설정되어 있다. 그리고 javascript 문법상 `import` 구문을 사용할 때 `.vue` 나 `.js` 와 같은 확장자 생략이 가능하다. 하지만 실제로 상대경로 대신 `@/` 를 사용하거나 확장자를 생략한 `import` 구문을 사용하면 VSCode의 IntelliSense가 동작하지 않는다. 확장 플러그인 `Vue Peek` 를 설치 하고 `jsconfig.json` 환경을 구성하면 대부분 해결 할 수 있다.  

### 확장 플러그인 Vue Peek 설치

확장 플러그인 Vue Peek 를 설치 하면 `.vue` 파일에서 확장자를 생략한 import 구문에서 IntelliSense 가 잘 동작한다.

### 프로젝트 루트에 jsconfig.json 설정

다음 환경 구성은 alias '@/' 를 사용한 import 구문에서 IntelliSense 가 잘 동작한다.

* jsconfig.json

```json
{
   "compilerOptions": {
       "baseUrl": ".",
       "paths": {
           "@/*": ["src/*"],
       },
       "sourceMap": true
   },
   "include": ["src/**/*"],
   "exclude": ["node_modules", "dist"]
}
```

## IntelliSense가 제대로 동작하지 않는 경우

* VSCode의 작업영역의 "폴더 추가" 를 프로젝트 디렉토리를 직접 선택한다. 그렇지 않으면 IntelliSense 가 제대로 동작하지 않는다.
* 자바스크립트 파일에서 확장자가 `.vue` 인 파일을 `import` 하는 구문은 IntelliSense 가 제대로 동작하지 않는다.

## 그외 VSCode 플러그인 설치 목록

* Git 관련
  * GitLens
  * GitHistory
* 테마 관련
  * Material Icon Theme
  * Material Syntax - Dark
* 스타일 작업 관련
  * Color Picker
  * Sass
  * stylelint
* 기타 플러그인
  * Atom Keymap
  * Korean Language Pack for Visual Studio Code
  * Auto Close Tag
  * Auto Rename Tag
  * npm
  * npm Intellisense

---

## Reference

* [VSCode의 Setting.json 알아보기](https://vscode.readthedocs.io/en/latest/getstarted/settings/)
* [VSCode의 jsconfig.json 알아보기](https://code.visualstudio.com/docs/languages/jsconfig)
* [JavaScript Standard Style 가이드](https://standardjs.com/)
* [Vue Cli3 default Alias @](https://github.com/vuejs/vue-cli/blob/ff57b8f55fa69873f643e418cfe6d4842d7c7674/packages/%40vue/cli-service/lib/config/base.js#L49-L50)
