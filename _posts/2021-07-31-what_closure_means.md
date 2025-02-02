---
title: 클로저(Closure)는 무엇이며, 어떻게/왜 사용하나요 ?
date: '2021-07-31'
tags: ["Frontend", "JavaScript", "Closure"]
categories: JavaScript
permalink: /blog/:year/:month/:day/:title/
---

## 사전 지식

클로저를 이해 하기 위해서 Scope, Scope Chain, Context 에 대한 이해가 선행되어야 합니다.

<!--more-->

### 스코프(Scope)

프로그래밍에서 변수에 접근 할 수 있는 유효 범위

- var 는 선언된 곳과 가장 가까운 함수를 유효 범위로 가집니다 (함수 스코프)
- let, const 는 선언된 곳과 가장 가까운 블록을 유효 범위로 가집니다 (블록 스코프)

### 스코프 체인(Scope Chain)

식별자를 찾을 때 자신이 속한 스코프에서 찾고 없으면 상위 스코프에서 다시 찾는 현상 입니다.

### 렉시컬 스코프(Lexical Scope) - 정적스코프

함수를 어디서 **선언** 하였는지에 따라서 상위 스코프를 결정하는 것으로 JavaScript는 렉시컬 스코프를 따릅니다.

예제

```js
// global scope
var number = 10;

function foo () {
 var number = 1;
 bar();
}

// local scope
function bar () {
 console.log(number);
}

foo(); // ?
bar(); // ?
```

위의 예제에서 bar 함수내에 선언 된 number가 없어서 찾을 수 없으므로 스코프 체인으로 상위 스코프에서 number 를 찾게 됩니다. bar 함수는 전역에 선언 되었으므로 글로벌 스코프의 전역 변수를 상위 스코프로 가지게 되어 전역 변수의 number를 찾아서 10이 출력됩니다.

### 다이나믹 스코프(Dynamic Scope) - 동적스코프

함수의 **호출**에 따라 상위 스코프가 정해지는 것으로 Perl, Bash Shell 에서 다이나믹 스코프를 따릅니다.

예제

```bash
#!/bin/sh

NUMBER=10

foo(){
 NUMBER=1
 bar
}
bar(){
 echo $NUMBER
}

foo # ??
bar # ?? 
```

위의 예제는 다이나믹 스코프를 따르는 쉘 스크립트로 둘다 1이 출력됩니다. bar 를 먼저 호출 하고 foo 를 호출 하면 10, 1 이 출력됩니다.

## 클로저(Closure)

### 무엇인가?

내부 함수를 리턴하는 외부 함수가 종료된 후에 내부 함수를 실행 해도 렉시컬 스코프 환경을 유지하여 실행 이전에 기억하고 있던 변수에 접근 할 수 있는 특성

```js
// 외부함수
function outer () {
 const x = 10;
 // 내부함수
 return function (y) {
  return x * y;
 }
}

const carryOuter = outer();
console.log(carryOuter(10));
 
```

위의 예제에서 outer 의 내부 익명함수의 렉시컬 스코프는 y와 스코프 체인으로 outer 를 상위 스코프로 갖게 되어 x 변수에 접근 할 수 있습니다. outer 는 내부 함수를 carryOuter에게 리턴 하고 Call Stack 에서 제거 되었지만, carryOuter() 를 실행하면, 내부 익명함수는 렉시컬 스코프 환경을 유지하여 outer 함수에 선언된 x 에 접근 할 수 있게 됩니다. 이러한 특성을 클로저라고 합니다.

### 어떻게/왜 사용하는가?

- 모듈 패턴으로 데이터를 보호하고 캡슐화 합니다.
- 함수형 프로그래밍에서 curring 패턴으로 사용합니다.
- 생성자가 한 개의 객체만을 생성하는 싱글톤 패턴에서 사용합니다.

### 단점은?

스코프가 종료 된 후에도 스코프 밖에서 언젠든지 호출 될 수 있도록 메모리에 계속해서 저장하고 있기 때문에 메모리 사용량이 늘어납니다.

> **클로저 해제는 null 을 대입합니다.**

---

## Reference

- [https://medium.com/@yeon22/javascript-lexical-scope-static-scope-and-dynamic-scope-c4a9e941fab3](https://medium.com/@yeon22/javascript-lexical-scope-static-scope-and-dynamic-scope-c4a9e941fab3)
- [https://poiemaweb.com/js-scope](https://poiemaweb.com/js-scope)
