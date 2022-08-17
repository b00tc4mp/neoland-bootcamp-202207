describe('createNote', () => {
    beforeEach(() => {
        users.length = 0;
        notes.length = 0;
    })

    it('should succeed on existing user', () => {
        const user = {
            id: 'user-394933945',
            name: 'Pato Lucas',
            email: 'pato@lucas.com',
            password: '12345678'
        }

        users.push(user)

        createNote(user.id, function(error) {
            expect(error).toBeNull()

            expect(notes.length).toBe(1)
            expect(notes[0].text).toBe('')
            expect(notes[0].id).toBeDefined()
            expect(notes[0].user).toBe(user.id)
        })
    })

    it('should fail on unexisting user', () => {
        createNote('unexistingId', () => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('user with id unexistingId does not exist')

            expect(notes.length).toBe(0)
        })
    })
})