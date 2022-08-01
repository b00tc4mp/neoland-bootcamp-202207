d = new Date
// Mon Aug 01 2022 12:02:10 GMT+0200 (Central European Summer Time)
console.dir(d)
// VM2086:1 Mon Aug 01 2022 12:02:10 GMT+0200 (Central European Summer Time)[[Prototype]]: Objectconstructor: ƒ Date()getDate: ƒ getDate()getDay: ƒ getDay()getFullYear: ƒ getFullYear()getHours: ƒ getHours()getMilliseconds: ƒ getMilliseconds()getMinutes: ƒ getMinutes()getMonth: ƒ getMonth()getSeconds: ƒ getSeconds()getTime: ƒ getTime()getTimezoneOffset: ƒ getTimezoneOffset()getUTCDate: ƒ getUTCDate()getUTCDay: ƒ getUTCDay()getUTCFullYear: ƒ getUTCFullYear()getUTCHours: ƒ getUTCHours()getUTCMilliseconds: ƒ getUTCMilliseconds()getUTCMinutes: ƒ getUTCMinutes()getUTCMonth: ƒ getUTCMonth()getUTCSeconds: ƒ getUTCSeconds()getYear: ƒ getYear()setDate: ƒ setDate()setFullYear: ƒ setFullYear()setHours: ƒ setHours()setMilliseconds: ƒ setMilliseconds()setMinutes: ƒ setMinutes()setMonth: ƒ setMonth()setSeconds: ƒ setSeconds()setTime: ƒ setTime()setUTCDate: ƒ setUTCDate()setUTCFullYear: ƒ setUTCFullYear()setUTCHours: ƒ setUTCHours()setUTCMilliseconds: ƒ setUTCMilliseconds()setUTCMinutes: ƒ setUTCMinutes()setUTCMonth: ƒ setUTCMonth()setUTCSeconds: ƒ setUTCSeconds()setYear: ƒ setYear()toDateString: ƒ toDateString()toGMTString: ƒ toUTCString()toISOString: ƒ toISOString()toJSON: ƒ toJSON()toLocaleDateString: ƒ toLocaleDateString()toLocaleString: ƒ toLocaleString()toLocaleTimeString: ƒ toLocaleTimeString()toString: ƒ toString()toTimeString: ƒ toTimeString()toUTCString: ƒ toUTCString()valueOf: ƒ valueOf()Symbol(Symbol.toPrimitive): ƒ [Symbol.toPrimitive]()[[Prototype]]: Object
// undefined
d.__proto__
// {constructor: ƒ, toString: ƒ, toDateString: ƒ, toTimeString: ƒ, toISOString: ƒ, …}constructor: ƒ Date()getDate: ƒ getDate()getDay: ƒ getDay()getFullYear: ƒ getFullYear()getHours: ƒ getHours()getMilliseconds: ƒ getMilliseconds()getMinutes: ƒ getMinutes()getMonth: ƒ getMonth()getSeconds: ƒ getSeconds()getTime: ƒ getTime()getTimezoneOffset: ƒ getTimezoneOffset()getUTCDate: ƒ getUTCDate()getUTCDay: ƒ getUTCDay()getUTCFullYear: ƒ getUTCFullYear()getUTCHours: ƒ getUTCHours()getUTCMilliseconds: ƒ getUTCMilliseconds()getUTCMinutes: ƒ getUTCMinutes()getUTCMonth: ƒ getUTCMonth()getUTCSeconds: ƒ getUTCSeconds()getYear: ƒ getYear()setDate: ƒ setDate()setFullYear: ƒ setFullYear()setHours: ƒ setHours()setMilliseconds: ƒ setMilliseconds()setMinutes: ƒ setMinutes()setMonth: ƒ setMonth()setSeconds: ƒ setSeconds()setTime: ƒ setTime()setUTCDate: ƒ setUTCDate()setUTCFullYear: ƒ setUTCFullYear()setUTCHours: ƒ setUTCHours()setUTCMilliseconds: ƒ setUTCMilliseconds()setUTCMinutes: ƒ setUTCMinutes()setUTCMonth: ƒ setUTCMonth()setUTCSeconds: ƒ setUTCSeconds()setYear: ƒ setYear()toDateString: ƒ toDateString()toGMTString: ƒ toUTCString()toISOString: ƒ toISOString()toJSON: ƒ toJSON()toLocaleDateString: ƒ toLocaleDateString()toLocaleString: ƒ toLocaleString()toLocaleTimeString: ƒ toLocaleTimeString()toString: ƒ toString()toTimeString: ƒ toTimeString()toUTCString: ƒ toUTCString()valueOf: ƒ valueOf()Symbol(Symbol.toPrimitive): ƒ [Symbol.toPrimitive]()[[Prototype]]: Object
d.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
d.__proto__.__proto__.__proto__
// null

d.__proto__ === Date.prototype
// true

e = new Error
// Error
    // at <anonymous>:1:5
console.dir(e)
// VM2441:1 Error
//     at <anonymous>:1:5stack: "Error\n    at <anonymous>:1:5"[[Prototype]]: Object
// undefined
e.__proto__
// {name: 'Error', message: '', constructor: ƒ, toString: ƒ}
e.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
e.__proto__.__proto__.__proto__
// null
e.__proto__ === Error.prototype
// true