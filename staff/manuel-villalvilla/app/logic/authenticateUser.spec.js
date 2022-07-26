describe('authenticateUser', () => {
    beforeEach(() => { // reseteo users para que quede vacio antes de los tests
        users.length = 0;
    })
    it('should succeed with correct credentials', () => { // happy path :)
        const name = 'Pi Tufo'
        const email = 'pi@tufo.com'
        const password = '123123123'
        

        const pitufo = {
            name,
            email,
            password,
        }

        users.push(pitufo);

        authenticateUser(email, password, error => {
            expect(error).toBeNull()
            
        })
    })

    it('should fail on incorrect password', () => { // unhappy path :(
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

        authenticateUser(email, password + '-wrong', error => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('wrong credentials')

        })
    })

    it('should fail on incorrect email', () => { // unhappy path :(
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

        authenticateUser('ele@fante.us', password, error => {
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('wrong credentials')

        })
    })
})