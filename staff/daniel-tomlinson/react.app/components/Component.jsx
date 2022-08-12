// Code from non-react app
// class Component {
//     constructor(template) {
//       this.container = templateToDOM(template);
//     }
//   }

// Now, there seems to be no need for constructing the container to contain the html code
// Here Manu has added the logger and setState functionality to log when state is set and component is mounted.

class Component extends React.Component {
    constructor(props) {
        super(props)

        this.logger = new Loggito(this.constructor.name)

        this.logger.info('constructor')
    }

    setstate(state) {
        this.logger.info('set state')

        this.logger.debug(`state: ${JSON.stringify(state)}`)

        super.setState(state)
    }

    componentDidMount() {
        this.logger.info('component did mount')
    }
  }