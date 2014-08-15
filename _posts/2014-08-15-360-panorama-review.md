---
layout: post
title: "Создание сферической панорамы, с помощью iOS приложения 360 Panorama"
excerpt: "Заметка о том, как делать потрясающие сферические фотографии, с помощью ios-приолжения 360 Panorama"
keywords: "Apps for iPhone, Приложения для iphone и ipad, отличное фотоприложение для iphone, сферические фотографии на айфон"
cover: upload/article/2014/08/15/360panorama_icon.png
tags: 
  - iOS
  - Фотография
published: true
---

В комментариях к фотографиям в [инстаграме]({{ site.social.instagram }}) у меня часто спрашивают, как я делаю такие сферические панорамы:

<figure class="folium normal bg-null">
<img class="original" src="{{ site.url }}/upload/article/2014/08/15/360_panorama_01.jpg" alt="" title="" />
<img class="original" src="{{ site.url }}/upload/article/2014/08/15/360_panorama_00.jpg" alt="" title="" />
<img class="original" src="{{ site.url }}/upload/article/2014/08/15/360_panorama_02.jpg" alt="" title="" />
</figure>

Ответ прост - это приложение для айфона называется [360 Panorama](https://itunes.apple.com/ru/app/360-panorama/id377342622?mt=8), стоит оно всего 33 рубля.

Приложение поддерживается всеми ай девайсами от iPhone 3GS до iPhone 5, iPod touch 4 и 5, iPad 2, 3, 4 и iPad mini. Даже для некоторых девайсов на блекберри есть приложение. А вот поддержка андроида, к сожалению, отсутствует, но, думаю, не трудно будет найти похожее по функционалу.

Ребята из [Occipital](http://occipital.com/360/app) специально записали видео, где показали пример создания панорамы:

<iframe width="800" height="450" src="//www.youtube.com/embed/DWIai0FzRgw?rel=0" frameborder="0" allowfullscreen></iframe>

Оно немного устарело. Можно не просто провести на 360 градусов смартфон, но и заснять верх и низ, вот тогда вы получите настоящую сферическую фотографию.

После этого вы можете перевести отснятую панораму в режим **Stereographic**. А потом сохранить в фотопоток или отправить в любимую социалочку:

<figure class="folium ios normal">
<img class="original" src="{{ site.url }}/upload/article/2014/08/15/ios_interface_360_00.png" alt="" title="" />
<img class="original" src="{{ site.url }}/upload/article/2014/08/15/ios_interface_360_01.png" alt="" title="" />
<img class="original" src="{{ site.url }}/upload/article/2014/08/15/ios_interface_360_02.png" alt="" title="" />
<img class="original" src="{{ site.url }}/upload/article/2014/08/15/ios_interface_360_03.png" alt="" title="" />
<img class="original" src="{{ site.url }}/upload/article/2014/08/15/ios_interface_360_04.png" alt="" title="" />
</figure>

Помимо сохранения фотографии и отправки ее в социальные сети панораму можно опубликовать в созданный через приложение профиль. После этого можно будет поделиться ссылкой с друзьями или даже добавить в свой блог.

Код вставки панорамы на сайт выглядит следующим образом:

{% highlight javascript %}
// 859Ntb - id панорамы, который можно будет узнать, после публикации в сервисе
// 800 и 480 - размеры вставляемого окна для панорамы
<script src="http://occipital.com/360/embed.js?pano=859Ntb&width=800&height=480"></script>
{% endhighlight %}

Выглядеть она будет вот так:

<script src="http://occipital.com/360/embed.js?pano=859Ntb&width=800&height=480"></script>

Если зайти с телефона по ссылке [http://360.io/859Ntb](http://360.io/859Ntb), то будет еще круче :)

Теперь вы знаете, как делать крутые сферические панорамы на свой айфон. Удачных фотографий!
