describe("registerUser", () => {
  beforeEach(() => {
    users.length = 0;
  });

  it("should succeed on new user", () => {
    // happy path :)
    const name = "Ana Conda";
    const email = "ana@conda.com";
    const password = "123123123";

    registerUser(name, email, password, (error) => {
      expect(error).toBeNull();

      expect(users).toHaveSize(1);

      const user = users[0];
      expect(user.name).toBe(name);
      expect(user.email).toBe(email);
      expect(user.password).toBe(password);
    });
  });

  it("should fail on already existing user", () => {
    // unhappy path :(
    const name = "Cobra Taka";
    const email = "cobra@taka.com";
    const password = "123123123";

    // const cobraTaka = {
    //     name: name,
    //     email: email,
    //     password: password
    // }
    const cobraTaka = {
      name,
      email,
      password,
    };

    users.push(cobraTaka);

    registerUser(name, email, password, (error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("user already exists");

      expect(users).toHaveSize(1);

      const user = users[0];
      expect(user.name).toBe(name);
      expect(user.email).toBe(email);
      expect(user.password).toBe(password);
    });
  });

  it("should succeed on new user", () => {
    const name = "Pepitu";
    const email = "pepitu@dupond.com";
    const password = "123123123";

    const pepitu = {
      name,
      email,
      password,
    };

    registerUser(name, email, password, (error) => {
      expect(error).toBeNull;
      expect(users).toHaveSize(1);
      expect(users[0]).toEqual(pepitu);
    });
  });
});
