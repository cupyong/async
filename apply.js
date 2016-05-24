var async = require('async');
var log = async.apply(console.log, ">");
log('hello');

console.log(">","hello")

//function(callback) { t.inc(3, callback); }
//async.apply(t.inc, 3);