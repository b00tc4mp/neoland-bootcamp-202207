import { useRouter } from 'next/router'

const Ad = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Ad: {pid}</p>
}

export default Ad
