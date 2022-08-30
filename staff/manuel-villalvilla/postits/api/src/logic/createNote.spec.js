const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { Note, User } = require('../models')
const { createNote } = require('../logic')
const { NotFoundError } = require('../errors')

describe('Create Note', () => {
    beforeAll(() => connect('mongodb://localhost:27017/test'))

    beforeEach(() => Promise.all([Note.deleteMany(), User.deleteMany()]))

    it('should succeed creating an empty note', () => {
        const name = 'Chorizo'
        const email = 'chorizo@frito.com'
        const password = '123123123'

        return User.create({ name, email, password })
            .then(user => createNote(user.id)
                .then(res => {
                    expect(res).toBeUndefined()
                    return Note.find()
                })
                .then(notes => {
                    expect(notes).toHaveLength(1)

                    const [note] = notes

                    expect(note.user.toString()).toEqual(user.id)
                    expect(note.text).toEqual('')
                    expect(note.visibility).toEqual('private')
                    expect(note.createdAt).toBeInstanceOf(Date)
                    expect(note.modifiedAt).toBeUndefined()
                })
            ) // este then envuelve a todos los demas para compartir 'user'
    })

    it('should fail with unexisting user', () => {
        const userId = new ObjectId().toString()

        return createNote(userId)
            .then(() => {
                throw new Error('it should not reach this point') // provoco un error si createNote no tira error
            })
            .catch(error => {
                expect(error).toBeInstanceOf(NotFoundError)
                expect(error.message).toEqual('user not found')
            })
    })

    afterAll(() => disconnect())
})