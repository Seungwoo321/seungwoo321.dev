---
title: IE 11 Syntax Error - Script1002
date: '2020-03-16'
tags: ["IE", "trouble shooting"]
categories: Vue
permalink: /blog/:year/:month/:day/:title/
---

vue-pivottable 컴포넌트의 스타일을 수정하고 최종적으로 프로젝트에서는 `import { VsPivottable, VsPivottableUi } from 'vs-pivottable'`과 같이 커스텀 된 형태로 사용하고 싶었다. 그런데 Internet Explorer 11에서 확인 시 빈 페이지가 로딩되고 콘솔 창에는 Script1002 오류만 찍혀 있었다.
<!--more-->

## Script1002 오류 해결 과정

### 문제가 발생한 코드

코드는 이렇다.

```js
import './pivottable.css'
import { VuePivottable, VuePivottableUi } from 'vue-pivottable'

const VsPivottable = VuePivottable
const VsPivottableUi = VuePivottableUi

function install (Vue) {
    Vue.component('vs-pivottable', VuePivottable)
    Vue.component('vs-pivottable-ui', VuePivottableUi)
}

export {
    VsPivottable,
    VsPivottableUi
}

export default install
```

### 원인 파악1

Script1002는 Syntax error로 콘솔 창에서는 구문 오류라고만 표시되어 정확한 원인이 되는 코드는 확인할 수 없었지만 검색을 통해 Polyfill과 관련돼있음을 알 수 있었다.

- main.js에 Polyfill을 추가하거나 babel.config.js의 설정을 변경하는 방법 등을 시도했으나 해결되지 않음.

### 원인 파악2

`import VuePivottable from 'vue-pivottable'` 구문을 `import VuePivottable from 'vue-pivottable/dist/vue-pivottable.umd.js'`으로 변경 시에는 정상적으로 렌더링이 되었다.

- vue-pivottable 이 빌드 된 파일에서 `import { VsPivottable, VsPivottableUi } from 'vs-pivottable'` 을 사용할 수 있도록 해보았으나 잘되지 않음.

### 원인 파악3

git 레포지토리 **vue-pivottable**의 demo 프로젝트에서 실행 시에서는 Internet Explorer 11에서 정상 렌더링 되었다.

- **vue-pivottable**의 문제는 아닌 것을 확인함.

### 원인 정리

node_module에서 **vue-pivottable** 패키지를 불러오면 es6로 작성된 `src/index.js`를 불러오는데 이때 vue-cli3의 webpack-dev-server`에서 개발서버를 실행하고 Internet Explorer 11에서 확인하면 es6 문법을 제대로 인식하지 못해서 구문 오류가 발생한다.

### 해결

vue.config.js의 `transpileDependencies` 옵션을 사용하여 Babel을 적용할 라이브러리를 지정할 수 있다. `transpileDependencies: ['vue-pivottable']` 만 추가하면 Internet Explorer 11에서 정상 렌더링 된다.

## Reference

- [runtimecompiler vuejs 공식문서](https://cli.vuejs.org/config/#runtimecompiler)
