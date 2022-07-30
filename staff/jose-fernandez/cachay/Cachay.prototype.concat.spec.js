describe('Cachay.prototype.concat',()=>{
    it('two arrays with number',function(){
        const cachay1 = new Cachay(1,2)
        const cachay2 = new Cachay(3,4) 
        const result= cachay1.concat(cachay2)

        expect(result.length).to.equal(cachay1.length+cachay2.length)
        expect(result[0]).to.equal(cachay1[0])
        expect(result[1]).to.equal(cachay1[1])
        expect(result[2]).to.equal(cachay2[2])
        expect(result[3]).to.equal(cachay2[3])
    })
})