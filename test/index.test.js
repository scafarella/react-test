const assert = require('assert')
const product = require('../server/apis/product')
const proxyquire = require('proxyquire')
const sinon = require('sinon')

const chai = require('chai');
const should = chai.should();
const expect = chai.expect();

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Product API', () => {
  var productMock, productController;

  before(function () {
    productMock = {
      all: sinon.stub(product,'all').rejects("test")
    }

    productController = proxyquire('../server/controllers/product.controller', {
      '../apis/product': productMock
    });
  })

  describe('Product Controller', () => {
    it('returns an error', (done) => {
      var res = {
        json(result){
            result.should.have.property('error');
            result.should.have.property('code');
            result.code.should.equal('GENERIC_ERROR');
            result.error.should.equal('Generic Error');
            done()
        }
      }
      productController.all({},res)

    });
  })

});
