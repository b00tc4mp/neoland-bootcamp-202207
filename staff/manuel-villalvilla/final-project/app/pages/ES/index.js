import Home from '../../components/Home'
import retrieveFilteredAds from '../../logic/retrieveFilteredAds'
import { getCookie, setCookie } from 'cookies-next'
import withContext from '../../utils/withContext'
import { useEffect } from 'react'

function ES({ data, page, limit, province, search, categories, country, context: { setCountry } }) {
  useEffect(() => {
    if (country !== 'ES')
      setCountry('ES')
  }, [])
  
  return <Home data={data} page={page} limit={limit} province={province} search={search} categories={categories} country={country} />
}

export async function getServerSideProps(context) {
  // For initial call, only the country will be provided to the api call
  const { req, res, query: { page = 1, limit = 10, province = null, search = null, categories = null } } = context

  const country = getCookie('country', { req, res })
  if (!country || country !== 'ES') {
    setCookie('country', 'ES', { req, res, maxAge: 30 * 24 * 60 * 60 })
  }

  try {
    return retrieveFilteredAds('ES', page, limit, province, search, categories)
      .then(data => {
        return { props: { data, page, limit, province, search, categories, country } }
      })
      .catch(error => { throw new Error(error) })
  } catch (error) {
    throw new Error(error)
  }
}

export default withContext(ES)