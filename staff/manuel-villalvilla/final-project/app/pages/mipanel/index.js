import { useEffect } from "react"
import withContext from "../../utils/withContext"
import { getToken } from 'next-auth/jwt'
const URL = process.env.NEXT_PUBLIC_APP_URL

function mipanel({ context: { setSearchHeight } }) {

    useEffect(() => setSearchHeight(0), [])

    return <div style={{ textAlign: 'center' }}>MI PANEL</div>
}

export async function getServerSideProps({ req, res }) {
    const secret = process.env.NEXTAUTH_SECRET
    const token = await getToken({ req, secret })

    if (!token) {
        //TODO check that is not expired

        res.writeHead(307, { Location: '/login' })
        res.end()
        return { props: {} }

    } else {
        return { props: {} }
    }
}

export default withContext(mipanel)