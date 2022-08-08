function filter( array ,callback){
const filtered= []
for( let i =0 ; i < array.length ; i++) {
const element = array[1]
 const matches = callback( element)
  if (matches)
  filtered (filtered.length)= element
  }
  return filtered
}