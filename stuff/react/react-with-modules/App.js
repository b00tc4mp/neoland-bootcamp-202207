import { validateEmail } from './validators.js'

function App() {
    const handleFormSubmit = event => {
        event.preventDefault()

        const { target: { email: { value: email } } } = event

        try {
            validateEmail(email)

            alert('YES, it is a valid e-mail')
        } catch(error) {
            alert('ERROR', error.message)
        }
    }

    return <main>
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="email"></input>
            <button>validate</button>
        </form>
    </main>
}

export default App