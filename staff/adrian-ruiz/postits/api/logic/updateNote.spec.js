const updateNote = require('./updateNote')
const { connect, disconnect } = require('mongoose')
const chai = require('chai')
const chaiaspromise = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiaspromise)
const { User, Note } = require('../models/')
const { AuthError } = require('errors')

describe('updateNote', () => {
    before(() => connect('mongodb://localhost:27017/postits-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    it('Succeeds on correct data', () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        return (async () => {
            const user = await User.create({ name, email, password })

            const note = await Note.create({ user: user.id, title: 'Test Spec' })

            const result = await updateNote({ userId: user.id, noteId: note.id, title: 'New Title Spec', text: 'New Text Spec', visibility: 'public' })

            const updatedNote = await Note.findById(note.id)

            expect(result).to.be.undefined
            expect(updatedNote.user.toString()).to.equal(user.id)
            expect(updatedNote.title).to.equal('New Title Spec')
            expect(updatedNote.text).to.equal('New Text Spec')
            expect(updatedNote.visibility).to.equal('public')
            expect(updatedNote.createAt).to.be.instanceOf(Date)
            expect(updatedNote.createAt.toString()).to.equal(note.createAt.toString())
            expect(updatedNote.modifiedAt).to.be.instanceOf(Date)
            expect(updatedNote.modifiedAt).to.not.equal(note.modifiedAt)
        })()
    })

    it('Succeeds just changing title', () => {

        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        return (async () => {
            const user = await User.create({ name, email, password })

            const note = await Note.create({ user: user.id, title: 'Test Spec' })

            const result = await updateNote({ userId: user.id, noteId: note.id, title: 'New Title Spec' })

            const updatedNote = await Note.findById(note.id)

            expect(result).to.be.undefined
            expect(updatedNote.user.toString()).to.equal(user.id)
            expect(updatedNote.title).to.equal('New Title Spec')
            expect(updatedNote.text).to.equal(note.text)
            expect(updatedNote.visibility).to.equal(note.visibility)
            expect(updatedNote.createAt).to.be.instanceOf(Date)
            expect(updatedNote.createAt.toString()).to.equal(note.createAt.toString())
            expect(updatedNote.modifiedAt).to.be.instanceOf(Date)
            expect(updatedNote.modifiedAt).to.not.equal(note.modifiedAt)
        })()
    })

    it('Succeeds just changing visibility', () => {

        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        return (async () => {
            const user = await User.create({ name, email, password })

            const note = await Note.create({ user: user.id, title: 'Test Spec' })

            const result = await updateNote({ userId: user.id, noteId: note.id, visibility:'public' })

            const updatedNote = await Note.findById(note.id)

            expect(result).to.be.undefined
            expect(updatedNote.user.toString()).to.equal(user.id)
            expect(updatedNote.title).to.equal(note.title)
            expect(updatedNote.text).to.equal(note.text)
            expect(updatedNote.visibility).to.equal('public')
            expect(updatedNote.createAt).to.be.instanceOf(Date)
            expect(updatedNote.createAt.toString()).to.equal(note.createAt.toString())
            expect(updatedNote.modifiedAt).to.be.instanceOf(Date)
            expect(updatedNote.modifiedAt).to.not.equal(note.modifiedAt)
        })()
    })
    it('Fails on note that does not belong to the user', () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'
        const email2 = 'spec2@testing.com'

        const usersToCreate = [
            {
                name,
                email,
                password
            },
            {
                name,
                email: email2,
                password
            }
        ]
        return (async () => {
            const users = await User.insertMany(usersToCreate)

            const note = await Note.create({ user: users[0].id, title: 'Test Spec' })

            await expect(updateNote({ userId: users[1].id, noteId: note.id, title: 'New Spec Title', text: 'New Spec Text', visibility: 'public' })).to.eventually.be.rejectedWith(`Note with id ${note.id} does not belong to user ${users[1].id} and/or does not exists`)
                .and.be.an.instanceOf(AuthError)
        })()

    })

    after(() => disconnect())
})