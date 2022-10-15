import './Info.css'
import Loggito from '../utils/Loggito'
import IconButton from './IconButton'

function Info({onCloseClick}) {
    const logger = new Loggito('info')

    logger.info('constructor')

    logger.info('return')
    
        return <div className= "form container">
        <div className= "InfoApp">
            <img className="Info__img" src="https://media0.giphy.com/media/osAcIGTSyeovPq6Xph/200w.gif?cid=82a1493bj0ogbe0skwz8to1pzm5zkzywsrfb14503z8s1swm&rid=200w.gif&ct=g"/>
        
            <p> Welcome!!! </p>
        <p> Writing notes has never been so easy and fun...
Press the button in the shape of a house to start </p>
        </div>
        <IconButton text="home" onClick={onCloseClick} />
    </div>
}
export default Info
