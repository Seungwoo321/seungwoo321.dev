---
author_profile: true
layout: post
title: 여러 개의 GitHub/CodeCommit 인증정보 관리하기
date: "2019-04-21"
categories: tech
tags: git CodeCommit
permalink: /blog/:year/:month/:day/:title/
toc: true
excerpt_separator: <!--more-->
---
이렇게 하면 단일 컴퓨터에서 여러 GItHub/CodeCommit 인증정보를 매번 입력하지 않고 HTTPS 프로토콜로 리모트 저장소에 접근할 수 있다.
<!--more-->

## Overview

_Note: 2021년 8월 13일부로 비밀번호 인증 지원이 종료되었습니다. 자세한 안내는 [여기](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)에서 관련 포스팅은 [여기](/blog/2021/08/16/how-to-connecting-to-github-with-ssh)에서 확인할 수 있습니다._

* Git 도구 Credential 저장소는 HTTPS 프로토콜로 리모트 저장소에 접근할 때 인증정보를 저장해두고 자동으로 입력해 주는 시스템이다.
* Credential 저장소의 옵션 중 store 모드를 사용하여 각 프로젝트의. git 디렉터리에 인증정보를 텍스트 파일로 저장할 수 있다.
* 이렇게 하면 단일 컴퓨터에서 여러 GItHub/CodeCommit 인증정보를 매번 입력하지 않고 HTTPS 프로토콜로 리모트 저장소에 접근할 수 있다.

---

## 1. Windows 에서 git 커맨드 사용하기  

Windows 환경이 아닌 경우에는 [2. credential store 설정하기](#2-credential-store-설정하기)를 진행한다.

### Cmder 다운로드 및 설치

Cmder 은 Windows에서 터미널을 사용할 수 있는 강력한 터미널 에뮬레이터로 VS Code, IntelliJ 기반 IDE 등 다른 터미널/IDE와 통합하여 사용할 수 있다. Cmder Full 버전은 Windows 용 Git(git-for-winodws) 이 포함되어 있으니, Full 버전을 [다운로드](https://cmder.net/) 하고 압축을 푼다.

### Git Credential Manager 삭제  

Windows 환경에서는 "Git Credential Manager for Windows"라는 Helper를 사용하여 인증정보가 Windows의 자격 증명 관리자에 안전하게 저장되는데, 여러 개의 GItHub 인증정보를 저장하여 선택 사용할 수 없다.  Cmder (커맨더) Full 버전에는 git-credential-manager 가 포함되어 있으므로, `cmder.exe` 실행하고 다음과 같이 삭제한다. (git bash 환경에서 사용하면 오류는 없지만 제대로 동작하지 않는다)

```bash
> git credential-manager uninstall --force
```

git bash 사용하기
`cmder.exe` 를 실행하고 `bash` 명령어를 입력하면 git bash 환경으로 진입된다

```bash
> bash
$ 
```

## 2. credential store 설정하기

프로젝트 root의 `.git` 디렉토리에 `.git-credentials`이라는 파일을 생성하고 인증정보가 이곳에 저장 되도록 다음 명령어들을 실행한다.

```bash
cd <Project Directory> 
touch .git/.git-credentials
git config credential.helper 'store --file=./.git/.git-credentials' 
```

## 3. 인증정보 저장하기  

Step 3을 진행한 다음 인증이 필요한 git 명령어 (`e.g git pull, git push 등`)를 사용하면 이때 입력한 인증정보가 `.git-credentials`에 저장되고 이후에는 인증정보를 더 이상 묻지 않는다.

```bash
cat .git/.git-credentials
```

## 4. 문제 해결하기

### Windows 에서 인증정보를 묻지 않고 권한 오류가 발생하는 경우

이미 GIthub/CodeCommit 의 인증정보가 자격증명 관리자에 저장 되어 있는지 `제어판>사용자 계정> 자격 증명 관리자 > Windows 자격 증명`을 확인한다

### VS Code의 GitLens 플러그인에서 git path 를 찾지 못 하는 경우

Cmder에 Windows 용 Git 이 포함되어 있으므로 기본 경로가 아닌 곳에 git.exe 가 설치되어 경로를 찾지 못하니, VSCode의  `setting.json`에서 `git.path`의 경로를 재설정한다.

```json
"git.path" :  "C:\\cmder\\vendor\\git-for-windows\\bin\\git.exe"
```

---

## Reference

* [Git Credential](https://git-scm.com/book/ko/v2/Git-도구-Credential-저장소)
* [Cmder Wiki](https://github.com/cmderdev/cmder/wiki)
* [Windows 자격 증명 관리자 액세스](https://support.microsoft.com/ko-kr/help/4026814/windows-accessing-credential-manager)
