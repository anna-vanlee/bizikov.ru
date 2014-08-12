/**
 * Folium - простой слайдер изображений
 * User: Bizikov
 * Version: 0.2.1
 */

(function () {
    function folium() {
        var folium = document.getElementsByClassName('folium');
        var foliumCaption = 'folium--caption';
        var foliumNavigation = 'folium--navigation';
        var foliumNavigationItem = 'folium--navigation--item';
        var foliumNavigationItemCurrent = 'folium--navigation--item__current';

        /**
         *  Создаем указанный элемент, с указанным атрибутом
         *  Если name начинается с ".", то добавиться класс.
         *  Если name начинается с #, то добавиться id.
         *
         *  @param <string> element
         *  @param <string> name
         *  @return <element>
         */
        function createElement(element, name) {
            var unit = document.createElement(element);
            var attr = name[0] === '.' ? 'class' : 'id';
            unit.setAttribute(attr, name.substr(1));
            return unit;
        }

        /**
         *  Изменяем описание к изображению
         *  @param <element> slide
         *  @param <element> image
         */
        function changeDescription(slide, image) {
            var alt = image.getAttribute('alt');
            var figCaption = slide.getElementsByClassName(foliumCaption);
            if (figCaption.length) {
                figCaption[0].textContent = alt;
            } else {
                figCaption = createElement('figcaption', '.' + foliumCaption);
                figCaption.textContent = alt;
                slide.appendChild(figCaption);
            }
        }

        /**
         *  Инициализируем слайдер
         *  @param <element> item
         */
        function initSlider(item) {
            var currentImage = 0;
            var images = [];
            var foliumNavigationItems;
            var foliumNavigations = createElement('ul', '.' + foliumNavigation);

            // Выбираем только фотографии
            for (var i = 0; i < item.children.length; i++) {
                if (item.children[i].tagName.toLowerCase() === 'img') {
                    images.push(item.children[i]);
                }
            }

            // Скрываем все фотографии, кроме первой
//            for (var k = 1; k < images.length; k++) {
//                images[k].style.display = 'none';
//            }
//
//            for (var n = 0; n < images.length; n++) {
//                images[n].style.visibility = 'visible';
//            }

            images[0].style.display = 'block';

            // Добавляем навигацию
            for (var nav = 0; nav < images.length; nav++) {
                foliumNavigationItems = createElement('li', '.' + foliumNavigationItem);
                foliumNavigationItems.setAttribute('data-count', nav.toString());
                foliumNavigations.appendChild(foliumNavigationItems);
            }

            if (images.length) {
                changeDescription(item, images[currentImage]);
                foliumNavigations.children[currentImage].setAttribute('class', foliumNavigationItemCurrent);
                item.insertBefore(foliumNavigations, item.firstChild);

                // Обработка кликов по элементам навигации в слайдере
                foliumNavigations.addEventListener('click', function (e) {
                    var element = e.target;
                    var selectedId = element.getAttribute('data-count');
                    if (selectedId) {
                        foliumNavigations.children[currentImage].setAttribute('class', foliumNavigationItem);
                        element.setAttribute('class', foliumNavigationItemCurrent);
                        images[currentImage].style.display = 'none';
                        images[selectedId].style.display = 'block';
                        changeDescription(item, images[selectedId]);
                        currentImage = selectedId;
                    }
                }, false);
            }
        }

        // Инициализируем все слайдеры
        for (var slider = 0; slider < folium.length; slider++) {
            initSlider(folium[slider]);
        }
    };
    // Кроссбраузерное событие загрузки страницы
    if (window.addEventListener) {
        window.addEventListener("load", folium, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", folium);
    } else {
        window.onload = folium;
    }
})();
