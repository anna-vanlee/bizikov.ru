/**
 * TwitpicJS - скачиваем все фотографии из Twitpic
 * Требуется плагин jQuery
 * Автор: Bizikov
 */

// Записываем username
var username  = location.search;
var url = "https://api.twitpic.com/2/users/show.json" + username;

// Отправляем запрос
$.ajax({
//    method: "GET",
    url: url,
    dataType: "json",
    success: function(data){
        console.log(data);
    },
    complete: function(){
        console.log("Запрос завершен")
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Ошибка");
    }
});