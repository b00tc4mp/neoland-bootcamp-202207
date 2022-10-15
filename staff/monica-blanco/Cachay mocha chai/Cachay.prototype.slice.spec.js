describe('Cachay prototype slice', () => {
    it('slice starting from index', () => {
      const animals = new Cachay ('ant', 'bison', 'camel', 'duck', 'elephant')  
      const result = animals.slice(animals, 2)
  
  
      expect(animals).to.be.instanceof(Cachay)
      expect(result.length).to.equal (3)
      expect(result[0]).to.equal('camel')
      expect(result[1]).to.equal('duck')
      expect(result[2]).to.equal('elephant')  
      
      expect(animals.length).to.equal (5)
      expect(animals[0]).to.equal ('ant')
      expect(animals[1]).to.equal ('bison')
      expect(animals[2]).to.equal ('camel')
      expect(animals[3]).to.equal ('duck')
      expect(animals[4]).to.equal ('elephant')
    })
  
    it('slice starting and ending at indexes', () => {
      const animals = new Cachay ('ant', 'bison', 'camel', 'duck', 'elephant')
      const result = animals.slice(animals, 2, 4)
  
      expect(animals).to.be.instanceof(Cachay)
      expect(result.length).to.equal (2)
      expect(result[0]).to.equal ('camel')
      expect(result[1]).to.equal ('duck')
  
      expect(animals.length).to.equal (5)
      expect(animals[0]).to.equal ('ant')
      expect(animals[1]).to.equal ('bison')
      expect(animals[2]).to.equal ('camel')
      expect(animals[3]).to.equal ('duck')
      expect(animals[4]).to.equal ('elephant')
    })
  
    it('slice starting and ending at indexes (2)', () => {
      const animals = new Cachay ('ant', 'bison', 'camel', 'duck', 'elephant')
  
      const result = animals.slice(animals, 1, 5)
  
      expect(result.length).to.equal(4)
      expect(result[0]).to.equal ('bison')
      expect(result[1]).to.equal ('camel')
      expect(result[2]).to.equal ('duck')
      expect(result[3]).to.equal ('elephant')
  
      expect(animals.length).to.equal (5)
      expect(animals[0]).to.equal ('ant')
      expect(animals[1]).to.equal ('bison')
      expect(animals[2]).to.equal ('camel')
      expect(animals[3]).to.equal ('duck')
      expect(animals[4]).to.equal ('elephant')
    })
  
    it('slice starting with negative count', () => {
      const animals = new Cachay ('ant', 'bison', 'camel', 'duck', 'elephant')
  
      const result = animals.slice(animals, -2)
  
      expect(animals).to.be.instanceof(Cachay)
      expect(result.length).to.equal(2)
      expect(result[0]).to.equal('duck')
      expect(result[1]).to.equal('elephant')

      expect(animals.length).to.equal (5)
      expect(animals[0]).to.equal ('ant')
      expect(animals[1]).to.equal ('bison')
      expect(animals[2]).to.equal ('camel')
      expect(animals[3]).to.equal ('duck')
      expect(animals[4]).to.equal ('elephant')
    })
  
    it ('slice starting at index and ending with negative count', () => {
      const animals = new Cachay ('ant', 'bison', 'camel', 'duck', 'elephant')
  
      const result = animals.slice(animals, 2, -1)
    
      expect(animals).to.be.instanceof(Cachay)
      expect(result.length).to.equal (2)
      expect(result[0]).to.equal('camel')
      expect(result[1]).to.equal('duck')
  
      expect(animals.length).to.equal (5)
      expect(animals[0]).to.equal('ant')
      expect(animals[1]).to.equal('bison')
      expect(animals[2]).to.equal('camel')
      expect(animals[3]).to.equal('duck')
      expect(animals[4]).to.equal('elephant')
    })
  
    it('slice starting at index and ending with negative count (2)', () => {
      const animals = new Cachay ('ant', 'bison', 'camel', 'duck', 'elephant')
  
      const result = animals.slice(animals, 2, -3)
  
      expect(result.length).to.equal(0)
  
      expect(animals.length).to.equal (5)
      expect(animals[0]).to.equal ('ant')
      expect(animals[1]).to.equal ('bison')
      expect(animals[2]).to.equal ('camel')
      expect(animals[3]).to.equal ('duck')
      expect(animals[4]).to.equal ('elephant')
    })
  
    it('slice starting at index and ending with negative count (3)', () => {
      const animals = new Cachay ('ant', 'bison', 'camel', 'duck', 'elephant')
  
      const result = animals.slice(animals, 2, -4)
  
      expect(result.length, 0)
  
      expect(animals.length).to.equal (5)
      expect(animals[0]).to.equal ('ant')
      expect(animals[1]).to.equal ('bison')
      expect(animals[2]).to.equal ('camel')
      expect(animals[3]).to.equal ('duck')
      expect(animals[4]).to.equal ('elephant')
    })
  
    it('slice starting at index and ending with negative count (3)', () => {
      const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
  
      const result = animals.slice(animals,)
  
      expect(result.length).to.equal (5)
      expect(result[0]).to.equal('ant')
      expect(result[1]).to.equal('bison')
      expect(result[2]).to.equal('camel')
      expect(result[3]).to.equal('duck')
      expect(result[4]).to.equal('elephant')
  
      expect(result !== animals, true)
  
      expect(animals.length).to.equal (5)
      expect(animals[0]).to.equal ('ant')
      expect(animals[1]).to.equal ('bison')
      expect(animals[2]).to.equal ('camel')
      expect(animals[3]).to.equal ('duck')
      expect(animals[4]).to.equal ('elephant')
    })
  })