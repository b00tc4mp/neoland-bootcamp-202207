const datos = [{
    id:1,
    title: 'Peter Pan',
    year:2008
  },{
    id:2,
    title: 'Paw Patrol',
    year: 2017 
  },{
    id:3,
    title: 'Encanto',
    year: 2019
  }];
  
  // const getDatos = () =>{
  //   return datos
  // }
  // console.log(getDatos());
  
  
  //esto es algo sincrono
  //tengo un array de datos y esta función me lo devuelve
  
  //ahora si esto lo hago por una api esto será asincrono
  //por eso hare esa asincronia con el setTimeOut
  
  // const getDatos = ()=>{
  //   setTimeout(()=>{
  //     return datos
  //   },1500)
  // }
  // console.log(getDatos());
  //esto devuelve undefined por que cuando llamamos a la funcion y no hay nada que espere para que se resuelva
  // es aqui donde la promesa nos va a ayudar
  const getDatos = () =>{
    return new Promise((resolve, reject)=>{
      if (datos.length === 0){
        reject (new Error ('No existen Pelis'))
      }
      setTimeout(()=>{
      resolve (datos)
    },1500)
  })
  }
  // getDatos().then((datos) => console.log(datos))
  //lo mismo que decir
  // getDatos()
  //   .then((datos)=>console.log(datos));
  // aquí podemos concatenar promesas
  
  // ahora con await solo es valido dentro de una función asincrona
  // y tienes que usar la palabra reservada async antes de la función
  
  async function datosPeli (){
    try{
       const datosPeli = await getDatos()
       console.log(datosPeli)
    }catch (err){
      console.log(err.message)
    }
  }
  datosPeli()