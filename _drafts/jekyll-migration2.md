---
title: 블로그 마이그레이션(2) jekyll 프로젝트로 구성하기
date: "2023-05-25"
last_modified_at: "2023-05-25"
tags: ["Jekyll", 'trouble shooting']
categories: Linux
permalink: /blog/:year/:month/:day/:title/
---
기존의 React + Typescript + Next.js 기반의 블로그 프로젝트를 fork 해서 실제로 jekyll로 마이그레이션하는 과정을 튜토리얼 방식으로 기술 했습니다.
<!--more-->

## 준비사항

실습을 원하신다면 아래 링크를 통해서 제 블로그 레포지토리를 fork 해서 legacy 브랜치에서 시작 하실 수 있습니다.

[포크하기](https://github.com/Seungwoo321/seungwoo321.github.io/fork)

> 실제로 블로그 마이그레이션을 계획하고 계시다면 작업이 완료될 때까지 이전 코드는 어떠한 형식으로든 백업 해두시는 것을 권장합니다. 이 블로그의 경우 `legacy` 브랜치가 그러한 목적을 갖고 생성되었습니다.

이 글에서 진행한 환경은 다음과 같습니다.

- Linux Mint 20.3 Una
- Ruby 3.2.2

### 원격의 legacy 브랜치 가져오기

master 브랜치가 아닌 legacy 브랜치로 진행합니다.

```bash
$ git branch -r 
  origin/HEAD -> origin/master
  origin/develop
  origin/gh-pages
  origin/legacy
  origin/master
$ git checkout -t origin/legacy
'legacy' 브랜치가 리모트의 'legacy' 브랜치를 ('origin'에서) 따라가도록 설정되었습니다.
새로 만든 'legacy' 브랜치로 전환합니다
```

## 불필요 파일 삭제

먼저, 다음과 같이 `npm`과 관련된 모든 파일을 삭제했습니다.

- `.vscode`, `LICENSE`, `README`, `.gitattributes`, `.gitignore`: (선택사항)
- `blog` => : 마크다운으로 작성한 포스팅 글들이 있는 `data/blog` 안에 연도별로 있기 때문에 이 폴더를 프로젝트 최상단으로 이동시킵니다.
- `public`: 이미지, 검색엔진 인증키가 들어간 HTML 파일, `manifest.json`, `sitemap.xml` 등이 포함되어 있으므로 남겨 둡니다.

## Jekyll 프로젝트 생성

### 초기화

다음 명령어를 실행하면 Jekyll 프로젝트와 관련된 파일 및 폴더가 생성 됩니다..

```bash
jekyll new . --force
```

### 실행

이대로 프로젝트를 실행하면 기존 mdx로 작성된 글들도 보이기 때문에 bolog 폴더를 _blog로 변경 후 실행 합니다.

```bash
mv blog _blog
bundle exec jekyll serve
```

## Minimal Mistakes 테마 설정

이제 Minimal Mistakes 테마를 적용 해보겠습니다. 이 테마를 설정하는 방법은 이 테마의 레포지토리에 있는 README.md를 읽어보면 몇 가지가 소개되어 있지만 그 중 원격테마 설정으로 진행합니다. gem으로 추가 하는 경우 깃허브 페이지에 배포하는 과정에서 몇 가지 빌드 오류를 겪을 수 있습니다.

Gemfile에 다음 젬(Gem)을 추가합니다.

```bash
source "https://rubygems.org"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-include-cache"
  gem 'jekyll-admin'
  gem "github-pages"
  gem "jekyll-paginate-v2"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "webrick"
end
```

이제 _config.yml에 원격 테마 방법으로 Minimal Mistakes 테마와 스킨을 설정하고 플러그인과 검색창 활성화등을 해줍니다.

```yaml
# Build settings
remote_theme: "mmistakes/minimal-mistakes@4.24.0"
minimal_mistakes_skin: dirt

# Plugins (previously gems:)
plugins:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-feed
  - jekyll-include-cache

# mimic GitHub Pages with --safe
whitelist:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-feed
  - jekyll-include-cache
search                   : true # true, false (default) 블로그 내 검색창 활성화
search_full_content      : # true, false (default)
search_provider          : lunr # lunr (default), algolia, google

```

번들로 젬을 설치하고 지킬(jekyll)로 실행주면 새 테마가 적용된 것을 볼 수 있습니다..

```bash
# install gem
bundle install

# run jekyll
bundle exec jekyll serve

```

## 포스팅을 위한 설정

이제 실제 컨텐츠가 되는 포스팅은 프로젝트 루트의 `_posts` 폴더에 YYYY-MM-DD-title.md 와 같은 형식으로 작성하면 됩니다. _posts 폴더를 보면 지킬을 처음 구성했을 때 생성된 포스팅 하나가 있습니다. 사이트에서 이 "Welcome to Jekyll!" 글을 클릭해보면 테마가 적용되어 있지 않은 것을 볼 수 있습니다.

`_posts/2023-05-25-welcome-to-jekyll.markdown` 를 열어보시면 헤더에 `categories: jekyll update`가 추가되어 있는데 카테고리와 관련된 설정이 없기 때문입니다.




layout을 single로 변경해주고 categories를 지워주면 테마가 적용되지만 여기서는 카테고리로 구분하는
