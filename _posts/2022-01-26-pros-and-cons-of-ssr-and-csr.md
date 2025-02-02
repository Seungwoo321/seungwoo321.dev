---
title: SSR과 CSR의 장단점
date: '2022-01-26'
tags: ["Frontend"]
categories: Web
permalink: /blog/:year/:month/:day/:title/
---

SSR(Server Side Rendering)과 CSR(Client Side Rendering)의 장단점을 정리해 보자

<!--more-->

## SSR(Server Side Rendering)

- 장점
  - 검색 엔진 최적화 (SEO) 가능하다
  - 초기 렌더링 속도가 빠르다

- 단점
  - 렌더링을 서버에서 하므로, 불필요한 트래핑이 낭비된다
  - 페이지를 렌더링 할 때마다 새로 고침이 일어난다

## CSR(Client Side Rendering)

- 장점
  - 새로 고침이 발생하지 않아 네이티브 앱과 유사한 사용자 경험을 제공한다
  - 전체적인 트래픽이 감소한다

- 단점
  - 초기 렌더링 속도가 느리다.
  - HTML 내용이 비어있어서 구글을 제외한 검색엔진 크롤러가 데이터를 수집하지 못하는 검색 엔진 최적화 (SEO) 문제가 있다
