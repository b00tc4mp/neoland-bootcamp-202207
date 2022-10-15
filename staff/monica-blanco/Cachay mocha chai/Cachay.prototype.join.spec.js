describe('Cachay.prototype.join', function () {

    it('join with space', function() {
        const elements = new Cachay ('Fire', 'Air', 'Water', 'Earth')
        const separator = ' '
        const result = elements.join(elements, separator)

    expect(elements).to.be.instanceof(Cachay)
    expect (result).to.equal (elements[0]+ separator + elements[1] + separator+ elements[2]+separator +elements [3])
})

    it('joins with dash', function() {
        const elements = new Cachay ('Fire', 'Air', 'Water', 'Earth')
        const separator = '-'

        const result = elements.join(elements, separator)

    expect(elements).to.be.instanceof(Cachay)
    expect(result).to.equal (elements[0] + separator + elements[1] + separator + elements[2] + separator + elements[3])
})


    it('joins with default separator', function() {
        const elements = new Cachay('Fire', 'Air', 'Water', 'Earth')
        const separator = ','

        const result = elements.join(elements, separator)
    
    expect(elements).to.be.instanceof(Cachay)
    expect(result).to.equal (elements[0] + separator + elements[1] + separator + elements[2] + separator + elements[3])
})
})