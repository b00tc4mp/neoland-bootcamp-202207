(function fun() {
    fun()
})()

// VM90:1 Uncaught RangeError: Maximum call stack size exceeded
//     at fun (<anonymous>:1:14)
//     at fun (<anonymous>:2:5)
//     at fun (<anonymous>:2:5)
//     at fun (<anonymous>:2:5)
//     at fun (<anonymous>:2:5)
//     at fun (<anonymous>:2:5)
//     at fun (<anonymous>:2:5)
//     at fun (<anonymous>:2:5)
//     at fun (<anonymous>:2:5)
//     at fun (<anonymous>:2:5)