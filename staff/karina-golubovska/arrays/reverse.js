function reverse (array) {
for ( let i = 0 ; i < array.length/2; i++ ){
const temp = array[i]
const reerIndex  = array.length-1-i
array[i] = array[reerIndex]
array[reerIndex] = temp 
}
return array
}

/*
якщо не парне число наприклад array= (7)
const limit = Math.floor( arrra.length /2)
for (let i = 0 ;i< limit ; i ++)
   /* var temp = a [0]
a [0] = a[a.length-1]
a(a.length-1) = temp
temp= a[1]
a[1]=a[a.lenth -2]
a[a.lenth-2] = temp
temp  = a[2]
a[2] = a[a.length-3]
a[a.lengt-3] = temp
}*/
