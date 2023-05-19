var store = [{
        "title": "여러 개의 GitHub/CodeCommit 인증정보 관리하기",
        "excerpt":"이렇게 하면 단일 컴퓨터에서 여러 GItHub/CodeCommit 인증정보를 매번 입력하지 않고 HTTPS 프로토콜로 리모트 저장소에 접근할 수 있다. Overview Note: 2021년 8월 13일부로 비밀번호 인증 지원이 종료되었습니다. 자세한 안내는 여기에서 관련 포스팅은 여기에서 확인할 수 있습니다. Git 도구 Credential 저장소는 HTTPS 프로토콜로 리모트 저장소에 접근할 때 인증정보를 저장해두고 자동으로 입력해 주는...","categories": ["Git"],
        "tags": ["Git","CodeCommit"],
        "url": "/blog/2019/04/21/how-to-git-mulitple-account/",
        "teaser": null
      },{
        "title": "VSCode에서 Vue 개발 환경 구성하기",
        "excerpt":"Vue CLI 3로 생성한 프로젝트에서 VSCode의 확장 플러그인과 커스텀 설정을 통해 IntelliSense와 ESLint를 활용할 수 있다. Overview VSCode의 IntelliSense 기능을 커스텀 설정과 확장 플러그인을 통해서 Vue 개발 환경을 지원하고 VSCode에서 ESLint를 사용하는 방법을 정리한다. ESLint 설정 Vue CLI 3로 생성한 프로젝트는 사용자가 선택한 옵션에 따라서 eslint의 설정이 package.json에 추가되었거나, .eslintrc.js...","categories": ["Vue"],
        "tags": ["Vue","VsCode"],
        "url": "/blog/2019/04/30/how-to-vuecli3-vscode/",
        "teaser": null
      },{
        "title": "Padding Hack으로 반응형 SVG 만들기",
        "excerpt":"지역과 관련된 데이터를 시각화하기 위해 SVG와 d3 함수를 이용해서 표현한 지도에 패딩 핵(Padding Hack)이란 기법을 통해서 반응형으로 구현한 경험을 정리하자. DataMaps 라이브러리에서 구현된 반응형 살펴보기 d3.js로 지도를 조금 더 쉽게 그릴 수 있게 구현된 라이브러리 DataMaps를 분석해 보니 옵션으로 responsive: true 을 설정했을 때 내부의 SVG요소에 패딩 핵 스타일이 적용된다....","categories": ["CSS"],
        "tags": ["SVG","CSS"],
        "url": "/blog/2019/12/15/what-is-padding-hack/",
        "teaser": null
      },{
        "title": "비공개 NPM 저장소 구성하기",
        "excerpt":"오픈소스 Sinopia를 사용해서 Prvate NPM 저장소를 구성하고 스코프 문제를 해결한 경험을 정리하자. 디자인 시스템을 목표로 한 Vue 프레임워크 기반의 UI 템플릿 Vuesign(Vue + Design의 합성어)을 만들었다. 이 템플릿을 사용해서 여러 개의 웹 프로젝트가 진행될 예정이고 템플릿의 내용이 변경되면 당연히 각 웹 사이트에 변경사항이 배포가 되어야 한다. npm의 패키지 관리 장점을...","categories": ["Nodejs"],
        "tags": ["NPM"],
        "url": "/blog/2020/02/02/how-to-private-npm/",
        "teaser": null
      },{
        "title": "CSS 기본 정리",
        "excerpt":"이 글은 freeCodeCamp의 Basic CSS를 공부하면서 주요 내용을 정리한 글입니다. CSS란 ? CSS (Cascading Style Sheets)는 HTML로 작성하는 텍스트 및 기타 내용을 표시하는 방법을 브라우저에 알려준다. CSS를 적용하는 방법 style 속성을 사용해서 HTML 요소에 인라인으로 스타일을 적용한다. &lt;h2 style=\"color: blue;\"&gt; Blue Text &lt;/h2&gt; HTML문서의 태그내에 &lt;style&gt;&lt;/style&gt;블록을 배치하고 CSS 선택기를 사용해서...","categories": ["CSS"],
        "tags": ["CSS"],
        "url": "/blog/2020/03/13/basic-css/",
        "teaser": null
      },{
        "title": "IE 11 Syntax Error - Script1002",
        "excerpt":"vue-pivottable 컴포넌트의 스타일을 수정하고 최종적으로 프로젝트에서는 import { VsPivottable, VsPivottableUi } from 'vs-pivottable'과 같이 커스텀 된 형태로 사용하고 싶었다. 그런데 Internet Explorer 11에서 확인 시 빈 페이지가 로딩되고 콘솔 창에는 Script1002 오류만 찍혀 있었다. Script1002 오류 해결 과정 문제가 발생한 코드 코드는 이렇다. import './pivottable.css' import { VuePivottable, VuePivottableUi }...","categories": ["Vue"],
        "tags": ["IE","trouble shooting"],
        "url": "/blog/2020/03/16/error-report-ie11-script1002/",
        "teaser": null
      },{
        "title": "Amazon Athena SQL로 캔들 데이터 생성하기",
        "excerpt":"이 글은 2018년 4월경 테스트를 진행하면서 기록한 내용을 바탕으로 작성했습니다. 암호화폐 시장을 경험하면서 알고리즘 매매에 흥미가 생겼다. 알고리즘 매매를 위해서는 가장 기본이 되는 캔들 데이터가 필요했다. 어떻게 실시간 시장 데이터를 가공해서 캔들 데이터를 만들어야 하는지 흥미가 생겼다. AWS의 데이터 분석과 관련된 서비스 Glue와 Athena 서비스가 생각났다. 수집 및 데이터 가공...","categories": ["Quant"],
        "tags": ["Athena","SQL","Trading Bot"],
        "url": "/blog/2021/04/25/making-trading-bot-1/",
        "teaser": null
      },{
        "title": "타입과 문법, 스코프와 클로저 YOU DON'T KNOW JS 책을 읽고",
        "excerpt":"클로저를 이해하고 있다고 생각했지만 실제로 말로 설명이 되지 않는다는 걸 깨닫고 이 책을 읽기 시작했다. 클로저 외에도 평소에 모르고 넘어갈 수 있었던 부분도 알게되서 생각보다 많은 도움이 된 책이다. 완벽하게 기억에 남을 때까지 반복해서 읽어야겠다. 클로저 사용 찾아보기 잠시 이 책을 덮어보라. 한 가지 과제를 주겠다. 최근에 작성한 자바스크립트 코드를...","categories": ["JavaScript"],
        "tags": ["Frontend","JavaScript","Closure"],
        "url": "/blog/2021/05/02/book-you-dont-know-js-1/",
        "teaser": null
      },{
        "title": "InfluxDB를 활용한 주식차트 만들기",
        "excerpt":"이 글은 2020년 10월경 진행하면서 기록한 내용을 바탕으로 재작성되었습니다. 이전 글에서 진행했던 Amazon Athena SQL로 캔들 데이터 생성하는 방법은 SQL 구문이 길고 복잡하고 비용이 많이 들었다. 구글 검색을 통해서 실시간 데이터 처리에 용이한 “시계열 데이터 베이스(TSBD)”의 존재를 알았다. 캔들스틱 차트 분석을 학습하면서 차트의 기술적 분석에 흥미가 생겼다. 다이나믹한 암호화폐 시장을...","categories": ["Quant"],
        "tags": ["InfluxDB","Trading Bot"],
        "url": "/blog/2021/05/20/making-trading-bot-2/",
        "teaser": null
      },{
        "title": "자동매매 알고리즘 개발과 트레이딩 봇 실전 6개월",
        "excerpt":"처음에는 막막하기만 했던 기본 캔들 데이터 생성을 인플럭스DB (InfluxDB)를 사용해서 쉽게 구현할 수 있었다. 다음은 언제 사고 언제 파는 게 좋을지를 과거 데이터를 통해 시뮬레이션 해보기 위해서 거래소에서 제공하는 REST API를 통해서 2017년부터 현재까지의 캔들 데이터를 인플럭스DB에 수집하는 스크립트를 노드 (node.js)로 작성했다. 증권 거래소와 달리 암호화폐 거래소는 REST API를 지원하므로...","categories": ["Quant"],
        "tags": ["Trading Bot","TypeScript"],
        "url": "/blog/2021/06/07/making-trading-bot-3/",
        "teaser": null
      },{
        "title": "클로저(Closure)는 무엇이며, 어떻게/왜 사용하나요 ?",
        "excerpt":"사전 지식 클로저를 이해 하기 위해서 Scope, Scope Chain, Context 에 대한 이해가 선행되어야 합니다. 스코프(Scope) 프로그래밍에서 변수에 접근 할 수 있는 유효 범위 var 는 선언된 곳과 가장 가까운 함수를 유효 범위로 가집니다 (함수 스코프) let, const 는 선언된 곳과 가장 가까운 블록을 유효 범위로 가집니다 (블록 스코프) 스코프...","categories": ["JavaScript"],
        "tags": ["Frontend","JavaScript","Closure"],
        "url": "/blog/2021/07/31/what_closure_means/",
        "teaser": null
      },{
        "title": "SSH로 GitHub / CodeCommit 연결하기",
        "excerpt":"비밀번호 인증 지원 종료 2021년 8월 13일부로 비밀번호 인증 지원이 종료되어 이전에 사용하던 방식을 사용할 수 없게 되어서 이 기회에 SSH 접속 방식으로변경 하게 되었다. 비밀번호 인증 지원 종료에 대한 안내는 여기에서 확인 할 수 있습니다. 원격 주소 확인하기 HTTPS 주소를 사용 해서 Git 레포지토리를 Clone 했다면 remote url 을...","categories": ["Git"],
        "tags": ["Git","CodeCommit"],
        "url": "/blog/2021/08/16/how-to-connecting-to-github-with-ssh/",
        "teaser": null
      },{
        "title": "Account has insufficient Available Balance",
        "excerpt":"문제 Account has insufficient Available Balance, … XBt required 토이 프로젝트로 진행 중인 트레이딩 봇의 로그에 BCHUSD의 계약 수량을 계산하는데 계정에 사용 가능한 잔액이 부족해서 거래소로부터의 거래가 거절되었다는 에러 메시지가 남기 시작했습니다. 원인 처음 개발 당시 수량 계산에 GET /api/v1/user/wallet?currency=XBt의 API를 호출해서 지갑 잔고 데이터를 사용했는데 원치 않는 수량이 계산되어...","categories": ["Quant"],
        "tags": ["Trading Bot","trouble shooting"],
        "url": "/blog/2021/12/10/error-report-account-has-insufficient-available-balance/",
        "teaser": null
      },{
        "title": "자바스크립트의 동작원리",
        "excerpt":"자바스크립트 엔진, 런타임, 호출 스택, 이벤트 루프를 간단하게 정리했습니다. 엔진 대표적으로 Chrome 과 Node.js에서 사용하는 Google V8 엔진이 있으며 메모리 할당이 일어나는 Memory Heap 과 코드 실행에 따라 호출 스택이 쌓이는 Call Stack으로 구성되어 있습니다. 런타임 런타임은 프로그램이 실행되는 동작과 그 환경이라고 할 수 있는데, 자바스크립트의 런타임은 DOM 을 제어하거나...","categories": ["JavaScript"],
        "tags": ["Frontend","JavaScript"],
        "url": "/blog/2022/01/19/how_does_it_work_javascript/",
        "teaser": null
      },{
        "title": "Amazon Linux2 OS에 레드마인을 설치하는 방법",
        "excerpt":"AWS 코드 커밋(CodeCommit)에 구성된 모든 프로젝트들의 이슈 추적과 코드 리뷰 등을 위해 레드마인(Redmine)을 Amazon Linux2 OS에 설치하는 과정에 대한 기록과 이에 대한 후기입니다. 인프라 구성 레드마인 EC2 인스턴스를 차후에는 프라이빗(private) 환경으로 이동할 것을 고려해서 서브넷을 구성했습니다. 실제 설치는 퍼블릭(public) 서브넷의 EC2에서 진행했습니다. vpc x 1(10.200.0.0/16) (redmine-vpc) subnet x 4 (redmine-pub-2a,...","categories": ["Linux"],
        "tags": ["CodeCommit","trouble shooting","Redmine"],
        "url": "/blog/2022/01/20/how_to_install_redmine/",
        "teaser": null
      },{
        "title": "vue-pivottable v0.4.1 업데이트",
        "excerpt":"작년 오픈소스 아카데미 컨트리뷰톤 참여를 계기로 2019년 8월 22일 첫 커밋(Commit)으로 시작해 NPM에 배포해서 관리 중인 오픈소스 vue-pivottable의 가이드 문서를 README.md에서 VuePress 기반의 웹 사이트로 구성하고 있습니다. 문서를 업데이트하면서 이슈 해결과 코드 리팩토링도 함께 진행 중인데 이번에는 슬롯(slot)과 스콥-슬롯(scoped-slot) 사용과 TableRenderer.js를 활용하는 예제를 추가했습니다. 슬롯(slot)과 스콥-슬롯(scoped-slot) 그리고 v-slot 슬롯(slot)은 컴포넌트를...","categories": ["Vue"],
        "tags": ["vue-pivottable","Vue"],
        "url": "/blog/2022/01/23/deploy-vue-pivottable-0-4-1/",
        "teaser": null
      },{
        "title": "브라우저 렌더링 과정",
        "excerpt":"브라우저 렌더링 과정은 크게 다음 4단계로 설명 할 수 있습니다. 1. 파싱 렌더링 엔진은 HTML 과 CSS 을 파싱해서 DOM 및 CSSOM 트리를 생성합니다. 바이트를 문자열로 변환하고, 토큰을 식별 한 후 노드로 변환하고 DOM 트리를 빌드 합니다. (바이트 → 문자 → 토큰 → 노드 → 객체 모델) DOM 및 CSSOM...","categories": ["Web"],
        "tags": ["Frontend","JavaScript"],
        "url": "/blog/2022/01/24/how_does_it_work_browser_rendering/",
        "teaser": null
      },{
        "title": "SSR과 CSR의 장단점",
        "excerpt":"SSR(Server Side Rendering)과 CSR(Client Side Rendering)의 장단점을 정리해 보자 SSR(Server Side Rendering) 장점 검색 엔진 최적화 (SEO) 가능하다 초기 렌더링 속도가 빠르다 단점 렌더링을 서버에서 하므로, 불필요한 트래핑이 낭비된다 페이지를 렌더링 할 때마다 새로 고침이 일어난다 CSR(Client Side Rendering) 장점 새로 고침이 발생하지 않아 네이티브 앱과 유사한 사용자 경험을 제공한다...","categories": ["Web"],
        "tags": ["Frontend"],
        "url": "/blog/2022/01/26/pros-and-cons-of-ssr-and-csr/",
        "teaser": null
      },{
        "title": "트레이딩 봇 2.0 개발 후기",
        "excerpt":"시뮬레이션 grademark은 자바스크립트(JavaScript) 및 타입스크립트(TypeScript)에서 알고리즘 거래 백테스팅을 위한 툴킷입니다. 이 모듈의 백테스팅 로직을 살펴보면 시간 순으로 정렬된 캔들 형식의 데이터와 전략을 주입하면 타이프레임(Timeframe) 마다 포지션 상태(None, Enter, Postion, Exit)를 업데이트 하거나 주입받은 전략을 수행하고 가상의 거래 기록을 남깁니다. 이렇게 기록된 거래 내역을 바탕으로 승률이나 수익률과 같은 시뮬레이션 결과를 보여줍니다....","categories": ["Quant"],
        "tags": ["Trading Bot"],
        "url": "/blog/2022/01/28/making-trading-bot-4/",
        "teaser": null
      },{
        "title": "이벤트 위임(Event Delegation)",
        "excerpt":"이벤트 위임이란 DOM의 이벤트 버블링(Event Bubbling) 특성을 활용해 이벤트 리스너를 하위 요소에 추가하는 대신 상위 요소에 추가하는 기법입니다. 다음과 같은 이점이 있습니다. 각 하위 항목에 이벤트 핸들러를 연결하지 않고 상위의 단일 요소에만 핸들러가 필요하기 때문에 메모리 사용 공간이 줄어듭니다. 제거된 요소에서 핸들러를 해제하고 새 요소에 대해 이벤트를 바인딩 할 필요가...","categories": ["Web"],
        "tags": ["Frontend","JavaScript"],
        "url": "/blog/2022/01/29/what_is_event_delegation/",
        "teaser": null
      },{
        "title": "이벤트 핸들러 내부의 this",
        "excerpt":"이벤트를 핸들러 내부의 this를 예제로 정리해보자. 이벤트 리스너(addEventListener) 함수 익명 함수의 this addEventListener()의 이벤트 핸들러가 전통적인 자바스크립트 함수이면 동작한 요소의 참조를 나타냅니다. 화살표 함수의 this addEventListener()의 이벤트 핸들러가 화살표 함수이면 this값을 바인딩하지 않고 자신을 둘러싸는 렉시컬 범위(lexical scope)의 참조를 나타냅니다. 속성 값(attribute value) - 사용안함 (예: onclick) 속성 값의 자바스크립트...","categories": ["Web"],
        "tags": ["Frontend","JavaScript"],
        "url": "/blog/2022/01/30/event_listener_this/",
        "teaser": null
      },{
        "title": "어떻게 const로 선언한 객체의 속성값이 바뀌는 것일까",
        "excerpt":"const 키워드를 사용하여 선언된 변수는 블록 범위의 상수입니다. 상수의 값은 재할당할 수 없으며 다시 선언할 수도 없습니다. 그러나 상수가 객체 또는 배열인 경우 해당 속성이나 항목을 업데이트하거나 제거할 수 있습니다. 단지 변수 식별자를 재할당할 수 없다는 의미 const 선언은 값에 대한 읽기 전용 참조를 만듭니다. 보유하고 있는 값이 변경 불가능하다는...","categories": ["JavaScript"],
        "tags": ["Frontend","JavaScript"],
        "url": "/blog/2022/01/31/why_can_I_change_a_constant_object/",
        "teaser": null
      },{
        "title": "absolute와 relative의 차이에 대해서 설명하세요",
        "excerpt":"CSS 포지션 absolute와 relative의 차이에 대해 정리하자 absolute 페이지 레이아웃에서 요소를 위한 공간이 생성되지 않습니다 가장 가까운 위치에 있는 조상을 기준으로 오프셋을 적용합니다. relative 페이지 레이아웃의 요소에 제공된 공간은 static일 때와 동일합니다. 자기 자신을 기준으로 오프셋을 적용합니다. 예제 absolute 일 때 position:absolute top:20px left:20px relative 일 때 position:relative top:20px left:20px...","categories": ["CSS"],
        "tags": ["Frontend","CSS"],
        "url": "/blog/2022/02/02/absolute_relative/",
        "teaser": null
      },{
        "title": "프론트엔드 개발자의 Docker 입문기",
        "excerpt":"트레이딩 봇 애플리케이션 구동에 필요한 복잡하고 번거로운 설정 과정을 자동화하기 위한 힌트를 얻기 위해서 깃허브의 Topics에 trading bot을 검색해 보니 깃허브 스타(Star) 수가 1k 이상인 프로젝트들은 대부분 도커(Docker)와 관련된 설정이 포함되어 있는 것을 알 수 있었습니다. 그래서 도커를 시작하게 되었고 우분투 컨테이너(Container)에 봇 애플리케이션 구동 환경을 구성하면서 겪은 문제들과 최종적으로...","categories": ["Quant"],
        "tags": ["Docker","Trading Bot"],
        "url": "/blog/2022/06/16/starting-docker/",
        "teaser": null
      },{
        "title": "CSS 박스 모델",
        "excerpt":"CSS는 HTML요소를 화면에 출력하는데 크게 인라인 (inline) 박스와 블록 (block) 박스로 구분합니다. 인라인 박스와 블록 박스 기본값이 인라인 박스로 출력되는 html 요소는 &lt;span&gt;,&lt;p&gt;, &lt;a&gt; 와 같이 글자를 만들고 제어하기 위한 요소라고 생각하면 그 특성들을 이해하기 쉽습니다. (글자는) 포함한 콘텐츠 크기만큼 가로와 세로너비가 자동으로 줄어드는 특성을 가지고 있어서 요소가 수평으로 쌓임...","categories": ["CSS"],
        "tags": ["Frontend","CSS"],
        "url": "/blog/2022/10/16/css-box-model/",
        "teaser": null
      },{
        "title": "자바스크립트에서 큐와 스택 자료구조 구현하기",
        "excerpt":"자료구조 및 알고리즘을 공부하면서 자주 사용되는 자료구조인 큐와 스택을 자바스크립트로 구현해보고 BOJ에서 문제를 풀어보면서 자바스크립트에서 어떻게 구현하고 활용하는 것이 유리한지 정리해보았습니다. 큐/스택 구현 자바스크립트에서는 큐와 스택 자료구조가 존재하지 않습니다. 일반적으로 코딩테스트 환경에서는 대부분 라이브러리를 사용할 수 없으므로 직접 구현해야 합니다. 스택 구현 // 스택 구현 class Stack { constructor() {...","categories": ["JavaScript"],
        "tags": ["Frontend","JavaScript","PS"],
        "url": "/blog/2023/03/02/how-to-use-stack-and-queue-in-js/",
        "teaser": null
      },{
        "title": "BOJ에서 JavaScript로 문제를 풀 때 메모리와 시간 제한 적용하기",
        "excerpt":"BOJ에서 JavaScript로 문제를 풀때 시간 초과(TLE)와 메모리 초과(MLE) 문제를 자주 경험해왔습니다. 대부분의 알고리즘 강의나 문제풀이가 Python, C++, Java 위주로 구현되어 있기 때문일겁니다. BOJ 역시 JavaScript 풀이가 적고 같은 풀이라도 언어 특성 때문에 시간 제한과 메모리 제한에 걸리기도 합니다. 문제를 최종 제출하기 전에 문제점을 파악하여 코드를 개선한다면 BOJ에서 JavaScript로 문제를 푸는...","categories": ["PS"],
        "tags": ["Shell","JavaScript","BOJ"],
        "url": "/blog/2023/03/08/boj-node-js/",
        "teaser": null
      },{
        "title": "데이터 정확성을 위한 빅 데시멀 타입과 지수 표기법의 소수점 표시",
        "excerpt":"AWS 빌링 데이터를 다루는 프론트엔드 개발자로 일하면서 백엔드에서 전달받은 숫자 데이터가 부동 소수점 연산의 함정과 지수 표기식(e notation)으로 표현되면서 생긴 이슈들을 해결하면서 빅 데시멀과 지수 표기법에 대해 정리해보았습니다. 부동 소수점 타입과 빅 데시멀 부동 소수점 타입 부동 소수점 타입은 IEEE 754 표준에 따라 일반적으로 내부적으로 2진수로 저장됩니다. 이진수로 저장하면 정확하게...","categories": ["JavaScript"],
        "tags": ["JavaScript","Frontend","Big Decimal"],
        "url": "/blog/2023/03/28/big-decimal-and-e-notation/",
        "teaser": null
      },{
        "title": "오리진이 다른 리소스를 서비스워커로 캐싱하기",
        "excerpt":"Vue CLI3의 vue add pwa 명령어를 실행하면 쉽게 PWA를 설정할 수 있습니다. 이것만으로 빌드 시 생성되는 파일이 서비스 워커에 의해 캐싱이 됩니다. 여기에 추가로 교차 오리진에서 호출하는 리소스를 캐싱 해본 경험을 정리했습니다. 왜 서비스 워커를 도입하려는가 항상 호출되지만 거의 변경되지 않는 JSON 파일이 프로젝트에 포함되어 있어서 빌드 시 크기를 그만큼...","categories": ["Web"],
        "tags": ["Workbox","Frontend","PWA","Cache"],
        "url": "/blog/2023/03/28/how-to-pwa-with-vue/",
        "teaser": null
      },{
        "title": "LIS (Longest Increasing Subsequence) - 최장 증가 부분 수열",
        "excerpt":"백준에서 문제 해결 능력을 키우면서 최장 증가 부분 수열문제를 풀게 되었다. 최장 증가 수열이란 주어진 수열의 부분 수열 중에서 숫자가 오름차순으로 정렬 되는 가장 긴 부분 수열을 의미한다. 문제를 풀면서 공부한 내용을 정리했다. LIS 길이 구하기 몇가지 예를 들어보겠다. 주어진 수열이 1, 2, 3, 4, 5, 6, 7, 8, 9...","categories": ["PS"],
        "tags": ["PS","BOJ"],
        "url": "/blog/2023/05/19/what-is-lis-algorithm/",
        "teaser": null
      }]
