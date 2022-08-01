describe('TESTING Cachay findIndex', () => {
    it('Find index in Cachay of numbers', () => {

        const testingCachay = new Cachay(5,12,8,130,44)
        const isLargeNumber = (element) => element > 13
        const result = testingCachay.findIndex(isLargeNumber)

        expect(result).to.equal(3)
    })

    it('Find index that does not match in any number from cachay(return -1)', () => {

        const testingCachay = new Cachay(5,12,8,130,44)
        const isLargeNumber = (element) => element > 150
        const result = testingCachay.findIndex(isLargeNumber)

        expect(result).to.equal(-1)
    })

    it('Find index of object that matches', () => {
        const testingCachay = new Cachay(
            {name: 'Adrian', id: 1234},
            {name: 'Pepe', id: 5678},
            {name: 'Jose', id: 4321}
        )

        const checkid = (user) => user.id === 5678
        const result = testingCachay.findIndex(checkid)

        expect(result).to.equal(1)
    })

    it('Find index of object that does not matches', () => {
        const testingCachay = new Cachay(
            {name: 'Adrian', id: 1234},
            {name: 'Pepe', id: 5678},
            {name: 'Jose', id: 4321}
        )
        const checkid = (user) => user.id === 1111
        const result = testingCachay.findIndex(checkid)

        expect(result).to.equal(-1)
    })

    // TODO not valid arguments testing
})