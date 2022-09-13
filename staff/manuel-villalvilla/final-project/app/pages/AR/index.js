import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function redirect() {
    const router = useRouter()
    useEffect(() => {
        router.push('./AR/home')
    }, [])

    return <div></div>
}