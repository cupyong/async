var async = require('async');

var count = 5;
async.doUntil(
    function (callback) {
        count--;
        console.log(count)
        setTimeout(callback, 1000);
    },
    function () { return count < 0; },
    function (err) {

    }
);