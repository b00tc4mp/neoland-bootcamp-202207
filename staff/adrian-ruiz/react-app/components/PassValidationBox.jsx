class PassValidationBox extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        if (!this.props.conditions.matchAll) {
            return (
                <div className="passDiv"><h3>La contraseña no cumple los requisitos</h3>
                    {!this.props.conditions.matchLowerCase && 
                    <p id="lowerCase">- Debe introducir al menos 1 letra minúscula</p>}
                    
                    {!this.props.conditions.matchUpperCase && 
                    <p id="upperCase">- Debe introducir al menos 1 letra mayúscula</p>}
                    
                    {!this.props.conditions.matchNumbers && 
                    <p id="number">- Debe introducir al menos 1 número</p>}

                    {!this.props.conditions.matchSymbols && 
                    <p id="symbols">- Debe introducir al menos 1 símbolo</p>}

                    {!this.props.conditions.matchLength && 
                    <p id="length">- La contraseña debe tener entre 8 y 15 caracteres</p>}
                </div>
            )
        }else return null
    }
}