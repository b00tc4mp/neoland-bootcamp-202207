describe('retrieveUser', () => {
    beforeEach(() => {
        users.length = 0
    })

    it('should succeed on correct email', () => { // happy path :)
        const name = 'lan Gosta'
        const email = 'lan@gosta.com'
        const password = '123123123'

        const lanGosta = {
            name,
            email,
            password
        }

        users.push(lanGosta)

        retrieveUser(email,  error => {
            expect(error).toBeNull()
        })
    }) 
    
    it('incorrect email', () => { // unhappy path :(
        const name = 'zor Ro'
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

            expect (user).toBeUndefined()
        })
    })

    it('should fail on invalid email', () => { // unhappy path :0
        const name = 'Pa Tata'
        const email = 'pa@tata.com'
        const password = '123123123'

        const paTata = {
            name,
            email,
            password
        }

        users.push(paTata)

        const invalidEmail = 'pa_tata.com'

        try {
            retrieveUser(invalidEmail, (error, user) => {
                fail('it should not reach this point')
            })
        } catch(error) {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('email is not valid')
        }
    })
})

