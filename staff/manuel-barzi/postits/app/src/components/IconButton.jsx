import Loggito from '../utils/Loggito'
import './IconButton.sass'

function IconButton({ onClick, text }) {
    const logger = new Loggito('IconButton')

    logger.info('return')

    return <button className="IconButton transparent-button container" onClick={onClick}><span className="material-symbols-outlined">{text}</span></button>
}

export default IconButton