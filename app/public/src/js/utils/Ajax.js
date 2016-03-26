'use strict';

module.exports = {
  request: function(endpoint, data, callback, method) {
    fetch(endpoint, {
      method: method,
      body: data,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      callback(data);
    })
    .catch((err) => {
      console.log('err', err);
    });
  },

  put: function(endpoint, data, callback) {
    this.request(endpoint, data, callback, 'put');
  },

  delete: function(endpoint, data, callback) {
    this.request(endpoint, data, callback, 'delete');
  }
};
