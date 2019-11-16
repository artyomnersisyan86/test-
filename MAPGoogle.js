ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [40.182562, 44.507408],
            zoom: 4
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([40.182562, 44.507408], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Երևան, Բուզանդի փողոց, 87",
            // balloonContentBody: "Содержимое <em>балуна</em> метки",
            // balloonContentFooter: "Подвал",
            hintContent: "Երևան, Բուզանդի փողոց, 87"
        });

    myMap.geoObjects.add(myPlacemark);

    // Открываем балун на карте (без привязки к геообъекту).
    // myMap.balloon.open([51.85, 38.37], "Содержимое балуна", {
    //     // Опция: не показываем кнопку закрытия.
    //     closeButton: false
    // });

    // Показываем хинт на карте (без привязки к геообъекту).
    // myMap.hint.open(myMap.getCenter(), "Одинокий хинт без метки", {
    //     // Опция: задержка перед открытием.
    //     openTimeout: 1500
    // });
}