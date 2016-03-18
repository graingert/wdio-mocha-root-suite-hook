var expect = require('chai').expect;

describe('test suite', function() {
  it('test case', function (){
    expect(global.didRunBeforeHook).to.be.true
  });
});
