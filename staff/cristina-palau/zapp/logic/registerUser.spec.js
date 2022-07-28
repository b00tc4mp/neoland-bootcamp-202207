describe('registerUser', () => {
    beforeEach(() => {
        users.length = 0
    })

    it('should succeed on new user', () => { // happy path :)
        const name = 'Ana Conda'
        const email = 'ana@conda.com'
        const password = '123123123'
        const question = 'favourite pet'
        const answer = 'cat'

            registerUser(name, email, password, question, answer, error => {
            
            expect(error).toBeNull()

            expect(users).toHaveSize(1)

            const user = users[0]
            expect(user.name).toBe(name)
            expect(user.email).toBe(email)
            expect(user.password).toBe(password)
            expect(user.question).toBe(question)
            expect(user.answer).toBe(answer)

        })
    })

    it('should fail on already existing user', () => { // unhappy path :(
        const name = 'Cobra Taka'
        const email = 'cobra@taka.com'
        const password = '123123123'
        const question = 'favourite pet'
        const answer = 'dog'
      
        const cobraTaka = {
            name,
            email,
            password,
            question,
            answer
        }

        users.push(cobraTaka)

        registerUser(name, email, password, question, answer, error => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('user already exists')

            expect(users).toHaveSize(1)

            const user = users[0]
            expect(user.name).toBe(name)
            expect(user.email).toBe(email)
            expect(user.password).toBe(password)
        })
    })
})