describe("retrieveUser", () => {
  beforeEach(() => {
    users.length = 0;
  });

  it("should succeed on retrieve user", () => {
    const name = "Homer Simpson";
    const email = "homer@simpson.us";
    const password = "123123123";

    const homerSimpson = {
      name,
      email,
      password,
    };

    users.push(homerSimpson);

    retrieveUser(email, (error) => {
      expect(error).toBeNull();
      expect(users).toHaveSize(1);

      const user = users[0];
      expect(user).toBeDefined();
      expect(user.name).toBe(name);
      expect(user.email).toBe(email);
      expect(user.password).toBe(password);
    });
  });
});
