import Home from '../../../components/Home'
import retrieveFilteredAds from '../../../logic/retrieveFilteredAds'
import { getCookie, setCookie } from 'cookies-next'

function MX({ data, page, limit, province, search, categories }) {
  return <Home country_code={'MX'} data={data} page={page} limit={limit} province={province} search={search} categories={categories} />
}

export async function getServerSideProps(context) {
  // For initial call, only the country will be provided to the api call
  const { req, res, query: { page = 1, limit = 10, province = null, search = null, categories = null } } = context
  
  const country = getCookie('country', { req, res })
    if (!country || country !== 'MX') {
      setCookie('country', 'MX', { req, res, maxAge: 30 * 24 * 60 * 60 })
    }

  try {
    return retrieveFilteredAds('MX', page, limit, province, search, categories)
      .then(data => {
        return { props: { data, page, limit, province, search, categories } }
      })
      .catch(error => {throw new Error(error)})
  } catch (error) {
    throw new Error(error)
  }
}



export default MX