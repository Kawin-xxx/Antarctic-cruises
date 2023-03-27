const getMap = () => {
  const ymaps = window.ymaps;

  ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
      center: [59.938764, 30.323351],
      zoom: 16,
    },
    {
      searchControlProvider: 'yandex#search',
    });

    let MyBalloonContentLayoutClass = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #011c40;">$[properties.iconContent]</div>'
    );

    let myPlacemarkWithContent = new ymaps.Placemark([59.938635, 30.323118], {
      balloonContent: 'Мы находимся здесь.',
    },
    {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/svg/map-mark.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [-9, -22],
      iconContentOffset: [15, 15],
      iconContentLayout: MyBalloonContentLayoutClass,
    });

    myMap.geoObjects
        .add(myPlacemarkWithContent);
  });
};

export {getMap};
