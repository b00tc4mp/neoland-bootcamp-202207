// TABLERO DE AJEDREZ BASICO
var body = document.querySelector('body')
// var body = document.getElementsByTagName('body')
var i,j;
var topp=0,left=0,counter=0;

for ( i = 0; i < 8; i++) {

    for ( j = 0; j < 8 ; j++) {
        var element = document.createElement('div')
        element.style.left= left+'px';
        element.style.top=topp+'px';
        if(counter%2 === 0)
        {
            element.style.backgroundColor   ='brown';
        }
        
        body.append(element);      
             
        left=left+50
        counter++
   }
    left=0
    counter++
    topp=topp+50
}
