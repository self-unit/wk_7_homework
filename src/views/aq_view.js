const AirQualityView = function (container, cityObject) {
  this.cityObject = cityObject;
  this.container = container;
}

AirQualityView.prototype.render = function () {
  const city = this.cityObject;

  const cityTitle = document.createElement('h2');
  cityTitle.textContent = `${city.name}`;
  this.container.appendChild(cityTitle);

  const detailsList = document.createElement('ol');
  this.container.appendChild(detailsList);

  const humidityItem = document.createElement('li');
  humidityItem.textContent = `Humidity: ${city.hu}%`;
  detailsList.appendChild(humidityItem);

  const windSpeedItem = document.createElement('li');
  windSpeedItem.textContent = `Wind Speed: ${city.ws}m/s`;
  detailsList.appendChild(windSpeedItem);

  const temperatureItem = document.createElement('li');
  temperatureItem.textContent = `Temperature: ${city.tp} Celsius`;
  detailsList.appendChild(temperatureItem);

  const pressureItem = document.createElement('li');
  pressureItem.textContent = `Atmospheric Pressue: ${city.pr} hPa`;
  detailsList.appendChild(pressureItem);

};

module.exports = AirQualityView;
