describe('authenticateUser', function () {
  beforeEach( function() {
    URLSearchParams.length = 0
  })

  it('should succed on correct credentials', function () { // happy path :)
    const name = 'Alan Brito'
    const email = 'alan@brito.com'
    const password = '12345678'

    const alanBrito = {
      name,
      email,
      password
    }

    users.push(alanBrito)

    authenticateUser (email, password, error => {
      expect(error).toBeNull()
    })
  })

  it( 'should fail on incorrect password', function () { //unhappy path :(
    const name = 'Ele Fante'
    const email = 'ele@fante.com'
    const password = '12345678'

    const eleFante = {
     name,
     email,
     password 
    }

    users.push(eleFante)

    authenticateUser(email, password + '-wrong', error => {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('wrong credentials')
    })
})

it('should fail on incorrect email', function () { // unhappy path :(
    const name = 'Ele Fante'
    const email = 'ele@fante.com'
    const password = '12345678'

    const eleFante = {
        name,
        email,
        password
    }

    users.push(eleFante)

    authenticateUser('ele@fante.us', password, error => {
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toBe('wrong credentials')
    })
})
})