describe('resetPassword', () => {
    beforeEach(() => {
        users.length = 0
    })

    it('should succeed on correct credentials', () => { // happy path :)
        const name = 'Alicia Maravillas'
        const email = 'alicia@maravillas.com'
        const password = '123123123'
        const question = 'favourite pet'
        const answer = 'cat'

        const aliciaMaravillas = {
            name,
            email,
            password,
            question,
            answer
        }

        users.push(aliciaMaravillas)

        resetPassword(email, question, answer, (error, user) => {
            expect(error).toBeNull()

            expect(user).toBeDefined()
            expect(user.name).toBe(name)
            expect(user.email).toBe(email)
            expect(user.password).toBe(password)
        })
    })

    it('should fail on incorrect email', () => { // unhappy path :(
        const name = 'Reina Corazones'
        const email = 'reina@corazones.com'
        const password = '123123123'
        const question = 'favourite pet'
        const answer = 'fish'

        const reinaCorazones = {
            name,
            email,
            password,
            question,
            answer
        }

        users.push(reinaCorazones)

        const wrongEmail = 'reina@corazones.us'


        resetPassword(wrongEmail, question, answer, (error, user) => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('wrong credentials')

            expect(user).toBeUndefined
        })


    })
})