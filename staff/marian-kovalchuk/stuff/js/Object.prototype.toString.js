({}).toString()
// '[object Object]'
o = {}
// {}
o.toString()
// '[object Object]'
o.toString = function() { return '...' }
// ƒ () { return '...' }
o.toString()
// '...'
o
// {toString: ƒ}toString: ƒ ()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
o.__proto__.toString()
// '[object Object]'