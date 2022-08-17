function Info(props) {
    const logger = new Loggito('info')

    logger.info('constructor')

    logger.info('render')
    
        return <div className= "info-panel form container">
        <div className= "update-infoApp">
            <img className="img" src="https://media0.giphy.com/media/osAcIGTSyeovPq6Xph/200w.gif?cid=82a1493bj0ogbe0skwz8to1pzm5zkzywsrfb14503z8s1swm&rid=200w.gif&ct=g"/>
        
            <p> Welcome {props.name}!!! </p>
        <p> Writing notes has never been so easy and fun...
Press the button in the shape of a house to start </p>
        </div>
        <IconButton text="home" onClick={props.onCloseClick} />
    </div>

}
