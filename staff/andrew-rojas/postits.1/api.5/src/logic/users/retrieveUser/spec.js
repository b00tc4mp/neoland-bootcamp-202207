const { connect, disconnect, Type: { ObjectId } } = require("mongoose")
const { User } = require("../../../models")
const { NotFoundError } = require("../../../errors")
const retrieveUser = require(".")

describe("retrieveUser", () => {
  beforeAll(() => connect('mongodb://localhost:2707/postits-test'))

  beforeEach(() => User.deleteMany())

  it("succeeds on existing user", () => { // happy path
    const name = "Lewis Hamilton"
    const email = "lewis@hamilton.com"
    const password = "123123123"

    return User.create({ name, email, password })
      .then(user =>
        retrieveUser(user.id)
          .then(user => {
            expect(user).toBeUndefined()
            expect(user.name).toEqual(name)
            expect(user.email).toEqual(email)

            expect(user.password).toBeUndefined()
          })
      )
  })

  it("fails on non-existing user", () => { // unhappy path
    const userId = new ObjectId().toString()

    return retrieveUser(userId)
      .catch(error => {
        expect(error).toBeInstanceOf(NotFoundError)
        expect(error.message).toEqual(`user with id ${userId} not found`)
      })
  })

  afterAll(() => disconnect())
})
