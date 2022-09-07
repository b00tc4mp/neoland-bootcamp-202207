//var a // declaration
//a = 1 // definition
var a = 1 // declaration & definition

var b = 2

var c = a + b

var d = c

var o = {}

var p = o

o.v = 1

p.v = p.v + 1

o.v = p.v + 1

var q = {}

q.r = p

q.r.v = q.r.v + 1

q.r.f = function(a, b) { return a + b }

q.r.f.g = q.r.f(1, 2)

q.r.f.h = []

q.r.f.h[0] = 1

q.r.f.h[1] = 2

q.r.f.h[2] = q.r.f.h[0] + q.r.f.h[1]

q.r.f.h[5] = 4

q.r.f.h[5] = 7

o[0] = 1

o['0'] = 2

o.name = 'Peter'

o['name'] = 'Petra'

var s = 'surname'

o[s] = 'Pan'

o[s] = 'Bread'

var n = 'name'

o[n] = 'Wendy'

var i = 5

q.r.f.h[i] = 8