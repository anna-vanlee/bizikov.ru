// Поиск по сайту
function customSearch() {
    var searchString = document.getElementById('search');
    var searchEngine = document.getElementById('searchEngine').value;
    var yandex = 'http://yandex.ru/yandsearch?site=http://bizikov.ru&text=';
    var mailru = 'http://go.mail.ru/search?site=bizikov.ru&q='
    var google = 'http://google.com/search?q=site:bizikov.ru%20';

    function searchResult(link, value) {
        window.open(link + value);
    }

    if (searchString.value !== '') {
        switch (searchEngine) {
            case 'yandex':
                searchResult(yandex, searchString.value);
                break;
            case 'mailru':
                searchResult(mailru, searchString.value);
                break;
            case 'google':
            default :
                searchResult(google, searchString.value);
                break;
        }

    } else {
        searchString.placeholder = "Для поиска введи запрос";
        return false;
    }
}

// Навигация клавишами
document.onkeydown = NavigateThrough;
function NavigateThrough(event) {
    var link;
    switch (event.keyCode ? event.keyCode : event.which ? event.which : null) {
        case 0x25:
            link = document.getElementById('previous');
            console.log("Нажал на левую стрелку");
            break;
        case 0x27:
            link = document.getElementById('next');
            console.log("Нажал на правую стрелку");
            break;
    }
    if (link && link.href) document.location = link.href;
}

function showComments() {
    var vk = document.getElementById('vkontakte'),
        disqus = document.getElementById('disqus'),
        name = document.getElementById('name-system');

    if (vk.style.display == 'block') {
        vk.style.display = 'none';
        disqus.style.display = 'block';
        name.innerText = 'Вконтакте';
    } else {
        disqus.style.display = 'none';
        vk.style.display = 'block';
        name.innerText = 'Дискус';
    }
}