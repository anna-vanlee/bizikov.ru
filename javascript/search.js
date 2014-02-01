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





