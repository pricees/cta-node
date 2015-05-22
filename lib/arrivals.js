var rp = require('request-promise'),
    xml2js = require('xml2js-promise'),
    qs = require('querystring'),
    _ = require("lodash"),
    lStops = require("./l_stops.js"),
    Q = require('q');

var apiKeys =  JSON.parse(fs.readFileSync('.apikey', 'utf8'));
var options = { key: apiKeys["trainApiKey"], }

Arrivals = {
  options: {},
  attributes: {},
  url: "http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx",
  validate: function() {
    for (key in ['mapid', 'stpid', 'key']) {
      if (!options[key]) { 
        return new Error("Please add " + key + "to options dictionary"); 
      };
    }
  },
  byStationNameAndColor: function(stationName, color) {
    var mapids = _.uniq(_.pluck(lStops.byStationNameAndColor(stationName, color), 'mapId'))
    var options = { key: apiKeys["trainApiKey"], }
    

    };
  },

  fetch: function(options) {
    var that = this
        , defer = Q.defer();

    rp(this.url + "?" + qs.stringify(options))
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

module.exports = Arrivals
