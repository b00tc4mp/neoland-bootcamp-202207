// Ejemplo de params
import { useParams } from 'react-router-dom'

export default function Hello() {
    const params = useParams()

    const { to } = params

    return <div>Hello {to}!</div>
}