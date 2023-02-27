---
layout: post
title: Padding Hack으로 반응형 SVG 만들기
date: 2019-12-15  08:00:00 +0900
tags: SVG, CSS
permalink: /blog/:year/:month/:day/:title/
---

<!-- 
summary: 지역과 관련된 데이터를 시각화하기 위해 SVG와 d3 함수를 이용해서 표현한 지도에 패딩 핵(Padding Hack)이란 기법을 통해서 반응형으로 구현한 경험을 정리하자.
-->
<!-- <TOCInline toc={props.toc} exclude="Overview" toHeading={2,3} asDisclosure/> -->

## Overview

지역과 관련된 데이터를 시각화하기 위해 SVG와 d3 함수를 이용해서 표현한 지도에 패딩 핵(Padding Hack)이란 기법을 통해서 반응형으로 구현한 경험을 정리하자.

<img src="/static/images/posts/2019/12/15/vue-datamaps-example.png" alt="vue-datamaps example" />

---

## DataMaps 라이브러리에서 구현된 반응형 살펴보기

d3.js로 지도를 조금 더 쉽게 그릴 수 있게 구현된 라이브러리 [DataMaps](https://datamaps.github.io/)를 분석해 보니 옵션으로 `responsive: true` 을 설정했을 때 내부의 SVG요소에 패딩 핵 스타일이 적용된다.

그리고 window 창의 resize 이벤트 발생 시 현재 크기를 이전 크기를 나눈 다음 d3 api를 사용해 새로운 scale 값으로 변경하는 `Datamaps.prototype.resize` 메서드가 실행된다. 

[공식 문서](https://github.com/markmarkoh/datamaps#responsive-maps)에서는 SVG를 감싸는 container 요소에 패딩 핵을 위한 스타일링에 대해 설명하고 있다.

## vue-datamaps에서 반응형으로 구현하기

가상돔(Virtual Dom)을 사용하는 Vue의 장점을 가져가면서 쉽게 지도를 그리기 위해서 DataMaps 라이브러리를 Vue 기반의 UI 컴포넌트로 컨버팅 했다.

반응형을 옵션으로 적용하는 원본과는 다르게 기본으로 패딩 핵 스타일이 적용해서 항상 `responsive` 하다. 그래서 스케일 값을 변경하는 `Datamaps.prototype.resize`의 로직은 제외를 했다.

## Padding Hack 이란 ?

패딩 핵(Padding Hack)의 기본 개념은 요소의 패딩과 너비의 관계를 사용하는 것이다. 패딩이 백분율로 설정되면 요소의 너비를 기준으로 그 백분율의 값이 계산된다.

예를 들어 요소의 컨테이닝 블록의 너비가 400px 일 때 요소에 `padding-bottom` 또는 `padding-top`을 50%로 설정하면 그 `padding`의 값은 200px이 될것 이다.

다음 예제들은 div.demo-block-content 내부의 div가 컨테이닝 블록이 되어 예제 코드 div 요소의 `padding` 값에 영향을 준다.


> 개발자 도구에서 div 요소를 선택하고 부여된 `padding` 속성 값을 조절하면서 확인해 보자. 


**padding-top 10% 실행결과**

<div
    style={{
        width: "100%",
        paddingTop: "10%",
        backgroundColor: "yellow"
    }}>
</div>

```html
  <div style="width:100%;padding-top:10%;background-color: yellow;"></div>
```

**padding-bottom 20% 실행결과**

<div
    style={{
        width: "100%",
        paddingTop: "20%",
        backgroundColor: "yellow"
    }}>
</div>

```html
  <div style="width:100%;padding-bottom:20%;background-color: yellow;"></div>
```

**width 50%; pading-top 30% 실행결과**

<div
    style={{
        width: "100%",
        paddingTop: "30%",
        backgroundColor: "yellow"
    }}>
</div>

```html
  <div style="width:50%;padding-top:30%;background-color: yellow;"></div>
```

이번에는 추가된 외부 div 요소가 컨테이닝 블록으로 식별되어 외부 div 요소의 너비 내에서 `padding` 값이 계산되는 예제이다.

**외부 요소의 크기가 400px 이고, 내부 요소의 width 100%, padding-top 50% 실행결과**

<div
    style={{
        position: 'relative',
        width: '400px',
        height: '400px',
        border: '1px solid',
}}>
    <div
        style={{
            position: 'abosolute',
            width: '100%',
            height: 0,
            paddingTop: '50%',
            backgroundColor: 'yellow'
        }}>
    </div>
</div>

```html
<div style="position:relative;width:400px;height:400px;border:1px solid;">
  <div style="position:abosolute;width:100%;height:0;padding-top:50%;background-color: yellow;"></div>
</div>
```

**외부 요소의 크기가 400px 이고, 내부 요소의 width 50%, padding-bottom 50% 실행결과**

<div style={{
    position: 'relative',
    width: '400px',
    height: '400px',
    border: '1px solid'
}}>
    <div style={{
        position:'abosolute',
        width: '50%',
        height: 0,
        paddingBottom:'50%',
        backgroundColor: 'yellow'
    }}>
    </div>
</div>

```html
<div style="position:relative;width:400px;height:400px;border:1px solid;">
  <div style="position:abosolute;width:50%;height:0;padding-bottom:50%;background-color: yellow;"></div>
</div>
```

> [MDN문서- 컨테이닝 블록의 모든 것](https://developer.mozilla.org/ko/docs/Web/CSS/All_About_The_Containing_Block)을 읽어보자

## Padding Hack 적용하기

다음은 `SVG`에 패딩 핵을 적용하는 내용으로 `img`나 `ifream`에 적용할 때는 차이가 있을 수 있다.

### 1단계

SVG의 경우 height 와 width 속성을 제거한다.

```html

<svg class="map">
  <!-- ... -->
</svg>

```

### 2단계

SVG를 div 컨테이너로 감싼다.

```html
<div class="container">
  <svg class="map">
    <!-- ... -->
  </svg>
</div>
```

### 3단계

위의 div 예제의 스타일과 다르게 컨테이너 높이를 축소하고 padding 값을 지정한다.

```css
.container {
  height: 0;
  width: 100%;
  padding-top: 66.66%;
  position: relative;
}
```

> 다음 수식을 사용하여 padding 값을 지정하면 컨테이너의 가로 세로 비율이 svg의 가로 세로 비율과 같아진다.
>
> * (svg height / svg width) * width-value
>

### 4단계

컨테이너 내부의 요소에 absolute를 지정해서 컨테이너와 같은 높이와 너비를 갖도록 한다.

```css
.map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

### 반응형 SVG 지도 Vue 컴포넌트

Vue에서 SVG로 그린 지도에 위의 4단계에 따라 패딩 핵을 적용해서 반응형으로 구현한 예제이다.

```html:WorldMap.vue
<template>
  <div class="container" ref="container">
    <svg class="map">
      <g>
        <path
          v-for="(item, index) in pathData"
          :key="index"
          :d="path(item)"
        ></path>
      </g>
    </svg>
  </div>
</template>
<script>
import geojson from "../assets/world.json";
import { geoEquirectangular, geoPath } from "d3-geo";
export default {
  data() {
    return {
      width: 0,
      height: 0,
    };
  },
  computed: {
    projection() {
      return geoEquirectangular()
        .scale((this.svgWidth + 1) / 2 / Math.PI)
        .translate([this.svgWidth / 2, this.svgHeight / 1.8]);
    },
    path() {
      return geoPath().projection(this.projection);
    },
    pathData() {
      return geojson.features.slice().filter((feature) => feature.id !== "ATA");
    },
    svgWidth: {
      get() {
        return this.width;
      },
      set(element) {
        this.width = element.getBoundingClientRect().width;
      },
    },
    svgHeight: {
      get() {
        return this.height;
      },
      set(element) {
        this.height = element.getBoundingClientRect().height;
      },
    },
  },
  methods: {
    resize() {
      this.svgWidth = this.$refs.container;
      this.svgHeight = this.$refs.container;
    },
  },
  mounted() {
    this.resize();
    window.addEventListener("resize", this.resize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
};
</script>
<style>
/* Padding Hack Style */
.container {
  width: 100%;
  height: 0;
  position: relative;
  padding-top: 66.66%;
}
svg.map {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
path {
  stroke: #777;
  stroke-width: 0.7px;
  stroke-opacity: 0.5;
  pointer-events: none;
}
</style>
```

<div>
    <iframe
        src="https://codesandbox.io/embed/responsive-world-map-s4cth7?fontsize=14&hidenavigation=1&theme=dark&view=preview"
        style={{
            width:'100%',
            height: '500px',
            border: 0,
            borderRadius: '4px',
            overflow: 'hidden'
        }}
        title="responsive-world-map"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
</div>

---

## Reference

* [Padding Hack으로 이미지가 로딩되기 전 컨테이너 크기 조정하기](https://www.andyshora.com/css-image-container-padding-hack.html)
* [CSS를 사용하여 SVG를 반응형으로 만들기](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
* [예제 코드에 사용된 world.json](https://github.com/Seungwoo321/vue-datamaps/blob/master/public/data/world.json)
