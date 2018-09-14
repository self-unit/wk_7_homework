const Request = function (url) {
  this.url = url;
}

Request.prototype.get = function () {
  return fetch(this.url)
  .then(response => response.json());
};
// Request.prototype.get = function () {
//   return new Promise((resolve, reject) => {
//
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', this.url);
//     xhr.setRequestHeader('Accept', 'application/json');
//     xhr.send();
//
//     xhr.addEventListener('load', () => {
//       if (xhr.status !== 200) {
//         reject(`the data wasn't loaded, and the error was ${xhr.status}`);
//       }
//
//       const jsonString = xhr.responseText;
//       const data = JSON.parse(jsonString);
//       resolve(data);
//     });
//
//   });
//
// };

module.exports = Request;
