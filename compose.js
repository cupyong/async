var async = require('async');


//使用compose可以创建一个异步函数的集合函数，将传入的多个异步函数包含在其中，当我们执行这个集合函数时，会依次执行每一个异步函数，每个函数会消费上一次函数的返回值。

//我们可以使用compose把异步函数f、g、h，组合成f(g(h()))的形式，通过callback得到返回值，请看示例：

function fn1(n, callback) {
        setTimeout(function () {
        callback(null, n + 1);
    }, 1000);
}
function fn2(n, callback) {
    setTimeout(function () {
        callback(null, n * 3);
    }, 1000);
}
var demo = async.compose(fn2, fn1);
demo(6, function (err, result) {
    console.log(result)
});