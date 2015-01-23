---
layout: post
title: "Оптимизация сайта: Включаем gzip сжатие"
excerpt: "У Google есть хороший сервис: PageSpeed Insights, который подскажет, что необходимо оптимизировать у вас на сайте. Одним из советов является включение gzip сжатия на хостинге (или сервере), где размещается ваш сайт."
published: true
keywords: оптимизация сайта, gzip сжатие, сжатие на сервере, как включить сжатие на сервере, настройка .htaccess
tags:
- Оптимизация сайта
- gzip
- .htaccess
---

У Google есть хороший сервис: <a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">PageSpeed Insights</a>, который подскажет, что необходимо оптимизировать у вас на сайте. Одним из советов является <mark>включение gzip сжатия</mark> на хостинге (или сервере), где размещается ваш сайт.

Описывать, зачем нужно ускорять загрузку своего сайта, думаю, нет необходимости :-)

Для включения gzip сжатия необходимо иметь работающий сайт на php и хостинг (или сервер), где он будет размещаться.

0) Страницу <span class="file">index.html</span> нужно будет переименовать в <span class="file">index.php</span>.

1) Добавить в файл <span class="file">.htaccess</span> следующие строки:

{% highlight php %}
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/css
<IfModule mod_setenvif.c>
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4\.0[678] no-gzip
BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
</IfModule>
</IfModule>
{% endhighlight %}

Если файла <span class="file">.htaccess</span> еще нет, то его необходимо создать, вставить вышеуказанные строки и добавить его в корень сайта.

2) Добавить в файл <span class="file">php.ini</span> строку:

{% highlight php %}
zlib.output_compression = On
{% endhighlight %}

Проверить, включилось ли сжатие на вашем сайте или нет, можно через тот же PageSpeed Insights или через сервисы:

- <a href="http://www.whatsmyip.org/http-compression-test/" target="_blank">HTTP Compression Test</a>
- <a href="http://www.gidnetwork.com/tools/gzip-test.php" target="_blank">GIDZipTest</a>

Если после редактирования <span class="file">.htaccess</span> файла появилась ошибка <abbr title="Ошибка 404 - страница не найдена">404</abbr> при переходе на любую страницу на сайте и доступна только главная, то нужно добавить в этот файл строки:

{% highlight php %}
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !\.(jpg|jpeg|gif|png|css|js|ico|swf)$
RewriteCond %{REQUEST_FILENAME} !{SERVER_NAME}\/uploads.$
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ ./index.php
{% endhighlight %}


