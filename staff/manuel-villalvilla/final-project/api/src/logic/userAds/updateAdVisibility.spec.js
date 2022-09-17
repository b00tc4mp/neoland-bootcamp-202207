const { connect, disconnect, Types: { ObjectId } } = require("mongoose")
const { Note, User } = require("../../models")
const { updateNoteVisibility } = require('..')
const { NotFoundError, CredentialsError } = require("errors")
require('dotenv').config()
const MONGO_URL_TEST = process.env.MONGO_URL_TEST

describe('Update Note Visibility', () => {
    beforeAll(() => connect(MONGO_URL_TEST))

    beforeEach(() => Promise.all([Note.deleteMany(), User.deleteMany()]))

    it('should succeed updating the note visibility', () => {
        const name = 'Pablito'
        const email = 'pablito@tontito.com'
        const password = '123123123'

        const visibility = 'public'

        return User.create({ name, email, password })
            .then(user => Note.create({ user: user.id })
                .then(note => {
                    expect(note.visibility).toEqual('private')
                    return updateNoteVisibility(user.id, note.id, visibility)
                        .then(res => {
                            expect(res).toBeUndefined()
                            return Note.findById(note.id)
                                .then(noteFound => {
                                    expect(noteFound.id.toString()).toEqual(note.id.toString())
                                    expect(noteFound.user.toString()).toEqual(user.id.toString())
                                    expect(noteFound.text).toEqual('')
                                    expect(noteFound.visibility).toEqual('public')
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

        const visibility = 'public'
        const userId = new ObjectId().toString()

        return User.create({ name, email, password })
            .then(user => Note.create({ user: user.id }))
            .then(note => updateNoteVisibility(userId, note.id, visibility))
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

        const visibility = 'public'
        const noteId = new ObjectId().toString()

        return User.create({ name, email, password })
            .then(user => Note.create({ user: user.id })
                .then(note => updateNoteVisibility(user.id, noteId, visibility)))
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

        const visibility = 'public'

        return Promise.all([
                User.create({ name, email, password }), 
                User.create( { name: name2, email: email2, password: password2 })
            ])
            .then(users => Note.create({ user: users[0].id })
                .then(note => updateNoteVisibility(users[1].id, note.id, visibility))
            )
            .catch(error => {
                expect(error).toBeInstanceOf(CredentialsError)
                expect(error.message).toEqual('this note does not belong to user')
            })
            
    })

    afterAll(() => disconnect())
})