---
layout: post
title: "Как отключить Dashboard в OS X Mavericks"
excerpt: "Как можно отключить Dashboard в OS X Mavericks."
keywords: disable dashboard osx mavericks, osx mavericks, dashboard, disable dashboard
cover: upload/article/2014/08/30/dashboard.png
tags:
- Mac OS
- Mavericks
---

В Mac OS на виджеты выделен целый экран, который называется [Dashboard](http://support.apple.com/kb/ht2492).

<img src="{{site.url}}/upload/article/2014/08/30/dashboard_01.png" alt="Экран Dashboard в OS X Mavericks" />

За время использования Mac OS X Mavericks, к сожалению, я так и не воспользовался возможностями Dashboard.
Если вы так же как и я не пользуетесь им, то у меня есть хорошие новости: eго можно отключить и это совсем не больно!

<p>1. Необходимо открыть терминал;</p>
<p>2. Выполнить команду:</p>

    {% highlight console %}defaults write com.apple.dashboard mcx-disabled -boolean true{% endhighlight %}

<p>3. Не забудьте перезапустить Dashboard:</p>

    {% highlight console %}KillAll Dock{% endhighlight %}

Теперь панель виджетов отключена. Если вдруг начнете скучать по ней и захотите включить,
то это делается аналогичным образом, только необходимо <mark>изменить true на false</mark>:

{% highlight console %}
defaults write com.apple.dashboard mcx-disabled -boolean false
KillAll Dock
{% endhighlight %}

**Добавлено**: Оказывается есть способ куда проще. Спасибо [Илье](http://gorenburg.com/ "Илья Горенбург") за наводку.

Заходим в настройки Mission Control и убираем галочку с пункта "Показать Dashboard как пространство".

<img class="original" src="{{site.url}}/upload/article/2014/08/30/mission-control.png" atl="Показать Dashboard как пространство">
