describe('authenticateUser', () => {
    beforeEach(() => {
        users.length = 0
    })

    it('should succeed on correct credentials', () => { // happy path :)
        const name = 'Pi Tufo'
        const email = 'pi@tufo.com'
        const password = '123123123'

        const piTufo = {
            name,
            email,
            password
        }

        users.push(piTufo)

        authenticateUser(email, password, error => {
            expect(error).toBeNull()
        })
    })

    it('should fail on incorrect password', () => { // unhappy path :(
        const name = 'Ele Fante'
        const email = 'ele@fante.com'
        const password = '123123123'

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
    
    it('should fail on incorrect email', () => { // unhappy path :(
        const name = 'Ele Fante'
        const email = 'ele@fante.com'
        const password = '123123123'

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