const createNote = require('./createNote')
const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const chai = require('chai')
const chaiaspromise = require('chai-as-promised')
const expect  = chai.expect
chai.use(chaiaspromise)
const { User, Note } = require('../models/')
const { NotFoundError, FormatError } = require('errors')


describe('createNote', () => {
    before(() => connect('mongodb://localhost:27017/postits-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    it('Succeeds creating a note on existing user WITHOUT TEXT(default)', async () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        await User.create({name, email, password})
        const user = await User.findOne({'email': email})

        const noteTitle = 'Spec Title'
        await createNote(user.id, noteTitle)
        
        const notes = await Note.find()

        expect(notes).to.have.lengthOf(1)

        const note = notes[0]

        expect(note.user.toString()).to.equal(user.id)
        expect(note.title).to.equal(noteTitle)
        expect(note.text).to.equal('')
        expect(note.visibility).to.equal('private')
        expect(note.createAt).to.be.instanceof(Date)
        expect(note.modifiedAt).to.be.undefined
    })

    it('Succeeds creating a note on existing user WITH TEXT', async() => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        await User.create({name, email, password})
        const user = await User.findOne({'email': email})

        const noteTitle = 'Spec Title'
        const noteText = 'Spec Text'
        await createNote(user.id, noteTitle, noteText)
        
        const notes = await Note.find()

        expect(notes).to.have.lengthOf(1)

        const note = notes[0]

        expect(note.user.toString()).to.equal(user.id)
        expect(note.title).to.equal(noteTitle)
        expect(note.text).to.equal('Spec Text')
        expect(note.visibility).to.equal('private')
        expect(note.createAt).to.be.instanceof(Date)
        expect(note.modifiedAt).to.be.undefined
    })

    it('fails on non-existing user', async () => {
        const userId = new ObjectId().toString()
        const noteTitle = 'Spec Title'

        await expect(createNote(userId, noteTitle)).to.eventually.be.rejectedWith(`${userId} not found in db`)
        .and.be.an.instanceOf(NotFoundError)
    })

    it('fails if title is empty', async() => {
        const userId = new ObjectId().toString()
        const noteTitle = ''

        await expect(createNote(userId, noteTitle)).to.eventually.be.rejectedWith(`Title is empty or blank`)
        .and.be.an.instanceOf(FormatError)
        const notes = await Note.find()
        expect(notes).to.have.lengthOf(0)
    })

    it('fails if title is not a string', async() => {
        const userId = new ObjectId().toString()
        const noteTitle = 123

        await expect(createNote(userId, noteTitle)).to.eventually.be.rejectedWith(`Title is not a string`)
        .and.be.an.instanceOf(TypeError)
    })

    it('fails if text is not a string', async() => {
        const userId = new ObjectId().toString()
        const noteTitle = 'Spec Title'
        const noteText = 123

        await expect(createNote(userId, noteTitle, noteText)).to.eventually.be.rejectedWith(`Text is not a string`)
        .and.be.an.instanceOf(TypeError)
    })

    after(() => disconnect())
})