var i = 1

while (i <= 10) {
    console.log(i)

    i++
}
// instrument.ts:129 1
// instrument.ts:129 2
// instrument.ts:129 3
// instrument.ts:129 4
// instrument.ts:129 5
// instrument.ts:129 6
// instrument.ts:129 7
// instrument.ts:129 8
// instrument.ts:129 9
// instrument.ts:129 10

// #2

var i = 0

while (i++ <= 10) {
    console.log(i)
}
// instrument.ts:129 1
// instrument.ts:129 2
// instrument.ts:129 3
// instrument.ts:129 4
// instrument.ts:129 5
// instrument.ts:129 6
// instrument.ts:129 7
// instrument.ts:129 8
// instrument.ts:129 9
// instrument.ts:129 10