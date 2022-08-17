function Form(props) {
    return (<>
        <form className="form" onSubmit={function (event) {
            event.preventDefault()
            props.onSubmit(event)

        }}>
            <input type={props.inputType} placeholder={props.placeholder} name="input" />
            <button type="submit">{props.buttonText}</button>
        </form>
        </>
    )
}