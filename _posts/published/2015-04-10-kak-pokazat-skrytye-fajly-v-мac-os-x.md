---
layout: post
title: "Как показать скрытые файлы в Mac OS X"
excerpt: "Системные файлы в Mac OS X скрыты от пользователя в целях безопасности. Это правильно, но иногда бывают ситуации когда система принимает пользовательские файлы за системные и тоже скрывает их."
keywords: скрытые файлы, показать скрытые файлы, max os x
published: true
tags:
- Mac OS
- .htaccess
---

Системные файлы в Mac OS X скрыты от пользователей в целях безопасности. Это правильно, но иногда бывают ситуации когда система принимает пользовательские файлы за системные и тоже скрывает их.
Например, файл <span class="file">.htaccess</span> необходимый для настройки локального сервера будет скрыт.

Для того, что бы показать системные файлы необходимо выполнить в Терминале команду:

{% highlight console %}
defaults write com.apple.finder AppleShowAllFiles -bool true
killall Finder
{% endhighlight %}

Как сделаем свое дело, системные файлы можно обратно скрыть:

{% highlight console %}
defaults write com.apple.finder AppleShowAllFiles -bool false
killall Finder
{% endhighlight %}

Если кто знает как показать только <span class="file">.htaccess</span>, то напишите мне в <a href="https://twitter.com/intent/tweet?screen_name=Bizi">Твиттер</a>, буду очень благодарен!


