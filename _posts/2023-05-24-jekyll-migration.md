---
title: 블로그 마이그레이션 우분투에 Ruby 설치하기
date: "2023-05-23"
last_modified_at: "2023-05-23"
tags: ["Jekyll", 'trouble shooting']
categories: Linux
permalink: /blog/:year/:month/:day/:title/
---
기존의 익숙치 않은 기술 스택을 사용한 블로그 운영에 부담을 느껴 글에만 집중할 수 있도록 jekyll 기반으로 마이그레이션을 진행했습니다. 이번 글에서는 첫 번째 단계로 우분투에서 rvm (Ruby Version Manager) 및 루비 설치 과정에 대해서 기록 했습니다.
<!--more-->

## 루비 설치 (MintOS)

맥북과 데스크탑으로는 우분투(Ubunt) 계열인 MintOS를 사용중이라서 우선 MintOS에 설치를 했습니다. 루비로 개발을 할 예정은 아니지만 혹시 모를 버전관리를 위해서 RVM으로 루비를 설치했습니다. 루비 설치 과정 중에는 권한 문제로 인해 에러가 발생했으나 해당 디렉토리에 대한 권한을 수정하면 문제를 해결할 수 있었습니다.

### 루비 버전 관리자 (rvm) 설치하기

- Install GPG Keys

```bash
gpg --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
```

- Basic Install (Ubuntu)

```bash
# 1. pre-requisites
sudo apt-get install software-properties-common

# 2. Add the PPA and install the package
sudo apt-add-repository -y ppa:rael-gc/rvm
sudo apt-get update
sudo apt-get install rvm
# 3. Add user
sudo usermod -a -G rvm $USER
# 4. Set up environment
echo 'source "/etc/profile.d/rvm.sh"' >> ~/.bashrc
source ~/.bashrc # or reboot
```

### 루비 (Ruby) 설치 하기

```bash
rvm install ruby
```

### 트러블 슈팅

루비 설치과정에서 Permission Denied 에러와 requirements_debian_update_system ruby-3.0.0 명령어 실패 오류가 발생했습니다.

```bash
Searching for binary rubies, this might take some time.
No binary rubies available for: mint/20.3/x86_64/ruby-3.0.0.
Continuing with compilation. Please read 'rvm help mount' to get more information on binary rubies.
Checking requirements for mint.
Installing requirements for mint.
mkdir: `/usr/share/rvm/log/1677135379_ruby-3.0.0' 디렉토리를 만들 수 없습니다: 허가 거부
tee: /usr/share/rvm/log/1677135379_ruby-3.0.0/update_system.log: 그런 파일이나 디렉터리가 없습니다

Updating system....
Error running 'requirements_debian_update_system ruby-3.0.0',
please read /usr/share/rvm/log/1677135379_ruby-3.0.0/update_system.log
Requirements installation failed with status: 1.
```

이 에러는 **`/usr/share/rvm/`** 디렉토리에 대한 권한 문제로 발생할 수 있습니다. **`/usr/share/rvm/`** 디렉토리는 시스템 루트 권한이 필요한 디렉토리입니다. 해당 오류를 해결하기 위해서 **`/usr/share/rvm/`**디렉토리에 대한 권한을 수정해주기 위해 다음 명령어를 실행해주었습니다.

```bash
sudo chown -R $USER:$USER /usr/share/rvm
```

### 설치 확인

루비 설치 과정이 제대로 완료되면 **`ruby -v`** 명령어로 루비 버전을 확인할 수 있습니다.

```bash
$ ruby -v
ruby 3.0.0p0 (2020-12-25 revision 95aff21468) [x86_64-linux
```

### Jekyll와 Bundler 설치

이제 다음 위 명령어를 각각 실행하면 RubyGems를 업데이트한 후 정적 사이트 생성 도구인 Jekyll과 Ruby 프로젝트에서 필요한 의존성 패키지를 관리하는 Bundler를 설치할 수 있습니다.

```bash
# RubyGems 업데이트
gem update --system

# Jekyll 설치
gem install jekyll

# Bundler 설치
gem install bundler
```

### 마무리

- jekyll 프로젝트 구성을 위한 기본 설정이 완료되었습니다.
- 다음 편에서는 직접 기존 블로그의 소스를 포크(fork) 해서 마이그레이션 하고 빌드 하는 과정을 튜토리얼 처럼 다뤄볼 예정입니다.
