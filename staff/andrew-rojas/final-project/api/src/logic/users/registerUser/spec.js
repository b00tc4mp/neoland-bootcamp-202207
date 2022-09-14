const { connect, disconnect } = require("mongoose")
const { User } = require("../../../models")
const { DuplicityError, FormatError } = require("errors")
const registerUser = require(".")

describe("registerUser", () => {
  beforeAll(() => connect("mongodb://localhost:27017/product-test"))

  //TODO revisar spec y probar

  beforeEach(() => User.deleteMany())

  it("succeeds on new user",() => { // happy path
    const adminEmail = "michael@jordan.com"
    const adminPassword = "123123123"

    const name = "Lewis Hamilton"
    const email = "lewis@hamilton.com"
    const password = "321321321"

    return registerUser({ adminEmail, adminPassword,name, email, password})
      .then(res => {
        expect(res).toBeUndefined()

        return User.find({ email })

      })

      .then(users => {
        expect(users).toHaveLength(1)

        const [user] = users

        expect(user.adminEmail).toEqual(adminEmail)
        expect(user.adminPassword).toEqual(adminPassword)
        expect(user.name).toEqual(name)
        expect(user.email).toEqual(email)
        expect(user.password).toEqual(password)

      })

    
  })

  it("fails -------", () => { // unhappy path

    const adminEmail = "andrew@rojas.com"
    const adminPassword = "321321321"

    const name = "Lewis Hamilton"
    const email = "lewis@hamilton.com"
    const password = "12312123"

    return User.create({ adminEmail, adminPassword, name, email, password })
    .then(() => registerUser(name, email, password))
    .catch(error => {
        expect(error).toBeInstanceOf(DuplicityError)
        expect(error.message).toEqual('user ------')
    })


      // try { 
      //   await registerUser(name,email,password)
      // } catch (error) { 
      //     expect(error).toBeInstanceOf(DuplicityError) 
      //     expect(error.message).toEqual('user already exists')
      // }

  //     await expect(registerUser(name,email,password)).rejects.toThrowError(DuplicityError, 'user already exists')
  // })

  // it('fails on non.string name', () => { //unhappy path
  //   const name = 1234
  //   const email = 'lewis@hamilton.com'
  //   const password = '123123123'

  //   expect(() => registerUser(name, email, password)).toThrowError(TypeError, 'name is not a string')
  // })

  // it('fails on empty name', () => { //unhappy path
  //   const name = ''
  //   const email = 'lewis@hamilton.com'
  //   const password = '123123123'

  //   expect(() => registerUser(name, email, password)).toThrowError(FormatError, 'name is empty or blank')
  // })

  // it('fails on invalid email', () => { //unhappy path
  //   const name = 'Lewis Hamilton'
  //   const email = 'lewis_hamilton.com'
  //   const password = '123123123'

  //   expect(() => registerUser(name, email, password)).toThrowError(FormatError, 'email is not valid')
  })

  afterAll(() => disconnect())
})
