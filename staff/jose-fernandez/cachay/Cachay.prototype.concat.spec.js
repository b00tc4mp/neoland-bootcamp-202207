describe('Cachay.prototype.concat', function() {
    it('two arrays with number', function () {
        const cachay1 = new Cachay(1, 2)
        const cachay2 = new Cachay(3, 4)
        const result = cachay1.concat(cachay2)

        expect(result).to.be.instanceof(Cachay)
        expect(result.length).to.equal(cachay1.length + cachay2.length)
        expect(result[0]).to.equal(cachay1[0])
        expect(result[1]).to.equal(cachay1[1])
        expect(result[2]).to.equal(cachay2[0])
        expect(result[3]).to.equal(cachay2[1])
    })
    
    it('iterates strings', function() {
        const strings = new Cachay('hola', 'mundo', 'yupi')
        let result = ''

        const concatenate = function(string) { result += string }

        strings.forEach(concatenate)

        expect(result.length).to.equal(strings[0].length + strings[1].length + strings[2].length)
        expect(result).to.equal(strings[0] + strings[1] + strings[2])
    })
})