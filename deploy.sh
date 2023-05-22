#!/usr/bin/env sh
set -e

rm -rf _site

bundle exec jekyll build

cd _site

git init 
git config --local user.name "Seungwoo Lee"
git config --local user.email "seungwoo321@gmail.com"
git add -A
git commit -m "chore: by deploy.sh"
git remote add origin git@github.com:Seungwoo321/seungwoo321.github.io.git
git push -f git@github.com:Seungwoo321/Seungwoo321.github.io.git maser:gh-pages

cd -
