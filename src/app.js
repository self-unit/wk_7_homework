const AirQuality = require('./models/air_quality.js');
const CountrySelectView = require('./views/country_select_view.js');
const AirQualityListView = require('./views/aq_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript loaded");

  const airQuality = new AirQuality();
  airQuality.bindEvents();

  const selectCountryContainer = document.querySelector('#country-menu');
  const countrySelectView = new CountrySelectView(selectCountryContainer);
  countrySelectView.bindEvents();

  const resultsContainer = document.querySelector('#results');
  const airQualityListView = new AirQualityListView(resultsContainer);
  airQualityListView.bindEvents();

})
