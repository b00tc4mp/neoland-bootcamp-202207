import Loggito from '../../utils/Loggito'

function IconButtonBackStyle({onClick,text}){
    const logger = new Loggito('IconButtonBackStyle')
    logger.info('return')

    return <div className="btnBack">
    <span className="material-symbols-outlined btn-menu" onClick={onClick}>{text}</span>
    </div>
}
export default IconButtonBackStyle