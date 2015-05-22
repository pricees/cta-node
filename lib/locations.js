var rp = require('request-promise'),
    xml2js = require('xml2js-promise'),
    qs = require('querystring'),
    Q = require('q');

Locations = {
  options: {},
  attributes: {},
  url: "http://lapi.transitchicago.com/api/1.0/ttpositions.aspx",
  validate: function() {
    for (key in ['rt', 'key']) {
      if (!options[key]) { 
        return new Error("Please add " + key + "to options dictionary"); 
      };
    }
  },
  fetch: function() {
    var that = this
        , defer = Q.defer();

    rp(this.url + "?" + qs.stringify(this.options))
      .then(xml2js)
      .then(function(json) { 
        that.attributes = json["ctatt"];
        return that
      })
      .then(defer.resolve)
      .then(null, defer.reject)
      .done();

    return defer.promise;
  }
}

module.exports = Locations
