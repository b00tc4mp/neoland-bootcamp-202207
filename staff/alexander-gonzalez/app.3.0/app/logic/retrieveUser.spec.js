describe("retrieveUser", () => {
  beforeEach(() => {
    users.length = 0;
  });

  it("should succeed on correct email", () => {         // happy path :)
    
    const name = "Ale Xander";
    const email = "ale@xander.com";
    const password = 123123123;

    const AleXander = {
      name,
      email,
      password,
    };

    users.push(AleXander);

    retrieveUser (email, (error, user) => {
      expect(error).toBeDefined();
      expect(name).toBe(name);
      expect(user.email).toBe(email);
      expect(user.password).toBe(password);
    });
  });
  it('should succeed on correct email', () => {             // happy path :)
    const name = 'Pin Tor'
    const email = 'pin@tor.com'
    const password = '123123123'

    const PinTor = {
        name,
        email,
        password
    }

    users.push(PinTor)

    retrieveUser(email, (error, user) => {
        expect(error).toBeNull()

        expect(user).toBeDefined()
        expect(user.name).toBe(name)
        expect(user.email).toBe(email)            
        expect(user.password).toBe(password)
    })
})




  it("should fail on incorrect email", () => {           // unhappy path :(
                        
    const name = "Pin Tor";
    const email = "pin@tor.com";
    const password = '123123123';

    const PinTor = {
      name,
      email,
      password,
    };

    users.push(PinTor);

    const invalidEmail = 'pin___tor.com';

    try {
      retrieveUser(invalidEmail, (error, user) => {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe( "user with email" + invalidEmail + " not found" );

        expect(user).toBeUndefined();
      });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("email is not valid");
    }
  });
});
