function Form(props) {
    return(
        <form className="form" onSubmit={event => {
            event.preventDefault()
            props.onSubmit(event)
            }}>
        <input type={props.type} placeholder={props.placeholder} name="input" />
        <button type="submit">{props.buttonText}</button>
    </form>
    )
}