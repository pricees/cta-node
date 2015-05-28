var cta = require("cta-api")
    , xml2js = require('xml2js-promise')
    , Q = require('q');

Locations = {
  key: '',
  validate: function() {
    for (key in ['rt', 'key']) {
      if (!options[key]) { 
        return new Error("Please add " + key + "to options dictionary"); 
      };
    }
  },
  fetch: function(options) {
    var defer = Q.defer();

    cta.train.locations.get(options
        , function(data) { 
          xml2js(data)
          .then(function(json) { return json["ctatt"] })
          .then(defer.resolve)
        }
        , function(e) { defer.reject(e.message) })

    return defer.promise;
  }
}

module.exports = Locations
