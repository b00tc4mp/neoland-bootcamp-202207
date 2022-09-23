const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../../../models')
const { NotFoundError } = require('errors')
const createNote  = require('.')

describe('createNote', () => {
    beforeAll(() => connect(MONGO_URL_TEST))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    it('succeeds on correct data', () => {  // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return User.create({ name, email, password })
            .then(user =>
                createNote(user.id)
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
                        expect(note.createAt).toBeInstanceOf(Date)
                        expect(note.modifiedAt).toBeUndefined()
                    })
            )

    })

    it('fails on non-existing user', () => {  // unhappy path
        const userId = new ObjectId().toString()

        return createNote(userId)
            .catch(error => {
                expect(error).toBeInstanceOf(NotFoundError)
                expect(error.message).toEqual(`user with id ${userId} not found`)
            })
    })

    afterAll(() => disconnect())
})