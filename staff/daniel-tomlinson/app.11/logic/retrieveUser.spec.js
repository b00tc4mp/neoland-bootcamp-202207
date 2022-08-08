describe("retrieveUser", () => {
  beforeEach(() => {
    users.length = 0;
  });

  it("should succeed on retrieve user", () => {
    //happy path
    const name = "Homer Simpson";
    const email = "homer@simpson.us";
    const password = "123123123";

    const homerSimpson = {
      name,
      email,
      password,
    };

    users.push(homerSimpson);

    retrieveUser(email, (error, user) => {
      expect(error).toBeNull();
      expect(users).toHaveSize(1);

      // const user = users[0];
      expect(user).toBeDefined();
      expect(user.name).toBe(name);
      expect(user.email).toBe(email);
      expect(user.password).toBe(password);
    });
  });
  it("should fail on incorrect email", () => {
    //unhappy path
    const name = "Homer Simpson";
    const email = "homer@simpson.us";
    const password = "123123123";

    const homerSimpson = {
      name,
      email,
      password,
    };

    users.push(homerSimpson);

    const wrongEmail = "whomer@sampson.us";

    retrieveUser(wrongEmail, (error, user) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(
        "user with email " + wrongEmail + " not found"
      );

      expect(user).toBeUndefined();
    });
  });

  it("should fail on invalid email", () => {
    //unhappy path
    const name = "Homer Simpson";
    const email = "homer@simpson.us";
    const password = "123123123";

    const homerSimpson = {
      name,
      email,
      password,
    };

    users.push(homerSimpson);

    const invalidEmail = "homer@@simpson.us";

    try {
      retrieveUser(invalidEmail, (error, user) => {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe(
          "user with email " + invalidEmail + " not found"
        );

        expect(user).toBeUndefined();
      });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message.toBe("email is not valid"));
    }
  });
});
