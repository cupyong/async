var async = require('async');
//用来处理有依赖关系的多个任务的执行
//示例中writeFile依赖getData和makeFolder,emailLink依赖writeFile。
// async.auto({
//     getData: function(callback){
//         callback(null, 'data', 'converted to array');
//     },
//     makeFolder: function(callback){
//         callback(null, 'folder');
//     },
//     writeFile: ['getData', 'makeFolder', function(callback, results){
//         callback(null, 'filename');
//     }],
//     emailLink: ['writeFile', function(callback, results){
//         callback(null, {'file':results.writeFile, 'email':'user@example.com'});
//     }]
// }, function(err, results) {
//     console.log('err = ', err);
//     console.log('results = ', results);
// });
async.auto({
    result1: function (callback) {
        setTimeout(function () {
            callback(null, 'functionResult1')
        }, 2000)
    },
    result2: function (callback) {
        setTimeout(function () {
            callback(null, 'functionResult2')
        }, 1000)
    },
    result3: ['result1', 'result2', function (callback, replyData) {
        setTimeout(function () {
            callback(null, replyData.result1 + replyData.result2);
        }, 1000)
    }]
}, function (err, data) {
    console.log(data)
});