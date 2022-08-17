class HomePage extends Component {
  constructor() {
    super()

    this.state = { user: null }
  }

  render() {
    this.logger.info('render')

    return <h1>Hello, Home!</h1>
  }
}