var async = require('async');

//顺序执行 一次输出结果
async.series([
    function (callback) {
        callback(null, 1);
    },
    function (callback) {
        callback(null, 2);
    }
], function (err, results) {
    console.log(results);
});