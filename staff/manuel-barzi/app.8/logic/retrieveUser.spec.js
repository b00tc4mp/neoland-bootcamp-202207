describe('retrieveUser', () => {
    beforeEach(() => {
        users.length = 0
    })

    it('should succeed on correct email', () => { // happy path :)
        const name = 'Lan Gosta'
        const email = 'lan@gosta.com'
        const password = '123123123'

        const lanGosta = {
            name,
            email,
            password
        }

        users.push(lanGosta)

        retrieveUser(email, (error, user) => {
            expect(error).toBeNull()

            expect(user).toBeDefined()
            expect(user.name).toBe(name)
            expect(user.email).toBe(email)            
            expect(user.password).toBe(password)
        })
    })
    
    it('should fail on incorrect email', () => { // unhappy path :(
        const name = 'Zor Ro'
        const email = 'zor@ro.com'
        const password = '123123123'

        const zorRo = {
            name,
            email,
            password
        }

        users.push(zorRo)

        const wrongEmail = 'zor@ro.us'

        retrieveUser(wrongEmail, (error, user) => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('user with email ' + wrongEmail + ' not found')

            expect(user).toBeUndefined()
        })
    })

    it('should fail on invalid email', () => { // unhappy path :(
        const name = 'Zor Ro'
        const email = 'zor@ro.com'
        const password = '123123123'

        const zorRo = {
            name,
            email,
            password
        }

        users.push(zorRo)

        const invalidEmail = 'zor_ro.com'

        try {
            retrieveUser(invalidEmail, (error, user) => {
                expect(error).toBeInstanceOf(Error)
                expect(error.message).toBe('user with email ' + invalidEmail + ' not found')
    
                expect(user).toBeUndefined()
            })
        } catch(error) {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('email is not valid')
        }
    })
})