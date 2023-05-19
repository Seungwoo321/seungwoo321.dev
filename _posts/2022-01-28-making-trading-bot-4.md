---
title: 트레이딩 봇 2.0 개발 후기
date: '2022-01-28'
tags: ["Trading Bot"]
layout: post
author_profile: false
permalink: /blog/:year/:month/:day/:title/
toc: true
excerpt_separator: <!--more-->
---

## 시뮬레이션

grademark은 자바스크립트(JavaScript) 및 타입스크립트(TypeScript)에서 알고리즘 거래 백테스팅을 위한 툴킷입니다.
이 모듈의 백테스팅 로직을 살펴보면 시간 순으로 정렬된 캔들 형식의 데이터와 전략을 주입하면 타이프레임(Timeframe) 마다
포지션 상태(None, Enter, Postion, Exit)를 업데이트 하거나 주입받은 전략을 수행하고 가상의 거래 기록을 남깁니다.
이렇게 기록된 거래 내역을 바탕으로 승률이나 수익률과 같은 시뮬레이션 결과를 보여줍니다.

<!--more-->

* strategy/simpleReversion.js

```js
// strategy/simpleReversion.js
module.exports = {
    entryRule: (enterPosition, args) => {
        if (args.bar.close < args.bar.sma) { // Buy when price is below average.
            enterPosition();
        }
    },

    exitRule: (exitPosition, args) => {
        if (args.bar.close > args.bar.sma) {
            exitPosition(); // Sell when price is above average.
        }
    },

    stopLoss: args => { // Intrabar stop loss.
        return args.entryPrice * (5/100); // Stop out on 5% loss from entry price.
    },
};

// strategy/otherStrategy.js

module.exports = {
    entryRule: (enterPosition, args) => {
        if (/** ... **/) {
            enterPosition();
        }
    },

    exitRule: (exitPosition, args) => {
        if (/** ... **/) {
            exitPosition();
        }
    },

    stopLoss: args => {
        return args.entryPrice * (1/100);
    },
};

// sstrategy/index.js

const simpleReversion = require('strategy/simpleReversion.js');
const otherStrategy = require('strategy/otherStrategy.js');

module.exports = {
    simpleReversion,
    otherStrategy,
}
```

grademark의 작성자는 [grademark-first-example](https://github.com/grademark/grademark-first-example)에서 전체 사용 예제를 제공합니다. 이 예제를 참고해서 여러 가지 매매 규칙을 시험해 보기 위해 전략들을 모듈로 나눠서 작성했습니다.

작성한 매매 전략은 다음처럼 시뮬레이션 해볼 수 있습니다.

* backtest.js

```js
const { backtest } = require('grademark');
const {
    simpleReversion,
    // otherStrategy
} = require('./strategy');
; (async function main () {
    const inputSeries = ... // Call candle data
    const trades = backtest(simpleReversion, inputSeries);
    const startingCapital = 10000;
    const analysis = analyze(startingCapital, trades);
    console.log(analysis);
})()
```

## 봇 개발

위의 시뮬레이션으로 테스트한 전략을 실제로 적용해 보기 위해서 grademark의 src/lib/backtest.ts 파일의 로직을 그대로 작성하면서 단지 원본 코드에서 사용하는 포지션 상태 값을 sqlite로 관리하도록 하고 거래소와의 REST API 통신으로 실제 매매를 수행하도록 했습니다.

<img src="/assets/images/posts/2022/01/28/bot2.png" alt="diagram"/>

봇의 동작을 살펴보면 크론(cron) 규칙으로 정의한 시간마다 봇 스크립트가 실행됩니다. 먼저 거래소와 통신해서 실제 포지션 상태를 확인하고 SQLite의 저장된 상태 값과 일치하는지 확인하고 동기화합니다. 이때 거래소와의 통신 외에는 GraphQL을 사용해서 데이터를 조회하고 업데이트합니다.

처음 개발한 버전에서는 포지션 상태 값 이란 게 없이 바로바로 거래소에 요청하여 매매를 수행했지만 이 버전에서는 확인된 포지션 상태 값에 따라 분기합니다. 예를 들어 매수 준비단계인 None 상태에서만 entryRule 을 실행합니다. 매수 규칙에 해당되면 Enter로 업데이트 합니다. 크론 규칙에 의해서 다시 실행이 될 때 포지션 상태값이 Enter 라면 매수를 수행하고 Position 값으로 합니다.

세부적으로는 매수를 하려고 한 가격보다 실제 시장가가 높다면 다시 None으로 초기화해서 매수 계획을 중단하기도 하고 매매 전략에서 stopLoss가 정의되어 있으면 트레일링 스탑 전략으로 손절 주문이 추가됩니다.

이전 버전과 동일하게 가장 기본이 되는 시장 데이터는 배치 서버에서 거래소와 WebSocket 통신으로 데이터를 수집하여 인플럭스DB(InfluxDB)에 쌓고 있습니다.

## 다음 버전에서 개선해야 될 점

첫 번째로 포지션 상태 값 관리입니다. 한 번에 한 종목만 관리하기 때문에 여러 종목을 매매하려면 그만큼 노드(Node.js) 서버를 실행해야 되고 이 프로세스들은 SQLite에 데이터를 동시에 업데이트할 필요가 있습니다. SQLite는 한 번에 한 명의 작성자만 허용하기 때문에 적합하지 않습니다. 따라서 MySQL로 변경할 예정입니다.

두 번째로 거래소와의 통신 중에도 데이터를 가져오기만 하는 것은 GraphQL을 사용하는 것입니다. 이미 적용되어 있어야 할 부분인데 러닝 커브 등의 핑계로 다음 버전으로 미뤄지게 되었습니다.

세 번째는 InlfuxDB를 2버전으로 업데이트하는 것인데 쿼리 작성 문법이 완전히 바뀌어서 학습도 필요하지만 쿼리문을 최적화해도 1.8 버전에 비해 서버의 자원 사용률이 높아서 어떻게 해야 될지 고민을 하고 있습니다.

마지막으로 타입 스크립트로 개발한다면 개발자의 실수로 인해 생기는 오류들을 막을 수 있을 것 같습니다.
