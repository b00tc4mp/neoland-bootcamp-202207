const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const chai = require('chai')
const chaiaspromise = require('chai-as-promised')
const expect  = chai.expect
chai.use(chaiaspromise) // Decimos a chai que utilice chaiaspromise para que reconozca los metodos extendidos
const authenticateUser = require('./authenticateUser')
const { AuthError, RegexError, NotFoundError } = require('errors')
const { User } = require('../models/')

describe('authenticateUser', () => {

    before(() => connect('mongodb://localhost:27017/postits-test'))

    beforeEach(() => User.deleteMany())

    it('Suceeds authenticating on existing user', async () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        await User.create({name, email, password})
        
        const userId = await authenticateUser(email, password)
        expect(userId).to.be.a('string')

    })

    //TODO unhappy paths
    it('Fails(AUTH Error) if credentials are wrong on existing user', async () => {
        
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'
       
        
        await User.create({name, email, password})
        
        
        await expect(authenticateUser(email, 'wrongPass123!')).to.eventually.be.rejectedWith('Email and/or password wrong')
        .and.be.an.instanceOf(AuthError)
        // YOU HAVE TO USE "AWAIT" OR RETURN ON EXPECT, INSTEAD OF FUNCTION TO TEST LIKE THAT
       
            
        
    })

    it('Fails(Throw Mail Regex Error) if mail format is wrong on existing user', async () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        await User.create({name, email, password})

        await expect(authenticateUser('wrong@wrong...es', password)).to.eventually.be.rejectedWith('Email is not valid')
        .and.be.an.instanceOf(RegexError)

    })

    it('Fails(Throw NotFoundError) if user does not exist', async () => {

        await expect(authenticateUser('wrong@wrong.es', 'wrongPass123!')).to.eventually.be.rejectedWith('Email and/or password wrong')
        .and.be.an.instanceOf(NotFoundError)

    })


    after(() => disconnect())
})