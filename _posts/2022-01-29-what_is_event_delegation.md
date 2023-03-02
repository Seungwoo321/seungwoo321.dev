---
title: 이벤트 위임(Event Delegation)
date: '2022-01-29'
tags: ["Frontend", "JavaScript"]
layout: post
author_profile: true
permalink: /blog/:year/:month/:day/:title/
toc: true
excerpt_separator: <!--more-->
---

## 이벤트 위임이란

DOM의 **이벤트 버블링(Event Bubbling)** 특성을 활용해 이벤트 리스너를 하위 요소에 추가하는 대신 상위 요소에 추가하는 기법입니다.

다음과 같은 이점이 있습니다.

* 각 하위 항목에 이벤트 핸들러를 연결하지 않고 상위의 단일 요소에만 핸들러가 필요하기 때문에 메모리 사용 공간이 줄어듭니다.
* 제거된 요소에서 핸들러를 해제하고 새 요소에 대해 이벤트를 바인딩 할 필요가 없습니다.

> 표준 DOM 이벤트에서 정의한 이벤트 흐름은 **캡처링 단계 → 타깃 단계 → 버블링 단계**의 3가지 단계가 있습니다.

<!--more-->

* 예제

```html
<script>
// 상위 요소에 이벤트 핸들러를 등록한다 
document.getElementById("parent-list").addEventListener("click", function(e) {
 // li를 클릭 하면 버블링으로 최상단 부모요소인 document 까지 전파되된다.
 if(e.target && e.target.nodeName == "LI") {
  console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
 }
});
</script>
<body>
 <ul id="parent-list">
  <li id="post-1">Item 1</li>
  <li id="post-2">Item 2</li>
  <li id="post-3">Item 3</li>
  <li id="post-4">Item 4</li>
  <li id="post-5">Item 5</li>
  <li id="post-6">Item 6</li>
 </ul>
</body>
```

## 이벤트 버블링(Event Bubbling)

특정 요소에서 이벤트가 발생했을 때 상위로 전파되는 특성으로 상위 요소에 할당된 이벤트 핸들러가 호출됩니다.

event.target은 실제 클릭한 요소를 가리키고 event.currentTarget 은 버블링으로 전파되어 핸들러가 동작한 요소를 가리킵니다.

## 이벤트 캡쳐(Event Capture)

이벤트 버블링과 반대 방향으로 이벤트가 발생한 요소에서 하위 요소로 이벤트가 전파되는 것으로, addEventListener() API에서 세 번째 인자 값인 options 객체에 capture: true를 설정하면 최상위 조상에서 하위 요소로 전파되는 캡처링 단계에서 이벤트 핸들러가 호출됩니다.

* addEventListener의 세 번째 인자 options
  * 이전에는 addEventListener 세 번째 인자 값이 캡쳐의 사용 여부를 나타내는 Boolean 값이었으나 더 많은 옵션이 필요하게 되어 다양한 옵션을 포함하는 객체로 변경되었습니다.
  * 지원되는 옵션에는 capture 외에 once (한 번만 호출, Boolean), passive (preventDefault()를 호출하지 않음, Boolean), mozSystemGroup (listener를 시스템 그룹에 추가해야 함, Boolean, 오직 XBL, 파이어폭스 브라우저의 chrome - 구글 크롬 아님에서 실행되는 코드에서만 사용할 수 있음) 가 있습니다.

### event.stopPropagation()

이벤트 전파를 막습니다.

---

## Reference

* [https://davidwalsh.name/event-delegate](https://davidwalsh.name/event-delegate)
* [event.target](http://event.target)
* [EventTarget.addEventListener() - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)
