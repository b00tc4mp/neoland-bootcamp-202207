import { useParams } from 'react-router-dom'

function Hello() {
  const params = useParams()

  const { to } = params

  return <h1> hello,{to}</h1>
}

export default Hello