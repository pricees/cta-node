var expect = require("expect.js")
    , arrivals = require("../lib/arrivals.js")
    , dateHelper = require("../lib/date_helper.js")
    , Q = require('q')
    , fs = require('fs')
    , sinon = require("sinon")
    , fixtures = require("./response_fixtures.js");


var apiKeys =  JSON.parse(fs.readFileSync('.apikey', 'utf8'));
arrivals.key = apiKeys["trainApiKey"]

describe("Arrivals", function(){
  before(function(){
  });

  describe("#byStationNameAndColor()", function() {
        arrivals.byStationNameAndColor('sheridan', 'red')
          .then(function(arr) { 
            expect(arr).to.not.be.empty();
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
        var options = { key: arrivals.key, max: 5, mapid: "40360" };
        arrivals.fetch(options)
          .then(function(arr) { 
            expect(arr).to.not.be.empty();
          })
          .then(null, console.log)
          .done()
      });
    });
  });
});
