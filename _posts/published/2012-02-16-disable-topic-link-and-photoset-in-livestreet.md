---
layout: post
title: "Отключить топик-ссылки и фотосеты в LiveStreet"
excerpt: "Краткая заметка по оключению разных видов топиков в CMS LiveStreet"
keywords: LiveStreet
tags:
- LiveStreet
---

При создании сайта на CMS LiveStreet, часто приходится производить много настроек. 
Например, иногда полезно отключить некоторые виды постов.

Для примера отключим топик-ссылки и фотосеты. Для этого нужно в файле конфигураций LiveStreet закомментировать строки:

{% highlight php %}
$config['router']['page']['link'] = 'ActionLink';
$config['router']['page']['photoset'] = 'ActionPhotoset';
{% endhighlight %}