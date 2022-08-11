function Footer(props) {
    const logger = new Logger(Footer.name)

    logger.info('render')

    return <footer className="footer"><span onClick={props.onAddNote} style={{cursor: 'pointer'}}>+</span></footer>
}