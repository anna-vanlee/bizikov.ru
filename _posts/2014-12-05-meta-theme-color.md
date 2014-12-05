---
layout: post
title: "Меняем фон верхней панели браузера"
excerpt: "С выходом Android 5.0, мобильный браузер Chrome начал поддерживать метатег theme-color"
keywords: "Android 5.0, Android lollipop, Firefox OS, theme-color, как поменять фон"
tags:
- HTML
- Firefox OS
- Яндекс.Браузер
---

С выходом Android 5.0, мобильный браузер Chrome начал поддерживать метатег <span class="file">theme-color</span>.
Для примера, сделаем верхнюю панель красной:

{% highlight css %}
<meta name="theme-color" content="red">
{% endhighlight %}

Мобильный браузер Firefox в Firefox OS начиная с версии 2.1, тоже поддерживает этот метатег.

<a href="https://twitter.com/AhmedNefzaoui/status/492344698493997057" target="_blank"><img style="border: 1px solid;" src="{{ site.url }}/upload/article/2014/12/05/screen_02.png" /></a>

С выходом альфа-версии Яндекс.Браузера появились новые возможности для манипулирования внешним видом браузера.
Так например, можно задавать свои стили для верхней и нижней панелей браузера через ключи <span class="file">ya-title</span> и <span class="file">ya-dock</span> метатега вьюпорт.

Обе панели можно сделать прозрачными, добавив в <span class="file">head</span> вашего сайта вьюпорт со следующими значениями:

{% highlight css %}
<meta name="viewport" content="ya-title=fade,ya-dock=fade">
{% endhighlight %}

<img src="{{ site.url }}/upload/article/2014/12/05/screen_01.png" />

Добавим вместо <span class="file">fade</span> цвет *#4e69a2*:

{% highlight css %}
<meta name="viewport" content="ya-title=#4e69a2,ya-dock=fade">
{% endhighlight %}

<img src="{{ site.url }}/upload/article/2014/12/05/screen_00.png" />

**Когда использовать?**

Если на вашем сайте фиксированная шапка, т.е при прокрутке она остается всегда сверху и закрашена определенным цветом. В таком
случае будет не лишним закрасить и верхнюю панель браузера таким же цветом.
