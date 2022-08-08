describe('TESTING Cachay indexOf', function(){
    it('Return index of a string that exist, starting default', function(){
        const testingCachay = new Cachay('dog', 'cat', 'elephant', 'monkey')
        const result = testingCachay.indexOf('elephant')

        expect(result).to.equal(2)
        
    })

    it('Return index of a word that does NOT exist, starting default', function(){
        const testingCachay = new Cachay('dog', 'cat', 'elephant', 'monkey')
        const result = testingCachay.indexOf('pepe')
        
        expect(result).to.equal(-1)
        
    })

    it('Return index of a repeated word, starting index 3', function(){
        const testingCachay = new Cachay('dog', 'cat', 'elephant', 'monkey','dolphin','panda','cat','elephant')
        const result = testingCachay.indexOf('cat',3)
        
        expect(result).to.equal(6)
    })

    it('Return index of a word that does NOT exist, starting index 3 ', () => {

        const testingCachay = new Cachay('dog', 'cat', 'elephant', 'monkey','dolphin','panda','cat','elephant')
        const result = testingCachay.indexOf('pepe',3)
        
        expect(result).to.equal(-1)
    })

    
})