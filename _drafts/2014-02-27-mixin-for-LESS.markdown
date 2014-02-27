---
layout: post
title: Mixin для кроссплатформенного LESS
keywords: css3, less, mixin
tags:
- CSS3
- LESS
---

Я люблю LESS. Правда. Это очень клевая штука, которая позволяет упростить написание CSS.
В это записи пойдет речь о Mixin. О том, что это такое я уже писал в одной из [предудущих записей]({{ site.url }}/2013/06/less/) по LESS.

Сейчас использование CSS3 уже не является каким то ноухау. За пару лет практически все разработчики браузеров внедрили поддержку если не всех, то очень многих свойств присутсствующих в CSS3.

Тем не менее, для поддержки на бОльшем количестве устройств использовать префиксы.

### Box-shadow

{% highlight less %}
.box-shadow(@x: 0, @y: 0, @blur: 10px, @color: @gray) {
     -moz-box-shadow: @arguments;
  -webkit-box-shadow: @arguments;
          box-shadow: @arguments;
}
{% endhighlight %}

### Border-radius
  {% highlight less %}
.border-radius(@r: 3px){
  -webkit-border-radius: @r;
     -moz-border-radius: @r;
          border-radius: @r;
}
{% endhighlight %}

### Transition

{% highlight less %}
.transition(@x: all, @y: 0.3s, @z: linear) {
       -o-transition: @arguments;
     -moz-transition: @arguments;
  -webkit-transition: @arguments;
          transition: @arguments;
}
{% endhighlight %}

## Как использовать

### LESS
{% highlight less %}
a {
    color: #008dd2;
    text-decoration: none;
    .transition;
    &:hover {
        text-decoration: none;
        color: #1a171b;
    }
{% endhighlight %}

### CSS

После компиляции получаем следующий CSS:

{% highlight less %}
a {
    color: #008dd2;
    text-decoration: none;
         -o-transition: all 0.3s linear;
       -moz-transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
            transition: all 0.3s linear;
}
a:hover {
    text-decoration: none;
    color: #1a171b;
}
{% endhighlight %}