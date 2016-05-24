var promise =new Promise(function(callback){
    setTimeout(function(){
        console.log(111)
        callback(null, 'one')
    },1000);
});

promise.then(function (data) {
    console.log(data)
})