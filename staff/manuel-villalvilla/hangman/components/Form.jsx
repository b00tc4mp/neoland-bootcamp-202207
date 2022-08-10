function Form({ onSubmit, required, buttonText, ...props }) {
    return (
        <form className="form" onSubmit={event => {
            event.preventDefault()
            
            onSubmit(event)
            }}>
            <input name="input" required={required} {...props} /> 
            <button>{buttonText}</button>
        </form>)
}