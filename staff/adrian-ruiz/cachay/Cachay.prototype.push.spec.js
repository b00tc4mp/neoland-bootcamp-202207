describe('TESTING Cachay push', () => {
    it('Push a number and return new Cachai length', () =>{
        
        const newNumbersCachay = new Cachay(10,20,30,40)
        const result = newNumbersCachay.push(50)

        expect(newNumbersCachay).to.be.instanceof(Cachay)
        expect(result).to.equal(5)
        expect(newNumbersCachay[0]).to.equal(10)
        expect(newNumbersCachay[1]).to.equal(20)
        expect(newNumbersCachay[2]).to.equal(30)
        expect(newNumbersCachay[3]).to.equal(40)
        expect(newNumbersCachay[4]).to.equal(50)
    })

    it('Push 3 numbers and return new Cachai length', () =>{
        
        const newNumbersCachay = new Cachay(10,20,30,40)
        const result = newNumbersCachay.push(50,60,70)

        expect(newNumbersCachay).to.be.instanceof(Cachay)
        expect(result).to.equal(7)
        expect(newNumbersCachay[0]).to.equal(10)
        expect(newNumbersCachay[1]).to.equal(20)
        expect(newNumbersCachay[2]).to.equal(30)
        expect(newNumbersCachay[3]).to.equal(40)
        expect(newNumbersCachay[4]).to.equal(50)
        expect(newNumbersCachay[5]).to.equal(60)
        expect(newNumbersCachay[6]).to.equal(70)
    })

    it('Push one string  and return new Cachai length', () =>{
        
        const newNumbersCachay = new Cachay('Jose','Carlos','Mariano')
        const result = newNumbersCachay.push('Pepe')

        expect(newNumbersCachay).to.be.instanceof(Cachay)
        expect(result).to.equal(4)
        expect(newNumbersCachay[0]).to.equal('Jose')
        expect(newNumbersCachay[1]).to.equal('Carlos')
        expect(newNumbersCachay[2]).to.equal('Mariano')
        expect(newNumbersCachay[3]).to.equal('Pepe')
    })
    it('Push 3 strings  and return new Cachai length', () =>{
        
        const newNumbersCachay = new Cachay('Jose','Carlos','Mariano')
        const result = newNumbersCachay.push('Pepe','Juan','Sebastian')

        expect(newNumbersCachay).to.be.instanceof(Cachay)
        expect(result).to.equal(6)
        expect(newNumbersCachay[0]).to.equal('Jose')
        expect(newNumbersCachay[1]).to.equal('Carlos')
        expect(newNumbersCachay[2]).to.equal('Mariano')
        expect(newNumbersCachay[3]).to.equal('Pepe')
        expect(newNumbersCachay[4]).to.equal('Juan')
        expect(newNumbersCachay[5]).to.equal('Sebastian')
    })
})