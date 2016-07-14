var assert = require('chai').assert;
var auth = require('../auth.js');

describe('auth', function(){
  it('should match hashed password', function(){
    var plaintext= 'words';
    auth.hash(plaintext, function(err, hash){
      assert.isnull(err, 'hashing successful');
      assert.notStrictEqual(pass, hash, 'hash and pass are different');
      auth.compare(plantext, hash, function(err, ismatch){
        assert.isnull(err, 'comparison successful');
        assert.isTrue(ismatch, 'it is a match!');
      });
    });
  });
});
