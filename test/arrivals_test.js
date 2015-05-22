var expect = require("expect.js"),
    arrivals = require("../lib/arrivals.js"),
    Q = require('q'),
    fs = require('fs'),
    sinon = require("sinon")
    , fixtures = require("./response_fixtures.js");


var apiKeys =  JSON.parse(fs.readFileSync('.apikey', 'utf8'));
var options = { key: apiKeys["trainApiKey"], }

describe("Arrivals", function(){
  before(function(){
    // ...
  });

  describe("#byStationNameAndColor()", function() {
        arrivals.byStationNameAndColor('wilson', 'red')
          .then(function(arr) { 
            console.dir(arr.attributes["eta"]);
            expect(arr.attributes).to.not.be.empty();
          })
          .then(null, console.log)
          .done()
  });

  describe("#validations()", function() {
    it("requires a mapid", function() {
      arrivals.options = {}
    })
  }),
  describe('#fetch()', function(){
    context('something', function(){
      it('fetchs the ariival response', function(){
        arrivals.options = {
          key: apiKeys["trainApiKey"], 
          max: "3",
          mapid: "40360"
        };

        arrivals.fetch()
          .then(function(arr) { 
            expect(arr.attributes).to.not.be.empty();
          })
          .then(null, console.log)
          .done()
      });
    });
  });

  describe("#station_id()", function() {
    it("returns the statid", function() { 
      arrivals.attributes = fixtures.responses["arrivalsJSON"]["ctatt"];
      //expect(arrivals.attributes).to.eql(true);
    })
  })
});
