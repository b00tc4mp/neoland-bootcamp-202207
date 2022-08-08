describe ('reverse',  function(){
    it( 'reverse odd bunch of numbers' , function(){
        const numbers =new Cachay ( 1 ,2 , 3, 4, 5, 6)
        const result = reverse(numbers)



        expect(result).to.equal(numbers)
        expect(result.lenght).to.equal(6)
        expect(result[0]).to.equal(6)
        expect(result[1]).to.equal(5)
        expect(result[2]).to.equal(4)
        expect(result[3]).to.equal(3)
        expect(result[4]).to.equal(2)
        expect(result[5]).to.equal(1)
    })
})
