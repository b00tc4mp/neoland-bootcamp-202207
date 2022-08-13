describe('Cachay.prototype.pop',()=>{
    it('spec 1',()=>{
        const plants = new Cachay('broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato')
        const newlength = plants.length
        const result = plants.pop()
        // expect(result).to.be.instanceOf(Array)
        expect(plants.length).to.equal(newlength-1)
        expect(result).to.equal('tomato')
        expect(plants[0]).to.equal('broccoli')
        expect(plants[1]).to.equal('cauliflower')
        expect(plants[2]).to.equal('cabbage')
        expect(plants[3]).to.equal('kale')
    })
})