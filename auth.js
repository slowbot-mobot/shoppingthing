var bcrypt = require('bcrypt');
require('dotenv').config();

var rounds = process.env.AUTH_COMPLEXITY || 10;

var compare = function(pass, cb){
  bcrypt.compare(pass, rounds, cb);
};

var hash = function(pass, cb){
  bcrypt.hash(pass, rounds, cb);
};

module.exports = {
  compare: compare,
  hash: hash
};
