describe('concat', function () {
    it('concate two cachays with numbers', function () {
        const cachay1 = new Cachay(1, 2)
        const cachay2 = new Cachay (3, 4, 5)
        const result = cachay1.concat(cachay2);

        expect(result.length).to.equal(cachay1.length + cachay2.length)
        expect(result[0]).to.equal(cachay1[0])
        expect(result[1]).to.equal(cachay1[1])
        expect(result[2]).to.equal(cachay2[0])
        expect(result[3]).to.equal(cachay2[1])
        expect(result[4]).to.equal(cachay2[2])
    })


    it('concate two cachays with strings', function () {
        const cachay1 = new Cachay('h', 'o', 'l', 'a')
        const cachay2 = new Cachay('m', 'u', 'n', 'd', 'o')
        const result = cachay1.concat(cachay2)

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

    it('concate three cachays with numbers', function() {
        const cachay1 = new Cachay(1, 2)
        const cachay2 = new Cachay(3, 4)
        const cachay3 = new Cachay(5, 6)
        const result = cachay1.concat( cachay2,cachay3)
        
        expect(result.length).to.equal(cachay1.length + cachay2.length + cachay3.length)
        expect(result[0]).to.equal(cachay1[0])
        expect(result[1]).to.equal(cachay1[1])
        expect(result[2]).to.equal(cachay2[0])
        expect(result[3]).to.equal(cachay2[1])
        expect(result[4]).to.equal(cachay3[0])
        expect(result[5]).to.equal(cachay3[1])
    })

    it(' concate four cachays with numbers', function() {
        const cachay1 = new Cachay (1, 2)
        const cachay2 = new Cachay (3, 4)
        const cachay3 = new Cachay (5, 6)
        const cachay4 = new Cachay (7, 8)
        const result = cachay1.concat(cachay2, cachay3, cachay4)
        
        expect(result.length).to.equal(cachay1.length + cachay2.length + cachay3.length + cachay4.length)
        expect(result[0]).to.equal(cachay1[0])
        expect(result[1]).to.equal(cachay1[1])
        expect(result[2]).to.equal(cachay2[0])
        expect(result[3]).to.equal(cachay2[1])
        expect(result[4]).to.equal(cachay3[0])
        expect(result[5]).to.equal(cachay3[1])
        expect(result[6]).to.equal(cachay4[0])
        expect(result[7]).to.equal(cachay4[1])
    })
    
    it('concate five cachays with numbers', function() {
        const cachay1 = new Cachay (1, 2)
        const cachay2 = new Cachay (3, 4)
        const cachay3 = new Cachay (5, 6)
        const cachay4 = new Cachay (7, 8)
        const cachay5 = new Cachay (9, 10)
        const result = cachay1.concat(cachay2, cachay3, cachay4, cachay5)
        
        expect(result.length).to.equal(cachay1.length + cachay2.length + cachay3.length + cachay4.length + cachay5.length)
        expect(result[0]).to.equal(cachay1[0])
        expect(result[1]).to.equal(cachay1[1])
        expect(result[2]).to.equal(cachay2[0])
        expect(result[3]).to.equal(cachay2[1])
        expect(result[4]).to.equal(cachay3[0])
        expect(result[5]).to.equal(cachay3[1])
        expect(result[6]).to.equal(cachay4[0])
        expect(result[7]).to.equal(cachay4[1])
        expect(result[8]).to.equal(cachay5[0])
        expect(result[9]).to.equal(cachay5[1])
    })
})