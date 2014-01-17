var timeout = 300;

// Поиск по сайту
function customSearchInGoogle() {
    var input = document.getElementById('searchInGoogle');
    if (input.value !== '') {
        window.open("http://google.com/search?q=" + "site:bizikov.ru%20" + input.value)
    } else {
        input.placeholder = "Для поиска введи запрос";
        return false;
    }
}

$(document).ready(function () {
    // Добавляем один из цветов
    var header = document.getElementById('header'),
        colors = ['000', 'F00', '551A8B'],
        randomNumber = Math.round(Math.random() * 2),
        randomColor = '#' + colors[randomNumber];
    header.style.backgroundColor = randomColor;

    // Загружаем последние фотки из инстаграма
    var instagram = document.getElementById("instagram");
    if (instagram) {
        var feed = new Instafeed({
            get: 'user',
            limit: 10,
            userId: 30614466,
            accessToken: '30614466.467ede5.eaf674829ea44408b554e48f1759db67',
        }).run();
        // Плавно показываем фотки их
        setTimeout(function () {
            $('#instagram').animate({opacity: '1'}, timeout * 5);
        }, timeout * 5);
    }

    var social = document.getElementById("social");
    if (social) {
        setInterval(function () {
            $('#social').animate({opacity: '1'}, timeout * 5);
        }, timeout * 10);
    }
    $(".slider").each(function () {
        var obj = $(this);
        $(obj).append("<div class='nav'></div>");

        $(obj).find("li").each(function () {
            $(obj).find(".nav").append("<span rel='" + $(this).index() + "'></span>");
            $(this).addClass("slider" + $(this).index());
        });

        $(obj).find("span").first().css("background-color", randomColor);
    });

    $(document).on("click", ".slider .nav span", function () {
        var sl = $(this).closest(".slider");
        $(sl).find("span").css("background-color", "#FFF");
        $(this).css("background-color", randomColor);
        var obj = $(this).attr("rel");
        sliderJS(obj, sl);
        return false;
    });
});

function sliderJS(obj, sl) {
    var ul = $(sl).find("ul");
    var bl = $(sl).find("li.slider" + obj);
    var step = $(bl).width();
    $(ul).animate({marginLeft: "-" + step * obj}, 0);
}




