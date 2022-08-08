function Form(props) {
    return  (
    <form className="form" onSubmit={props.onSubmit}>
        <input type="text" name="input" placeholder={props.placeholder} maxLength={props.maxLength} />
        <button>{props.buttonText}</button>
    </form>)
}