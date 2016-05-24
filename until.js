var async = require('async');
// 和whilst相反 为false的时候执行
var count = 5;
async.until(
    function () { return count < 0; },
    function (callback) {
        count--;
        console.log(count)
        setTimeout(callback, 1000);
    },
    function (err) {

    }
);