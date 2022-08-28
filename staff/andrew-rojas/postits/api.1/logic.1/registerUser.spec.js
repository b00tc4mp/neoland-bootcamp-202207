const { readdir, unlink, readFile } = require("fs");
const registerUser = require("./registerUser");

describe("registerUser", () => {
  const folder = "./data/users";

  beforeEach((done) => {
    readdir(folder, (error, files) => {
      if (error) {
        done(error);

        return;
      }

      let count = 0;

      files.forEach((file) => {
        unlink(`${folder}/${file}`, (error) => {
          if (error) {
            done(error);

            return;
          }

          count++;

          if (count === files.length) done();
        });
      });
    });
  });

  it("succeds registering a new user", (done) => {
    // happy path
    const name = "Pepito Grillo";
    const email = "pepito@grillo.com";
    const password = "123123123";

    debugger;

    registerUser(name, email, password, (error) => {
      expect(error).toBeNull();

      readdir(folder, (error, files) => {
        if (error) {
          done(error);

          return;
        }

        expect(files).toHaveLength(1);

        const file = files[0];

        readFile(`${folder}/${file}`, "utf8", (error, json) => {
          if (error) {
            done(error);

            return;
          }

          const user = JSON.parse(json);

          expect(typeof user.id).toBe("string");
          expect(user.name).toEqual(name);
          expect(user.email).toEqual(email);
          expect(user.password).toEqual(password);

          done();
        });
      });
    });
  });

  xit("should fail when user already exists", (done) => {
    // unhappy path
    const name = "Pepito Grillo";
    const email = "pepito@grillo.com";
    const password = "123123123";
    // TODO create a user manually (using fs, json tools)

    // TODO call registerUser with same data (it should fail)
    // TODO check error exists and is a DuplicityError
    // TODO check user is not re-created (twice) in db
  });
});
