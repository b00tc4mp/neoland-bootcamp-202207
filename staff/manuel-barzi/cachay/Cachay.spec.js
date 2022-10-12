describe('Cachay', () => {
    it('constructs an empty Cachay when no params', () => {
        const c = new Cachay

        expect(c).to.be.instanceOf(Cachay)
        expect(c.length).to.equal(0)
    })

    it('constructs a Cachay with elements from params', () => {
        const c = new Cachay(10, 20, 30)
        
        expect(c).to.be.instanceOf(Cachay)
        expect(c.length).to.equal(3)
        expect(c[0]).to.equal(10)
        expect(c[1]).to.equal(20)
        expect(c[2]).to.equal(30)
    })
})