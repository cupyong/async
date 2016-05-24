
var async = require('async');

//顺序执行 结果向下传递

async.waterfall([function (callback) {
        callback('test', 1);

    }, function (data, callback) {
        callback(null, 2);
    }
    ],
    function (err, results) {
        console.log(results);
    });

async.waterfall([
    function(callback){
        //task1
        callback(null,1);
    },function(data,callback){
       console.log(data)
        callback(null,2);
    }
],function(err,results){
    console.log(results);
});