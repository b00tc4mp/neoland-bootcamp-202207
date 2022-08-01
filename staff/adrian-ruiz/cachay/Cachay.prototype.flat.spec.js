describe('TESTING Cachay flat', () => {
    it('Flat depth 1 (default)', () => {
        const cachayTesting = new Cachay(1,2,new Cachay(3,4))
        const result = cachayTesting.flat()

        expect(result).to.be.instanceof(Cachay)
        expect(result.length).to.equal(4)
        expect(result[0]).to.equal(1)
        expect(result[1]).to.equal(2)
        expect(result[2]).to.equal(3)
        expect(result[3]).to.equal(4)

    })

    it('Flat Depth 2', () => {
        const cachayTesting = new Cachay(1,2,new Cachay(3,4, new Cachay(5,6)))
        const result = cachayTesting.flat(2)

        expect(result).to.be.instanceof(Cachay)
        expect(result.length).to.equal(6)
        expect(result[0]).to.equal(1)
        expect(result[1]).to.equal(2)
        expect(result[2]).to.equal(3)
        expect(result[3]).to.equal(4)
        expect(result[4]).to.equal(5)
        expect(result[5]).to.equal(6)
    })

    it('Flat Depth default on second level cachay (It should delete 1 cachay)', () => {
        const cachayTesting = new Cachay(0,1,2, new Cachay(new Cachay(3,4)))
        const result = cachayTesting.flat()

        expect(result).to.be.instanceof(Cachay)
        expect(result.length).to.equal(4)
        expect(result[0]).to.equal(0)
        expect(result[1]).to.equal(1)
        expect(result[2]).to.equal(2)
        expect(result[3]).to.be.instanceof(Cachay)
        expect(result[3][0]).to.equal(3)
        expect(result[3][1]).to.equal(4)
    })

    it('Flat Depth INFINITY with 4 sub level Cachay', () => {
        const cachayTesting = new Cachay(0, 1, new Cachay(2,3,new Cachay(4,5,new Cachay(6,7,new Cachay(8,9)))))
        const result = cachayTesting.flat(Infinity)

        expect(result).to.be.instanceof(Cachay)
        expect(result.length).to.equal(10)

        expect(result[0]).to.equal(0)
        expect(result[1]).to.equal(1)
        expect(result[2]).to.equal(2)
        expect(result[3]).to.equal(3)
        expect(result[4]).to.equal(4)
        expect(result[5]).to.equal(5)
        expect(result[6]).to.equal(6)
        expect(result[7]).to.equal(7)
        expect(result[8]).to.equal(8)
        expect(result[9]).to.equal(9)


    })
})