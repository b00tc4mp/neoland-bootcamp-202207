const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../../../models')
const { NotFoundError } = require('../../../errors')
const updateNote = require('.')

describe('updateNote', () => {
    beforeAll(() => connect('mongodb://127.0.0.1:27017/postits-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    it('succeeds on correct data', () => {
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return User.create({ name, email, password })
            .then(user => Note.create({ user: user.id })
                .then(note => {
                    updateNote({ user: user.id, id: note.id, text: 'new Text', visibility: 'public' })
                        .then(res => {
                            expect(res).toBeUndefined()

                            return Note.findById(note.id)
                        })

                        .then(noteFounded => {
                            expect(noteFounded.text).toEqual('new Text')
                            expect(noteFounded.user.toString()).toEqual(user.id)
                            expect(noteFounded.visibility).toEqual('public')
                            expect(noteFounded.createAt).toBeInstanceOf(Date)
                            expect(noteFounded.modifiedAt).toBeInstanceOf(Date)
                        })

                })
            )

    })

    // Unhappy user does not exist
    // Unhappy note does not exist
    // Unhappy No changes provided????
    
afterAll(() => disconnect())
})