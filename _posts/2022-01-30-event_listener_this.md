---
title: 이벤트 핸들러 내부의 this
date: '2022-01-30'
tags: ["Frontend", "JavaScript"]
layout: post
author_profile: true
permalink: /blog/:year/:month/:day/:title/
toc: true
excerpt_separator: <!--more-->
---

이벤트를 핸들러 내부의 this를 예제로 정리해보자.

<!--more-->

## 이벤트 리스너(addEventListener) 함수

### 익명 함수의 this

addEventListener()의 이벤트 핸들러가 전통적인 자바스크립트 함수이면 동작한 요소의 참조를 나타냅니다.

<iframe
    width="100%"
    height="150"
    src="//jsfiddle.net/seungwoo321/b9vz06ao/embedded/result/"
    allowfullscreen="allowfullscreen"
    allowpaymentrequest
    frameborder="0"
></iframe>

### 화살표 함수의 this

addEventListener()의 이벤트 핸들러가 화살표 함수이면 this값을 바인딩하지 않고 자신을 둘러싸는 렉시컬 범위(lexical scope)의 참조를 나타냅니다.

<iframe
    width="100%"
    height="150"
    src="//jsfiddle.net/seungwoo321/dzs3bv9h/embedded/result/"
    allowfullscreen="allowfullscreen"
    allowpaymentrequest
    frameborder="0"
></iframe>

## 속성 값(attribute value) - 사용안함

(예: onclick)

### 속성 값의 자바스크립트 코드 내에서 this

addEventListener() 에 따라 this값을 바인딩하는 핸들러 함수로 래핑되어 요소에 대한 참조를 나타냅니다.

<iframe
    width="100%"
    height="150"
    src="//jsfiddle.net/seungwoo321/5z3d4kb0/embedded/result/"
    allowfullscreen="allowfullscreen"
    allowpaymentrequest
    frameborder="0"
></iframe>

### 속성 값의 코드에 의해 호출 된 함수 내부의 this

함수를 호출한 방법에 의해 결정되어 Window 전역 객체에 대한 참조를 나타냅니다. (엄격 모드이면 `undefined`)

<iframe
  width="100%"
  height="150"
  src="//jsfiddle.net/seungwoo321/fetypau7/embedded/result/" allowfullscreen="allowfullscreen"
  allowpaymentrequest frameborder="0"
></iframe>

---

## Reference

* [EventTarget.addEventListener() - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)
