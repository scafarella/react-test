const assert = require('assert')
const product = require('../server/apis/product')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Product API', () => {
  it('all', () => {
      product.all()
      .then(data => {
          assert.equal(3, data.length)
      })
  });
});
