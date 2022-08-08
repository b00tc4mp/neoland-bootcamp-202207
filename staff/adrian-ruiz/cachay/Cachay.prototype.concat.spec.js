describe('TESTING Cachay Concat', function () {
    it('two Cachay with numbers', function () {
        const cachay1 = new Cachay(1,2)
        const cachay2 = new Cachay(3,4,5)
        
        cachay1.concat(cachay2)

        expect(cachay1.length).to.equal(5)

        expect(cachay1).to.be.instanceof(Cachay)
        expect(cachay1[0]).to.equal(1)
        expect(cachay1[1]).to.equal(2)
        expect(cachay1[2]).to.equal(cachay2[0])
        expect(cachay1[3]).to.equal(cachay2[1])
        expect(cachay1[4]).to.equal(cachay2[2])
    })


    it('two Cachay with strings', function () {
        const cachay1 = new Cachay('h', 'o', 'l', 'a')
        const cachay2 = new Cachay('m', 'u', 'n', 'd', 'o')
        const result = new Cachay()
        result.concat(cachay1, cachay2)

        expect(result.length).to.equal(cachay1.length + cachay2.length)
        expect(result[0]).to.equal(cachay1[0])
        expect(result[1]).to.equal(cachay1[1])
        expect(result[2]).to.equal(cachay1[2])
        expect(result[3]).to.equal(cachay1[3])
        expect(result[4]).to.equal(cachay2[0])
        expect(result[5]).to.equal(cachay2[1])
        expect(result[6]).to.equal(cachay2[2])
        expect(result[7]).to.equal(cachay2[3])
        expect(result[8]).to.equal(cachay2[4])
    })

    it('Three Cachays with numbers',function(){
        const cachay1 = new Cachay(1,2)
        const cachay2 = new Cachay(3,4)
        const cachay3 = new Cachay(5,6)
        const result = new Cachay()
        result.concat(cachay1,cachay2,cachay3)

        expect(result.length).to.equal(cachay1.length + cachay2.length + cachay3.length)
        expect(result[0]).to.equal(cachay1[0])
        expect(result[1]).to.equal(cachay1[1])
        expect(result[2]).to.equal(cachay2[0])
        expect(result[3]).to.equal(cachay2[1])
        expect(result[4]).to.equal(cachay3[0])
        expect(result[5]).to.equal(cachay3[1])
    })
})