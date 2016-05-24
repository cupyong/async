var async = require('async');

//立即执行
// async.parallel([
//         function(callback){
//             callback(null, 'one');
//         },
//         function(callback){
//             callback(null, 'two');
//         }
//     ],
//     function(err, results){
//         console.log(results)
//     });
var oldtime = (new Date()).getTime()
async.parallel([
        function(callback){
            setTimeout(function(){
                callback(null, 'one')
            },1000);
        },
        function(callback){
            setTimeout(function(){
                callback(null, 'two')
            },1000);
        }
    ],
    function(err, results){
        var newTime = (new Date()).getTime() ;
        console.log(newTime-oldtime)
        console.log(results);
    });