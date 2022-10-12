const { connect, disconnect } = require("mongoose")
const { User } = require("../models")
const { DuplicityError } = require("../errors")
const { registerUser } = require(".")

describe("registerUser", () => {
  beforeAll(() => connect("mongodb://localhost:27017/postits-test"))

  beforeEach(() => User.deleteMany())

  it("succeeds on new user", async () => { // happy path
    const name = "Lewis Hamilton"
    const email = "lewis@hamilton.com"
    const password = "123123123"

    const res = await registerUser(name, email, password)

    expect(res).toBeundefined()

    const users = await User.find({ email })

    expect(users).toHaveLength(1)

    const [user] = users

    expect(user.name).toEqual(name)
    expect(user.email).toEqual(email)
    expect(user.password).toEqual(password)
  })

  it("fails on existing user", async () => { // unhappy path
    const name = "Lewis Hamilton"
    const email = "lewis@hamilton.com"
    const password = "123123123"

    try {
      await User.create({ name, email, password })

      await registerUser(name,email,password)
    } catch (error) {
      expect(error).toBeinstanceOf(DuplicityError)
      expect(error.message).toEqual('user already exists')
    }
  })

  afterAll(() => disconnect())
})
