---
title: SSH로 GitHub / CodeCommit 연결하기
date: '2021-08-16'
tags: ["Git", "CodeCommit"]
categories: Git
permalink: /blog/:year/:month/:day/:title/
---

## 비밀번호 인증 지원 종료

2021년 8월 13일부로 비밀번호 인증 지원이 종료되어 [이전에 사용하던 방식](/blog/2019/04/how-to-git-mulitple-account)을 사용할 수 없게 되어서 이 기회에 SSH 접속 방식으로변경 하게 되었다.

<!--more-->

<img src="/assets/images/posts/2021/08/16/001.png" />

> 비밀번호 인증 지원 종료에 대한 안내는 [여기](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)에서 확인 할 수 있습니다.

## 원격 주소 확인하기

* HTTPS 주소를 사용 해서 Git 레포지토리를 Clone 했다면 remote url 을 SSH 로 변경 해야 할 것이다.

아래 명령어로 remote url 을 확인 하고,

```bash
$ git remote 
> origin 
$ git remote get-url --all origin
> https://github.com/Seungwoo321/vuepress-blog-project.git
```

repository 에서 SSH 주소를 복사해서 변경한다.

```bash
git remote set-url origin git@github.com:Seungwoo321/vuepress-blog-project.git
```

## SSH로 GitHub에 연결하기

### 깃허브 연결용 SSH 키 생성

다음 명령어를 실행한다. 이메일 주소는 깃허브 로그인 계정을 사용한다. 명령어를 실행하면 SSH 키가 생성되는 기본 경로와 파일명을 확인 또는 변경 하고, 암호를 두 번 입력한다. 이때 암호를 비워두고 엔터만 입력하면 키를 사용할 때 암호를 묻지 않는다.

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

이미 생성된 SSH 키가 있다면 이 과정을 생략하거나, `-f` 옵션으로 경로와 파일명을 지정 할 수 있다.

```bash
ssh-keygen -t ed25519 -f ~/.ssh/id2_ed25519 -C "another_email@example.com"
```

### SSH 키를 ssh-agent 에 등록

1. ssh 에이전트 실행

    ```bash
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    :::tip
    윈도우에서 `unable to start ssh-agent service, error :1058` 와 같은 에러가 발생한다면, 서비스에서 SSH Agent 서비스가 실행 상태인지 확인 합니다.
    :::

    macOS Sierra 10.12.2 이상을 사용하는 경우 자동으로 키를 로드하고 암호를 저장하기 위해서 `~/.ssh/config` 에 다음 설정을 추가가 필요합니다.

    ```sh
    Host *
      AddKeysToAgent yes
      UseKeychain yes
      IdentityFile ~/.ssh/id_ed25519
    ```

2. 에이전트에 키 등록

    * window & Linux

    ```bash
    ssh-add ~/.ssh/id_ed25519
    ```

    * Mac

    ```bash
    ssh-add -K ~/.ssh/id_ed25519
    ```

### 키 복사하기

* window

```bash
clip < ~/.ssh/id_ed25519.pub
```

* Linux

```bash
$ sudo apt-get update
$ sudo apt-get install xclip
# Downloads and installs xclip. If you don't have `apt-get`, you might need to use another installer (like `yum`)

$ xclip -selection clipboard < ~/.ssh/id_ed25519.pub
```

* Mac

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

### GitHub에 SSH 키 연결 하기

1. 우측 상단 프로필을 클릭해서 **Settings** 메뉴로 접속한다.

    <img alt="Click 'Settings' in profile image" src="/assets/images/posts/2021/08/16/002.png" width='250' height="550" />

2. 좌측 사이드바에서 **SSH and GPG keys** 를 클릭한다.

    <img alt="Click 'SSH and GPG Kets' in sidebar" src="/assets/images/posts/2021/08/16/003.png" width="220" height="550" />

3. **New SSH key** 를 클릭한다.

    <img alt="Click 'New SSH key' button" src="/assets/images/posts/2021/08/16/004.png" width="750" height="350" />

4. 여러개의 키를 등록할 경우 Title 에 구분할 수 있는 이름을 주고, 위에서 복사한 값을 key 에 붙여 넣는다.

    <img src="/assets/images/posts/2021/08/16/005.png" alt="Enter title and key" />

5. **Add SSH key** 를 클릭하고 깃허브 계정 비밀번호를 입력하면 추가가 완료된다.

6. 테스트 해보면 잘 동작 한다.

    <img src="/assets/images/posts/2021/08/16/006.png" alt="test" />

## SSH로 코드커밋에 연결하기

### 코드커밋 연결용 SSH 키 생성

CodeCommit 에서 SSH 키를 사용 할 때는 다음 내용을 반드시 읽고 확인한다.

>
> <span style="color: red">공개 키는 ssh-rsa 형식 또는 PEM 형식으로 인코딩되어야 합니다. 공개 키의 최소 비트 길이는 2048비트이고 최대 길이는 16384비트입니다. 이것은 업로드하는 파일의 크기와 별개입니다. 예를 들어 2048비트 키를 생성할 수 있으며 결과 PEM 파일의 길이는 1679바이트입니다. 공개 키를 다른 형식이나 크기로 제공하면 키 형식이 유효하지 않다는 오류 메시지가 표시됩니다.</span>
>

```bash
$ ssh-keygen

# or

$ ssh-keygen -t rsa -b 4096
```

### 에이전트에 SSH 키 등록 및 복사

* 깃허브에서 설명한 방식과 동일하게 진행한다.

### IAM 콘솔에서 업로드

1. IAM 콘솔에서 CodeCommit 접근에 사용하는 IAM 계정을 선택하고 보안자격 증명 탭으로 이동한다.

    <img src="/assets/images/posts/2021/08/16/007.png" />

2. `SSH 퍼블릭 키 업로드` 버튼을 클릭하고 복사한 키 값을 붙여 넣은 다음 업로드 한다.

    <img src="/assets/images/posts/2021/08/16/008.png" />

3. 업로드한 퍼블릭 키의 SSH 키 ID 를 복사해서 .ssh/config 에 다음과 같은 내용을 추가한다.

    ```sh
    Host git-codecommit.*.amazonaws.com
    User SSH 키 ID
    IdentityFile ~/.ssh/코드커밋 접속을 위해 생성한 SSH 키 
    ```

## 마무리

* 깃허브와 코드커밋에서 요구하는 SSH 키의 형식이 다르다.
* SSH 키를 생성하고 ssh-agent 서비스에 등록한 다음 퍼블릭 키값을 사용하려는 깃허브 계정과 코드커밋에 접속하려는 IAM 계정에 업로드 하고 .ssh/config 에 필요한 설정을 추가 한다.
* 개인용 GitHub 계정과 회사용 CodeCommit 계정을 SSH 키로 연결 되도록 설정하니 config 는 다음과 모습이 되었다.

<img src="/assets/images/posts/2021/08/16/009.png" />

---

## Reference

* [깃허브 공식문서](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
* [AWS 공식문서 - 리눅스 & 맥](https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-ssh-unixes.html)
* [AWS 공식문서 - 윈도우](https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-ssh-windows.html)
