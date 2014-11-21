---
layout: post
title: "Настройка VPS сервера для дальнейшей работы с LiveStreet"
keywords: Число Пи, История числа Пи
excerpt: "11"
tags:
- VPS
- LiveStreet
---

Здравствуйте! Необходимо было перейти на выделенный сервер, где будет работать сайт на livestreet, ибо обычный хостинг не справлялся с нагрузкой. Настраивал сервер впервые, много нового узнал :)
<cut>
<h4>Вводная информация:</h4>
Первое с чем мне пришлось столкнуться, так это с выбором размещения сервера. Были варианты зарубежные и отечественные, но т.к мне необходима поддержка на родном языке - решено было выбирать только из русских. Больше всего мне советовали <a href="scalaxy.ru">Оверсан</a>. У них кстати отличная поддержка, ребята быстро реагируют.

Второе - изменил dns записи у своего регистратора на Оверсановские.

Третье - создание сервера, выбор ос (решил выбрать ubuntu 10.04) и т.д.

<h4>Настройка веб сервера Ubuntu</h4>
Имеется сервер с установленной операционной системой Ubuntu 10.04. Начинаем настраивать:
Для начала заходим по ssh на свой сервер, через консоль:

{% highlight console %}
sudo ssh root@ваш_ip_сервера
{% endhighlight %}

Далее разрешаем сертификат и вводим пароль.
Если появляется ошибка 

<center><img src="http://livestreet.ru/uploads/images/01/29/12/2012/01/05/8660ca.png"  alt="" /></center>

Скорее всего проблема в том что ключи ssh поменялись и поэтому в целях безопасности система не дает доступа.

Решается следующим образом:
Заходим в домашнюю директорию пользователя от которого сидите и удаляете файл .ssh/known_hosts

Сделать это к примеру можно так:

{% highlight console %}cd ~
rm .ssh/known_hosts
{% endhighlight %}

Перед нами голая система, из которой следует создать полноценный веб сервер.
Поехали!
обновим информацию о пакетах, и обновим систему

{% highlight console %}aptitude update
aptitude upgrade{% endhighlight %}

Установка apache2 + phph5 + mysql + phpmyadmin одной строкой

{% highlight console %}aptitude install mysql-server mysql-client libmysqlclient15-dev apache2 apache2-doc apache2-mpm-prefork apache2-utils libexpat1 ssl-cert libapache2-mod-php5 libapache2-mod-ruby php5 php5-common php5-curl php5-dev php5-gd php5-idn php-pear php5-imagick php5-imap php5-mcrypt php5-memcache php5-mhash php5-ming php5-mysql php5-pspell php5-recode php5-snmp php5-sqlite php5-tidy php5-xmlrpc php5-xsl phpmyadmin{% endhighlight %}

Настраиваем виртуальные хосты для работы нескольких сайтов на одном ip адресе:

По умолчанию, Apache прослушивает все IP-адреса, доступные виртуальному серверу. Мы должны настроить его на прослушивание только адреса, который мы укажем. Даже если у вас есть только один IP адрес, не стоит пренебрегать этой процедурой.

Начните с изменения параметра NameVirtualHost entry в файле /etc/apache2/ports.conf:
Редактируем файл /etc/apache2/ports.conf 

{% highlight console %}NameVirtualHost	188.127.241.217:80{% endhighlight %}

<blockquote>Замените 188.127.241.217 на IP адрес вашего виртуального сервера.</blockquote>

Теперь, изменим VirtualHost сайта по умолчанию в файле /etc/apache2/sites-available/default, запись <VirtualHost> должна выглядеть так:
Редактируем файл /etc/apache2/sites-available/default

{% highlight console %}<VirtualHost	188.127.241.217:80>{% endhighlight %}

<h4>Настройка виртуальных хостов</h4>
Для каждого домена необходимо создать конфигурационный файл в каталоге /etc/apache2/sites-available/. Название каждого конфигурационного файла для домена должно быть аналогичным самому домену. для примера, создадим конфигурационные файлы для доменов "site1.ru" и "site2.ru"
Редактируем файл /etc/apache2/sites-available/site1.ru

{% highlight console %}<VirtualHost 188.127.241.217:80> 
     ServerAdmin mail@site1.ru
     ServerName site1.ru
     ServerAlias www.site1.ru
     DocumentRoot /var/www/site1.ru/
</VirtualHost>{% endhighlight %}

Редактируем файл /etc/apache2/sites-available/site2.ru

{% highlight console %}<VirtualHost 188.127.241.217:80> 
     ServerAdmin mail@site2.ru
     ServerName site2.ru
     ServerAlias www.site2.ru
     DocumentRoot /var/www/site2.ru/
</VirtualHost>{% endhighlight %}

Перед тем, как мы станем использовать созданную конфигурацию, необходимо создать указанные в ней каталоги. Для этого выполним следующие команды:

{% highlight console %}mkdir -p /var/www/site1.ru/
mkdir -p /var/www/site2.ru/{% endhighlight %}

После того как вы настроили виртуальные хосты, выполните следующие команды:

{% highlight console %}a2ensite site1.ru
a2ensite site2.ru{% endhighlight %}

Перезапускаем сервисы:

{% highlight console %}service apache2 restart{% endhighlight %}

Если необходима будет работа с phpmyadmin, то в /etc/apache2/apache2.conf нужно добавить строчку:

{% highlight console %}Include /etc/phpmyadmin/apache.conf{% endhighlight %}

<h4>Настройка для работы LiveStreet</h4>
<strong>Настройка .htaccess</strong>
1. Через SSH заходим в папку /etc/apache2/mods-enabled

{% highlight console %}cd /etc/apache2/mods-enabled{% endhighlight %}

2. Cоздаём символьную ссылку: 

{% highlight console %}ln -s ../mods-available/rewrite.load ./rewrite.load{% endhighlight %}

3. Переходим в /var/www/site.ru/
4. Создаем файл ./htaccess со следующим содержанием:

{% highlight console %}RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !\.(jpg|jpeg|gif|png|css|js|ico|swf)$
RewriteCond %{REQUEST_FILENAME} !{SERVER_NAME}\/uploads.$
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ ./index.php{% endhighlight %}

5. Переходим в /etc/apache2/sites-available и редактируем default:
поменять в <Directory /> и <Directory /var/www/> AllowOverride All вместо None.
<strong>Права на запись:</strong>
Загружаем файлы livestreet в нужную папку вашего сайта и далее зайти по sftp (например через FileZilla) или через ssh, кому как удобнее. Я заходил через FileZilla и выдал папкам права 777. 

<center><img src="http://livestreet.ru/uploads/images/01/29/12/2012/01/05/2ae069.jpg"  alt="" /></center>

Обязательно: нужно выдать права 777 не только самим папкам, но и ко всем подпапкам.
И так выполняем для следующих папок:
/tmp, 
/logs, 
/uploads, 
/templates/compiled, 
/templates/cache,
/plugins,
Нужно переименовать файл /config/config.local.php.dist на config.local.php и дать этому файлу права 777.

Далее производим установку по адресу http://site.ru/install. 

Все работает!
Теперь хочется узнать у знатоков: что можно сделать с сервером еще, что бы ускорить работу сайта и что бы сервер не нагружался без надобности.