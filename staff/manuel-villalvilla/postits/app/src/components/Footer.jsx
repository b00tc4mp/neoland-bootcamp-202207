import Logger from '../utils/logger'

function Footer({ onAddNote }) {
    const logger = new Logger(Footer.name)

    logger.info('render')

    return <footer className="footer"><span onClick={onAddNote} style={{cursor: 'pointer'}}>+</span></footer>
}

export default Footer