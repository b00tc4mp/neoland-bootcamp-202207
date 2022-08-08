describe('TESTING Cachay map', () => {
    it('Succeeds on multiply all elements in Cachay', () => {
        const testingCachay = new Cachay(1, 2, 5, 7, 65)
        const result = testingCachay.map((x) => x * 2)

        expect(testingCachay).to.not.equal(result)
        expect(result).to.be.instanceof(Cachay)
        expect(result[0]).to.equal(2)
        expect(result[1]).to.equal(4)
        expect(result[2]).to.equal(10)
        expect(result[3]).to.equal(14)
        expect(result[4]).to.equal(130)
    })

    it('Succeeds Joining name and surname in Cachay', () => {
        const testingCachay = new Cachay(
        {nombre: "Luis", apellido: "Garrido"},
        {nombre: "Helena", apellido: "Tendero"},
        {nombre: "Julia", apellido: "Otero"}
        )
        
        const result = testingCachay.map((x) => [x.nombre,x.apellido].join(" "))

        expect(result[0]).to.equal('Luis Garrido')
        expect(result[1]).to.equal('Helena Tendero')
        expect(result[2]).to.equal('Julia Otero')
    })

    // TODO INDEX AND CACHAY USE ON CALLBACK (IT IS IMPLEMENTED ON FUNCTION BUT NOT TESTED)
})