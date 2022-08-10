function Menu (props) {
    if (!props.show)
        return null
    return (<div className="hidden-menu">
    <div className="profile-link">Profile</div>
    <div className="notes-link">Notes</div>
    </div>
    )
}