describe("authenticateUser", () => {
  beforeEach(() => {
    users.length = 0;
  });

  it("should succeed on correct credentials", () => {
    //happy path
    const id = "user-" + Date.now();
    const name = "Mil House";
    const email = "mil@house.us";
    const password = "123123123";

    const milHouse = {
      id,
      name,
      email,
      password,
    };

    users.push(milHouse);

    authenticateUser(email, password, (error) => {
      expect(error).toBeNull();
    });
  });

  it("should fail on incorrect password", () => {
    //unhappy path
    const id = "user-" + Date.now();
    const name = "Mil House";
    const email = "mil@house.us";
    const password = "123123123";

    const milHouse = {
      id,
      name,
      email,
      password,
    };

    users.push(milHouse);

    authenticateUser(email, password + "-wrong", (error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("wrong credentials");
    });
  });

  it("should fail on incorrect email", () => {
    //unhappy path
    const id = "user-" + Date.now();
    const name = "Mil House";
    const email = "mil@house.us";
    const password = "123123123";

    const milHouse = {
      id,
      name,
      email,
      password,
    };

    users.push(milHouse);

    authenticateUser("mill@hows.us", password, (error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("wrong credentials");
    });
  });
});
