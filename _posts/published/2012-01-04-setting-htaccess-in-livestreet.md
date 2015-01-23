---
layout: post
title: "Настройка файла .htaccess после установки LiveStreet"
excerpt: "Описание настройки файла .htaccess, после установки LiveStreet на VPS хостинг"
keywords: LiveStreet, установка LiveStreet, VPS хостинг
tags:
- LiveStreet
- .htaccess
---

Буквально сегодня настроил VPS сервер и решил установить LiveStreet. Установка прошла отлично.
Главная страница работает, а при переходе на любую другую страницу получаю 404 ошибку. 

Ниже привожу решение проблемы. Необходимо настроить файл <code class="file">.htaccess</code>:
 
1) Заходим через SSH на свой сервер в папку /etc/apache2/mods-enabled
{% highlight php %}
cd /etc/apache2/mods-enabled
{% endhighlight %}

2) Создаем символьную ссылку: 
{% highlight php %}ln -s ../mods-available/rewrite.load ./rewrite.load{% endhighlight %}

3) Переходим в папку /var/www/названиеСайта/

4) Создал файл <code class="file">.htaccess</code> и добавить в него код:

{% highlight php %}
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !\.(jpg|jpeg|gif|png|css|js|ico|swf)$
RewriteCond %{REQUEST_FILENAME} !{SERVER_NAME}\/uploads.$
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ ./index.php
{% endhighlight %}

5) Переходим в /etc/apache2/sites-available и редактируем default: нужно поменять в &lt; Directory /&gt; и <Directory /var/www/> значение None на AllowOverride All.