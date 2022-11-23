 
 retrieveFavoritePLaces ---> llamamos a verifyObjectId para que verifique el id del usuario, ya que sera el usuario quien recupere sus lugares favoritos
 luego retornamos el Usuario y lo buscamos por el metodo find by id 
 luego se encargara el Handler osea el manejo para verificar si el id del usuario es el correcto, buscara en el token, donde el token mirara si es el usuario
 corresponde realmente con su email y password, de lo contrario mandaria un error. 
 Luego iriamos a la Logica, donde verificara todos los manejos de errores posibles, si encuentra uno nos avisara y nos mandara algun tipo de mensaje, por ejemplo el 404, 500, etc ...
 si todo va bien del runWhitErrorHandling pasariamos a la siguiente logica de la api, donde seria el enrutamiento y verificara si todo esta bien, dara (Null) y sera un numero 200.
 Si todo va bien los datos del usuario pasaran por un lean(), que manda los datos mas planos y mas rapido,
 pasaremos por los catch y errors, pero como el usuario ha dado 200 nos saltamos al siguiente paso y ese seria el de la ciudad ya que el usuario existe.


return User.findById(userId)
    .lean()
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      if (!user) throw new NotFoundError(`user with id ${userId} not found`);


 Entonces retornamos  la busqueda de la ciudad que seria City.find  donde buscara las ciudades que esten en base de datos y donde encontrara las 3 ciudades fundamentales, por ejemplo:
 Paris, Roma, London.


 return City.find()
        .lean()
        .catch((error) => {
          throw new SystemError(error.message);
        })
        .then((cities) => {
          const placesArray = [];

          cities.forEach((city) => {
            for (let i = 0; i < city.places.length; i++)
              placesArray[placesArray.length] = city.places[i];
          });
          return placesArray;
        })



   Creamos una constante placesArray = [] donde estara vacio, ya que alli se mantendran o se conservaran las escogidas por el usuario.  Luego utilizamos un nuevo metodo 
 que es el forEach y ponemos cities.forEach donde encontrara el id el objectid de la ciudad y todo lo que contiene la ciudad en base de datos.


  .then((cities) => {
          const placesArray = [];



 
 Luego creamos un bucle for() donde iremos iterando los places de cada ciudad, cada ciudad tiene 5 places diferentes donde iteraremos todos los places de cada ciudad en si.  encontrara 15 places en total, y luego retornaremos los placesarray.

    cities.forEach((city) => {
            for (let i = 0; i < city.places.length; i++)
              placesArray[placesArray.length] = city.places[i];
          });
          return placesArray;
        })

 para casi finalizar, pasariamos un places.forEach para practicamente ordenar los places como en las citys y nos dara un orden de cada una con sus descripciones y todo lo que conlleva los places en base de datos, tal como lo hicimos anteriormente con las ciudades.
 luego creamos otro bucle for() donde iteramos en cada uno de los places, ¿y que verificamos aqui? que, los places siendo los favoritos pasen a string toString()
 luego creamos lo siguiente:
        


        places.forEach((place) => {
           
            for (let i = 0; i < place.favorites.length; i++) {
              if (place.favorites[i].toString() === userId)

              favoritesArray.push(place);
            }



   favoritesArray.push(place);  hacemos un push a los favoritesArray para subir cada favorito de los places, cuantos favoritos tiene el usuario, ( en este caso nuestro usuario tiene 2 favoritos).
 Luego lo que hacemos al final con el .then()=> es que busca los dos favoritos del usuario y manda algun tipo de error si no corresponde a sus favoritos.
 si lo son entonces generamos un favoritePlaces.forEach y lo pasamos tambien por toString, sanitizamos places y finalizamos retornando favoritePlaces..

 Recordar que los places van embebidos junto a City, por eso podemos llamarles dentro de Cities sin problemas.


 quedaria de esta forma el ejemplo general:

   <----------------------------------------------------------------->

 return User.findById(userId)
    .lean()
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      if (!user) throw new NotFoundError(`user with id ${userId} not found`);

      return City.find()
        .lean()
        .catch((error) => {
          throw new SystemError(error.message);
        })
        .then((cities) => {
          const placesArray = [];

          cities.forEach((city) => {
            for (let i = 0; i < city.places.length; i++)
              placesArray[placesArray.length] = city.places[i];
          });
          return placesArray;
        })
        .then((places) => {
          const favoritesArray = [];

          places.forEach((place) => {
           
            for (let i = 0; i < place.favorites.length; i++) {
              if (place.favorites[i].toString() === userId)

              favoritesArray.push(place);
            }

          });

          return favoritesArray;
        })
        .then((favoritePlaces) => {
          if (!favoritePlaces)
            throw new NotFoundError(`no favorite places found`);

          // sanitize
          favoritePlaces.forEach((place) => {
            place.id = place._id.toString();
            delete place._id;

            delete place.__v;
          });

          return favoritePlaces;
        });
    });
}

module.exports = retrieveFavoritePlaces;

 <------------------------------------------------>