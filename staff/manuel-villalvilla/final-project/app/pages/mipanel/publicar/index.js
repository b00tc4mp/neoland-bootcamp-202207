import { getToken } from "next-auth/jwt"
import withContext from "../../../utils/withContext"
import { useEffect } from "react"

export default withContext(function ({ context: { setSearchHeight } }) {
    useEffect(() => setSearchHeight(0), [])

    return <div style={{ textAlign: 'center' }}>MI PANEL / PUBLICAR</div>
})

export async function getServerSideProps({ req, res }) {
    const secret = process.env.NEXTAUTH_SECRET
    const token = await getToken({ req, secret })

    if (!token) {
        //TODO check that is not expired

        res.writeHead(307, { Location: '/login' })
        res.end()
        return { props: { hola: 'hola' } }

    } else {
        return { props: {} }
    }
}