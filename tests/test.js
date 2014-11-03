var assert = require("assert")

var app = require("../app.js")

describe('Cake', function(){
  describe('#getMyPie()', function(){
    it('should return 5, because pie is 5', function(){
      assert.equal(5, new app.Cake().getMyPie());
    })
  })
})

