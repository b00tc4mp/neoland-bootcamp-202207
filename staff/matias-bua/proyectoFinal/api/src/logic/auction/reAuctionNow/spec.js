const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../models')
// const { NotFoundError } = require('../errors')
const { updateNote } = require('.')

describe('updateNote', () => {
    beforeAll(() => connect('mongodb://localhost:27017/postits-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    it('succeeds on correct data', () => {  // happy path
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

    it('fails on note that does not belong to the user', () => {  // unhappy path
        const name1 = 'Pepito Grillo'
        const email1 = 'pepito@grillo.com'
        const password1 = '123123123'

        const name2 = 'Wendy Bread'
        const email2 = 'wendybread@gmail.com'
        const password2 = '123123123'

        return Promise.all([
            User.create({ name: name1, email: email1, password: password1 }),
            User.create({ name: name2, email: email2, password: password2 })
        ])
            .then(users => {
                Note.create({ user: users[0].id })
                    .then(note => {
                        updateNote({ user: users[1].id, id: note.id, text: 'new Text', visibility: 'public' })
                            .then(() => { throw new Error('it should not reach this point') })
                            .catch(error => {
                                expect(error).toBeInstanceOf(AuthError)
                                expect(error.message).toEqual(`note with id ${note.id} does not belong to user with id ${users[1].id}`)
                            })
                    })
            })
    })

    // Unhappy user does not exist
    // Unhappy note does not exist
    // Unhappy No changes provided????

    afterAll(() => disconnect())
})