---
title: 비공개 NPM 저장소 구성하기
date: '2020-02-02'
tags: ["NPM"]
categories: Nodejs
permalink: /blog/:year/:month/:day/:title/
---

오픈소스 Sinopia를 사용해서 Prvate NPM 저장소를 구성하고 스코프 문제를 해결한 경험을 정리하자.
<!--more-->

<img src="/assets/images/posts/2020/02/02/npm-sinopia.png" alt="sinopia" />

디자인 시스템을 목표로 한 Vue 프레임워크 기반의 UI 템플릿 **`Vuesign`**(Vue + Design의 합성어)을 만들었다.
이 템플릿을 사용해서 여러 개의 웹 프로젝트가 진행될 예정이고 템플릿의 내용이 변경되면 당연히 각 웹 사이트에 변경사항이 배포가 되어야 한다.

npm의 패키지 관리 장점을 그대로 사용하고 싶어서 별도의 비공개 NPM 저장소를 구축하려고 하는데 npm에서 제공하는 서비스는 비용 문제가 있어서 sinopia라는 오픈소스를 사용해서 구성했다.

---

## 설치 및 사용자 생성

상세한 내용은 [README](https://github.com/rlidwka/sinopia)를 확인하자.

```bash
# 글로벌로 패키지 설치
$ npm install -g sinopia

# 서비스 실행
$ sinopia

# 사용자 생성  
$ npm adduser --registry http://localhost:4873/
```

> 브라우저에서 `http://localhost:4873/` 혹은 외부 IP:4873 포트로 접속해서 위에서 생성한 사용자로 로그인해서 정상 설치 여부를 확인한다.

## 백그라운드로 서비스 시작 & 종료

```bash
# 로그 남기지 않고 백그라운드에서 실행하기
$ nohup sinopia 1>/dev/null 2>&1 &

# 종료하기
$ pkill -9 sinopia
```

## 사용방법

* npm 환경설정의 registry를 변경하고 커맨드 사용

```bash
# 기존 설정 확인 & 저장소 변경
$ npm config list
$ npm set registry http://localhost:4873
```

* 글로벌로 변경하지 않고 커맨드에 옵션을 추가하여 사용

```bash
# 옵션으로 사용
$ npm i --registry http://localhost:4873
$ npm publish --registry http://localhost:4873
```

> 깃허브 레포지토리의 README.md 문서에 작성되어 있는 사용 사례를 읽어 보면 `패키지의 프라이빗 한 저장소` 외에도 npmjs.org 레지스트리의 캐시 역할도 할 수 있다.

## 기본 환경 설정

* 설정 파일은 yaml 형식으로 작성된다.
* default 내용은 [여기](https://github.com/rlidwka/sinopia/blob/master/conf/default.yaml)에서 확인할 수 있다.
* 홈 디렉토리 하위의`.config/sinopia/config.ymal` 경로에 위치한다.

## 주요 이슈 및 해결

### 이슈

최근 프론트엔드 프레임워크인 Vue.js, Angular, React를 살펴보면 스코프를 의미하는 @ 기호가 포함되어 있는 것을 볼 수 있는데 이렇게 @가 포함된 패키지를 다운로드 할 때는 패키지를 찾을 수 없다는 404 오류가 발생한다.

### 원인

기본 설정 packages의 `@*/*`에는 프록시가 설정되어 있지 않고 로컬(프라이빗 저장소)에 해당 패키지가 존재하지 않을 경우에는 더 찾지 않는 것이다.

이 오픈소스의 개발 당시인 약 5년 전에는 패키지의 이름에  @가 지금처럼 보편화되어 사용되지 않았고 프라이빗 한 비공개 패키지란 의미로 많이 쓰이다 보니 생긴 문제가 아닐까 싶다.

### 해결

기본 설정 파일에서 `@*/*` 하위 레벨에 `proxy: npmjs` 을 추가해 주면 @ 기호가 포함된 패키지를 로컬(프라이빗 저장소)에서 찾지 못하더라도 `npmjs`저장소까지 탐색해서 정상적으로 패키지를 다운로드할 수 있게 된다.

```yml
#
# This is the default config file. It allows all users to do anything,
# so don't use it on production systems.
#
# Look here for more config file examples:
# https://github.com/rlidwka/sinopia/tree/master/conf
#

# path to a directory with all packages
storage: ./storage

auth:
  htpasswd:
    file: ./htpasswd
    # Maximum amount of users allowed to register, defaults to "+inf".
    # You can set this to -1 to disable registration.
    #max_users: 1000

# a list of other known repositories we can talk to
uplinks:
  npmjs:
    url: https://registry.npmjs.org/

packages:
  '@*/*':
    # scoped packages
    access: $all
    publish: $authenticated
    proxy: npmjs

  '*':
    # allow all users (including non-authenticated users) to read and
    # publish all packages
    #
    # you can specify usernames/groupnames (depending on your auth plugin)
    # and three keywords: "$all", "$anonymous", "$authenticated"
    access: $all

    # allow all known users to publish packages
    # (anyone can register by default, remember?)
    publish: $authenticated

    # if package is not available locally, proxy requests to 'npmjs' registry
    proxy: npmjs

# log settings
logs:
  - {type: stdout, format: pretty, level: http}
  #- {type: file, path: sinopia.log, level: info}
```

## 추가 설정

* 외부에서의 연결과 용량 제한을 늘리기 위해 설정 파일 하단에 `listen`과 `max_body_size`를 추가하여 사용할 수 있다.
* 전체 옵션은 [여기](https://github.com/rlidwka/sinopia/blob/master/conf/full.yaml)에서 확인할 수 있다.

```yaml linenumber
listen: 0.0.0.0:4873
max_body_size: 100mb
```

---

## Reference

* [npm-scope](https://docs.npmjs.com/using-npm/scope.html)
* [npm-about-private-packages](https://docs.npmjs.com/about-private-packages)
* [sinopia](https://www.npmjs.com/package/sinopia)
