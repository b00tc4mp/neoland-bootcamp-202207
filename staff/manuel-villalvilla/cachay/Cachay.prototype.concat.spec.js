describe('concat', function () {
    it('two arrays with numbers', function () {
        const cachay1 = new Cachay(1, 2)
        const cachay2 = new Cachay(3, 4, 5)
        const result = cachay1.concat(cachay2)

        expect(result).to.be.instanceof(Cachay)
        expect(result.length).to.be.equal(cachay1.length + cachay2.length)
        expect(result[0]).to.be.equal(cachay1[0])
        expect(result[1]).to.be.equal(cachay1[1])
        expect(result[3]).to.be.equal(cachay2[1])
        expect(result[2]).to.be.equal(cachay2[0])
        expect(result[4]).to.be.equal(cachay2[2])
    })


    it('two arrays with strings', function () {
        const cachay1 = new Cachay('h', 'o', 'l', 'a')
        const cachay2 = new Cachay('m', 'u', 'n', 'd', 'o')
        const result = cachay1.concat(cachay2)
        
        expect(result).to.be.instanceof(Cachay)
        expect(result.length).to.be.equal(cachay1.length + cachay2.length)
        expect(result[0]).to.be.equal(cachay1[0])
        expect(result[1]).to.be.equal(cachay1[1])
        expect(result[2]).to.be.equal(cachay1[2])
        expect(result[3]).to.be.equal(cachay1[3])
        expect(result[4]).to.be.equal(cachay2[0])
        expect(result[5]).to.be.equal(cachay2[1])
        expect(result[6]).to.be.equal(cachay2[2])
        expect(result[7]).to.be.equal(cachay2[3])
        expect(result[8]).to.be.equal(cachay2[4])
    })

    it('three arrays with numbers', function() {
        const cachay1 = new Cachay(1, 2);
        const cachay2 = new Cachay(3, 4);
        const cachay3 = new Cachay(5, 6);
        const result = cachay1.concat(cachay2, cachay3);

        expect(result).to.be.instanceof(Cachay)
        expect(result.length).to.be.equal(cachay1.length + cachay2.length + cachay3.length)
        expect(result[0]).to.be.equal(cachay1[0])
        expect(result[1]).to.be.equal(cachay1[1])
        expect(result[2]).to.be.equal(cachay2[0])
        expect(result[3]).to.be.equal(cachay2[1])
        expect(result[4]).to.be.equal(cachay3[0])
        expect(result[5]).to.be.equal(cachay3[1])
    })
    
})