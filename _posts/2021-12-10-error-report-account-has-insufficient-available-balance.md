---
title: Account has insufficient Available Balance
date: '2021-12-10'
tags: ["Trading Bot", "trouble shooting"]
categories: Quant
permalink: /blog/:year/:month/:day/:title/
---

## 문제

> Account has insufficient Available Balance, ... XBt required

토이 프로젝트로 진행 중인 트레이딩 봇의 로그에 BCHUSD의 계약 수량을 계산하는데 계정에 사용 가능한 잔액이 부족해서 거래소로부터의 거래가 거절되었다는 에러 메시지가 남기 시작했습니다.

<!--more-->

## 원인

처음 개발 당시 수량 계산에 `GET /api/v1/user/wallet?currency=XBt`의 API를 호출해서 지갑 잔고 데이터를 사용했는데 원치 않는 수량이 계산되어 낭패를 본 경험이 있습니다. 지갑 잔고는 입금액 - 출금액 + 실현 손익이고 매일 12:00 UTC마다 해당 시까지의 실현 손익을 의미합니다.

> Your margin available for new positions. Available Balance = Margin Balance - Order Margin - Position Margin.

지갑 잔고에 대한 설명이 있는 마진 용어 설명 페이지를 다시 살펴보니 새로운 포지션을 갖기 위해 필요한 사용 가능한 잔고는 마진 잔고에서 "주문 마진"과 "포지션 마진"을 빼야 되는데
지갑 잔고로 잘못 계산하고 있다는 걸 알게 된 이후 `GET /api/v1/user/margin`의 availableMargin를 그대로 사용하고 있었습니다.

- 포지션 마진: 오픈된 포지션에 대한 개시 증거금
- 주문 마진: 주문 생성시 필요한 개시 증거금

> 그렇다면 6개월 이상 문제없이 잘 돌아가던 봇의 수량 계산이 왜 갑자기 틀렸다고 하는 걸까요?

매일 모니터링한 것은 아니지만 로그에 해당 에러 로그가 남기 시작한 것은 다른 거래소 지원을 고려하면서 레버리지를 교차에서 1배로 고정한 시점입니다. 레버리지를 교차로 해놓고도 오랜 시간 1배의 수량으로 매수를 했었으니 잔고가 아주 여유로웠을 겁니다. 그래서 애초에 잘못된 계산식이 교차 레버리지로 인해서 무마되고 있었던 것이고 1배로 변경하면서 완전히 잔고 내에서의 수량 계산으로 개선이 필요하게 된 것입니다.

그동안 실제 가진 잔고를 초과한 금액에서 "계약을 위한 기본 개시 증거금을 고려하지 않고 계약할 수량을 계산"했기 때문에 잔고가 부족하다는 에러 메시지가 이제서야 발생된 것이라는 결론을 내렸습니다.

## 조치사항

다른 이슈로 한 종목만 매수하고 있는 상황이라서 신규로 진입할 때는 항상 오픈된 포지션은 없으니 포지션 마진은 아직 계산할 필요는 없습니다. 따라서 위험 한도 페이지의 "기본 개시 증거금"만 `initialMargin`이라는 변수로 추가하고 해당 값을 뺀 마진 잔고로 계약할 수량을 계산하도록 수정했습니다.

---

## Reference

- [거래소 마진 용어 설명](https://www.bitmex.com/app/marginTermReference)
- [거래소 위험 한도](https://www.bitmex.com/app/riskLimits)
