function RegisterPage(props) {
  const logger = new Loggito('RegisterPage')

  logger.info('constructor')

  const handleClick = event => {
    event.preventDefault()

    props.onLinkClick()
  }

  logger.info('render')

  return <main className="register-page container container--full container--spaced">
    <form className="form">
      <div className="form__field">
        <label htmlFor="name">Name</label>
        <input className="input" type="text" name="name" placeholder="name" id="name" />
      </div>

      <div className="form__field">
        <label htmlFor="email">E-mail</label>
        <input className="input" type="email" name="email" placeholder="email" id="email" />
      </div>

      <div className="form__field">
        <label htmlFor="password">Password</label>
        <input className="input" type="password" name="password" placeholder="password" id="password" />
      </div>

        <button className="button" type="submit">Register</button>
    </form>

    <a className="anchor" href="login.html" onClick={handleClick}>Login</a>
  </main>
}