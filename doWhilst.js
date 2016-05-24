var async = require('async');

var count = 0;
async.doWhilst(
    function (callback) {
        count++;
        console.log(count)
        setTimeout(callback, 1000);
    },
    function () { return count < 5; },
    function (err) {
   })
