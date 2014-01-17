---
layout: post
title: Как сделать сайт wordpress мультиязычным
keywords: wordpress, qtranslate, мультиязычный сайт, как сделать мультиязычный сайт, сайт wordpress на нескольких языках
tags:
- Code
---

Данное решение подойдет только для тех, кто использует wordpress, в качестве основы сайта. Весь необходимый функционал предоставляет плагин qTranslate. Русский файл перевода уже включён в последние версии плагина qTranslate, но по неизвестным причинам, его нет в списке.

Заходим в настройки > Языки (Settings -> Languages) и вводим следующие данные:

1. Language Code — *ru*
2. Flag — *ru.png*
3. Name — *Русский*
4. Locale — *ru_RU*
5. Date Format — *d.m.y*
6. Time Format — *%I:%M %p*
7. Not Available Message — *Sorry, this entry is only available in %LANG:,: and %.*

нажимаем «Добавить язык». После этого Русским можно установить языком по умолчанию.

Когда перейдем на страницу редактирования записи, то вероятнее всего увидите следующее сообщение:

> The qTranslate Editor has disabled itself because it hasn’t been tested with your WordPress version yet. This is done to prevent WordPress from malfunctioning. You can reenable it by clicking here (may cause data loss! Use at own risk!). To remove this message permanently, please update qTranslate to the corresponding version.

Это сообщение оповещает нас о том, что плагин не протестирован на текущей версии wordpress. Чтобы избавиться от него, необходимо заменить в <i class="file">qtranslate.php</i>:


{% highlight php %}
define('QT_SUPPORTED_WP_VERSION', '3.4.2');
{% endhighlight %}

на

{% highlight php %}
define('QT_SUPPORTED_WP_VERSION', '3.5.1');
{% endhighlight %}

### Элементы дизайна

Бывают ситуации, когда необходимо использовать разные элементы для разных языковых версий. Например, слайдер меню, который задается в коде или разное меню.

В ситуации с меню, можно создать в *Дизайн* &rarr; *Меню*. Два разных меню и выводить их в зависимости от языка:

Регистрируем в *functions.php* наши меню:

{% highlight php %}
if ( function_exists( 'register_nav_menu' ) ) {
  register_nav_menus(
    array('ru'=>__('RU Menu'),'en'=>__('EN Menu'),)
  );
}
{% endhighlight %}

После этого в админке заполните нужны пунктами и сохраните изменения. Для вывода меню, вставьте в нужном месте следующий код:

{% highlight php %}
if(get_locale() == 'ru_RU') {
        wp_nav_menu(array('theme_location' => 'ru'));
    } elseif(get_locale() == 'en_US') {
        wp_nav_menu(array('theme_location' => 'en'));
    }
{% endhighlight %}

### Конфликт с плагином All in One SEO Pack

Использование плагина в сочетании с All in One SEO Pack может привести к проблеме дублирования заголовков сайта. Для этого необходимо в <i class="file">functions.php</i>

{% highlight php %}
// Enable qTranslate for WordPress SEO
	function qtranslate_filter($text){
		return __($text);
	}
	add_filter('wpseo_title', 'qtranslate_filter', 10, 1);
	add_filter('wpseo_metadesc', 'qtranslate_filter', 10, 1);
	add_filter('wpseo_metakey', 'qtranslate_filter', 10, 1);
?>
{% endhighlight %}





