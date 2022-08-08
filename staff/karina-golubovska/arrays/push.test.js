describe('push' ,function(){
    test ('pushes animales', function(){
        const animals = ['pigs','goats','sheep']
        const count = push(animals ,'cows')

        check (count, 4)
        check (animals.length, count)
        check (animals[animals.length - 1], 'cows')
        check (animals[0] , 'pigs')
        check (animals[1] , 'goats')
        check (animals[2] , 'sheep')
    })
})

//typeoff