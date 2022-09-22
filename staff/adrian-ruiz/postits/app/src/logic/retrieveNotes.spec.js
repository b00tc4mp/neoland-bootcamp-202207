describe('retrieveNotes',() => {
    beforeEach(() => {
        users.length = 0
        notes.length = 0
    })

    it('returns notes for an existing user with notes',() => {
        const pepe = {
            id: 'user-7894561230009',
            name: 'Pepe',
            email: 'pepe@pepe.com',
            password: '123!Aadfa'
        }
        const jose = {
            id: 'user-1111111111119',
            name: 'Jose',
            email: 'jose@jose.com',
            password: '123!Aadfa'
        }

        users.push(pepe,jose)

        const note1 = {
            id: 'note-01',
            text: 'Hello, Test',
            user: 'user-7894561230009'
        }

        const note2 = {
            id: 'note-02',
            text: 'Hello, Test 2',
            user: 'user-7894561230009'
        }

        const note3 = {
            id: 'note-03',
            text: 'Hello, Test Jose',
            user: 'user-1111111111119'
        }
        
        notes.push(note1,note3,note2)


        retrieveNotes(pepe.id, (error, notes) => {

            expect(error).toBeNull()

            expect(notes).toBeInstanceOf(Array)
            expect(notes.length).toBe(2)
        })
    })

    it('returns error for a non-existing user', () => {
        const pepe = {
            id: 'user-7894561230009',
            name: 'Pepe',
            email: 'pepe@pepe.com',
            password: '123!Aadfa'
        }
        const jose = {
            id: 'user-1111111111119',
            name: 'Jose',
            email: 'jose@jose.com',
            password: '123!Aadfa'
        }

        users.push(pepe,jose)

        const note1 = {
            id: 'note-01',
            text: 'Hello, Test',
            user: 'user-7894561230009'
        }

        const note2 = {
            id: 'note-02',
            text: 'Hello, Test 2',
            user: 'user-7894561230009'
        }

        const note3 = {
            id: 'note-03',
            text: 'Hello, Test Jose',
            user: 'user-1111111111119'
        }
        
        notes.push(note1,note3,note2)

        const unknownUserId = 'user-7894561230019'

        retrieveNotes(unknownUserId, (error, notes) =>{
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('User with id '+ unknownUserId +'not found')

            expect(notes).toBeUndefined()
        })

        
        })

    it('Return Thrown error if userId is not a string',()=>{

        const pepe = {
        id: 'user-testspec',
        name: 'Pepe',
        email: 'pepe@pepe.com',
        password: '123!Aadfa'
        }

        users.push(pepe)

        const note1 = {
            id: 'note-01',
            text: 'Hello, Test',
            user: 'user-testspec'
        }

        const note2 = {
            id: 'note-02',
            text: 'Hello, Test 2',
            user: 'user-testspec'
        }

        
        notes.push(note1,note2)

        const notStringUserId = 123

        expect(function(){retriveNotes(notStringUserId, (error,notes) =>{
            fail('it should not reach this point')
        })}).toThrow()
    })

    it('Return Thrown error if 1st argument is not a string',()=>{

        const pepe = {
        id: 'user-testspec',
        name: 'Pepe',
        email: 'pepe@pepe.com',
        password: '123!Aadfa'
        }

        users.push(pepe)

        const note1 = {
            id: 'note-01',
            text: 'Hello, Test',
            user: 'user-testspec'
        }

        const note2 = {
            id: 'note-02',
            text: 'Hello, Test 2',
            user: 'user-testspec'
        }

        
        notes.push(note1,note2)

        const notStringUserId = 123
        
        expect(function(){retriveNotes(notStringUserId, (error,notes) =>{
            fail('it should not reach this point')
        })}).toThrow()
    })
})
