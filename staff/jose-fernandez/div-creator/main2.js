// TABLERO DE AJEDREZ CON ARRAYS

var body = document.querySelector('body')
var i,j,colors;
colors=["green","yellow","blue","black","pink","purple","aqua","red"]
colors2=["red","pink","purple","aqua","yellow","green","blue","Black"]
var topp=0,left=0,counter=0;

for ( i = 0; i < 8; i++) {

    for ( j = 0; j < 8 ; j++) {
        var element = document.createElement('div')
        element.style.left= left+'px';
        element.style.top=topp+'px';
        
        if(counter%2 === 0)
        {
            element.style.backgroundColor =colors[i];
        }else
        {
            element.style.backgroundColor =colors2[i];
        }
        
        body.append(element);      
             
        left=left+50
        counter++
    }
    
    left=0
    counter++

    topp=topp+50
}
