function Menu(props) {
    const logger = new Logger(Menu.name)

    if (!props.show)
        return null

    logger.info('render')

    return (<nav className="hidden-menu">
        <ul style={{listStyle: 'none'}}>
            <li className="profile-link" onClick={props.onSettingsButtonClick}>Profile</li>
            <li className="notes-link" onClick={props.onNotesButtonClick}>Notes</li>
        </ul>
    </nav>
    )
}