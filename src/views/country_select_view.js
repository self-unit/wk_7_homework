const PubSub = require('../helpers/pub_sub.js');

const CountrySelectView = function (container) {
  this.container = container;
};

CountrySelectView.prototype.bindEvents = function () {
  PubSub.subscribe('AirQuality:country-list', (event) => {
    const countries = event.detail;
    this.populate(countries);
  });

  this.container.addEventListener('change', (event) => {
    const selectedCountry = event.target.value;
    PubSub.publish('SelectView:selected-country', selectedCountry);
  });
};

CountrySelectView.prototype.populate = function (countries) {
  countries.forEach((country) => {
    const option = document.createElement('option')
    option.textContent = country.state;
    option.value = country.state;
    this.container.appendChild(option);
  });
};

module.exports = CountrySelectView;
