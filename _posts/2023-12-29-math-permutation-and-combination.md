---
title: 백준 <브루트 포스 - N과 M> 순열과 조합 정리
date: "2023-12-29"
tags: ["PS", "BOJ"]
categories: PS
---

<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"></script>

백준의 code.plus 문제집 <브루트 포스 - N과 M>을 풀면서 순열과 조합을 이해하고, 문제를 더 쉽게 해결할 수 있게 되서 그 내용을 정리했습니다.

<!--more-->

## 순열(Permutation)

순서대로 나열한다는 것을 의미하며 순서가 중요합니다. 예를 들어 1 2 3과 3 2 1은 서로 다른 순열입니다.

### 예시

다섯개의 문자열 A B C D E에서 3개의 문자열을 고른다고 가정해봅시다.

첫 번째 문자로 B를 선택했다면 두 번째로 올 수 있는 문자열은 B를 제외한 A C D E 중에서 선택됩니다. 마찬가지로 3번째 올 수 있는 문자열의 개수는 3개입니다.

5부터 1개씩 줄어들면서 곱하는데 3개를 고르는것이기 때문에 3에서 멈춥니다. 연속해서 진행되기 때문에 총 경우의 수는 5 x 4 x 3이 됩니다.

### 수식

이를 수식으로 나타내면 n개 중에서 r개를 고르는 순열은 다음과 같이 표현할 수 있습니다.

$$
    _nP_r = n(n-1)(n-2)\cdots(n-r+1)
$$

위의 예시를 이 식에 대입해봅시다.

 $$n - r + 1 = 5 - 3 + 1$$ 이므로 3까지 곱하면 됩니다.

$$
    _5P_3 = {5\times4\times3}
$$

이번에는 A B C D E에서 5개의 문자를 고른다고 해봅시다.

$$
\begin{align*}
    _5P_5 &= 5\times4\times3\times2\times1 \\
      &= 5!
\end{align*}
$$

즉 n개 중에서 n개를 고르는건 n팩토리얼과 같음을 알 수있습니다.

$$
    _nP_n = n!
$$

이를 다시 순열식으로 나타내면 다음과 같이 됩니다.

$$
\begin{align*}
    _nP_r &= \frac{n(n-1)(n-2)\cdots(n-r+1)(n-r)\cdots1}{(n-r)(n-r-1)\cdots2\times1} \\
          &=  \frac{n!}{(n-r)!}
\end{align*}
$$

위의 예시 $$_5P_2$$ 은 이렇게 정리할 수 있습니다.

$$
\begin{align*}
    _5P_2 = \frac{5!}{(5-2)!}
\end{align*}
$$

### 특징

위에서 정리한 식을 사용해서 $$_nP_0$$과 $$0!$$의 값이 무엇인지 살펴보겠습니다.

$$
_nP_r = \frac{n!}{(n-r)!}
$$

 $$_nP_n$$을 위의 식에 대입해보면 0!은 1이 됩니다.

$$
\begin{align*}
    _nP_n &= \frac{n!}{(n-n)!} \\
          &= \frac{n!}{0!} \\
          &= \frac{n!}{1} \\
          &= n!
\end{align*}
$$

마찬가지로 $$_nP_0$$도 대입해보니 1이라고 정리할 수 있습니다.

$$
\begin{align*}
    _nP_0 &= \frac{n!}{n!} \\
          &= 1
\end{align*}
$$

### 중복순열 (Repetition Permutation)

순서대로 나열하는데 중복을 허용하는 경우입니다. 주어진 $$n$$개의 원소중에서 $$r$$개를 중복을 허용하여 선택하고 나열하는 경우의 수는 $$n^r$$입니다.

중복순열을 구하는 식은 다음과 같습니다.

$$
    _n\hat{P}_r = n^r
$$

## 조합(Combination)

순열은 3개를 뽑아서 3개를 줄세우는 겁니다. 여기서 3개를 뽑는것만을 조합이라고 합니다.

### 예시

A B C D E라는 문자가 있는데 여기서 3개를 고르는것입니다. 순서와 상관이 없습니다. 다음 세개는 모두 동일한 순열입니다.

A C D  
A D C  
C D A  

### 수식

r개를 뽑기만 하면 조합입니다. 그러면 조합을 한 다음에 연달아 r개를 줄세우면 순열이 됩니다.

$$
    \text{(조합)}\times{r!} = \text{(순열)}
$$

n개 중에서 r을 고르기만 한다고 하여 Combination의 C를 사용해 $$_nC_r$$으로 표현합니다.

$$
    _nC_r\times{r!} = _nP_r
$$

그러면 반대로 조합식은 순열식을 사용해서 이렇게 나타낼 수 있습니다.

$$
    _nC_r = \frac{_nP_r}{r!}
$$

또한, 순열식을 사용해서 이렇게도 쓸 수있습니다.

$$
\begin{align*}
    _nC_r &= \frac{_nP_r}{r!} \\
          &= \frac{n!}{(n-r)!r!}
\end{align*}
$$

### 특징

순열과 마찬가지로 특징을 살펴보겠습니다. $$_nC_0$$을 대입해보면 1이 됩니다.

$$
\begin{align*}
    _nC_0 &= \frac{n!}{n!0!} \\
          &= 0! \\
          &= 1
\end{align*}
$$

똑같이 대입해보면 다음과 같이 정리할 수 있습니다.

$$
\begin{align*}
_nC_n = 1 \\
_nC_1 = n \\
\end{align*}
$$

마지막으로 다음식을 살펴보겠습니다. 이 식은 $$_7C_4$$는 $$_7C_3$$과 같다는게 됩니다.

$$
\begin{align*}
_nC_r &= _nC_n-_r \\
      &= \frac{n!}{(n-(n-r))!(n-r)!} \\
      &= \frac{n!}{(n-n+r)!(n-r)!} \\
      &= \frac{n!}{r!(n-r)!}
\end{align*}
$$

### 중복조합 (Repetition Combination)

주어진 요소들을 선택하는데 중복을 허용합니다. n개 중에서 r개를 선택하는 중복조합은 $$n+r-1$$개 중에서 r개를 구하는것과 같습니다.

중복조합을 구하는 식은 다음과 같습니다.

$$
\begin{align*}

    _n\hat{C}_r = _n+_r-_1C_r &= \frac{(n+r-1)!}{((n+r-1)-r)!r!} \\
        &= \frac{(n+r-1)!}{(n-1)!r!}
\end{align*}
$$

## 백준 문제집 <브루트 포스 - N과 M> 풀어보기

<브루투 포스 - N과 M>은 "코딩 테스트 준비 - 기초" 제목으로 분류되어 있으며 순열과 조합을 활용한 9개의 문제로 구성된 완전탐색(브루트 포스) 문제집입니다. 이 글을 읽고 순열과 조합이 명확하게 이해되었다면 문제 풀이가 정말 쉬워질겁니다.

- [N과 M (1)](https://www.acmicpc.net/problem/15649) : 수열을 제공하지 않는 기본적인 순열 문제입니다. 예제 출력2를 보면 1 2와 2 1를 각각 출력하는 순서가 중요한 순열입니다. 제공되는 수열이 없으니 주어진 숫자와 반복문을 활용해서 수열을 만들고 순열을 구해서 출력하면 됩니다.
- [N과 M (2)](https://www.acmicpc.net/problem/15650) : 수열을 제공하지 않는 기본적인 조합 문제입니다. 예제 출력2를 보면 1 2를 출력하고 2 1은 없습니다. 1 2와 2 1은 중복으로 인지하는 조합 문제입니다. 제공되는 수열이 없으니 주어진 숫자와 반복문을 활용해서 수열을 만들고 순열을 구해서 출력하면 됩니다.
- [N과 M (3)](https://www.acmicpc.net/problem/15651) : 수열을 제공하지 않는 기본적인 중복 순열 문제입니다. 예제 출력2를 보면 1 2와 2 1을 각각 출력하는 순서가 중요한 순열입니다. 제공되는 수열이 없으니 주어진 숫자와 반복문을 활용해서 수열을 만들고 순열을 구해서 출력하면 됩니다.
- [N과 M (4)](https://www.acmicpc.net/problem/15652) : 수열을 제공하지 않는 기본적인 중복 조합 문제입니다. 예제 출력2를 보면 1 2를 출력하고 2 1은 없습니다. 1 2와 2 1은 중복으로 인지하는 조합문제입니다. 제공되는 제공되는 수열이 없으니 주어진 숫자와 반복문을 활용해서 수열을 만들고 순열을 구해서 출력하면 됩니다.
- [N과 M (5)](https://www.acmicpc.net/problem/15654) : 수열을 제공하는 순열 문제입니다. 예제 출력2를 보면 1 7과 7 1을 각각 출력하는 순서가 중요한 순열입니다.
- [N과 M (6)](https://www.acmicpc.net/problem/15655) : 수열을 제공하는 기본적인 조합 문제입니다. 예제 출력2를 보면 1 7은 출력하고 7 1은 없습니다. 1 7과 7 1은 중복으로 인지하는 조합문제입니다.
- [N과 M (7)](https://www.acmicpc.net/problem/15656) : 수열을 제공하는 기본적인 중복 순열 문제입니다. 예제 출력2를 보면 1 7과 7 1을 각각 출력하는 순서가 중요한 순열 입니다.
- [N과 M (8)](https://www.acmicpc.net/problem/15657) : 수열을 제공하는 기본적인 중복 조합 문제입니다. 예제 출력2를 보면 1 7은 출력하고 7 1은 없습니다. 1 7과 7 1은 중복으로 인지하는 조합문제입니다.
- [NM과 K (1)](https://www.acmicpc.net/problem/18290) : N x M인 2차원 배열을 제공합니다. 선택한 칸의 인전합 칸은 선택하지 않고 K개를 선택 합니다. 선택한 숫자 K개의 합이 가장 큰 값을 출력합니다. 합을 구하는데 순서는 중요하지 않으니 조합 문제입니다.

## Reference

- [유튜브 - EBS[수학영역] 미적분과 통계 기본 - 순열과 조합을 정리하면? (고1개념)](https://www.youtube.com/watch?v=458841FPRgo)
- [백준 문제집 <브루트 포스 - N과 M>](https://www.acmicpc.net/workbook/view/9371)