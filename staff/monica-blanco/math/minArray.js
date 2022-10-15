
var numero = [2, 5, 6, 0, 3, 5, 8]

var menor = numero[0]
for (var i = 0; i < numero.length; i++)

    if (numero[i] < menor)
        menor = numero[i]
console.log(menor)