import Logger from '../utils/logger'

function Spinner() {
    const logger = new Logger(Spinner.name)

    logger.info('return')
    return <div className="spinner">
        <img alt="spinner" src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"></img>
    </div>
}

export default Spinner