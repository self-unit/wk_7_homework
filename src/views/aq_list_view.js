const PubSub = require('../helpers/pub_sub.js');
const AirQualityView = require('./aq_view.js');

const AirQualityListView = function (container) {
  this.container = container;
};

AirQualityListView.prototype.bindEvents = function () {
  PubSub.subscribe('AirQuality:city-data', (event) => {
    this.citiesData = event.detail;
    this.render();
  });
};

AirQualityListView.prototype.render = function () {
  this.container.innerHTML = "";
  const cities = this.citiesData;
  // console.log(cities);
  cities.forEach((city) => {
    console.log('has individual city data', city.data);
    const cityDetail = new AirQualityView(this.container, city)
    cityDetail.render();
  });
};

module.exports = AirQualityListView;
