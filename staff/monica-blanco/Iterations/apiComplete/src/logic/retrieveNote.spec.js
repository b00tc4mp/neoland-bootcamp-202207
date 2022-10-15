const { connect, disconnect, Types: { ObjectId } } = require("mongoose")
const { NotFoundError } = require("../errors")
const { Note, User } = require("../models")
const { retrieveNote } = require('../logic')


describe('Retrieve Notes', () => {
    beforeAll(() => connect('mongodb://localhost:27017/test'))

    beforeEach(() => Promise.all([Note.deleteMany(), User.deleteMany()]))

    it('should succeed retrieving notes', () => {
        const name = 'pepon'
        const email = 'pepon@trombon.com'
        const password = '123123123'
        
        return User.create({ name, email, password })
            .catch(error => expect(error).toBeNull())
            .then(user => Note.create({ user: user.id })
                .then(note => retrieveNotes(user.id))
                .then(notes => {
                    expect(notes).toHaveLength(1)
                    const [note] = notes
                    expect(note._id).toBeInstanceOf(ObjectId)
                    expect(note.user).toBeInstanceOf(ObjectId)
                    expect(note.text).toEqual('')
                    expect(note.visibility).toEqual('private')
                    expect(note.createdAt).toBeInstanceOf(Date)
                })
                .catch(error => expect(error).toBeNull())
            )
    })

    it('should fail with user not found', () => {
        
        return retrieveNote (new ObjectId())
            .then(() => {throw new Error('should not reach this point')})
            .catch(error => {
                expect(error).toBeInstanceOf(NotFoundError)
                expect(error.message).toEqual('user not found')
            })
    })

    afterAll(() => disconnect())
})