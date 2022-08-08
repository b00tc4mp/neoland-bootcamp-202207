describe('registerUser', () => {
    beforeEach(() => {
        users.length = 0
    })

    it('should succeed on new user', () => { // happy path :)
        const name = 'AnaConda'
        const email = 'ana@conda.com'
        const password = '1aA1!sdaz'

        registerUser(name, email, password, error => {
            expect(error).toBeNull()

            expect(users).toHaveSize(1)

            const user = users[0]
            expect(user.name).toBe(name)
            expect(user.email).toBe(email)
            expect(user.password).toBe(password)
        })
    })

    it('should fail on already existing user', () => { // unhappy path :(
        const name = 'CobraTaka'
        const email = 'cobra@taka.com'
        const password = 'aA123!ddva'

        // const cobraTaka = {
        //     name: name,
        //     email: email,
        //     password: password
        // }
        const cobraTaka = {
            name,
            email,
            password
        }

        users.push(cobraTaka)

        registerUser(name, email, password, error => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('El correo electrónico ya ha sido registrado')

            expect(users).toHaveSize(1)

            const user = users[0]
            expect(user.name).toBe(name)
            expect(user.email).toBe(email)
            expect(user.password).toBe(password)
        })
    })
})