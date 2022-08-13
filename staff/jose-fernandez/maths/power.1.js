
function pow(val,power){
     let s=1;
   for(let i= 0; i<power;i++)
   {
        s=s*val;
   }
   return s
}

console.log(pow(10,4))
//10000

console.log(pow(3,4))
//81

console.log(pow(2,3))
//8