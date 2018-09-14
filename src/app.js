const airQuality = require('./models/air_quality.js');
const airQualityCountryListView = require('./views/aq_country_list_view.js');
const airQualityContaminantlistView = require('./views/aq_contaminant_list_view.js');
const airQualityView = require('./views/aq_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript loaded");

  const airQuality = new AirQuality();
  airQuality.bindEvents();

  // const selectCountryContainer = document.querySelector('#country-menu');
  // const airQualityCountryListView = new AirQualityCountryListView(selectCountryContainer);
  // airQualityCountryListView.bindEvents();

  // const selectContaminantContainer = document.querySelector('#contaminant-menu');
  // const airQualityContaminantListView = new AirQualityContaminantListView(selectContaminantContainer);
  // airQualityContaminantListView.bindevents();

  // const resultContainer = document.addEventListener('#')
  // const airQualityView = new AirQualityView();
  // airQualityView.bindEvents();

})
