var async = require('async');
//forever函数比较特殊，它的功能是无论条件如何，函数都一直循环执行，只有出现程序执行的过程中出现错误时循环才会停止，callback才会被调用。
var count = 0;
async.forever(
    function (next) {
        count++;
        console.log(count)
        if (count === 10) {
            var b;
            var a = 1 + b;
            console.log(a)
            return;
        }
        setTimeout(next, 1000);
    },
    function (err) {
        console.log(err)
    })