const getMap = () => {
  const ymaps = window.ymaps;

  ymaps.ready(function () {
    let Map = new ymaps.Map('map', {
      center: [59.938764, 30.323351],
      zoom: 16,
    },
    {
      searchControlProvider: 'yandex#search',
    });

    let Placemark = new ymaps.Placemark([59.938635, 30.323118], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/map-mark.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [-9, -22],
      iconContentOffset: [15, 15],
    });

    Map.controls.remove('trafficControl');

    Map.geoObjects
        .add(Placemark);
  });
};

export {getMap};
