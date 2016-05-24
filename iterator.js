var async = require('async');
//将一组函数包装成为一个iterator，可通过next()
//得到以下一个函数为起点的新的iterator。该函数通常由async在内部使用，但如果需要时，也可在我们的代码中使用它。

var iter = async.iterator([
    function() { console.log('111') },
    function() { console.log('222') },
    function() { console.log('333') }
]);
iter();
iter.next()();
iter.next().next()();