---
title: 타입과 문법, 스코프와 클로저 YOU DON'T KNOW JS 책을 읽고
date: '2021-05-02'
tags: ["Frontend", "JavaScript", "Closure"]
layout: post
author_profile: false
permalink: /blog/:year/:month/:day/:title/
toc: true
excerpt_separator: <!--more-->
---

<img src="/assets/images/posts/2021/05/02/happy-javascript.jpg" alt="happy-javascript" />

클로저를 이해하고 있다고 생각했지만 실제로 말로 설명이 되지 않는다는 걸 깨닫고 이 책을 읽기 시작했다. 클로저 외에도 평소에 모르고 넘어갈 수 있었던 부분도 알게되서 생각보다 많은 도움이 된 책이다. 완벽하게 기억에 남을 때까지 반복해서 읽어야겠다.
<!--more-->

## 클로저 사용 찾아보기

> 잠시 이 책을 덮어보라. 한 가지 과제를 주겠다. 최근에 작성한 자바스크립트 코드를 열어 보라. 함수를 값으로 사용한 경우를 찾아보고, 알지 못했지만 이미 클로저를 사용하고 있는 부분을 확인해 보자. 기다리겠다. 자 ... 이제 보이는가! p.245

이 구절을 보고 클로저를 사용한 코드를 찾아보았다. vue-pivottable의 Issues 중 #19, #38를 해결하면서 작성한 예제용 코드에서 클로저를 사용한 예를 찾을 수 있었다.

- /src/helper/utils.js

```js
/** global scope */
const numberFormat = function (optsIn) {
  /** outer function scope */
  const defaults = {
    digitsAfterDecimal: 2,
    scaler: 1,
    thousandsSep: ',',
    decimalSep: '.',
    prefix: '',
    suffix: ''
  }
  const opts = Object.assign({}, defaults, optsIn)
  return function (x) {
    /** local scope  */
    if (isNaN(x) || !isFinite(x)) {
      return ''
    }
    const result = addSeparators(
      (opts.scaler * x).toFixed(opts.digitsAfterDecimal),
      opts.thousandsSep,
      opts.decimalSep
    )
    return `${opts.prefix}${result}${opts.suffix}`
  }
}
```

내부에 정의된 x를 받는 익명 함수의 렉시컬 스코프는 글로벌 범위, 외부 함수 범위, 내부 함수 범위가 된다.

- /demo/example-vue-cli3/src/App.vue

```html
<script>
import { PivotUtilities } from 'vue-pivottable'
export default {
  /*
    생략 (...)
  */
  computed: {
    aggregators () {
      const usFmt = PivotUtilities.numberFormat()
      const usFmtInt = PivotUtilities.numberFormat({ digitsAfterDecimal: 0 })
      const usFmtPct = PivotUtilities.numberFormat({
        digitsAfterDecimal: 1,
        scaler: 100,
        suffix: '%'
      })

      return ((tpl) => ({
        'Count': tpl.count(usFmtInt),
        'Count Unique Values': tpl.countUnique(usFmtInt),
        'List Unique Values': tpl.listUnique(', '),
        Sum: tpl.sum(usFmt)
        'Integer Sum': tpl.sum(usFmtInt),
        'Average': tpl.average(usFmt),
        'Median': tpl.median(usFmt),
        'Sample Variance': tpl.var(1, usFmt),
        'Sample Standard Deviation': tpl.stdev(1, usFmt),
        'Minimum': tpl.min(usFmt),
        'Maximum': tpl.max(usFmt),
        'First': tpl.first(usFmt),
        'Last': tpl.last(usFmt),
        'Sum over Sum': tpl.sumOverSum(usFmt),
        'Sum as Fraction of Total': tpl.fractionOf(tpl.sum(), 'total', usFmtPct),
        'Sum as Fraction of Rows': tpl.fractionOf(tpl.sum(), 'row', usFmtPct),
        'Sum as Fraction of Columns': tpl.fractionOf(tpl.sum(), 'col', usFmtPct),
        'Count as Fraction of Total': tpl.fractionOf(tpl.count(), 'total', usFmtPct),
        'Count as Fraction of Rows': tpl.fractionOf(tpl.count(), 'row', usFmtPct),
        'Count as Fraction of Columns': tpl.fractionOf(tpl.count(), 'col', usFmtPct)
      })
      )(PivotUtilities.aggregatorTemplates)
    }
  }
  /*
    생략 (...)
  */
}
</script>

```

## 정리

> 클로저는 함수를 렉시컬 스코프 밖에서 호출해도 함수는 자신의 렉시컬 스코프를 기억하고 접근할 수 있는 특성을 의미한다. p. 255

PivotUtilities 객체의 메서드로 사용된 numberFormat() 함수는 내부 익명 함수를 리턴한다. 리턴하는 내부 함수는 클로저를 형성함으로써 usFmt, usFmInt, usFmtPct는 각각의 독립적인 렉시컬 스코프 환경을 갖게 된다.

usFmt, usFmInt, usFmtPct 변수에 의해서 리턴된 내부 함수가 호출될 때 이 내부의 익명 함수는 본래 자신의 렉시컬 스코프 환경을 기억해서, opts 변수를 참조할 수 있게 된다.

---

## Reference

- [MDN에서 Closures 학습하기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)
