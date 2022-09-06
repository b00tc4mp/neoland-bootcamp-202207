const { connect, disconnect, Types: { ObjectId } } = require("mongoose")
const { Note, User } = require("../../models")
const { updateNoteText } = require('../../logic')
const { NotFoundError, CredentialsError } = require("errors")
require('dotenv').config()
const MONGO_URL_TEST = process.env.MONGO_URL_TEST

describe('Update Note Text', () => {
    beforeAll(() => connect(MONGO_URL_TEST))

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
                                    expect(noteFound.visibility).toEqual('private')
                                    expect(noteFound.createdAt).toBeInstanceOf(Date)
                                    expect(noteFound.modifiedAt).toBeInstanceOf(Date)
                                })
                        })
                })

            )
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
            .then(() => {throw new Error('should not reach this point')})
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
                .then(() => {throw new Error('should not reach this point')})
            .catch(error => {
                expect(error).toBeInstanceOf(NotFoundError)
                expect(error.message).toEqual('note not found')
            })
    })

    it('should fail when note doesnt belong to user', () => {
        const name = 'Pablito'
        const email = 'pablito@tontito.com'
        const password = '123123123'

        const name2 = 'Josito'
        const email2 = 'josito@gorgorito.com'
        const password2 = '123123123'

        const text = 'hola josito'

        return Promise.all([
                User.create({ name, email, password }), 
                User.create( { name: name2, email: email2, password: password2 })
            ])
            .then(users => Note.create({ user: users[0].id })
                .then(note => updateNoteText(users[1].id, note.id, text))
            )
            .catch(error => {
                expect(error).toBeInstanceOf(CredentialsError)
                expect(error.message).toEqual('this note does not belong to user')
            })
            
    })

    afterAll(() => disconnect())
})