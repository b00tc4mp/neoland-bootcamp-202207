function Form(props) {
    return(
        <form className="form" onSubmit={props.onSubmit}>
        <input placeholder={props.placeholder} name="input" />
        <button type="submit">{props.buttonText}</button>
    </form>
    )
}