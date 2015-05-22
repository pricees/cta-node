
var arrivals = require("./arrivals.js")
    , locations = require("./locations.js")
    , lStops = require("./l_stops.js")

var ctaNode = {
  apiKeys: {}, 
  train: {},
  bus: {},

  init: function(apiKeys) {
    this.apiKeys = apiKeys;

    arrivals.key = this.apiKeys["trainApiKey"];
    locations.key = this.apiKeys["trainApiKey"];
    lStops.key = this.apiKeys["trainApiKey"];

    this.train = {
      arrivals: arrivals,
      locations: locations,
      lStops: lStops,
    };
    return this;
  }
}


module.exports = ctaNode;
