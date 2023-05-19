---
title: CSS 박스 모델
date: '2022-10-16'
tags: ["Frontend", "CSS"]
categories: CSS
permalink: /blog/:year/:month/:day/:title/
---

CSS는 HTML요소를 화면에 출력하는데 크게 인라인 (inline) 박스와 블록 (block) 박스로 구분합니다.

<!--more-->

## 인라인 박스와 블록 박스

기본값이 인라인 박스로 출력되는 html 요소는 `<span>`,`<p>`, `<a>` 와 같이 글자를 만들고 제어하기 위한 요소라고 생각하면 그 특성들을 이해하기 쉽습니다.

- (글자는) 포함한 콘텐츠 크기만큼 가로와 세로너비가 자동으로 줄어드는 특성을 가지고 있어서 요소가 수평으로 쌓임
- (글자는) 너비 속성이 적용 되지 않음 (width, height)
- (글자의) 여백 속성은 좌우 여백만 적용됨 (margin, padding)
- (글자는) 자식 요소로 (상자인) 블록 요소를 가질 수 없음

블록 박스는 상자(레이아웃)을 만들기 위한 요소로 대표적으로 `<div>` 태그가 있으며 다음과 같은 특성을 가집니다.

- (상자는) 포함한 콘텐츠 크기만큼 세로너비는 줄어들고 가로너비는 부모 요소의 크기만큼 늘어나는 특성을 가지고 있어서 요소가 수직으로 쌓임
- (상자는) 너비 속성이 적용됨 (width, height)
- (상자는) 모든 여백 속성이 적용 됨 (margin, padding)
- (상자는) 자식 요소로 인라인 (글자) 요소와 블록 (상자) 요소를 모두 가질 수 있음

## 박스의 구성

### content

- width, height 속성을 사용해서 콘텐츠의 가로 너비와 세로 너비를 지정 할 수 있습니다.
- width, height 속성의 기본값은 `auto`로 브라우저가 자동으로 너비를 계산합니다.
- box-sizing 속성의 값이 content-box (기본값)이면 요소의 내용만으로 크기를 계산하고 border-box 면 내부 여백(padding)과 테두리의 두께(border)를 자동으로 포함해서 계산합니다.

### padding

- 콘텐츠와 테두리 사이의 내부 여백을 지정하는 단축 속성입니다.
- 내부 여백만큼 요소의 크기가 커지는 특성을 가집니다.

### border

- 테두리 선을 지정하는 단축 속성입니다. (선 두께 - 선 종류 - 선 색상)
- 선 두께 (border-width)는 기본값이 medium 인데 브라우저마다 다를 수 있는 애매한 표현으로 정확한 단위로 지정하는게 좋습니다.
- 선 종류 (border-style)는 기본값이 none 으로 선이 없기 때문에  solid, dashed 와 같은 선의 종류를 지정하지 않으면 테두리 선이 보이지 않습니다.
- 선 색상(border-color)은 기본값이 검정색 입니다.
- 테두리 두께 만큼 요소의 크기가 커지는 특성을 가집니다.
- border-방향, border-방향-속성 처럼 개별 지정 할 수 있고 모서리를 둥글게 깎는 border-radius 속성이 있습니다.

### margin

- 외부 여백을 지정하는 단축 속성 입니다.

### 여백의 단축 속성

- 4개를 지정하면 `top` - `right` - `bottom` - `left`
- 3개를 지정하면 `top` - `right, left` - `bottom`
- 2개를 지정하면 `top, bottom` - `left, right`
- 1개를 지정하면 `top, bottom, left, right`

---

## Reference

- [MDN 문서 상자 모델](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/The_box_model)
- 패스트 캠퍼스 "한 번에 끝내는 HTML, CSS, JavaScript, TypeScript" 강의 중
