---
title: 자동매매 알고리즘 개발과 트레이딩 봇 실전 6개월
date: '2021-06-07'
tags: ["Trading Bot", "TypeScript"]
layout: post
author_profile: true
permalink: /blog/:year/:month/:day/:title/
toc: true
excerpt_separator: <!--more-->
---

처음에는 막막하기만 했던 기본 캔들 데이터 생성을 인플럭스DB (InfluxDB)를 사용해서 쉽게 구현할 수 있었다. 다음은 언제 사고 언제 파는 게 좋을지를 과거 데이터를 통해 시뮬레이션 해보기 위해서 거래소에서 제공하는 REST API를 통해서 2017년부터 현재까지의 캔들 데이터를 인플럭스DB에 수집하는 스크립트를 노드 (node.js)로 작성했다. 증권 거래소와 달리 암호화폐 거래소는 REST API를 지원하므로 웹 개발자로서는 접근이 훨씬 용이해서 실전 봇 까지 바로 진행할 수 있었다.

<!--more-->

## 시뮬레이션

데이터 분석에는 파이썬(Python) 언어를 많이 사용하기 때문에 잠깐의 고민도 있었지만 익숙한 노드를 선택했다. 데이터 조작 및 분석을 위해 파이썬의 Pandas와 같은 라이브러리로 Data-Forge와 이 Data-Forge를 기반으로 알고리즘 거래의 백테스팅을 위한 API를 제공하는 툴킷 grademark를 사용했다.

<img src="/assets/images/posts/2021/06/07/backtest.png" alt="backtext" />

2017년 1월부터 2020년 10월까지의 비트코인 차트에 이동 평균선(Moving Average), 스토캐스틱(Stochastic), 볼린저 밴드(Bollinger Band) 지표를 사용해서 조건을 이리저리 바꿔가며 다양하게 알고리즘을 시험해 보았다.

## 오픈소스 기여 & 타입스크립트

지난번 웹에서 캔들 스틱 차트의 지표를 그릴 때는 tvjsx/trading-vue-js 라이브러리를 그대로 사용했지만 이번에는 Data-Forge 기반으로 하는 data-forge-indicators 라이브러리를 사용했다.

차트의 기술적 분석을 트레이드 스터디에서 주로 스토케스틱을 활용한 기법을 배워서 매매 알고리즘 작성에 반드시 필요한 지표 중 하나인데 이 라이브러리에서 지원하지 않았다. 그래서 스토케스틱 지표를 계산하는 함수를 직접 추가하고 PR을 작성했다.

<img src="/assets/images/posts/2021/06/07/stochastic.png" alt="stochastic" />

직접 만들어서 관리하는 것 외에 처음으로 기여해 본 오픈소스 프로젝트이고 타입 스크립트도 처음 사용해 본 경험 이어서 아주 의미 있는 활동이었다.

## 트레이딩 봇 실전 6개월

시뮬레이션에서 사용한 grademark 라이브러리의 로직은 과거 데이터를 가지고 거래를 가정하는 데 매매 조건을 충족해도 바로 거래하지 않는다. 매매해야 된다고 기억했다가 다음 캔들에서 매매를 한다. 반면 직접 거래소와 통신하며 사고팔도록 동작하는 봇은 별도의 상태값을 저장하는 데이터베이스를 두지 않으려고 즉시 거래가 되도록 개발했다. 결과 시뮬레이션과는 많은 차이를 보였다.

<img src="/assets/images/posts/2021/06/07/profit1.png" alt="profit1" />
<img src="/assets/images/posts/2021/06/07/profit2.png" alt="profit2" />
<img src="/assets/images/posts/2021/06/07/profit3.png" alt="profit3" />

시뮬레이션과 차이를 보이면서 실제 매매 환경에서 알고리즘을 개선해나갔고 시장의 상황에 따라서 수익이 나기도 했지만 지속적인 유지 보수와 리스크 관리가 필요했다.

## 마무리

매매 알고리즘을 테스트하고 더 나은 알고리즘을 적용하는 것의 의미를 두기 위해 실전 매매와 시뮬레이션 환경이 최대한 비슷하게 동작하도록 개선이 필요해 보인다.
어느 한쪽을 수정해서 두 매매 환경의 차이를 좁히면 되지 않을까 싶다.

---

## Reference

* [Data Forge](https://github.com/data-forge/data-forge-ts)
* [data-forge-indicators](https://github.com/data-forge/data-forge-indicators)
* [grademark](https://github.com/grademark/grademark)
