var async = require('async');
var count = 0;
async.whilst(
    function () { return count < 5; },
    function (callback) {
        count++;
        console.log(count)
        setTimeout(callback, 1000);
    },
    function (err,data) {
        console.log(err)
    }
);