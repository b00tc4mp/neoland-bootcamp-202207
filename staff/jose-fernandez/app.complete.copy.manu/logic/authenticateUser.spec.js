describe('authenticateUser', () => {
    beforeEach(() => {
        users.length = 0
    })

    it('succeeds on correct credentials', () => { // happy path :)
        const id = 'user-' + Date.now()
        const name = 'Pi Tufo'
        const email = 'pi@tufo.com'
        const password = '123123123'

        const piTufo = {
            id,
            name,
            email,
            password
        }

        users.push(piTufo)

        authenticateUser(email, password, error => {
            expect(error).toBeNull()
        })
    })

    it('fails on incorrect password', () => { // unhappy path :(
        const id = 'user-' + Date.now()
        const name = 'Ele Fante'
        const email = 'ele@fante.com'
        const password = '123123123'

        const eleFante = {
            id,
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
    
    it('fails on incorrect email', () => { // unhappy path :(
        const id = 'user-' + Date.now()
        const name = 'Ele Fante'
        const email = 'ele@fante.com'
        const password = '123123123'

        const eleFante = {
            id,
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