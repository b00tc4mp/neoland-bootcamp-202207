const { writeFile } = require('fs')
const authenticateUser = require('./authenticateUser')
const { AuthError } = require('../errors')
const { deleteFiles } = require('../utils')


describe('authenticateUser', () => {
  const folder = './data/users'

  beforeEach(done => deleteFiles(folder,done))

  it( 'succces authenticate on existing user' , done => { // happy path
    const name = 'Andrew Rojas'
    const email = 'andrew@rojas.com'
    const password = '123123123'
    
    const user = { id: `user-${(Math.random() * Date.now())}`, name, email, password }

    const json = JSON.stringify(user)

    writeFile(`${folder}/${user.id}.json`, json, 'utf8', error => {
      if (error) return done(error)

      authenticateUser(email, password, (error, userId) => {
        expect(error).toBeNull()
        expect(userId).toEqual(user.id)

        done()
      })
    })
  })

  //TODO unhappy paths

  afterAll(done => deleteFiles(folder, done))
})