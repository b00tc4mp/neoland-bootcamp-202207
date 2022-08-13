describe('Cachay.protoype.at',()=>{
    it('using an index normal',()=>{
        const abc = new Cachay (5, 12, 8, 130, 44)
        
        result = abc.at(2)


        expect(result).to.equal(8)

    })

    it('using an index negative',()=>{
        const abc = new Cachay (5, 12, 8, 130, 44)
        result = abc.at(-2)
        
        expect(result).to.equal(130)
       
        

    })

    it('using an index undefined',()=>{
        const abc = new Cachay (5, 12, 8, 130, 44)
        result = abc.at(5)
        
        expect(result).to.equal(undefined)
        
    })

    it('using an index negative undefined(2)',()=>{
        const abc = new Cachay (5, 12, 8, 130, 44)
        result = abc.at(-6)
        
        expect(result).to.equal(undefined)
        
    })
})