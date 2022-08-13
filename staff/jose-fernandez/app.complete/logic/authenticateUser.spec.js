describe('authenticateUser',()=>{
    beforeEach(()=>{
        //vaciar el array con longitud = 0
        users.length=0
    })

    it('should succeed on correct credentials',()=>{ //happy path :)
        const name = 'Pi Tufo'
        const email='pi@tufo.com'
        const password= '123123123'
    
        // const piTufo={
        //     name:name,
        //     email:email,
        //     password:password
        // }

        //abreviando const piTufo={}
        const piTufo={
            name,
            email,
            password
        }
        
        users.push(piTufo)
        
        authenticateUser(email,password,error=>{
            expect(error).toBeNull()
        })
    })

    it('should fail on incorrect email',()=>{ //unhappy path :(
        const name = 'Ele Fante'
        const email = 'ele@fante.com'
        const password= '123123123'

        const eleFante={
            name,email,password
        }

        users.push(eleFante)

        authenticateUser('ele@fante.us',password +'-wrong' , error=>{
            expect(error).toBeInstanceOf(Error)
            expect(error.message).toBe('wrong credentials')
        })
    })


})