function Modal({ onCloseButtonClick, title, message }) {
    return <div className="modal" onClick={onCloseButtonClick}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h4 className="modal-title" style={title === 'ERROR' ? {color: 'red'} : {color: 'green'}}>{title}</h4>
            </div>
            <div className="modal-body">{message}</div>
            <div className="modal-footer">
                <button className="modal-button" onClick={onCloseButtonClick}>Close</button>
            </div>
        </div>
    </div>
}