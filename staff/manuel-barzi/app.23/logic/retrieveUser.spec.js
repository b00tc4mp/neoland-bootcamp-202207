describe('retrieveUser', () => {
    beforeEach(() => {
        users.length = 0
    })

    it('succeeds on correct email', () => { // happy path :)
        const id = 'user-12312312313'
        const name = 'Lan Gosta'
        const email = 'lan@gosta.com'
        const password = '123123123'

        const lanGosta = {
            id,
            name,
            email,
            password
        }

        users.push(lanGosta)

        retrieveUser(id, (error, user) => {
            expect(error).toBeNull()

            expect(user).toBeDefined()
            expect(user.id).toBe(id)
            expect(user.name).toBe(name)
            expect(user.email).toBe(email)            
            expect(user.password).toBeUndefined()
        })
    })
    
    it('fails on incorrect email', () => { // unhappy path :(
        const id = 'user-123113424512313'
        const name = 'Zor Ro'
        const email = 'zor@ro.com'
        const password = '123123123'

        const zorRo = {
            id,
            name,
            email,
            password
        }

        users.push(zorRo)

        const wrongUserId = 'user-343453495349534'

        retrieveUser(wrongUserId, (error, user) => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('user with id ' + wrongUserId + ' not found')

            expect(user).toBeUndefined()
        })
    })
})