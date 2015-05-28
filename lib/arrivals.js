var cta = require("cta-api")
    , xml2js = require('xml2js-promise')
    , lStops = require("./l_stops.js")
    , Q = require('q')
    , _ = require("lodash");

var Arrivals = {
  key: '',
  byStationNameAndColor: function(stationName, color) {
    var funcName = "byStationNameAndColor";
    if (!color) {
      funcName = "byStationName";
    }
    var mapids = _.uniq(_.pluck(lStops[funcName](stationName, color), 'mapId'))
    if (mapids.length == 0) {
      return new Error("Station name and color weren't found.");
    }
    var options = { key: this.key, mapid: mapids[0], max: 5 }
    return this.fetch(options) // returns a promise
  },

  fetch: function(options) {
    var defer = Q.defer();

    cta.train.arrivals.get(options
        , function(data) { 
          xml2js(data)
          .then(function(json) { return json["ctatt"]["eta"] })
          .then(defer.resolve)
        }
        , function(e) { defer.reject(e.message) })

    return defer.promise;
  }
}

module.exports = Arrivals
