---
layout: post
title: Математические формулы в HTML
keywords: Latex, mathjax syntax, LaTeX syntax, математические формулы на сайте, математиеские формулы в html, синтаксис LaTeX, примеры формул LaTeX
tags:
- Match
- LaTex
---

Недавно я задался вопросом: "Как мне написать математические формулы в HTML?".
Как выяснилось существует специальная JS-библиотека, которая позволяет использовать синтаксис LaTeX на сайте. Называется она [MathJax](http://www.mathjax.org/).

Библиотека не требует каких либо знаний в области JS. Достаточно подключить ее на странице, как это слелал я:

{% highlight html %}
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
{% endhighlight %}

### Примеры

Ниже приведу список формул, в которых используются самые разнообразные математические символы


LaTeX Syntax   | MathJax результат
---------------|------------------
