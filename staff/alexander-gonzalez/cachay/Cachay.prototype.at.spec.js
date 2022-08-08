describe('Cachay.prototype.at', function(){
    it('exercise 1', function(){
        const element= new Cachay('cat','dog','elephant')
        const position = 2
        const result = element.at(position)//(array, position)
        
        
        
        //expect(result).to.be.instanceof(Cachay)
         expect(result[2]).to.equal(element[position]);
    })
    it('excerise 2', function(){
        const element= new Cachay('Adios',1,'Mundo')
        const position = 0
        const result = element.at(position)
        
        
       // expect(result).to.be.instanceof(Cachay)
         expect(result[0]).to.equal(element[position])
    })



})