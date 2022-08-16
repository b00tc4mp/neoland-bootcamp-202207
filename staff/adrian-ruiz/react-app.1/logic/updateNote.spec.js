describe('updateNote', () => {
    beforeEach(() => {
        users.length = 0
        notes.length = 0
    })

    it('Succeeds on update TEXT note for an existing user', () => {
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

        const note1 = {
            id: 'note-1234567895559',
            title: 'Test Title',
            text: 'hellow world',
            user: 'user-8888888880009',
        }

        notes.push(note1)

        updateNote(peTete.id, note1.id, note1.title,'hola mundo' , error => {
            expect(error).toBeNull()

            expect(notes).toBeInstanceOf(Array)
            expect(notes.length).toBe(1) // expect(notes).toHaveSize(1)

            expect(notes[0].user).toBe(peTete.id)
            expect(notes[0].title).toBe('Test Title')
            expect(notes[0].text).toBe('hola mundo')
            expect(notes[0].id).toBeDefined()

        })
    })

    it('Succeeds on update TITLE note for an existing user', () =>{
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

        const note1 = {
            id: 'note-1234567895559',
            title: 'Test Title',
            text: 'hellow world',
            user: 'user-8888888880009',
        }

        notes.push(note1)

        updateNote(peTete.id, note1.id, 'Neeew Tiiitle',note1.text , error => {
            expect(error).toBeNull()

            expect(notes).toBeInstanceOf(Array)
            expect(notes.length).toBe(1) // expect(notes).toHaveSize(1)

            expect(notes[0].user).toBe(peTete.id)
            expect(notes[0].title).toBe('Neeew Tiiitle')
            expect(notes[0].text).toBe('hellow world')
            expect(notes[0].id).toBeDefined()

        })
    })

    it('Fails -> returns error for a non-existing user', () => {
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

        const note1 = {
            id: 'note-1234567895559',
            title: 'Test Title',
            text: 'hello world',
            user: 'user-8888888880009',
        }

        notes.push(note1)

        const unknownUserId = 'user-9874561235559'

        updateNote(unknownUserId, note1.id, note1.title, 'hola mundo', error => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('User with id ' + unknownUserId + ' not found')

            expect(notes).toHaveSize(1) // expect(notes.length).toBe(0)
            expect(notes[0].text).toBe('hello world')
        })
    })

    it('fails for a incorrect user (note does not belong to him)', () => {
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

        const note1 = {
            id: 'note-1234567895559',
            title: 'User 1 Title',
            text: 'hello world',
            user: 'user-8888888880009',
        }

        const note2 = {
            id: 'note-1234533395559',
            title: 'User 2 Title',
            text: 'Hola mundo',
            user: 'user-1234567895559'
        }

        notes.push(note1,note2)

        updateNote(peTete.id, note2.id, note2.title,'Ciao, Mundo', error => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('Note with id ' + note2.id + ' does not belong to user with id ' + peTete.id)
        })
    })
})