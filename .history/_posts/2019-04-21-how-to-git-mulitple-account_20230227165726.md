---
layout: post
title: 여러 개의 GitHub/CodeCommit 인증정보 관리하기
date: "2019-04-21"
categories: tech
tags: git, CodeCommit
permalink: /blog/:year/:month/:day/:title/
excerpt_separator: <!--more-->
---
이렇게 하면 단일 컴퓨터에서 여러 GItHub/CodeCommit 인증정보를 매번 입력하지 않고 HTTPS 프로토콜로 리모트 저장소에 접근할 수 있다.
<!--more-->

<!-- 
summary: 이렇게 하면 단일 컴퓨터에서 여러 GItHub/CodeCommit 인증정보를 매번 입력하지 않고 HTTPS 프로토콜로 리모트 저장소에 접근할 수 있다.
 -->

<!-- <TOCInline toc={props.toc} exclude="Overview" toHeading={2,3} asDisclosure/> -->

## Overview

_Note: 2021년 8월 13일부로 비밀번호 인증 지원이 종료되었습니다. 자세한 안내는 [여기](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)에서 관련 포스팅은 [여기](/blog/2021/08/16/how-to-connecting-to-github-with-ssh)에서 확인할 수 있습니다._

* Git 도구 Credential 저장소는 HTTPS 프로토콜로 리모트 저장소에 접근할 때 인증정보를 저장해두고 자동으로 입력해 주는 시스템이다.
* Credential 저장소의 옵션 중 store 모드를 사용하여 각 프로젝트의. git 디렉터리에 인증정보를 텍스트 파일로 저장할 수 있다.
* 이렇게 하면 단일 컴퓨터에서 여러 GItHub/CodeCommit 인증정보를 매번 입력하지 않고 HTTPS 프로토콜로 리모트 저장소에 접근할 수 있다.

## Reference

* [Git Credential](https://git-scm.com/book/ko/v2/Git-도구-Credential-저장소)
* [Cmder Wiki](https://github.com/cmderdev/cmder/wiki)
* [Windows 자격 증명 관리자 액세스](https://support.microsoft.com/ko-kr/help/4026814/windows-accessing-credential-manager)
