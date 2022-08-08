function Form(props) {
    return  (
    <form className="form" onSubmit={props.onSubmit}>
        <input type={props.type} name="input" placeholder={props.placeholder} maxLength={props.maxLength} required={props.required}/>
        <button>{props.buttonText}</button>
    </form>)
}