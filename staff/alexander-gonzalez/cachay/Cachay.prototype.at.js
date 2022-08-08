Cachay.prototype.at = function(...values) {
  let result = new Cachay

  for (let i = 0; i < this.length; i++)
      result[result.length++] = this[i]

  for (let i = 0; i < values.length; i++)
      for (let j = 0; j < values[i].length; j++)

          result[result.length++] = values[i][j]


  return result
}

  /*let position = []
  for (let i = 0; i<this.length; i++)
     // let newElement = this[i]
   result=[this.length, position[i]]

   for(let i=0;i< values;i++ ){
     
    result=[values.length++, position[i]]
   }*/


   /*

  if (pos>0 && pos < this.length ){
        return this[pos]
    }
    else if (pos < 0 && -pos< this.length){
        return this[length+pos]
    }
  */
  
