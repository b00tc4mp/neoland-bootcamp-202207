describe('updateNote', () => {
    beforeEach(() => {
        users.length = 0
        notes.length = 0
    })

    it('Succeeds on update note for an existing user', () => {
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

        const note1 = {
            id: 'note-' + Date.now(),
            text: 'hellow world',
            user: 'user-888888888000',
        }

        notes.push(note1)

        updateNote(peTete.id, note1.id, 'hola mundo' , error => {
            expect(error).toBeNull()

            expect(notes).toBeInstanceOf(Array)
            expect(notes.length).toBe(1) // expect(notes).toHaveSize(1)

            expect(notes[0].user).toBe(peTete.id)
            expect(notes[0].text).toBe('hola mundo')
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

        const note1 = {
            id: 'note-' + Date.now(),
            text: 'hello world',
            user: 'user-888888888000',
        }

        notes.push(note1)

        const unknownUserId = 'user-987456123555'

        updateNote(unknownUserId, note1.id, 'hola mundo', error => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('User with id ' + unknownUserId + ' not found')

            expect(notes).toHaveSize(1) // expect(notes.length).toBe(0)
            expect(notes[0].text).toBe('hello world')
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

    it('fails for a incorrect user (note does not belong to him)', () => {
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

        const note1 = {
            id: 'note-' + Date.now(),
            text: 'hello world',
            user: 'user-888888888000',
        }

        const note2 = {
            id: 'note-' + Date.now()+1,
            text: 'Hola mundo',
            user: 'user-123456789555'
        }

        notes.push(note1,note2)

        updateNote(peTete.id, note2.id, 'Ciao, Mundo', error => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('Note with id ' + note2.id + ' does not belong to user with id ' + peTete.id)
        })
    })
})