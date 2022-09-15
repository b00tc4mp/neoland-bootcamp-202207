import Home from '../../components/Home'
import retrieveFilteredAds from '../../logic/retrieveFilteredAds'
import { getCookie, setCookie } from 'cookies-next'
import withContext from '../../utils/withContext'
import { useEffect } from 'react'

function AR({ data, page, limit, province, search, categories, country, context: { setCountry } }) {
  useEffect(() => {
    if (country !== 'AR')
      setCountry('AR')
  }, [])

  
  return <Home data={data} page={page} limit={limit} province={province} search={search} categories={categories} country={country} />
}

export const getServerSideProps = async function (context) {
  // For initial call, only the country will be provided to the api call
  const { req, res, query: { page = 1, limit = 10, province = null, search = null, categories = null } } = context

  const country = getCookie('country', { req, res })
  if (!country || country !== 'AR') {
    setCookie('country', 'AR', { req, res, maxAge: 30 * 24 * 60 * 60 })
  }

  try {
    return retrieveFilteredAds('AR', page, limit, province, search, categories)
      .then(data => {
        return { props: { data, page, limit, province, search, categories, country } }
      })
      .catch(error => { throw new Error(error) })
  } catch (error) {
    throw new Error(error)
  }
}

export default withContext(AR)