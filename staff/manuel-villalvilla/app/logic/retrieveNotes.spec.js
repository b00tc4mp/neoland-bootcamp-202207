describe('retrieveNotes', () => {
    beforeEach(() => {
        users.length = 0;
        notes.length = 0;
    })

    it ('returns notes for an existing user with notes', () => {

        const peTete = {
            id: 'user-345345',
            name: 'Pe Tete',
            email: 'pe@tete.com',
            password: '123123123'
        }

        const peTeta = {
            id: 'user-345344',
            name: 'Pe Teta',
            email: 'pe@teta.com',
            password: '123123123'
        }

        users.push(peTete, peTeta);

        const note1 = {
            id: 'note-12312112',
            text: 'hola mundo',
            user: peTete.id
        }

        const note2 = {
            id: 'note-1231267',
            text: 'hello world',
            user: peTete.id
        }
        
        const note3 = {
            id: 'note-12312334',
            text: 'hello world',
            user: peTeta.id
        }

        notes.push(note1, note2, note3);

        retrieveNotes(peTete.id, (error, notes) => {
            expect(error).toBeNull()

            expect(notes).toBeInstanceOf(Array)
            expect(notes.length).toBe(2)

        })
    })

    it ('returns error for non existing user', () => {

        const peTete = {
            id: 'user-345345',
            name: 'Pe Tete',
            email: 'pe@tete.com',
            password: '123123123'
        }

        const peTeta = {
            id: 'user-345344',
            name: 'Pe Teta',
            email: 'pe@teta.com',
            password: '123123123'
        }

        users.push(peTete, peTeta);

        const note1 = {
            id: 'note-12312112',
            text: 'hola mundo',
            user: peTete.id
        }

        const note2 = {
            id: 'note-1231267',
            text: 'hello world',
            user: peTete.id
        }
        
        const note3 = {
            id: 'note-12312334',
            text: 'hello world',
            user: peTeta.id
        }

        notes.push(note1, note2, note3);

        const nonExistentId = 'user-787878';

        retrieveNotes(nonExistentId, (error, notes) => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('user with id ' + nonExistentId + ' not found')

            expect(notes).toBeUndefined()

        })
    })
})