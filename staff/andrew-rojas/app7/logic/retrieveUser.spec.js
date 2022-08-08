it('should fail on invalid email', () => { // unhappy path 😦
  const name = 'Zor Ro'
  const email = 'zor@ro.com'
  const password = '123123123'

  const zorRo = {
      name,
      email,
      password
  }

  users.push(zorRo)

  const invalidEmail = 'zor_ro.com'

  try {
      retrieveUser(invalidEmail, (error, user) => {
          fail('it should not reach this point')
      })
  } catch(error) {
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toBe('email is not valid')
  }
})
