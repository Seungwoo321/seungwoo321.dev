---
title: 자바스크립트의 동작원리
date: '2022-01-19'
tags: ["Frontend", "JavaScript"]
layout: post
author_profile: false
permalink: /blog/:year/:month/:day/:title/
toc: true
excerpt_separator: <!--more-->
---

자바스크립트 엔진, 런타임, 호출 스택, 이벤트 루프를 간단하게 정리했습니다.

<!--more-->

## 엔진

대표적으로 Chrome 과 Node.js에서 사용하는 Google V8 엔진이 있으며 메모리 할당이 일어나는 **Memory Heap** 과 코드 실행에 따라 호출 스택이 쌓이는 **Call Stack**으로 구성되어 있습니다.

## 런타임

런타임은 프로그램이 실행되는 동작과 그 환경이라고 할 수 있는데, 자바스크립트의 런타임은 DOM 을 제어하거나 AJAX, setTimeout 과같이 Web API를 사용하는 웹 브라우저가 있고, 웹 서버와 같이 확장성 있는 네트워크 프로그램 제작을 위해 고안된 node.js 가 있습니다.

## 호출 스택

자바스크립트 코드가 실행되는 환경인 실행 컨텍스트(Execution Context)를 생성하고 이를 저장하는 자료구조입니다. 코드의 실행이 끝날 때 호출 스택에서 제거됩니다. 호출 스택의 최대 허용치를 넘게 되면 "Maximum call stack size exceeded" 에러를 발생시킵니다.

## 이벤트 루프

이벤트 루프는 Call Stack 과 Callback Queue (또는 Event Queue, Task Queue 라 불림)의 상태를 체크하여 Call Stack 이 빈 상태가 되면 Callback Queue의 첫 번째 콜백을 Call Stack으로 밀어 넣어서 수행되도록 합니다. 이렇게 블로킹 문제를 해결하고 동시성을 확보합니다.

예를 들어 setTimeout이나 AJAX 요청과 같은 비동기 함수가 실행되면 콜백 함수가 Callback Queue에서 대기하다가 Call Stack 이 비었을 때 이벤트 루프에 의해서 Call Stack으로 이동하여 수행됩니다.

### 블로킹

자바스크립트는 싱글 스레드 기반의 언어로 Call Stack 이 하나이기 때문에 한 번에 한 가지 일만 수행할 수 있습니다. 따라서 시간이 많이 소요되는 함수가 있을 때 Call Stack에서 해당 함수를 수행하는 동안에는 아무 작업도 못하는 블로킹 상태가 됩니다.

### 동시성

싱글 코어에서 여러 개의 스레드를 번갈아 가며 실행하여 마치 동시에 실행되는 것처럼 보이게 하는 것입니다. 멀티 코어에서 실제로 동시에 여러 작업이 병렬적으로 처리되는 것을 병렬성이라고 합니다.

### 렌더큐

이벤트 큐와 유사한 큐로 더 높은 우선순위를 가집니다. 콜 스택에 작업이 쌓여 있으면 렌더가 동작하지 않기 때문에 브라우저 렌더링에 방해되지 않도록 오래 걸리는 작업은 작은 단위로 쪼개거나 비동기로 동작 시키는 것이 좋습니다.

> 렌더 큐 (Render Queue) 외에도 Microtask Queue, Animation Frames, Job Queue 와 같이 이벤트 루프에 의해 감시되고 우선순위가 결정되는 큐들이 있습니다.

---

## Reference

- [https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine](https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine)
- [https://velog.io/@dyllis/동시성이-무엇일까](https://velog.io/@dyllis/%EB%8F%99%EC%8B%9C%EC%84%B1%EC%9D%B4-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)
- [https://beomy.github.io/tech/javascript/javascript-runtime/](https://beomy.github.io/tech/javascript/javascript-runtime/)
