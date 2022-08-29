const createNote = require('./createNote')
const { connect, disconnect, Types: { ObjectId }, connection } = require('mongoose')
const chai = require('chai')
const chaiaspromise = require('chai-as-promised')
const expect  = chai.expect
chai.use(chaiaspromise)
const { User, Note } = require('../models/')


describe('createNote', () => {
    before(() => connect('mongodb://localhost:27017/postits-test'))

    beforeEach(() => connection.db.dropDatabase())

    it('Succeeds creating a note on existing user', async() => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        await User.create({name, email, password})
        const user = await User.findOne({'email': email})

        const noteTitle = 'Spec Title'
        const noteText = 'Spec text'
        await createNote(user.id, noteTitle, noteText)
        debugger
        /* expect(user.notes).to.have.lengthOf(1)

        const note = user.notes[0]
        expect(note.title).to.equal(noteTitle)
        expect(note.text).to.equal(noteText)
        expect(user.notes).to.have.lengthOf(1) */
    })


    after(() => disconnect())
})