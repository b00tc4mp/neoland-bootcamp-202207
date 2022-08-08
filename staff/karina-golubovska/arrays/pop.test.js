describe('pop',function(){
    test ('pops a plant' , function(){
        const plants = ['brocoli', 'cauliflower','cabbage','kale','tomato']
        const length =plants.length
        const plant = pop(plants)
      
        check(plant, 'tomato')
        check(plants.length , length-1)
        check(plants[0] ,'brocoli')
        check(plants[1] ,'cauliflower')
        check(plants[2] ,'cabbage')
        check(plants[3] ,'kale')
        
    })
})