require('dotenv').config()
const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const chai = require('chai')
const chaiaspromise = require('chai-as-promised')
const expect  = chai.expect
chai.use(chaiaspromise)
const retrieveUser = require('./retrieveUser')
const { NotFoundError } = require('errors')
const { User } = require('../models/index')
const { env : {MONGO_URL_TEST}} = process

describe('retrieveUser', () => {

    before(() => connect(MONGO_URL_TEST))

    beforeEach(() => User.deleteMany())

    it('succeeds on a existing user', () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'
        
        return (async() => {
            const tempUser = await User.create({name, email, password})
        
            const user = await retrieveUser(tempUser.id)
    
            expect(user.name).to.equal(name)
            expect(user.email).to.equal(email)
            expect(user.password).to.be.undefined
            expect(user.notes).to.have.length(0)
    
        })()
    })

    //TODO UNHAPPY PATHS

    it('Fails if userId does not match with any user', () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'
        
        return (async() =>{
            const tempUser = await User.create({name, email, password})
        
            await expect(retrieveUser('930ccb4f3895cb611289d7e7')).to.eventually.be.rejectedWith('User not found')
            .and.be.an.instanceOf(NotFoundError)
        })()
    })

    after(() => disconnect())
})

