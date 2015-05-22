var expect = require("expect.js"),
    fs = require('fs'),
    sinon = require("sinon")

var apiKeys =  JSON.parse(fs.readFileSync('.apikey', 'utf8'));
var options = { key: apiKeys["trainApiKey"] }

  var cta = require("../lib/cta-node.js");
describe("cta-node", function() {


  before(function() {
    cta.init(apiKeys);
  });

  describe(".train", function() {
    it("to have arrivals", function() { 
      expect(cta.train.arrivals).to.be.ok();
    });

    it("to have locations", function() { 
      expect(cta.train.locations).to.be.ok();
    });

    it("to have lStops", function() { 
      expect(cta.train.lStops).to.be.ok();
      console.dir(cta.train.lStops.byStationName('wilson'));
    });
  });

  describe(".bus", function() {
    it("is empty", function() { 
      expect(cta.bus).to.be.empty();
    });
  });
});

