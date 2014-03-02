---
layout: post
title: Эффективное использование mixin в LESS
excerpt: Я люблю LESS. Правда. Это очень клевая штука, которая позволяет упростить написание CSS. В это записи пойдет речь о Mixin.
keywords: css3, less, mixin
tags:
- CSS3
- LESS
---

Я люблю LESS. Правда. Это очень клевая штука, которая позволяет упростить написание CSS.
В этой записи пойдет речь о **Mixin**. О том, что это такое я уже писал в одной из [предыдущих записей]({{ site.url }}/2013/06/less/) про **LESS**.

Для меня использование **CSS3** уже не является каким-то ноу-хау. За пару лет практически во всех (*пламенный привет IE*) браузерах внедрили поддержку если не всех, то очень многих свойств присутствующих в CSS3.
Но несмотря на это, лучше подстраховаться и верстать кроссбраузерно используя браузерные префиксы.

Ниже привожу список миксинов для различных свойств, с уточняющими комментариями.

### Градиент

Задаем линейный градиент для элемента:

{% highlight css %}
.gradient(@from: #000, @to: #fff) {
  background-color: @from;
  background-image: -webkit-gradient(linear, left top, left bottom, from(@from), to(@to));
  background-image: -webkit-linear-gradient(top, @from, @to);
  background-image:    -moz-linear-gradient(top, @from, @to);
  background-image:      -o-linear-gradient(top, @from, @to);
  background-image:         linear-gradient(to bottom, @from, @to);
}

/* Пример использования */

@color: #E0F8D8;
.element{
    /* Фон с градиентом цвета от #E0F8D8 и до #9BE882 */
   .gradient(@color, darken(@color,20%));
}

{% endhighlight %}

### Box-shadow

Добавляем тень к элементу. Добавлять тень можно внешнюю и внутренюю. Если **@insert** задать значение **true**, то элементу
задается внутреняя тень.

{% highlight css %}

/* Внутреняя тень */
.box-shadow(@insert, @x: 0, @y: 0, @blur: 10px, @color: #666) when (@insert = true) {
  -webkit-box-shadow: inset @x @y @blur @color;
          box-shadow: inset @x @y @blur @color;
}

/* Внешняя тень */
.box-shadow(@insert, @x: 0, @y: 0, @blur: 10px, @color: #666) when (@insert = false) {
  -webkit-box-shadow: @x @y @blur @color;
          box-shadow: @x @y @blur @color;
}

/* Упрощенный вариант использования внейшей тени */
.box-shadow(@x: 0, @y: 0, @blur: 10px, @color: #666){
  -webkit-box-shadow: @arguments;
          box-shadow: @arguments;
}

/* Пример использования */

/* Внутреняя тень */
.element{
    .box-shadow(false, 2px, 2px, 20px, #999);
}

/* Если не указать @insert, то сгенерируется внешняя тень */
.element{
  .box-shadow(1px, 2px, 20px, #000);
}

{% endhighlight %}

### Text-shadow

Добавляем тень к тексту:

{% highlight css %}
.text-shadow(@x: 1px, @y: 1px, @radius: 2px, @color: #000){
  -webkit-text-shadow: @arguments;
     -moz-text-shadow: @arguments;
          text-shadow: @arguments;
}

/* Пример использования */

.element{
    .text-shadow;
}
{% endhighlight %}

### Border-radius

Задаем радиус скругления элемента:

{% highlight css %}
.border-radius(@r: 3px) {
  -webkit-border-radius: @r;
  -moz-border-radius: @r;
  border-radius: @r;
}
/* Пример использования */

.element{
    .border-radius(10px);
}
{% endhighlight %}

### Column

**@count** - определяет количество колонок в многоколоночном тексте, а **@gap** - задаёт расстояние между колонками.

{% highlight css %}
.column(@count: 3, @gap: 1em) {
  -webkit-column-count: @count; -webkit-column-gap: @gap;
     -moz-column-count: @count;    -moz-column-gap: @gap;
          column-count: @count;         column-gap: @gap;
}

/* Пример использования */

.element{
    /*
        Текст будет разбит на две колонки,
        отступ между ними будет составлять 1.8em
    */
    .column(2, 1.8em);
}
{% endhighlight %}

### Transition

Устанавливаем эффект перехода между двумя состояниями элемента (например обычным состоянием и **:hover**):

{% highlight css %}
.transition(@property: all, @duration: 0.3s, @function: linear) {
  -webkit-transition: @arguments;
     -moz-transition: @arguments;
       -o-transition: @arguments;
          transition: @arguments;
}

/* пример использования */

a {
  color: #008dd2;
  text-decoration: none;
  .transition(color, 0.2s, linear);
  &:hover {
    text-decoration: none;
    color: #1a171b;
  }
}

{% endhighlight %}

### Transform

Трансформирует элемент, в частности, позволяет его масштабировать, вращать, сдвигать, наклонять, а также комбинировать виды трансформаций.

{% highlight css %}
.transform(@value) {
  -webkit-transform: @value;
     -moz-transform: @value;
      -ms-transform: @value;
       -o-transform: @value;
          transform: @value;
}

/* Пример использования */

/* Увеличим элемент в два раза */
.element{
    .transform(scale(2,2));
}

/* Изменение элемента при наведении */
.element{
  /* Для плавности добавим .transition */
  .transition;
  &:hover{
    .transform(scale(2,2));
  }
}

/*
    Необходимо при наведении не только увеличить элемент,
    но и повернуть его на 10 градусов? Легко!
*/
.element{
  .transition;
  &:hover{
    .transform(rotate(10deg) scale(2,2));
    /* (!) Запятую между функциями ставить не нужно */
  }
}

{% endhighlight %}

Не обязательно использовать все миксины в одном проекте, достаточно добавить в LESS-файл только те, которые вам точно пригодятся.
Для удобства список всех миксинов вынес в [mixin.less](https://gist.github.com/bizikov/9308043).

Приятой верстки!