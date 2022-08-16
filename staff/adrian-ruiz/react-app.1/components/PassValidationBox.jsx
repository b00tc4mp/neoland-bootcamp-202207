class PassValidationBox extends Component {
    constructor({props}) {
        super()
        
    }

    render() {
        const {
            props : { conditions: conditionsConst, // I STORE THE WHOLE OBJECT IN A CONST TO RETRIEVE IT IN THE FUTURE (USEFULL TO ACCESS FORMS IN EVENTS)
                conditions: {matchAll, matchLowerCase, matchUpperCase, matchNumbers, matchSymbols, matchLength}
            }
        } = this

       /*  AS I STORED THE WHOLE OBJECT I CAN ACCESS, CHECK VALUES...
        console.log(conditionsConst)
        console.log(conditionsConst.matchAll) */ 
        
        if (matchAll === false) {
            return (
                <div className="passDiv"><h3>La contraseña no cumple los requisitos</h3>
                    {!matchLowerCase && 
                    <p id="lowerCase">- Debe introducir al menos 1 letra minúscula</p>}
                    
                    {!matchUpperCase && 
                    <p id="upperCase">- Debe introducir al menos 1 letra mayúscula</p>}
                    
                    {!matchNumbers && 
                    <p id="number">- Debe introducir al menos 1 número</p>}

                    {!matchSymbols && 
                    <p id="symbols">- Debe introducir al menos 1 símbolo</p>}

                    {!matchLength && 
                    <p id="length">- La contraseña debe tener entre 8 y 15 caracteres</p>}
                </div>
            )
        }else return null
    }
}