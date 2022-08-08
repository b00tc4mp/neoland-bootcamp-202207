describe('deleteNote', () => {
    beforeEach(()=> {
        users.length = 0
        notes.length = 0
    })

    it('succeds on deleting a note for an existing user', () => {
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
            id: 'note-888888888500',
            text: 'Hello, Test',
            user: 'user-888888888000'
        }

        const note2 = {
            id: 'note-888888888000',
            text: 'Hello, Test 2',
            user: 'user-888888888000'
        }

        const note3 = {
            id: 'note-8888888830001',
            text: 'Hello, Test Jose',
            user: 'user-123456789555'
        }

        notes.push(note1,note2,note3)

        deleteNote(peTete.id, note1.id, error =>{
            expect(error).toBeNull()

            expect(notes).toBeInstanceOf(Array)
            expect(notes.length).toBe(2)

        })
    })

    it('Fails if user does not own note to delete', () => {
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
            id: 'note-888888888500',
            text: 'Hello, Test',
            user: 'user-888888888000'
        }

        const note2 = {
            id: 'note-888888888000',
            text: 'Hello, Test 2',
            user: 'user-888888888000'
        }

        const note3 = {
            id: 'note-8888888830001',
            text: 'Hello, Test Jose',
            user: 'user-123456789555'
        }

        notes.push(note1,note2,note3)

        deleteNote(peTete.id, note3.id, error =>{
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe(`Note with id ${note3.id} does not belong to user with id ${peTete.id}`)
            
        })
    })

    it('Fails if user does not exists', () => {
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
            id: 'note-888888888500',
            text: 'Hello, Test',
            user: 'user-888888888000'
        }

        const note2 = {
            id: 'note-888888888000',
            text: 'Hello, Test 2',
            user: 'user-888888888000'
        }

        const note3 = {
            id: 'note-8888888830001',
            text: 'Hello, Test Jose',
            user: 'user-123456789555'
        }

        notes.push(note1,note2,note3)

        const unknownUser = {
            id: 'user-321456789555',
            name: 'AaBbCc',
            email: 'aa@bbcc.com',
            password: '321A1!zXadas'   
        }

        deleteNote(unknownUser.id, note1.id, error =>{
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe(`User with id ${unknownUser.id} not found`)
        })
        
    })
})