const { connect, disconnect, Types: { ObjectId } } = require("mongoose")
const { Note, User } = require("../../models")
const { updateNoteText } = require('../../logic')
const { NotFoundError } = require("../../errors")

describe('Update Note', () => {
    beforeAll(() => connect('mongodb://localhost:27017/test'))

    beforeEach(() => Promise.all([Note.deleteMany(), User.deleteMany()]))

    it('should succeed updating the note text', () => {
        const name = 'Pablito'
        const email = 'pablito@tontito.com'
        const password = '123123123'

        const text = 'hola mundo'

        return User.create({ name, email, password })
            .then(user => Note.create({ user: user.id })
                .then(note => {
                    expect(note.text).toBe('')
                    return updateNoteText(user.id, note.id, text)
                        .then(res => {
                            expect(res).toBeUndefined()
                            return Note.findById(note.id)
                                .then(noteFound => {
                                    expect(noteFound.id.toString()).toEqual(note.id.toString())
                                    expect(noteFound.user.toString()).toEqual(user.id)
                                    expect(noteFound.text).toEqual('hola mundo')
                                    expect(noteFound.createdAt).toBeInstanceOf(Date)
                                    expect(noteFound.modifiedAt).toBeInstanceOf(Date)
                                })
                        })
                })

            )
            
            // .catch(error => expect(error).toBeUndefined())
    })

    it('should fail with user not found', () => {
        const name = 'Pablito'
        const email = 'pablito@tontito.com'
        const password = '123123123'

        const text = 'hola mundo'
        const userId = new ObjectId().toString()

        return User.create({ name, email, password })
            .then(user => Note.create({ user: user.id }))
            .then(note => updateNoteText(userId, note.id, text))
            .catch(error => {
                expect(error).toBeInstanceOf(NotFoundError)
                expect(error.message).toEqual('user not found')
            })
    })

    it('should fail with note not found', () => {
        const name = 'Pablito'
        const email = 'pablito@tontito.com'
        const password = '123123123'

        const text = 'hola mundo'
        const noteId = new ObjectId().toString()

        return User.create({ name, email, password })
            .then(user => Note.create({ user: user.id })
                .then(note => updateNoteText(user.id, noteId, text)))
            .catch(error => {
                expect(error).toBeInstanceOf(NotFoundError)
                expect(error.message).toEqual('note not found')
            })
    })

    xit('should fail when note doesnt belong to user', () => {
        // TODO
    })

    afterAll(() => disconnect())
})