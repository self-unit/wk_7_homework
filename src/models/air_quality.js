const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const AirQuality = function () {
  this.cities = null;
  this.data = [];
}

AirQuality.prototype.bindEvents = function () {
  this.getListData();

  PubSub.subscribe('SelectView:selected-country', (event) => {
    const selectedCountry = event.detail;
    this.filterByCountry(selectedCountry);
  });

};

AirQuality.prototype.getListData = function () {
  const url = 'https://api.airvisual.com/v2/states?country=uk&key=HBxwK2JGPcNi5WBaz';
  const request = new Request(url);
  request.get()
  .then((data) => {
    PubSub.publish('AirQuality:country-list', data.data);
  })
  .catch((err) => {
    console.error(err);
  })
};

AirQuality.prototype.filterByCountry = function (selectedCountry) {
  const url = `https://api.airvisual.com/v2/cities?state=${selectedCountry}&country=uk&key=HBxwK2JGPcNi5WBaz`;
  const request = new Request(url);
  request.get()
  .then((data) => {
    this.cities = data.data;
    this.getCityData(selectedCountry);
  })
  .catch((err) => {
    console.error(err);
  })
};

AirQuality.prototype.getCityData = function (selectedCountry) {
  const cities = this.cities;
  console.log(cities);
  cities.forEach((city) => {
    const url = `https://api.airvisual.com/v2/city?city=${city.city}&state=${selectedCountry}&country=uk&key=HBxwK2JGPcNi5WBaz`;
    const request = new Request(url);
    request.get()
    .then((data) => {
      console.log(data.data);
      this.data.push(data.data)
      PubSub.publish('AirQuality:country-list', data.data);
    })
    .catch((err) => {
      console.error(err);
    })
  })
};

module.exports = AirQuality;
