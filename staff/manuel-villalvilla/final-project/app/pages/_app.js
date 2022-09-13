import '../styles.css'
import { SessionProvider } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import Layout from '../components/Layout'
import Image from 'next/image'
import Head from 'next/head'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return <>
        <Head>
            <title>BuscoBarbie.com</title>
            <link rel="icon" href="/favicon.png" />
        </Head>
        <SessionProvider session={session}>
            {Component.auth ? (
                <Auth>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Auth>
            ) : (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </SessionProvider>
    </>
}

function Auth({ children }) {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { status } = useSession({ required: true })

    if (status === "loading") {
        return <div className='loading-spinner'><Image src='/tail-spin.svg' layout='fill'></Image></div>
    }

    return children
}
