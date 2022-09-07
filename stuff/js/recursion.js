var a = [10, 20, 30]

var i = 0
var e = a[i];
    
(function iterate() {
    if (i < a.length) {
        //console.log(e, Date.now())
        console.log(e, performance.now())
        
        i++
        e = a[i]

        iterate()
    }
})()
// VM988:9 10 398897.3999999985
// VM988:9 20 398897.5
// VM988:9 30 398897.59999999404