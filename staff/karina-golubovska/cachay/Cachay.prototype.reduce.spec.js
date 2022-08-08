describe ('Cachay.prototype.reduce', ()=>  {
    it( 'should sum ' , ()=>{ 
        const cachay1 = new Cachay(1, 2, 3, 4)
        const initialValue = 0;
        const sumValues =(previousValue ,currentValue)=> previousValue + currentValue
        const result = cachay1.reduce(sumValues, initialValue)
        expect(result).to.equal(10)
        expect(result).to.be.a('number')
})

})