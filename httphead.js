// var http = require('http');
//
// //http://open.smartstudy.com/baidu/wordVideos/sitemap?token=CEXWZP3MB1M8LC5LKRIHETE59G5JIWU1
// //var options = {method: 'HEAD', host: 'localhost', port: 8005, path: '/sitemap'};
// //var options = {method: 'HEAD', host: 'media8.smartstudy
// // .com', port: 80, path: '/shguoxue/sitemap.xml'};
// var options = {method: 'HEAD', host: 'open.smartstudy.com', port: 80, path: '/baidu/wordVideos/sitemap?token=CEXWZP3MB1M8LC5LKRIHETE59G5JIWU1'};
// var req = http.request(options, function(res) {
//         console.log(JSON.stringify(res.headers));
//     }
// );
// req.end();

var _= require('underscore');

var map =_.map([1, 2, 3], function(num){ return num * 3; });

console.log(map)

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);

console.log(sum)