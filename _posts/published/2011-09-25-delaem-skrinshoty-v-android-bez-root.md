---
layout: post
title: Делаем скриншоты в Android без root
excerpt: Для Android есть специальные приложения, которые помогают сделать скриншоты с экрана телефона, но для этого вам нужны права root пользователя.
keywords: LauncherPro PLUS, рабочий стол для android, оболочка для android,
tags:
- Android
---

Для Android есть специальные приложения, которые помогают сделать скриншоты с экрана телефона, но для этого вам нужны права root пользователя.

> Root - это учетная запись главного администратора, или superuser-а. Имея доступ к этому профилю появляется целый ряд возможностей, не доступных в обычном режиме работы.

Получить их принципе не так и сложно: можно либо прошить телефон, либо установить приложение которое даст вам эти права. Но в первом случае вы теряете гарантию на телефон, а во втором — ничего, но если у вас HTC Sync вы не сможете получить права root.

Что же делать? У меня в настоящее время как раз телефон от HTC, который прошивать не хочу, но скриншоты делать хочу. И я нашел выход! Это Android SDK.

- Скачиваем и устанавливаем  Java с <a href="https://cds.sun.com/is-bin/INTERSHOP.enfinity/WFS/CDS-CDS_Developer-Site/en_US/-/USD/ViewProductDetail-Start?ProductRef=jdk-6u23-oth-JPR@CDS-CDS_Developer" target="_blank">официального сайта</a>
- Скачиваем и устанавливаем <a href="http://developer.android.com/sdk/index.html" target="_blank">Android SDK</a> (советую .exe версию)
- Запускаем Android SDK и выбираем &laquo;Installed packages&raquo; и устанавливаем все пакеты. (не обязательно, но лучше все)

<img src="{{ site.url}}/upload/article/2011/09/25/screen_00.jpg" alt="Android SDK" class="original">

Перезапускаем SDK

Теперь нам нужен файл <span class="file">ddms.bat</span>, который находится в папке tools. По умолчанию его можно найти по адресу:

> C:\Program Files\Android\android-sdk\tools

Подключаем телефон в режиме HTC Synce или просто в режиме отладки.

Открываем ddms.bat. В меню выбираем Device — Screen capture…

<figure class="folium normal bg-null">
<img src="{{ site.url}}/upload/article/2011/09/25/screen_01.jpg" alt="Android SDK" class="original">
<img src="{{ site.url}}/upload/article/2011/09/25/screen_02.jpg" alt="Device Screen Capture" class="original">
<img src="{{ site.url}}/upload/article/2011/09/25/screen_03.png" alt="Результат" class="original">
</figure>

Готово. Теперь можно легко делать скриншоты без потери гарантии на телефон!