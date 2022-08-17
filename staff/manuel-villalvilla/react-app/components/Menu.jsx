function Menu({show, onNotesButtonClick, onSettingsButtonClick}) {
    const logger = new Logger(Menu.name)

    if (!show)
        return null

    logger.info('render')

    return (<nav className="hidden-menu">
        <ul style={{listStyle: 'none'}}>
            <li className="profile-link" onClick={onSettingsButtonClick}>Profile</li>
            <li className="notes-link" onClick={onNotesButtonClick}>Notes</li>
        </ul>
    </nav>
    )
}