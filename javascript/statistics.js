var token = "5c116284309f488abff02fad41afeb27",
    id = 1304907;

$(document).ready(function () {
// Получение статистики
    $.ajax({
        type: 'GET',
        url: 'http://api-metrika.yandex.ru/stat/traffic/load.json?id=' + id + '&pretty=1&oauth_token=' + token,
        dataType: 'jsonp',
        success: function (date) {
            console.log(date)
            $('#statistics').append(document.createTextNode(
            "Сейчас на сайте: " +  date.max.max_users
            ));
        }
    });
});
