describe('retrieveUser', () => {
    beforeEach(() => { // reseteo users para que quede vacio antes de los tests
        users.length = 0;
    })
    it('should succeed with found user', () => { // happy path :)
        const name = 'Pi Tufo'
        const email = 'pi@tufo.com'
        const password = '123123123'

        const pitufo = {
            name,
            email,
            password
        }

        users.push(pitufo);

        retrieveUser(email, (error, user) => { // tengo q añadir user para q si no da error devuelva user
            expect(error).toBeNull()

            expect(user).toBeDefined()
            expect(user.email).toBe(email)
            expect(user.name).toBe(name)
            expect(user.password).toBe(password)
            
        })
    })

    it('should fail on user not found', () => { // unhappy path :(
        const name = 'Ele Fante'
        const email = 'ele@fante.com'
        const password = '123123123'

        // const user = {
        //     name: name,
        //     email: email,
        //     password: password
        // }
        // lo de arriba equivale a esto:
        const elefante = {
            name,
            email,
            password
        }
        
        users.push(elefante)

        retrieveUser('ele@fante.us', (error, user) => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('user with email ele@fante.us not found')

            expect(user).toBe(undefined)
        })
    })

    it('should fail on invalid email | example with try catch', () => { // unhappy path :(
        const name = 'Ele Fante'
        const email = 'ele@fante.com'
        const password = '123123123'

        // const user = {
        //     name: name,
        //     email: email,
        //     password: password
        // }

        // lo de arriba equivale a esto:
        const elefante = {
            name,
            email,
            password
        }
        
        users.push(elefante)

        try {
            retrieveUser('elefante', (error, user) => {
                expect(error).toBeInstanceOf(Error)
                expect(error.message).toBe('user with email ele@fante.us not found')
    
                expect(user).toBe(undefined)
            })
        }
        catch(error) {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('email is not valid')
        }
    })

    it('should fail on invalid email | example with fail', () => { // unhappy path 😦
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
                // si el codigo llegó hasta aquí, jasmine lanza un error para indicar que no debería haber llegado hasta ahí
                fail('it should not reach this point') 
            })
        } catch(error) {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('email is not valid')
        }
    })

    it('should fail on invalid email | example with throw', () => { // unhappy path 😦
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

        // importante para el metodo toThrow el añadir una funcion anonima en el expect que llame a lo que quieras checkear
        expect(function() {retrieveUser(invalidEmail, (error, user) => {
            fail('it should not reach this point')
        })}).toThrow()
    })
})

