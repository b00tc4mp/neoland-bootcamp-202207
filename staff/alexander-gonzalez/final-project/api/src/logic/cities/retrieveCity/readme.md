retrieveCity ---->  tenemos un validateText donde verificara el id de la ciudad y un verifiObjectId donde verificara al usuario y su id.
retornamos al usuario utilizando el metodo findById y nos dara como resultado un numero que es us id.
luego en la linea 17 utilizamos un then para el manejo de errores.
pasamos a la linea 20 y retornamos un CityFindById donde nos mostrara el id de la ciudad recuperada. 
Luego pasa por los handler y por rutas, donde verificara los errores o si en caso de que no tenga errores, pasara como (null), y me dara un numero 200.
luego verificara, que el usuario del numero o del id tanto(sea tal persona por ejemplo: pepito grillito)
luego en la ciudad tanto con el id tanto(verificara que sea la ciudad en este caso: roma).
una vez finalizado con los id de ciudad como usuario y sabiendo que usuario y que ciudad se recupera, pasamos a finalizar con sanitizar..



¿que debo hacer?
iterar sobre los places de la ciudad y marcar si es favorito o no lo es(true o false) y crear una propiedad a cada uno isFav

respuesta:
iterar sobre los places, es crear un bucle for sobre los places, for(....){ ...}
y ver cual es el favorito y cual no!
para eso seria un true o un false.
Luego debo crear una propiedad para ellos llamada (isFav)
