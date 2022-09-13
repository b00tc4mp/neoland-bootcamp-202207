import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function redirect() {
    const router = useRouter()
    useEffect(() => {
        router.push('./MX/home')
    }, [])

    return <div></div>
}