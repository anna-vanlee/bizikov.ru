---
layout: post
title: Рисование с использованием Canvas
cover: upload/article/2014/02/03/sketch.jpg
keywords: html5, canvas
excerpt:
tags:
- Code
---

Предполагается, что читающий этот пост владеет некоторыми знаниями JavaScript.
На странице буду выкладывать примеры рисования геометрических фигур.

Для начала нужно определиться, что же такое Canvas.

HTML5 тег <span class="file">&lt;canvas&gt;</span> предназдначен для создания растрового двухмерного изображения при помощи JavaScript.

### С чего начать?

Необходимо добавить тег <span class="file">&lt;canvas&gt;</span> в html файл:

{% highlight html %}
<canvas id='canvasExample' width="200" height="200">
    Обновите браузер
</canvas>
{% endhighlight %}

<span class="file">ID</span> нам нужен для того, получить доступ к элементу <span class="file">&lt;canvas&gt;</span> из JavaScript.
Ширину и высоту указывать в атрибутах не обязательно, значения можно будет задать через JavaScript.
Сообщение между тегами будет показано пользователю в том случае, если браузер не поддерживает технологию HTML5.

Получим доступ к элементу через JavaScript, для этого нужно в той же html странице прописать между тегами <span class="file">&lt;script&gt;</span>
или в отдельном <span class="file">.js</span> файле:

{% highlight javascript %}
var canvas = document.getElementById("canvasExample"),
            ctx = canvas.getContext('2d');

// Можно задать размеры через js, если в атрибутах не указали
canvas.width = 200;
canvas.height = 200;
{% endhighlight %}

### Отрисовка фигур

Метод/Параметр | Описание
---------------|----------
<code>moveTo( x, y )</code> | Перемещает точку в указанное место
<code>beginPath()</code> | Начать строить фигуру
<code>closePath()</code> | Замкуть контур фигуры
<code>lineTo( x, y )</code> | Связывает две точки между собой
<code>rect( x, y, width, height )</code> | Рисует прямоугольник
<code>arc(x,y,radius,startAngle,endAngle,direction)</code> | Рисует окружность

Далее приведу примеры с использованием указанных выше методов.

<table>
<tr>
    <td>
    Точка
   <img src="{{ site.url }}/upload/article/2014/02/03/dot.png"/>
    </td>
    <td>
    {% highlight javascript %}
        ctx.beginPath();
        ctx.arc(50,100,1,1,Math.PI *2 ,true);
        ctx.stroke();
        ctx.closePath();
    {% endhighlight %}
    </td>
</tr>
</table>

![]({{ site.url }}/upload/article/2014/02/03/arc.png)

### Стиль

Метод/Параметр | Описание
---------------|----------
<code>stroke()</code> | Обвести все фигуры
<code>strokeStyle</code> | Указывает стиль контура фигуры
<code>fill()</code> | Закрасить все фигуры
<code>fillStyle</code> | Указывает стиль заливки контура фигуры


