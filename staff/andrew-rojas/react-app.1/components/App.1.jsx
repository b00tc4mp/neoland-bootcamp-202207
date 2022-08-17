function app() {
  const logger = new loggito('App')

  logger.info('constructor')

  logger.info('render')

  //return <loginPage/>
  // return <RegisterPage/>
  return <HomePage/> //HomePage()
}