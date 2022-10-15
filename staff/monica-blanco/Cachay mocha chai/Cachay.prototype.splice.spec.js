describe('Cachay prototype splice', () => {
    it('insert at index', () => {
        const months = new Cachay ('Jan', 'Mar', 'Apr', 'May')
        const result = months.splice(months,1, 0, 'Feb')
  
        expect(months).to.be.instanceof(Cachay)
        expect(result.length).to.equal(0)
        expect(months[0]).to.equal('Jan')
        expect(months[1]).to.equal('Feb')
        expect(months[2]).to.equal('Mar')
        expect(months[3]).to.equal('Apr')
        expect(months[4]).to.equal('May')
    })
  
    it('replace elements', () => {
        const months = new Cachay ('Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jun','Jun', 'Jun', 'Jul')
        const result = months.splice(months, 4, 3, 'May');
  
        expect(months).to.be.instanceof(Cachay)
        expect(result.length).to.equal (3)
        expect(result[0]).to.equal ('Jun')
        expect(result[1]).to.equal ('Jun')
        expect(result[2]).to.equal ('Jun')


        expect(months.length).to.equal(7)
        expect(months[0]).to.equal ('Jan')
        expect(months[1]).to.equal ('Feb')
        expect(months[2]).to.equal ('Mar')
        expect(months[3]).to.equal ('Apr')
        expect(months[4]).to.equal ('May')
        expect(months[5]).to.equal ('Jun')
        expect(months[6]).to.equal ('Jul')
    })
  
    it('remove element at index', () => {
        const fish = new Cachay ('angel', 'clown', 'drum', 'mandarin', 'sturgeon')
        const result = fish.splice(fish, 3, 1)

        expect(fish).to.be.instanceof(Cachay)
        expect(result.length).to.equal (1)
        expect(result[0]).to.equal('mandarin')

        expect(fish.length).to.equal(4)
        expect(fish[0]).to.equal('angel')
        expect(fish[1]).to.equal('clown')
        expect(fish[2]).to.equal('drum')
        expect(fish[3]).to.equal('sturgeon')
    })
  
    it('remove element from negative index', () => {
        const fish = new Cachay ('angel', 'clown', 'drum', 'mandarin', 'sturgeon')
        const result = fish.splice(fish, -3, 2)

        expect(fish).to.be.instanceof(Cachay)
        expect(result.length).to.equal(2)
        expect(result[0]).to.equal ('drum')
        expect(result[1]).to.equal ('mandarin')

        expect(fish.length).to.equal(3)
        expect(fish[0]).to.equal ('angel')
        expect(fish[1]).to.equal ('clown')
        expect(fish[2]).to.equal ('sturgeon')
    }) 
})