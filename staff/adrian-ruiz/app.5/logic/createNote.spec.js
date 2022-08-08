describe('createNotes', () => {
    beforeEach(() => {
        users.length = 0
        notes.length = 0
    })

    it('create notes for an existing user', () => {
        const peTete = {
            id: 'user-888888888000',
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

        createNote(peTete.id, error => {
            expect(error).toBeNull()

            expect(notes).toBeInstanceOf(Array)
            expect(notes.length).toBe(1) // expect(notes).toHaveSize(1)
            expect(notes[0].user).toBe(peTete.id)
            expect(notes[0].text).toBe('')
            expect(notes[0].id).toBeDefined()

        })
    })

    it('returns error for a non-existing user', () => {
        const peTete = {
            id: 'user-888888888000',
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

        const unknownUserId = 'user-987456123555'

        createNote(unknownUserId, error => {
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