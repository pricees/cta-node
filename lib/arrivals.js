var rp = require('request-promise'),
    xml2js = require('xml2js-promise'),
    qs = require('querystring'),
    fs = require('fs'),
    _ = require("lodash"),
    lStops = require("./l_stops.js"),
    Q = require('q');

var Eta = function(etas) {

  var txlNames = { staId: 'stationId',
      stpId: 'stopId',
      staNm: 'stationName',
      stpDe: 'stopDescription',
      rn: 'runNumber',
      rt: 'route',
      destSt: 'terminalDestination',
      destNm: 'terminalDestinationName',
      trDr: 'trainRoute',
      prdt: 'predictionTimestamp', // when this prediction made
      arrT: 'arrivalTime',
      //isApp: [ '0' ],
      //isSch: [ '0' ],
      //isDly: [ '0' ],
      //isFlt: [ '0' ],
      //flags: [ '' ],
      //lat: [ '42.0127' ],
      //lon: [ '-87.66617' ],
      //heading: [ '155' ] } ]
  }
  for (i in txlNames) {
    this[i] = eta[i]
    this[txlNames[i]] = eta[i]
  }
}

Arrivals = {
  key: '',
  url: "http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx",
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
    var that = this
        , defer = Q.defer();

    rp(this.url + "?" + qs.stringify(options))
      .then(xml2js)
      .then(function(json) { 
        return json["ctatt"]["eta"];
      })
      .then(defer.resolve)
      .then(null, defer.reject)
      .done();

    return defer.promise;
  }
}

module.exports = Arrivals
