const { NotFoundError, FormatError } = require('errors')
const { User, Note } = require('../models')
const retrieveNotes = require('./retrieveNotes')
const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const chai = require('chai')
const chaiaspromise = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiaspromise)

describe('retrieveNotes', () => {
    before(() => connect('mongodb://localhost:27017/postits-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    it('Succeeds on proper userId', () => {

        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!';

        return (async () => {
            const user = await User.create({ name, email, password })

            const newNotes = [
                {
                    user: user.id,
                    title: 'Spec Note 1'
                },
                {
                    user: user.id,
                    title: 'Spec Note 2'
                },
                {
                    user: user.id,
                    title: 'Spec Note 3'
                }
            ]

            await Note.insertMany(newNotes)

            const notes = await retrieveNotes(user.id)

            expect(notes).to.have.lengthOf(3)
            expect(notes[0].user.toString()).to.equal(user.id)
            expect(notes[0].title).to.equal('Spec Note 1')
            expect(notes[0].text).to.equal('')
            expect(notes[0].visibility).to.equal('private')
            expect(notes[0].createAt).to.be.instanceof(Date)
            expect(notes[0].modifiedAt).to.be.undefined
            expect(notes[1].user.toString()).to.equal(user.id)
            expect(notes[1].title).to.equal('Spec Note 2')
            expect(notes[1].text).to.equal('')
            expect(notes[1].visibility).to.equal('private')
            expect(notes[1].createAt).to.be.instanceof(Date)
            expect(notes[1].modifiedAt).to.be.undefined
            expect(notes[2].user.toString()).to.equal(user.id)
            expect(notes[2].title).to.equal('Spec Note 3')
            expect(notes[2].text).to.equal('')
            expect(notes[2].visibility).to.equal('private')
            expect(notes[2].createAt).to.be.instanceof(Date)
            expect(notes[2].modifiedAt).to.be.undefined

        })()
    })

    it('Succeeds on existing user WITHOUT NOTES', () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!';

        return (async () => {
            const user = await User.create({ name, email, password })

            const notes = await retrieveNotes(user.id)

            expect(notes).to.have.lengthOf(0)
        })()
    })

    it('Fails if user DOES NOT EXIST', () => {
        const testId = new ObjectId().toString();

        return (async () => {
            await expect(retrieveNotes(testId)).to.eventually.be.rejectedWith(`User with ID: ${testId} not found`)
        .and.be.an.instanceOf(NotFoundError)
        })()
    })

    it('Fails if userId has wrong format', () => {
        const testId = '01234567891';

        
        expect(() => retrieveNotes(testId)).to.throw(FormatError, 'User is not valid')
        
    })
})