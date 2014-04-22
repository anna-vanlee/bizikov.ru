---
layout: post
title: Страница в Sharepoint 2013 c областями для веб-частей
why: Создать главную страницу корпоративного портала.
keywords: Sharepoint 2013, masterpage, webParts, веб-части в Sharepoint 2013
excerpt: Мне тут по работе довелось верстать под Sharepoint 2013. Многие вещи оказались для меня далеко не тривиальными. Поэтому свой опыт хочу задокументировать в виде статьи, где опишу процесс создания aspx страницы с зонами для вставки веб-частей. 
tags:
- Sharepoint
---

Мне тут по работе довелось верстать под Sharepoint 2013 (далее шарик). Многие вещи оказались для меня далеко не тривиальными. Поэтому свой опыт хочу задокументировать в виде статьи, где опишу процесс создания <span class="file">.aspx</span>
страницы с зонами для вставки веб-частей. На русском языке качественной информации по шарику практически нет, поэтому статья может быть интересна не только мне, но и другим разработчикам, которые по долгу службы столкнулись с данным корпоративным <s>монстром</s> продуктом.

В моем случае стенд *(место где располагается наш шарик)* находится на другом компьютере, поэтому я подключился к нему через Дизайнер ([Sharepoint Designer 2013](http://www.microsoft.com/ru-ru/download/details.aspx)). Через "Все файлы" находим папку Pages и создаем там свою <span class="file">.aspx</span> страницу. Например, Main.aspx.

![Создание страницы Main.aspx]({{ site.url }}/upload/article/2014/04/22/mainaspx.png)

Стандартный код можно спокойно удалять, он не понадобится.

Необходимо добавить директивы:

{% highlight C %}
<%@ Page language="C#" MasterPageFile="../_catalogs/masterpage/myMaster.master"
Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c"
meta:progid="SharePoint.WebPartPage.Document"
meta:webpartpageexpansion="full"%>

<%@ Register TagPrefix="SharePoint"
	Namespace="Microsoft.SharePoint.WebControls"
	Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages"
Namespace="Microsoft.SharePoint.WebPartPages"
Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
{% endhighlight %}

Все содержимое страницы по сути будет браться из myMaster.master. Что такое мастер страница? Если коротко, то это шаблон, по которому отображаются все страницы портала. Это как шаблон для wordpress, только все в одном файле :)

В качестве примера можно взять содержимое стандартного мастера **Oslo.master** и вставить его в новый, только что созданный myMaster.master. При необходимости можно удалить лишние куски кода и добавить свои элементы на страницу.
Когда доходим до момента, что нужно определить веб-часть для страницы, вставляем в Main.aspx

{% highlight C %}
<asp:Content ID="Content1" ContentPlaceHolderId="PlaceHolderMain" runat="server">
<WebPartPages:WebPartZone runat="server" ID="webZone1" CssClass="ms-hide" Title="Название веб-части">
	<ZoneTemplate></ZoneTemplate>
</WebPartPages:WebPartZone>
</asp:Content>
{% endhighlight %}

В мастере необходимо для PlaceHolderMain определить место, поэтому в нужной части верстки <span class="file">.master страницы добавляем плэйсхолдер

{% highlight C %}
<asp:ContentPlaceHolder ID="PlaceHolderMain" runat="server" />
{% endhighlight %}

Для добавления дополнительных областей веб-частей достаточно повторить действия, изменив атрибуты Content1, PlaceHolderMain, webZone1 и Title на те, которые вам нужны.

После этого заходим на портал и выбираем **изменить страницу**

![]({{ site.url}}/upload/article/2014/04/22/edit-page.png)

Добавляем нужные веб-части и радуемся.

{% gist 11169756 %}

