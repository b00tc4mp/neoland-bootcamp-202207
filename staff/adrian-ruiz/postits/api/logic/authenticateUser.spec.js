require('dotenv').config()
const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const chai = require('chai')
const chaiaspromise = require('chai-as-promised')
const expect  = chai.expect
chai.use(chaiaspromise) // Decimos a chai que utilice chaiaspromise para que reconozca los metodos extendidos
const authenticateUser = require('./authenticateUser')
const { AuthError, RegexError, NotFoundError } = require('errors')
const { User } = require('../models/')
const { env : {MONGO_URL_TEST}} = process


describe('authenticateUser', () => {

    before(() => connect(MONGO_URL_TEST))

    beforeEach(() => User.deleteMany())

    it('Suceeds authenticating on existing user', () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        return (async() => {
            await User.create({name, email, password})
        
            const userId = await authenticateUser(email, password)
            expect(userId).to.be.a('string')
        })()
    })

    //TODO unhappy paths
    it('Fails(AUTH Error) if credentials are wrong on existing user', () => {
        
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'
       
        return (async() => {
            await User.create({name, email, password})
        
        
            await expect(authenticateUser(email, 'wrongPass123!')).to.eventually.be.rejectedWith('Email and/or password wrong')
            .and.be.an.instanceOf(AuthError)
        })()     
        
    })

    it('Fails(Throw Mail Regex Error) if mail format is wrong on existing user', () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        return (async () => {
            await User.create({name, email, password})

            expect(() => authenticateUser('wrong@wrong...es', password)).to.throw(RegexError, 'Email is not valid' )
        })()

    })

    it('Fails(Throw NotFoundError) if user does not exist', async () => {

        await expect(authenticateUser('wrong@wrong.es', 'wrongPass123!')).to.eventually.be.rejectedWith('Email and/or password wrong')
        .and.be.an.instanceOf(NotFoundError)

    })


    after(() => disconnect())
})