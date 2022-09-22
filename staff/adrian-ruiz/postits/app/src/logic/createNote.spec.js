describe('createNotes', () => {
    beforeEach(() => {
        users.length = 0
        notes.length = 0
    })

    it('create notes for an existing user', () => {
        const peTete = {
            id: 'user-8888888880009',
            name: 'PeTete',
            email: 'pe@tete.com',
            password: '123Aa!bcde'   
        }

        const peTeta = {
            id: 'user-1234567895559',
            name: 'PeTeta',
            email: 'pe@teta.com',
            password: '123A1!zXadas'   
        }

        const title = 'Test123'
        const text = 'Text testing'
        users.push(peTete, peTeta)

        createNote(peTete.id, title, text, error => {
            expect(error).toBeNull()

            expect(notes).toBeInstanceOf(Array)
            expect(notes.length).toBe(1) // expect(notes).toHaveSize(1)
            expect(notes[0].user).toBe(peTete.id)
            expect(notes[0].title).toBe('Test123')
            expect(notes[0].text).toBe('Text testing')
            expect(notes[0].id).toBeDefined()

        })
    })

    it('returns error for a non-existing user', () => {
        const peTete = {
            id: 'user-8888888880009',
            name: 'PeTete',
            email: 'pe@tete.com',
            password: '123Aa!bcde'   
        }

        const peTeta = {
            id: 'user-1234567895559',
            name: 'PeTeta',
            email: 'pe@teta.com',
            password: '123A1!zXadas'   
        }

        users.push(peTete, peTeta)

        const unknownUserId = 'user-9874561235559'
        const title = 'Test123'
        const text = 'Text testing'

        createNote(unknownUserId, title, text, error => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('User with id ' + unknownUserId + ' not found')

            expect(notes).toHaveSize(0) // expect(notes.length).toBe(0)
        })
    })

    it('returns Thrown error for bad ID validation', () => {

        const peTete = {
            id: 'user-82388000', // Wrong id
            name: 'PeTete',
            email: 'pe@tete.com',
            password: '123Aa!bcde'   
        }

        const peTeta = {
            id: 'user-123456789555',
            name: 'PeTeta',
            email: 'pe@teta.com',
            password: '123A1!zXadas'   
        }

        users.push(peTete, peTeta)

        expect(function(){createNote(petete.id, error, () => {
            fail('It should not reach this point')
        })}).toThrow()
    })
})