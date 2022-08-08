describe('TESTING Cachay find', function(){
    it('Return element bigger than 10', () => {

        const testingCachay = new Cachay (5,12,8,130,44)
        const result = testingCachay.find(function(element){
            return element > 10
        })

        expect(result).to.equal(12)
    })

    it('Find object in array with specific property', () => {

        const testingCachay = new Cachay( 
        {nombre: 'manzanas', cantidad: 2},
        {nombre: 'bananas', cantidad: 0},
        {nombre: 'cerezas', cantidad: 5})

        function esCereza(fruta) {
            return fruta.nombre === 'cerezas';
        }
    
        const result = testingCachay.find(esCereza)
    
        expect(result).to.equal(testingCachay[2])
    })

    it('Returns undefined on element that DOES NOT EXISTS', () => {
        const testingCachay = new Cachay(5,12,8,130,44)

        const result = testingCachay.find(function(element){
            return element > 150
        })

        expect(result).to.equal(undefined)
    })

    it('Find in Cachay with empty indexes', () => {

        const testingCachay = new Cachay(5,'','',130,44)

        const result = testingCachay.find(function(element){
            return element >10
        })

        expect(result).to.equal(130)
    })

    it('Find in cachay with null and undefined elements', () => {

        const testingCachay = new Cachay(5, null, undefined, 130, 44)

        const result = testingCachay.find(function(element){
            return element > 10
        })

        expect(result).to.equal(130)

    })

    it('Find in Cachay with element deleted by callback function', () => {

        const testingCachay = new Cachay(5,null,undefined,130,44)

        const result = testingCachay.find(function(element){
            delete testingCachay[3]
            return element > 10
        })

        expect(result).to.equal(44)
    })
    

    // TODO -> TESTING NOT VALID ARGUMENTS
})