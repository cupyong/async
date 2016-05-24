var async = require('async');

async.parallelLimit([
        function(callback){
            callback(null, 'one');
        },
        function(callback){
            callback(null, 'two');
        }
    ],
    2,
    function(err, results){console.log(results)});

var oldtime = (new Date()).getTime()
async.parallelLimit([
        function(callback){
            setTimeout(function(){
                callback(null, 'one');
            }, 1000);
        },
        function(callback){
            setTimeout(function(){
                callback(null, 'two');
            }, 1000);
        }
    ],
    1,
    function(err, results){
        var newTime = (new Date()).getTime() ;
        console.log(newTime-oldtime)
        console.log(results);
    });